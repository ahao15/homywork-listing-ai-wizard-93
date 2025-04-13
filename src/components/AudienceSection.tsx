
import { Card, CardContent } from "@/components/ui/card";
import { Store, Building2, Boxes, Puzzle } from "lucide-react";

const audiences = [
  {
    title: "Marketplace Sellers",
    description: "Drowning in manual work and looking to scale efficiently",
    icon: Store
  },
  {
    title: "Agencies",
    description: "Managing listings at scale for multiple clients",
    icon: Building2
  },
  {
    title: "Brands",
    description: "Looking to break into new platforms without the headache",
    icon: Boxes
  },
  {
    title: "Operators",
    description: "Tired of juggling 5+ disconnected tools for one workflow",
    icon: Puzzle
  }
];

const AudienceSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-width">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who It's For</h2>
          <p className="text-lg text-homywork-gray max-w-2xl mx-auto">
            Homywork serves a variety of e-commerce professionals facing common challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, index) => (
            <Card 
              key={index} 
              className="border border-homywork-lightPurple/30 animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardContent className="pt-6">
                <div className="mb-4 bg-homywork-purple/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-homywork-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-homywork-darkPurple">{item.title}</h3>
                <p className="text-homywork-gray">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-up">
          <h3 className="text-2xl font-bold mb-4">Supported Marketplaces</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-homywork-darkPurple/80 text-lg md:text-xl">
            <span className="font-medium">Amazon</span>
            <span className="text-homywork-gray">·</span>
            <span className="font-medium">Walmart</span>
            <span className="text-homywork-gray">·</span>
            <span className="font-medium">Wayfair</span>
            <span className="text-homywork-gray">·</span>
            <span className="font-medium">Temu</span>
            <span className="text-homywork-gray">·</span>
            <span className="font-medium">Maison du Monde</span>
            <span className="text-homywork-gray">·</span>
            <span className="font-medium">Frasers</span>
            <span className="text-homywork-gray">·</span>
            <span className="text-homywork-gray italic">More coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
