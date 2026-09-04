import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { PhoneFrame } from "./PhoneFrame";
import { APK_DOWNLOAD_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <FadeIn className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Create. Scan. Done.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A complete QR code toolkit that works fully offline. Create, customize, and scan — no internet needed.
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

          <FadeIn className="flex-shrink-0" delay={0.15}>
            <PhoneFrame className="w-[220px] sm:w-[240px]">
              <img
                src="/screenshots/overview.jpg"
                alt="QR Studio App"
                className="w-full h-auto"
              />
            </PhoneFrame>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
