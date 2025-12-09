import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { LRUCache } from 'lru-cache';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate Limiter: 5 requests per hour per IP (Strict for production)
const rateLimit = new LRUCache<string, number>({
  max: 500,
  ttl: 1000 * 60 * 60, // 1 hour
});

// Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is too short").max(50, "Name is too long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject is too short").max(100, "Subject is too long"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message is too short").max(1000, "Message is too long"),
});

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const currentUsage = rateLimit.get(ip) || 0;

    if (currentUsage >= 5) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }
    rateLimit.set(ip, currentUsage + 1);

    // 2. Input Validation
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, service, message } = result.data;

    // Logic from user's snippet
    const primaryColor = '#00D9B8'; // Site's primary color
    const telefoneClean = phone ? phone.replace(/\D/g, '') : '';
    const whatsappLink = telefoneClean ? `https://wa.me/${telefoneClean}` : '#';

    // Helper to escape HTML characters
    const escapeHtml = (unsafe: string) => {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message);
    const safePhone = phone ? escapeHtml(phone) : 'Non renseigné';

    // 3. Send Email
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Changed to simple sender for better deliverability
      to: ['havelprojeto@gmail.com'], // Send to the user's email
      replyTo: email,
      subject: `Nouveau Lead : ${safeSubject}`,
      html: `
<!DOCTYPE html>
<html lang="fr-CH">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notification de Lead</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #334155;">
  
  <div style="background-color: #f8fafc; padding: 40px 10px;">
    
    <!-- Main Card -->
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
      
      <!-- Status Header -->
      <div style="background-color: ${primaryColor}; padding: 32px 40px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td>
              <span style="background-color: rgba(255,255,255,0.2); color: #ffffff; padding: 4px 12px; border-radius: 100px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                Nouvelle Soumission
              </span>
              <h1 style="color: #ffffff; margin: 16px 0 8px 0; font-size: 24px; font-weight: 700; line-height: 1.2;">
                ${safeSubject}
              </h1>
              <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px;">
                Reçu via Site Web Officiel • ${new Date().toLocaleDateString('fr-CH', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
              </p>
            </td>
          </tr>
        </table>
      </div>

      <!-- Content Area -->
      <div style="padding: 40px;">
        
        <!-- Grid de Dados do Cliente -->
        <h3 style="margin: 0 0 20px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #94a3b8; letter-spacing: 1px;">
          Données du Client
        </h3>
        
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
          <tr>
            <td width="50%" style="padding-bottom: 20px; vertical-align: top;">
              <div style="font-size: 11px; color: #64748b; margin-bottom: 4px;">NOM COMPLET</div>
              <div style="font-size: 15px; color: #0f172a; font-weight: 600;">${safeName}</div>
            </td>
            <td width="50%" style="padding-bottom: 20px; vertical-align: top;">
               <div style="font-size: 11px; color: #64748b; margin-bottom: 4px;">SERVICE / INTÉRÊT</div>
               <div style="font-size: 15px; color: #0f172a; font-weight: 600;">${safeService}</div>
            </td>
          </tr>
          <tr>
            <td width="50%" style="padding-bottom: 20px; vertical-align: top;">
              <div style="font-size: 11px; color: #64748b; margin-bottom: 4px;">EMAIL DE CONTACT</div>
              <a href="mailto:${safeEmail}" style="font-size: 15px; color: ${primaryColor}; font-weight: 500; text-decoration: none;">${safeEmail}</a>
            </td>
            <td width="50%" style="padding-bottom: 20px; vertical-align: top;">
               <div style="font-size: 11px; color: #64748b; margin-bottom: 4px;">WHATSAPP / TÉL</div>
               <div style="font-size: 15px; color: #0f172a; font-weight: 600;">${safePhone}</div>
            </td>
          </tr>
        </table>

        <!-- Mensagem -->
        <div style="background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; padding: 24px;">
          <h3 style="margin: 0 0 12px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #94a3b8; letter-spacing: 1px; display: flex; align-items: center; gap: 8px;">
            <span style="display: block; width: 6px; height: 6px; background-color: ${primaryColor}; border-radius: 50%;"></span>
            Message du Lead
          </h3>
          <div style="font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${safeMessage}</div>
        </div>

        <!-- Call to Action -->
        <div style="margin-top: 32px; text-align: center;">
          <a href="mailto:${safeEmail}?subject=Re: ${safeSubject}" style="display: inline-block; background-color: #0f172a; color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; transition: all 0.2s;">
            Répondre par Email
          </a>
          ${phone ? `
          <p style="margin-top: 16px; font-size: 13px; color: #64748b;">
            Ou <a href="${whatsappLink}" style="color: ${primaryColor}; text-decoration: none; font-weight: 500;">démarrer une conversation sur WhatsApp</a>
          </p>
          ` : ''}
        </div>

      </div>

      <!-- Footer System Info -->
      <div style="background-color: #f1f5f9; padding: 16px 40px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; display: flex; justify-content: space-between; align-items: center;">
         <div>
           <strong>Système Havel</strong> • ID de Soumission : #${Date.now().toString().slice(-5)}
         </div>
         <div>
           ${new Date().getFullYear()}
         </div>
      </div>

    </div>
    
    <div style="text-align: center; margin-top: 24px; font-size: 12px; color: #cbd5e1;">
      Ceci est un email automatique. Veuillez ne pas répondre à cet expéditeur.
    </div>

  </div>
</body>
</html>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
