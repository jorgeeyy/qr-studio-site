import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-linear-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Now Available on Android
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight">
              The Gold Standard for QR Excellence
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Your all-in-one QR code toolkit. Create, customize, and scan QR codes with
              professional-grade precision.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/qr-studio.apk" download>
                <Button size="lg" className="rounded-full px-8 h-12 text-base gap-2">
                  <Download className="w-5 h-5" />
                  Download APK
                </Button>
              </a>
              <a href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-12 text-base gap-2"
                >
                  <ArrowDown className="w-5 h-5" />
                  Learn More
                </Button>
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl shadow-primary/20 border border-slate-700">
                <div className="rounded-4xl overflow-hidden bg-slate-800 w-70 sm:w-[320px]">
                  <img
                    src="/screenshots/overview.jpg"
                    alt="QR Studio App - Overview"
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
