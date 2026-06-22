import {
  Palette,
  Layers,
  Scan,
  BarChart3,
  Share2,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Custom QR Studio",
    description: "Design unique QR codes with custom colors, shapes, and logos.",
  },
  {
    icon: Palette,
    title: "Dynamic Colors",
    description: "Personalize foreground and background colors to match your brand.",
  },
  {
    icon: Layers,
    title: "Multiple QR Types",
    description: "Generate QR codes for websites, WiFi, socials, and more.",
  },
  {
    icon: Scan,
    title: "Instant Scanning",
    description: "Scan any QR code instantly with your device camera.",
  },
  {
    icon: BarChart3,
    title: "History & Analytics",
    description: "Track all your generated and scanned QR codes in one place.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Export and share your QR codes in high resolution anywhere.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-black border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Powerful tools for modern QR experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors duration-200"
            >
              <feature.icon className="w-5 h-5 text-muted-foreground mb-4" />
              <h3 className="text-base font-medium text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
