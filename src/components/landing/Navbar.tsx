import { QrCode, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
              <QrCode className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              QR Studio
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#screenshots"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Screenshots
            </a>
            <a
              href="#download"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Download
            </a>
          </div>

          <div className="hidden md:block">
            <a href="/qr-studio.apk" download>
              <Button size="lg" className="rounded-full px-6">
                Download APK
              </Button>
            </a>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 py-4 space-y-3">
          <a href="#features" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
            Features
          </a>
          <a href="#screenshots" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
            Screenshots
          </a>
          <a href="#download" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
            Download
          </a>
          <a href="/qr-studio.apk" download>
            <Button className="w-full rounded-full">Download APK</Button>
          </a>
        </div>
      )}
    </nav>
  );
}
