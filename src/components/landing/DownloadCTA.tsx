import { Download, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { PhoneFrame } from "./PhoneFrame";
import { APK_DOWNLOAD_URL } from "@/lib/constants";

export function DownloadCTA() {
  return (
    <section id="download" className="py-20 md:py-28 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-2xl border border-border bg-card overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-10 p-8 md:p-12">
              <div className="flex-1 text-center lg:text-left">
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Ready to create with QR Studio?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Download the app now and start generating professional QR codes in seconds. It&apos;s free!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href={APK_DOWNLOAD_URL} download>
                    <Button className="rounded-full px-8 h-12 text-base gap-2 bg-white text-black hover:bg-white/90">
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
              </div>

              <div className="flex-shrink-0 hidden lg:block">
                <PhoneFrame className="w-[200px]">
                  <img
                    src="/screenshots/create.jpg"
                    alt="QR Studio App"
                    className="w-full h-auto"
                  />
                </PhoneFrame>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
