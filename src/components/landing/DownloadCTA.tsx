import { Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./FadeIn";
import { APK_DOWNLOAD_URL } from "@/lib/constants";

export function DownloadCTA() {
  return (
    <section id="download" className="py-20 md:py-28 bg-[#0a0a0a] border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-[#111] border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-12 h-12 border border-border rounded-xl flex items-center justify-center shrink-0">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Made for QR Studio platform
              </h2>
              <p className="text-muted-foreground">
                Download QR Studio for Android and start creating professional QR codes today.
              </p>
            </div>
            <a href={APK_DOWNLOAD_URL} download className="w-full md:w-auto">
              <Button className="w-full md:w-auto rounded-full px-8 gap-2 shrink-0 bg-white text-black hover:bg-white/90">
                <Download className="w-5 h-5" />
                Download APK
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
