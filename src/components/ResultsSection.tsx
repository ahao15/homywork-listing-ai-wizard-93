
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, ShoppingBag, DollarSign, TrendingUp } from "lucide-react";

const results = [
  {
    title: "Active B2B Users",
    value: "55+",
    icon: Users,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Listings Generated",
    value: "1,000+",
    icon: ShoppingBag,
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Listings Managed",
    value: "46,000+",
    icon: BarChart3,
    color: "bg-green-100 text-green-600"
  },
  {
    title: "GMV Tracked",
    value: "$190K+",
    icon: DollarSign,
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Weekly Retention",
    value: "70%",
    icon: TrendingUp,
    color: "bg-red-100 text-red-600"
  }
];

const ResultsSection = () => {
  return (
    <section id="results" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results</h2>
          <p className="text-lg text-homywork-gray max-w-2xl mx-auto">
            Homywork is already delivering measurable impact for e-commerce sellers across multiple platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {results.map((item, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow animate-fade-up" style={{ animationDelay: `${0.1 * index}s` }}>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-homywork-darkPurple">{item.value}</h3>
                  <p className="text-homywork-gray font-medium">{item.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
