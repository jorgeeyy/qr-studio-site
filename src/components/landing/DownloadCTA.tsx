import { Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadCTA() {
  return (
    <section id="download" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
            <Smartphone className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Made for QR Studio platform
            </h2>
            <p className="text-muted-foreground">
              Download QR Studio for Android and start creating professional QR codes today.
            </p>
          </div>
          <a href="/qr-studio.apk" download>
            <Button size="lg" className="rounded-full px-8 gap-2 shrink-0">
              <Download className="w-5 h-5" />
              Download APK
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
