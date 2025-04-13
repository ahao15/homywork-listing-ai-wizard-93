
import { Check } from "lucide-react";

const features = [
  "Auto-generates SEO titles & descriptions",
  "Chooses the best converting product category using AI",
  "Creates platform-specific images (white background, lifestyle, detail shots)",
  "Publishes directly to Amazon, Walmart, Wayfair, Temu, and more",
  "Tracks performance and recommends improvements"
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Homywork Does</h2>
          <p className="text-xl text-homywork-gray max-w-3xl mx-auto">
            Homywork automates the entire listing lifecycle for furniture and home goods sellers:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-homywork-lightPurple/50 shadow-sm hover:shadow-md transition-shadow animate-fade-up flex items-start"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="rounded-full bg-homywork-purple/10 p-2 mr-4 flex-shrink-0">
                <Check className="h-5 w-5 text-homywork-purple" />
              </div>
              <p className="text-homywork-darkPurple font-medium">{feature}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-homywork-darkPurple rounded-xl p-8 text-white animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg md:text-xl opacity-90 mb-6">
            We're not just another listing tool. Homywork is building the <span className="font-bold text-homywork-purple">vertical AI infrastructure for commerce</span> — one that learns from every listing, scales across marketplaces, and helps underdog sellers compete with big brands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
