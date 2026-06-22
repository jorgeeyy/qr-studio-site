import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlueBanner() {
  return (
    <section className="py-20 md:py-28 bg-black border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to create with QR Studio?
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Download the app now and start generating professional QR codes in seconds. It&apos;s free!
        </p>
        <a href="/qr-studio.apk" download>
          <Button className="rounded-full px-8 h-12 text-base gap-2 bg-white text-black hover:bg-white/90">
            <Download className="w-5 h-5" />
            Download Now
          </Button>
        </a>
      </div>
    </section>
  );
}
