import React, { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BudgetModal } from '../components/BudgetModal';
import { ScheduleModal } from '../components/ScheduleModal';
import { ScrollToTop } from '../components/ScrollToTop';
import { LiquidGlassFilter } from '../components/LiquidGlass';
import { planKeyFromName } from '../data/pricing';

export const MainLayout: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Estación');
  const [params, setParams] = useSearchParams();

  const handleOpenQuoteModal = (planName?: string) => {
    setSelectedPlan(planName || 'Estación');
    setModalOpen(true);
  };

  const handleOpenSchedule = () => setScheduleOpen(true);

  useEffect(() => {
    if (params.get('cotizar') === '1') {
      handleOpenQuoteModal(planKeyFromName(params.get('plan') || undefined));
      const next = new URLSearchParams(params);
      next.delete('cotizar');
      next.delete('plan');
      setParams(next, { replace: true });
      return;
    }
    if (params.get('agendar') === '1') {
      setScheduleOpen(true);
      const next = new URLSearchParams(params);
      next.delete('agendar');
      setParams(next, { replace: true });
    }
  }, [params, setParams]);

  return (
    <div className="bg-[#F7F8FC] text-[#0B0B12] min-h-screen relative font-sans starfield-bg selection:bg-[#6B7280]/20 selection:text-[#6B7280]">
      <ScrollToTop />
      <LiquidGlassFilter />
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} onOpenSchedule={handleOpenSchedule} />
      <main className="relative z-20 rounded-b-[2rem] shadow-[0_30px_80px_-20px_rgba(15,15,40,0.18)]">
        <div className="overflow-hidden rounded-b-[2rem] bg-[#F7F8FC]">
          <Outlet
            context={{
              onOpenQuoteModal: handleOpenQuoteModal,
              onOpenSchedule: handleOpenSchedule,
              selectedPlan,
            }}
          />
        </div>
      </main>
      <Footer />
      <BudgetModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultPlan={selectedPlan}
      />
      <ScheduleModal isOpen={scheduleOpen} onClose={() => setScheduleOpen(false)} />
    </div>
  );
};

export type LayoutOutletContext = {
  onOpenQuoteModal: (planName?: string) => void;
  onOpenSchedule: () => void;
  selectedPlan: string;
};
