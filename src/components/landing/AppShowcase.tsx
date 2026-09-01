import { Check, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { APK_DOWNLOAD_URL } from "@/lib/constants";

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
    <section className="py-20 md:py-28 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <FadeIn className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get the QR Studio
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto lg:mx-0">
              Create high-precision, customized QR codes for your brand in seconds. Your complete QR code toolkit on Android.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-white shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a href={APK_DOWNLOAD_URL} download>
              <Button className="rounded-full px-8 gap-2 bg-white text-black hover:bg-white/90">
                <QrCode className="w-5 h-5" />
                Download Free
              </Button>
            </a>
          </FadeIn>

          <FadeIn className="flex-1 flex justify-center" delay={0.15}>
            <div className="bg-[#111] border border-border rounded-2xl p-2">
              <div className="rounded-xl overflow-hidden bg-card w-70 sm:w-[320px]">
                <img
                  src="/screenshots/create.jpg"
                  alt="QR Studio App - Create QR Code"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
