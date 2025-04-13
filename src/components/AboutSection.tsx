
const AboutSection = () => {
  return (
    <section className="section-padding bg-homywork-darkPurple text-white">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built By Sellers, For Sellers</h2>
            <p className="text-lg opacity-90 mb-6">
              Our founder comes from 30+ years of e-commerce manufacturing. We know the pain. We built Homywork to solve it — starting with furniture, but soon for every high-context product.
            </p>
          </div>
          
          <div className="animate-fade-up bg-homywork-darkPurple/50 rounded-lg p-6 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-homywork-purple">What's Coming Next</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-homywork-orange mt-2 mr-3 flex-shrink-0"></div>
                <span>Autonomous image selection agents</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-homywork-orange mt-2 mr-3 flex-shrink-0"></div>
                <span>Fully-automated ASIN optimization</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-homywork-orange mt-2 mr-3 flex-shrink-0"></div>
                <span>Personalized A/B testing tools</span>
              </li>
              <li className="flex items-start">
                <div className="h-1.5 w-1.5 rounded-full bg-homywork-orange mt-2 mr-3 flex-shrink-0"></div>
                <span>Shopify + Etsy integrations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
