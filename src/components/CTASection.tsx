
import { Button } from "@/components/ui/button";
import { ArrowRight, MessagesSquare } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-homywork-purple/90 to-homywork-darkPurple text-white">
      <div className="container-width text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">Transform Your Listings Today</h2>
        <p className="text-xl opacity-90 mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Join companies like HomyCasa who are saving hours per listing and dramatically increasing sales
        </p>
        <p className="text-lg opacity-80 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Start automating your e-commerce listings today and see the difference Homywork makes
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button size="lg" className="bg-white text-homywork-darkPurple hover:bg-white/90">
            Start Listing Smarter <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Request Demo <MessagesSquare size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
