import Navbar from "../components/NavBar.tsx";
import { Helmet } from "react-helmet";
import TeamCarousel from "../components/TeamCarousel.tsx";
import AboutCarousel from "../components/AboutCarousel.tsx";
import { Link } from "react-router";
import Footer from "../components/Footer.tsx";

const AboutPage = () => {
  return (
    <div data-theme="light" className="min-h-screen">
      <Helmet>
        <title>About Us - Lilibeth and Jojo Parungao | AIA Insurance Planners</title>
        <meta
          name="description"
          content="Learn about Lilibeth and Jojo Parungao, your trusted AIA life insurance planners in Rizal. With years of experience, we're dedicated to helping you secure your financial future through personalized insurance solutions."
        />
        <meta
          name="keywords"
          content="AIA, Life Insurance, Rizal, Lilibeth Parungao, Jojo Parungao, Insurance Planner, About Us, Financial Security, Ardidon AAA Financials"
        />
        <link rel="canonical" href="https://aia.parungao.online/about" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Us - Lilibeth and Jojo Parungao | AIA Insurance Planners" />
        <meta property="og:description" content="Learn about Lilibeth and Jojo Parungao, your trusted AIA life insurance planners in Rizal. Discover our mission and how we can help secure your future." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About Us - Lilibeth and Jojo Parungao | AIA Insurance Planners" />
        <meta name="twitter:description" content="Learn about Lilibeth and Jojo Parungao, your trusted AIA life insurance planners in Rizal. Discover our mission and how we can help secure your future." />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Lilibeth and Jojo Parungao - AIA Life Insurance Planners",
              "description": "Learn about Lilibeth and Jojo Parungao, your trusted AIA life insurance planners in Rizal.",
              "url": "${window.location.href}",
              "mainEntity": {
                "@type": "Organization",
                "name": "Lilibeth and Jojo Parungao - AIA Life Insurance Planners",
                "description": "Trusted AIA life insurance planners serving clients in Rizal and beyond.",
                "url": "${window.location.origin}",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Antipolo/San Juan",
                  "addressRegion": "Rizal",
                  "addressCountry": "PH"
                },
                "member": [
                  {
                    "@type": "Person",
                    "name": "Lilibeth C. Parungao",
                    "jobTitle": "AIA Life Insurance Planner",
                    "identifier": "99377232080145200000"
                  },
                  {
                    "@type": "Person",
                    "name": "Jojo T. Parungao",
                    "jobTitle": "AIA Life Insurance Planner",
                    "identifier": "34603170080145200000"
                  }
                ],
                "parentOrganization": {
                  "@type": "Organization",
                  "name": "Ardidon AAA Financials",
                  "parentOrganization": {
                    "@type": "Organization",
                    "name": "AIA Philippines",
                    "alternateName": "Philam Life",
                    "url": "https://www.aia.com.ph/"
                  }
                }
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="px-4 sm:px-6 lg:px-8 pb-8">
        <header className="max-w-4xl mx-auto text-center my-6 sm:my-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            About Us
          </h1>
        </header>
        
        <article className="max-w-full sm:max-w-3xl mx-auto">
          <section className="mb-8">
            <div className="flex flex-col gap-6 text-justify">
              <p className="text-base sm:text-lg mb-2 sm:mb-4">
                Welcome to the official website of Lilibeth and Jojo Parungao, your
                trusted AIA life insurance planners in Antipolo/San Juan. With years
                of experience in the insurance industry, we are dedicated to helping
                you secure your future through personalized insurance solutions.
              </p>
              <p className="text-base sm:text-lg mb-2 sm:mb-4">
                Our mission is to provide expert guidance and support to our
                clients, ensuring that they have the right coverage to protect their
                loved ones and achieve their financial goals. We believe in building
                long-term relationships based on trust, integrity, and exceptional
                service.
              </p>
              <p className="text-base sm:text-lg mb-2 sm:mb-4">
                Whether you are looking for life insurance, health insurance, or
                investment options, we are here to assist you every step of the way.
                Contact us today to learn more about how we can help you secure a
                brighter future.
              </p>
              <figure className="w-full sm:w-[80%] mx-auto">
                <AboutCarousel />
                <figcaption className="text-center text-sm text-gray-600 mt-2">
                  Lilibeth and Jojo Parungao, your trusted AIA life insurance planners
                </figcaption>
              </figure>
            </div>
          </section>
          
          <section className="mt-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Our License</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 sm:p-4 mb-4 overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-base" aria-label="Insurance License Information">
                <caption className="sr-only">Insurance License Information</caption>
                <thead>
                  <tr>
                    <th scope="col" className="py-2 px-2 font-bold">Name</th>
                    <th scope="col" className="py-2 px-2 font-bold">Location</th>
                    <th scope="col" className="py-2 px-2 font-bold">License No.</th>
                    <th scope="col" className="py-2 px-2 font-bold">Valid Until</th>
                    <th scope="col" className="py-2 px-2 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-2">PARUNGAO, LILIBETH, C</td>
                    <td className="py-2 px-2">Antipolo/San Juan</td>
                    <td className="py-2 px-2">99377232080145200000</td>
                    <td className="py-2 px-2">Dec. 31, 2026</td>
                    <td className="py-2 px-2 text-green-700 font-semibold">
                      Active
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2">PARUNGAO, JOJO, T</td>
                    <td className="py-2 px-2">Antipolo/San Juan</td>
                    <td className="py-2 px-2">34603170080145200000</td>
                    <td className="py-2 px-2">Dec. 31, 2026</td>
                    <td className="py-2 px-2 text-green-700 font-semibold">
                      Active
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          
          <section className="mt-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Our Team</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 sm:p-4">
              <p className="mb-4 text-base sm:text-lg">
                We are proud members of Ardidon AAA Financials, an agency affiliated with
                AIA Philippines (formerly known as Philam Life), one of the
                country's most trusted life insurance institutions.
              </p>
              <p className="text-base sm:text-lg mb-4">
                Our premier team of service-oriented professionals provides
                financial planning and security solutions to Filipino families. We
                are committed to helping you achieve your financial goals and
                protect what matters most.
              </p>
              <figure className="w-full sm:w-[80%] mx-auto mt-6">
                <TeamCarousel />
                <figcaption className="text-center text-sm text-gray-600 mt-2">
                  The Ardidon AAA Financials team
                </figcaption>
              </figure>
            </div>
          </section>
        </article>
        
        <div className="flex justify-center mt-8">
          <Link 
            to="/contact" 
            className="btn btn-primary px-6 py-3"
            aria-label="Contact Lilibeth and Jojo Parungao for insurance consultation"
          >
            Interested? Contact us
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;