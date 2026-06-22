import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "create",
    label: "Create",
    image: "/screenshots/create.png",
    title: "Create Custom QR Codes",
    description:
      "Design your QR codes with custom colors, shapes, and logos. Live preview as you type.",
  },
  {
    id: "overview",
    label: "Overview",
    image: "/screenshots/overview.png",
    title: "Quick Generate & Manage",
    description:
      "Access quick generate options for Website, WiFi, and Socials. Manage all your QR codes in one place.",
  },
];

export function Gallery() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeContent = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="screenshots" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">
            Screenshots
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Explore all features from your scan
          </h2>
        </div>

        <div className="flex justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-slate-100 text-muted-foreground hover:bg-slate-200"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {activeContent.title}
            </h3>
            <p className="text-muted-foreground text-lg max-w-md mx-auto lg:mx-0">
              {activeContent.description}
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-full" />
              <div className="relative bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl shadow-primary/20 border border-slate-700 transition-all duration-500">
                <div className="rounded-[2rem] overflow-hidden bg-slate-800 w-[280px] sm:w-[320px]">
                  <img
                    key={activeContent.id}
                    src={activeContent.image}
                    alt={activeContent.title}
                    className="w-full h-auto animate-in fade-in duration-500"
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
