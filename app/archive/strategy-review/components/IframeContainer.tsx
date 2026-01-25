'use client';

import { useEffect, useRef } from 'react';

interface IframeContainerProps {
  selectedStrategyId: string | null;
}

export function IframeContainer({ selectedStrategyId }: IframeContainerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (selectedStrategyId && iframeRef.current) {
      // Smooth scroll to iframe when strategy is selected
      iframeRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedStrategyId]);

  const iframeSrc = selectedStrategyId
    ? `/strategy-review/strategy-detail/${selectedStrategyId}`
    : '/strategy-review/strategy-detail/placeholder';

  return (
    <div className="mt-8 mb-12">
      <iframe
        ref={iframeRef}
        id="strategy-detail-iframe"
        src={iframeSrc}
        className="w-full min-h-[600px] border-2 border-gray-300 rounded-lg bg-white"
        title="Strategy Detail View"
      />
    </div>
  );
}
