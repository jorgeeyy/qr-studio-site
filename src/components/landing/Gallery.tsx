import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "create",
    label: "Create",
    image: "/screenshots/create.jpg",
    title: "Create Custom QR Codes",
    description: "Design your QR codes with custom colors, shapes, and logos. Live preview as you type.",
  },
  {
    id: "overview",
    label: "Overview",
    image: "/screenshots/overview.jpg",
    title: "Quick Generate & Manage",
    description: "Access quick generate options for Website, WiFi, and Socials. Manage all your QR codes in one place.",
  },
];

export function Gallery() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="screenshots" className="py-20 md:py-28 bg-black border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Explore all features from your scan
          </h2>
        </div>

        <div className="flex justify-center gap-1 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-200",
                activeTab === tab.id
                  ? "bg-white text-black"
                  : "text-muted-foreground hover:text-white"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              {activeContent.title}
            </h3>
            <p className="text-muted-foreground text-lg max-w-md mx-auto lg:mx-0">
              {activeContent.description}
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="bg-card border border-border rounded-2xl p-2">
              <div className="rounded-xl overflow-hidden bg-[#111] w-70 sm:w-[320px]">
                <img
                  key={activeContent.id}
                  src={activeContent.image}
                  alt={activeContent.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
