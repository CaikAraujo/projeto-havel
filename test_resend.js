const { Resend } = require('resend');
const fs = require('fs');
const path = require('path');

// Load env vars manually
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            process.env[key.trim()] = value.trim();
        }
    });
}

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendTestEmail() {
    console.log("Attempting to send email...");
    console.log("API Key present:", !!process.env.RESEND_API_KEY);

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['havelprojeto@gmail.com'],
            subject: 'Test Email from Debug Script',
            html: '<p>This is a test email to verify the Resend API key.</p>'
        });
        console.log("Success:", data);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}

sendTestEmail();
