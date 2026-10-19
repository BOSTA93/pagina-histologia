import React, { useState } from 'react';
import { initialPageContent, PageContent, MapItem } from './data/pageContent';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { MapCarousel } from './components/MapCarousel';
import { PillarsSection } from './components/PillarsSection';
import { PainCalloutSection } from './components/PainCalloutSection';
import { ProofMarqueeSection } from './components/ProofMarqueeSection';
import { IdealForSection } from './components/IdealForSection';
import { EverythingIncludedSection } from './components/EverythingIncludedSection';
import { BonusesSection } from './components/BonusesSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { MapModal } from './components/MapModal';
import { UpgradeModal } from './components/UpgradeModal';

export default function App() {
  const [content] = useState<PageContent>(initialPageContent);
  const [selectedMap, setSelectedMap] = useState<MapItem | null>(null);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);

  const handleSelectPlan = (planId: string) => {
    if (planId === 'basico') {
      setIsUpgradeModalOpen(true);
    }
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-sky-500 selection:text-white">
      {/* 1. Static Single-line Top Red Banner */}
      <TopBanner text={content.topBanner.text} />

      <main>
        {/* 2. Hero Section: Title -> Mockup -> Description -> Checklist -> Button -> WhatsApp/Email */}
        <HeroSection
          title={content.hero.title}
          highlightWord={content.hero.highlightWord}
          description={content.hero.description}
          ctaText={content.hero.ctaText}
          mockupImage={content.hero.mockupImage}
          onCtaClick={scrollToPricing}
        />

        {/* 3. Section "Veja os materiais que você vai receber" (Soft mint background, marquee) */}
        <MapCarousel
          title={content.mapsShowcase.title}
          subtitle={content.mapsShowcase.subtitle}
          items={content.mapsShowcase.items}
          onSelectMap={(map) => setSelectedMap(map)}
        />

        {/* 4. Section "Os Mapas Visuais de posicionamento de eletrodos possuem" (4 Cards + Clinic Callout + CTA) */}
        <PillarsSection onCtaClick={scrollToPricing} />

        {/* 5. Section "Quantas vezes você ficou na dúvida..." (Dark Teal Background + White Button) */}
        <PainCalloutSection
          question={content.painCallout.question}
          urgencyText={content.painCallout.urgencyText}
          ctaText={content.painCallout.ctaText}
          onCtaClick={scrollToPricing}
        />

        {/* 6. Section Proof Photos (2 photos side-by-side matching screenshot) */}
        <ProofMarqueeSection images={content.socialProofImages} />

        {/* 7. Section "Este material é ideal para você que deseja" (Soft background, 6 cards + CTA) */}
        <IdealForSection
          title={content.idealFor.title}
          items={content.idealFor.items}
          onCtaClick={scrollToPricing}
        />

        {/* 8. Section "Tudo o que você vai receber" (Mockup + ⚡ ACESSO IMEDIATO + 12 Checklist bullets) */}
        <EverythingIncludedSection
          title={content.everythingIncluded.title}
          badge={content.everythingIncluded.badge}
          description={content.everythingIncluded.description}
          mockupImage={content.everythingIncluded.mockupImage}
          bullets={content.everythingIncluded.bullets}
        />

        {/* 9. Section "E NÃO PARA POR AÍ... TEM MAIS!" (4 Dashed Cards with BÔNUS #1 to #4) */}
        <BonusesSection
          preTitle={content.bonuses.preTitle}
          title={content.bonuses.title}
          badge={content.bonuses.badge}
          items={content.bonuses.items}
        />

        {/* 10. Section Testimonials / Prova Social (Automatic carousel with authentic customer testimonial screenshots) */}
        <TestimonialsSection
          title={content.testimonials.title}
          ctaText={content.testimonials.ctaText}
          onCtaClick={scrollToPricing}
        />

        {/* 11. Section Pricing / A Oferta (Básico + 92% callout + Completo com 4 bônus) */}
        <PricingSection
          urgencyBanner={content.pricing.urgencyBanner}
          title={content.pricing.title}
          basicPlan={content.pricing.plans.basic}
          completePlan={content.pricing.plans.complete}
          paymentMethodsImage={content.pricing.paymentMethodsImage}
          onSelectPlan={handleSelectPlan}
        />

        {/* 12. Section Garantia (Official 7-day guarantee seal) */}
        <GuaranteeSection
          days={content.guarantee.days}
          title={content.guarantee.title}
          description={content.guarantee.description}
        />

        {/* 13. Section Perguntas Frequentes (10 Accordions with circular + icons) */}
        <FaqSection
          title={content.faqs.title}
          items={content.faqs.items}
        />
      </main>

      {/* 14. Footer (Dark navy blue background with legal notices) */}
      <FooterSection
        copyright={content.footer.copyright}
        disclaimer1={content.footer.disclaimer1}
        disclaimer2={content.footer.disclaimer2}
        disclaimer3={content.footer.disclaimer3}
      />

      {/* 15. Lightbox Modal for Map enlargement */}
      <MapModal
        item={selectedMap}
        onClose={() => setSelectedMap(null)}
        onCtaClick={scrollToPricing}
      />

      {/* 16. Upgrade / Upsell Modal for R$ 17,90 basic plan click */}
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        onAcceptUpgrade={() => {
          setIsUpgradeModalOpen(false);
        }}
        onContinueBasic={() => {
          setIsUpgradeModalOpen(false);
        }}
        mockupImage={content.everythingIncluded.mockupImage}
        items={content.pricing.plans.complete.items}
      />
    </div>
  );
}
