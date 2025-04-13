import { Check, Brain, Image, FileText, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Understands your product",
    description:
      "Picks the highest-converting category — no guesswork, just optimized placement based on real data",
  },
  {
    icon: Image,
    title: "Generates scroll-stopping images",
    description:
      "White background, lifestyle, or close-ups, tailored to each marketplace's requirements",
  },
  {
    icon: FileText,
    title: "Writes SEO-rich content",
    description:
      "Titles and descriptions automatically tuned for discoverability, CTR, and conversion",
  },
  {
    icon: TrendingUp,
    title: "Monitors performance",
    description:
      "Continuously improves future listings — every listing gets smarter with feedback",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Homywork Does
          </h2>
          <p className="text-xl text-homywork-gray max-w-3xl mx-auto">
            Your AI teammate that runs the listing lifecycle — so you don't have
            to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-homywork-lightPurple/50 shadow-sm hover:shadow-md transition-shadow animate-fade-up flex items-start"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="rounded-full bg-homywork-purple/10 p-3 mr-4 flex-shrink-0">
                <feature.icon className="h-6 w-6 text-homywork-purple" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-homywork-darkPurple">
                  {feature.title}
                </h3>
                <p className="text-homywork-gray">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
