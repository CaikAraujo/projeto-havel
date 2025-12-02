import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const services = [
    {
        title: "Nettoyage d'Ameublement",
        description: 'Soin spécialisé pour canapés, fauteuils et tissus délicats.',
        details:
            "Nous utilisons une extraction à sec avec des biotissus suisses qui dissolvent graisses et pigments sans agresser les fibres nobles. Après l'hygiénisation, nous appliquons un neutralisant hypoallergénique qui élimine les odeurs et restaure la douceur d'origine. Nous terminons par une protection anti-résidus inspirée de la nanotechnologie, réduisant l'adhérence de la poussière et prolongeant l'intervalle entre les nettoyages.",
        image: '/images/upholstery-service.jpeg',
    },
    {
        title: 'Tapis & Moquettes',
        description: 'Nettoyage en profondeur pour tous types de tapis, de la laine au synthétique.',
        details:
            "Notre lavage encapsulé élimine acariens et champignons tout en préservant le toucher naturel des fibres, qu'il s'agisse de laine persane, de sisal ou de matériaux synthétiques. Nous utilisons un pH équilibré et une extraction profonde en plusieurs passages pour déloger la saleté accumulée à la base du tapis. Le séchage accéléré réduit le risque de moisissure et la finition au parfum neutre laisse une sensation de renouveau dans la pièce.",
        image: '/images/carpet-service.jpeg',
    },
    {
        title: 'Détailing Automobile',
        description: 'Restauration intérieure complète pour votre véhicule.',
        details:
            "Nous hygiénisons sièges, tableaux de bord et plafonds avec une vapeur contrôlée et une aspiration HEPA, éliminant les micro-organismes responsables d'allergies et de mauvaises odeurs. Des traitements spécifiques revitalisent cuir, alcantara et tissus techniques, préservant coutures et pigments d'origine. Le polissage à sec des détails redonne de l'éclat sans laisser l'habitacle gras, parfait pour les véhicules premium.",
        image: '/images/automotive-service.jpeg',
    },
    {
        title: "Bureaux d'Entreprise",
        description: 'Plans de maintenance pour espaces professionnels à fort trafic.',
        details:
            "Les plans continus incluent chaises, cloisons, salles de réunion et salons exécutifs, toujours programmés en dehors des heures de bureau. Des équipes avec checklist numérique suivent des protocoles suisses de standardisation et enregistrent chaque étape avec des photos pour audit. À l'aube, l'espace est sec, l'asepsie garantie et avec un arôme discret, prêt à accueillir clients et collaborateurs.",
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    },
];

export const Services = () => {
    return (
        <Section id="services" background="default">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-primary font-semibold tracking-wide uppercase text-sm">Services Premium</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
                        Solutions Spécialisées pour <br /> Chaque Besoin
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
                                        En Savoir Plus
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
