import { QrCode, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <QrCode className="w-4 h-4 text-black" />
            </div>
            <span className="text-lg font-semibold text-white">QR Studio</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Features
            </a>
            <a href="#screenshots" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Screenshots
            </a>
            <a href="#download" className="text-sm text-muted-foreground hover:text-white transition-colors">
              Download
            </a>
          </div>

          <div className="hidden md:block">
            <a href="/qr-studio.apk" download>
              <Button className="rounded-full px-5 bg-white text-black hover:bg-white/90">
                Download
              </Button>
            </a>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-black px-4 py-4 space-y-3">
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
            <Button className="w-full rounded-full bg-white text-black hover:bg-white/90">Download</Button>
          </a>
        </div>
      )}
    </nav>
  );
}
