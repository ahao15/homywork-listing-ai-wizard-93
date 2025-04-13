import { Check, X } from "lucide-react";

const comparisonData = {
  headers: [
    "Feature",
    "Jungle Scout",
    "Canva / PhotoRoom",
    "SellerApp",
    "LaunchGPT",
    "Homywork",
  ],
  rows: [
    {
      feature: "SEO writting with Category Context",
      jungle: true,
      canva: false,
      sellerapp: true,
      launchgpt: true,
      homywork: true,
    },
    {
      feature: "Product Image Generation",
      jungle: false,
      canva: true,
      sellerapp: false,
      launchgpt: true,
      homywork: true,
    },
    {
      feature: "One-Click Listing",
      jungle: false,
      canva: false,
      sellerapp: true,
      launchgpt: false,
      homywork: true,
    },
    {
      feature: "Learns from Past Listings",
      jungle: false,
      canva: false,
      sellerapp: false,
      launchgpt: false,
      homywork: true,
    },
    {
      feature: "Unified AI Co-Operator",
      jungle: false,
      canva: false,
      sellerapp: false,
      launchgpt: false,
      homywork: true,
    },
  ],
};

const ComparisonSection = () => {
  return (
    <section id="comparison" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why We're Different
          </h2>
          <p className="text-lg text-homywork-gray max-w-2xl mx-auto">
            Homywork combines the best features of existing tools with powerful
            AI to create an end-to-end solution
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border shadow-sm animate-fade-up">
          <table className="w-full table-fixed">
            <thead>
              <tr className="bg-gray-50">
                {comparisonData.headers.map((header, index) => (
                  <th
                    key={index}
                    className={`p-4 text-center font-bold w-[16.6%] ${
                      header === "Homywork"
                        ? "bg-homywork-purple/10 text-homywork-darkPurple"
                        : "text-homywork-gray"
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="p-4 border-t w-[16.6%]">{row.feature}</td>
                  {[
                    "jungle",
                    "canva",
                    "sellerapp",
                    "launchgpt",
                    "homywork",
                  ].map((key, i) => (
                    <td
                      key={i}
                      className={`p-4 border-t w-[16.6%] text-center align-middle ${
                        key === "homywork" ? "bg-homywork-purple/5" : ""
                      }`}
                    >
                      {row[key] ? (
                        <Check
                          className={`h-6 w-6 mx-auto ${
                            key === "homywork"
                              ? "text-homywork-purple"
                              : "text-green-500"
                          }`}
                        />
                      ) : (
                        <X className="h-6 w-6 text-red-500 mx-auto" />
                      )}
                    </td>
                  ))}
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
