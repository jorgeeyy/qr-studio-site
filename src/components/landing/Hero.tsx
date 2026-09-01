import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { APK_DOWNLOAD_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <FadeIn className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              The Gold Standard for QR Excellence
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Your all-in-one QR code toolkit. Create, customize, and scan QR codes with professional-grade precision.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href={APK_DOWNLOAD_URL} download>
                <Button size="lg" className="rounded-full px-8 h-12 text-base gap-2 bg-white text-black hover:bg-white/90">
                  <Download className="w-5 h-5" />
                  Download APK
                </Button>
              </a>
              <a href="#features">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base gap-2 border-border text-white hover:bg-white/5">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </FadeIn>

          <FadeIn className="flex-1 flex justify-center lg:justify-end" delay={0.15}>
            <div className="bg-card border border-border rounded-2xl p-2">
              <div className="rounded-xl overflow-hidden bg-[#111] w-70 sm:w-[320px]">
                <img
                  src="/screenshots/overview.jpg"
                  alt="QR Studio App"
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
