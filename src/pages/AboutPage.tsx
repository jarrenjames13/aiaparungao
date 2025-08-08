import Navbar from "../components/NavBar.tsx";
import { Helmet } from "react-helmet";
import TeamCarousel from "../components/TeamCarousel.tsx";
import AboutCarousel from "../components/AboutCarousel.tsx";
import { Link } from "react-router";
import Footer from "../components/Footer.tsx";

const AboutPage = () => {
  return (
    <div data-theme="light" className="min-h-screen  ">
      <Helmet>
        <title>About Us - Lilibeth and Jojo Parungao</title>
        <meta
          name="description"
          content="Learn about Lilibeth and Jojo Parungao, your trusted AIA life insurance planners in Rizal. Discover our mission, values, and how we can help you secure your future."
        />
        <meta
          name="keywords"
          content="AIA, Life Insurance, Rizal, Lilibeth Parungao, Jojo Parungao, Insurance Planner, About Us"
        />
      </Helmet>
      <Navbar />
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center my-6 sm:my-8">
          About Us
        </h1>
        <div className="max-w-full sm:max-w-3xl mx-auto flex flex-col gap-6 text-justify">
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
          <div className="w-full sm:w-[80%] mx-auto">
            <AboutCarousel />
          </div>
        </div>
        <div className="max-w-full sm:max-w-3xl mx-auto mt-8 px-2 sm:px-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Our License</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 sm:p-4 mb-4 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-base">
              <thead>
                <tr>
                  <th className="py-2 px-2 font-bold">Name</th>
                  <th className="py-2 px-2 font-bold">Location</th>
                  <th className="py-2 px-2 font-bold">License No.</th>
                  <th className="py-2 px-2 font-bold">Valid Until</th>
                  <th className="py-2 px-2 font-bold">Status</th>
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
        </div>
        <div className="max-w-full sm:max-w-3xl mx-auto mt-8 px-2 sm:px-4 text-justify">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Our Team</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 sm:p-4">
            <p className="mb-2 text-base sm:text-lg">
              We are part of Ardidon AAA Financials, an agency affiliated with
              AIA Philippines (formerly known as Philam Life), one of the
              country’s most trusted life insurance institutions.
            </p>
            <p className="text-base sm:text-lg">
              Our premier team of service-oriented professionals provides
              financial planning and security solutions to Filipino families. We
              are committed to helping you achieve your financial goals and
              protect what matters most.
            </p>
            <div className="w-full sm:w-[80%] mx-auto mt-4">
              <TeamCarousel />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link to="/contact">
            <button className="w-full sm:w-auto mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg text-base sm:text-lg font-semibold shadow hover:bg-blue-700 transition-colors">
              Contact Us to learn more
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
