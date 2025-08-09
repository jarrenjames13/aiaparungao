import Navbar from "../components/NavBar.tsx";
import ImageCarousel from "../components/ImageCarousel";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import trustImg from "../assets/img/trust.jpg";
import Footer from "../components/Footer.tsx";

const HomePage = () => {
  return (
    <div data-theme="light" className="min-h-screen">
     <Helmet>
        <title>AIA Insurance - Lilibeth and Jojo Parungao | Trusted Life Insurance Planners</title>
        <meta
          name="description"
          content="Welcome to the official website of Lilibeth and Jojo Parungao, your trusted AIA life insurance planners in Rizal. Explore our services and secure your future today!"
        />
        <meta
          name="keywords"
          content="AIA, Life Insurance, Rizal, Lilibeth Parungao, Jojo Parungao, Insurance Planner, Financial Security"
        />
        <link rel="canonical" href="https://aia.parungao.online/" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="AIA Insurance - Lilibeth and Jojo Parungao" />
        <meta property="og:description" content="Trusted AIA life insurance planners in Rizal. Explore our services and secure your future today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aia.parungao.online/" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AIA Insurance - Lilibeth and Jojo Parungao" />
        <meta name="twitter:description" content="Trusted AIA life insurance planners in Rizal. Explore our services and secure your future today!" />
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Lilibeth and Jojo Parungao - AIA Life Insurance Planners",
              "description": "Trusted AIA life insurance planners serving clients in Rizal and beyond.",
              "url": "https://aia.parungao.online/",
              "telephone": "0923 346 2017",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Antipolo/San Juan",
                "addressRegion": "Rizal",
                "addressCountry": "PH"
              },
              "sameAs": [
                "https://www.facebook.com/lilibeth.parungao.98",
                "https://www.instagram.com/lilibethparungao"
              ],
              "priceRange": "₱₱",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "offers": {
                "@type": "AggregateOffer",
                "offerCount": "12",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AIA All-In-One"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AIA Critical Protect"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>
      <Navbar />

      <main>
        <section aria-label="Featured carousel" className="max-w-full sm:max-w-[1400px] w-full mx-auto pt-5 text-center px-4">
          <ImageCarousel />
        </section>
        
        <section aria-label="Introduction" className="text-center mt-5 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Secure your future with trusted Life Insurance Plans from AIA!
          </h1>
        </section>
        
        <section aria-label="Products and Services" className="text-center mt-8 px-4">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            Services and Products Offered
          </h2>
          <p className="text-center mt-2 mb-4 text-base sm:text-lg max-w-3xl mx-auto">
            Explore our comprehensive range of life insurance products designed to meet your unique financial needs and provide peace of mind for you and your loved ones.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <div className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition-shadow">AIA All-In-One</div>
            <div className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
              AIA Critical Protect
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
              AIA Guardian Term Insurance
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
              AIA Family Secure
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition-shadow">AIA Health Cover</div>
            <div className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
              AIA Future Builder
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
              AIA Philam Vitality
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition-shadow">AIA Med-Assist</div>
            <div className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
              AIA Asset Builder
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
              AIA Retirement Plus
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition-shadow">
              AIA Education Builder
            </div>
            <div className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition-shadow">AIA Accident Pro</div>
          </div>
        </section>
        
        <section aria-label="Our Qualifications" className="text-center mt-12 px-4 mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Why Choose Us</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <figure className="w-full sm:w-64">
              <img
                src={trustImg}
                alt="Lilibeth and Jojo Parungao celebrating achievements with trophies and awards"
                className="w-full rounded-lg shadow-md"
                loading="lazy"
              />
              <figcaption className="text-sm text-gray-600 mt-2">Award-winning AIA insurance planners</figcaption>
            </figure>
            <div className="text-left max-w-md">
              <ul className="list-disc pl-5 text-base sm:text-lg space-y-2">
                <li>Licensed Life Insurance Planners with AIA Philippines</li>
                <li>Over 2 years of specialized experience in life insurance planning</li>
                <li>Personalized insurance solutions tailored to each client's unique needs</li>
                <li>Trusted by numerous Filipino families in Rizal and surrounding areas</li>
                <li>Backed by AIA Philippines, one of the country's leading insurance providers</li>
                <li>Comprehensive support and guidance throughout your insurance journey</li>
                <li>Proud members of Ardidon AAA Financials, a respected insurance agency</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <Link to="/about">
              <button className="btn btn-primary px-6 py-3">
                Learn more about us
              </button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;