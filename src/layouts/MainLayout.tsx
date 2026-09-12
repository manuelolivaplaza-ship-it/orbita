import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { LiquidGlassFilter } from '../components/LiquidGlass';
import { planKeyFromName } from '../data/pricing';

const BudgetModal = lazy(() =>
  import('../components/BudgetModal').then((m) => ({ default: m.BudgetModal })),
);
const ScheduleModal = lazy(() =>
  import('../components/ScheduleModal').then((m) => ({ default: m.ScheduleModal })),
);
const OrbAssistant = lazy(() =>
  import('../components/chat/OrbAssistant').then((m) => ({ default: m.OrbAssistant })),
);

export const MainLayout: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Estación');
  const [params, setParams] = useSearchParams();
  const hideOrb = modalOpen || scheduleOpen;

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
    <div className="relative min-h-screen max-w-full overflow-x-clip bg-[#F7F8FC] font-sans text-[#0B0B12] starfield-bg selection:bg-[#6B7280]/20 selection:text-[#6B7280]">
      <ScrollToTop />
      <LiquidGlassFilter />
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} onOpenSchedule={handleOpenSchedule} />
      <main className="relative z-10 max-w-full overflow-x-clip bg-[#F7F8FC]">
        <Outlet
          context={{
            onOpenQuoteModal: handleOpenQuoteModal,
            onOpenSchedule: handleOpenSchedule,
            selectedPlan,
          }}
        />
      </main>
      <Footer />
      {modalOpen && (
        <Suspense fallback={null}>
          <BudgetModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultPlan={selectedPlan} />
        </Suspense>
      )}
      {scheduleOpen && (
        <Suspense fallback={null}>
          <ScheduleModal isOpen={scheduleOpen} onClose={() => setScheduleOpen(false)} />
        </Suspense>
      )}
      <Suspense fallback={null}>
        <OrbAssistant
          hidden={hideOrb}
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenSchedule={handleOpenSchedule}
        />
      </Suspense>
    </div>
  );
};

export type LayoutOutletContext = {
  onOpenQuoteModal: (planName?: string) => void;
  onOpenSchedule: () => void;
  selectedPlan: string;
};
