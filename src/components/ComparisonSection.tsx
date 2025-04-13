
import { Check, X } from "lucide-react";

const comparisonData = {
  headers: ["Feature", "Jungle Scout / Helium 10", "Canva / PhotoRoom", "Homywork"],
  rows: [
    {
      feature: "SEO & Keyword Suggestions",
      jungle: true,
      canva: false,
      homywork: true
    },
    {
      feature: "Image Generation / Editing",
      jungle: false,
      canva: true,
      homywork: true
    },
    {
      feature: "Platform Auto-Publishing",
      jungle: false,
      canva: false,
      homywork: true
    },
    {
      feature: "Learns From Performance Data",
      jungle: false,
      canva: false,
      homywork: true
    },
    {
      feature: "Fully Integrated Workflow",
      jungle: false,
      canva: false,
      homywork: true
    }
  ]
};

const ComparisonSection = () => {
  return (
    <section id="comparison" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We're Different</h2>
          <p className="text-lg text-homywork-gray max-w-2xl mx-auto">
            Homywork combines the best features of existing tools with powerful AI to create an end-to-end solution
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border shadow-sm animate-fade-up">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                {comparisonData.headers.map((header, index) => (
                  <th 
                    key={index} 
                    className={`p-4 text-left font-bold ${
                      index === comparisonData.headers.length - 1 
                        ? 'bg-homywork-purple/10 text-homywork-darkPurple'
                        : 'text-homywork-gray'
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-4 border-t">{row.feature}</td>
                  <td className="p-4 border-t">
                    {row.jungle ? 
                      <Check className="h-5 w-5 text-green-500" /> : 
                      <X className="h-5 w-5 text-red-500" />
                    }
                  </td>
                  <td className="p-4 border-t">
                    {row.canva ? 
                      <Check className="h-5 w-5 text-green-500" /> : 
                      <X className="h-5 w-5 text-red-500" />
                    }
                  </td>
                  <td className="p-4 border-t bg-homywork-purple/5">
                    {row.homywork ? 
                      <Check className="h-5 w-5 text-homywork-purple" /> : 
                      <X className="h-5 w-5 text-red-500" />
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
