import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-gradient-to-b from-white to-homywork-lightPurple/20">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Homywork</span> — The AI
              Co-operator for Your Listings
            </h1>
            <p className="text-xl md:text-2xl text-homywork-gray mb-8 max-w-2xl">
              Go from idea to live SKU in under 2 minutes. Homywork handles
              images, titles, categories, and listings — so you can focus on
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-homywork-purple hover:bg-homywork-purple/90 text-white"
                onClick={() =>
                  (window.location.href = "https://homywork.com/PublishRegister")
                }
              >
                Start for Free <ArrowRight size={18} className="ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-homywork-purple text-homywork-purple hover:bg-homywork-purple/10"
                onClick={() =>
                  (window.location.href = "https://homywork.com/PublishLogin")
                }
              >
                Book a Demo <ChevronRight size={18} className="ml-1" />
              </Button>
            </div>
          </div>
          <div
            className="relative rounded-lg overflow-hidden shadow-2xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="aspect-video bg-homywork-darkPurple rounded-lg overflow-hidden">
              <img
                src="https://sdmntpreastus2.oaiusercontent.com/files/00000000-3a5c-61f6-b906-f3fcec4fb102/raw?se=2025-04-13T22%3A05%3A55Z&sp=r&sv=2024-08-04&sr=b&scid=1cfc6c3f-8b85-5871-9af7-76b4068e374e&skoid=a47cd303-16a2-427e-8efb-2ce406116005&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-13T18%3A04%3A38Z&ske=2025-04-14T18%3A04%3A38Z&sks=b&skv=2024-08-04&sig=hsiPyxAjCPa68jFOVfFNFdGF8Qv2PqJqlJJhqzqLfJY%3D"
                alt="Homywork Dashboard"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-homywork-darkPurple/40 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
