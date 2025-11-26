import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const services = [
    {
        title: 'Upholstery Cleaning',
        description: 'Specialized care for sofas, armchairs, and delicate fabrics.',
        details:
            'Utilizamos extração a seco com biotecidos suíços que dissolvem gordura e pigmentos sem agredir fibras nobres. Após a higienização, aplicamos um neutralizador hipoalergênico que elimina odores e devolve a maciez original. Finalizamos com proteção antirresíduos inspirada em nanotecnologia, reduzindo a aderência de poeira e prolongando o intervalo entre limpezas.',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'Carpet & Rugs',
        description: 'Deep cleaning for all types of carpets, from wool to synthetic.',
        details:
            'Nossa lavagem encapsulada remove ácaros e fungos mantendo o toque natural dos fios, seja em lã persa, sisal ou materiais sintéticos. Utilizamos ph balanceado e extração profunda em múltiplas passadas para soltar sujeira acumulada na base do tapete. A secagem acelerada reduz o risco de mofo e o acabamento com fragrância neutra deixa o ambiente com sensação de renovação.',
        image: 'https://images.unsplash.com/photo-1596230529625-7ee541364597?q=80&w=1974&auto=format&fit=crop',
    },
    {
        title: 'Automotive Detailing',
        description: 'Complete interior restoration for your vehicle.',
        details:
            'Higienizamos bancos, painéis e teto com vapor controlado e aspiração HEPA, eliminando microrganismos responsáveis por alergias e mau odor. Tratamentos específicos revitalizam couro, alcântara e tecidos técnicos, preservando costuras e pigmentos originais. O polimento a seco dos detalhes devolve o brilho sem deixar a cabine oleosa, perfeito para veículos premium.',
        image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop',
    },
    {
        title: 'Corporate Offices',
        description: 'Maintenance plans for high-traffic professional spaces.',
        details:
            'Planos contínuos incluem cadeiras, divisórias, salas de reunião e lounges executivos, sempre agendados fora do horário comercial. Equipes com checklist digital seguem protocolos suíços de padronização e registram cada etapa com fotos para auditoria. Ao amanhecer, o espaço está seco, assepsia garantida e com aroma discreto, pronto para receber clientes e colaboradores.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    },
];

export const Services = () => {
    return (
        <Section id="services" background="default">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-primary font-semibold tracking-wide uppercase text-sm">Premium Services</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
                        Specialized Solutions for <br /> Every Need
                    </p>
                </div>

                <div className="space-y-24">
                    {services.map((service, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={service.title} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                            {/* Text Content */}
                            <div className={`flex-1 order-2 text-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                <h3 className="text-3xl font-bold text-heading mb-6">{service.title}</h3>
                                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                                    {service.description}
                                </p>

                                <p className="text-base text-text-secondary mb-8 leading-relaxed">
                                    {service.details}
                                </p>

                                <Button variant="secondary" size="lg" className="group shadow-glow-blue">
                                    Learn More
                                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Button>
                            </div>

                            {/* Image */}
                            <div className={`flex-1 order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'} w-full`}>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 aspect-[4/3] group">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};
