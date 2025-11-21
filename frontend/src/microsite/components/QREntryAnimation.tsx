import { ReactNode, useState, useEffect } from "react";
import { QrCode } from "lucide-react";

interface QREntryAnimationProps {
  children: ReactNode;
}

export const QREntryAnimation = ({ children }: QREntryAnimationProps) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center animate-fade-in">
      <div className="text-center animate-qr-scan">
        <div className="inline-flex items-center justify-center h-24 w-24 rounded-2xl bg-primary/10 mb-6 shadow-strong">
          <QrCode className="h-12 w-12 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Scanning QR Code</h2>
        <p className="text-muted-foreground">Loading portfolio...</p>
      </div>
    </div>
  );
};
