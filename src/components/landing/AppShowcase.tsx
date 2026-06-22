import { Check, QrCode, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Create custom QR codes in seconds",
  "Multiple QR types: Website, WiFi, Socials",
  "Custom colors, shapes, and logo upload",
  "Live preview as you design",
  "High-resolution export",
  "Scan history and management",
];

export function AppShowcase() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              Get the App
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get the QR Studio
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Create high-precision, customized QR codes for your brand in
              seconds. Your complete QR code toolkit on Android.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <a href="/qr-studio.apk" download>
                <Button size="lg" className="rounded-full px-8 gap-2">
                  <QrCode className="w-5 h-5" />
                  Download Free
                </Button>
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
              <div className="relative bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl border border-slate-700">
                <div className="rounded-4xl overflow-hidden bg-slate-800 w-70 sm:w-[320px]">
                  <img
                    src="/screenshots/create.jpg"
                    alt="QR Studio App - Create QR Code"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
