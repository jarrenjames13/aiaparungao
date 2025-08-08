import Navbar from "../components/NavBar.tsx";
import ImageCarousel from "../components/ImageCarousel";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import trustImg from "../assets/img/trust.jpg";
import Footer from "../components/Footer.tsx";

const HomePage = () => {
  return (
    <div data-theme="light" className="min-h-screen ">
      <Helmet>
        <title>AIA - PARUNGAO</title>
        <meta
          name="description"
          content="Welcome to the official website of Lilibeth and Jojo Parungao, your trusted AIA life insurance planners in Rizal. Explore our services and secure your future today!"
        />
        <meta
          name="keywords"
          content="AIA, Life Insurance, Rizal, Lilibeth Parungao, Jojo Parungao, Insurance Planner, Home"
        />
      </Helmet>
      <Navbar />

      <div className="max-w-full sm:max-w-[1400px] w-full mx-auto pt-5 text-center px-4">
        <ImageCarousel />
      </div>
      <div className="text-center mt-5 px-4">
        <h1 className="text-xl sm:text-2xl font-bold">
          Secure your future with trusted Life Insurance Plans from AIA!
        </h1>
      </div>
      <div className="text-center mt-5 px-4">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          Services and Products Offered
        </h2>
        <p className="text-center mt-2 mb-4 text-base sm:text-lg">
          Explore our range of life insurance products designed to meet your
          needs.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
          <li className="bg-gray-50 rounded-lg p-4 shadow">AIA All-In-One</li>
          <li className="bg-gray-50 rounded-lg p-4 shadow">
            AIA Critical Protect
          </li>
          <li className="bg-gray-50 rounded-lg p-4 shadow">
            AIA Guardian Term Insurance
          </li>
          <li className="bg-gray-50 rounded-lg p-4 shadow">
            AIA Family Secure
          </li>
          <li className="bg-gray-50 rounded-lg p-4 shadow">AIA Health Cover</li>
          <li className="bg-gray-50 rounded-lg p-4 shadow">
            AIA Future Builder
          </li>
          <li className="bg-gray-50 rounded-lg p-4 shadow">
            AIA Philam Vitality
          </li>
          <li className="bg-gray-50 rounded-lg p-4 shadow">AIA Med-Assist</li>
          <li className="bg-gray-50 rounded-lg p-4 shadow">
            AIA Asset Builder
          </li>
          <li className="bg-gray-50 rounded-lg p-4 shadow">
            AIA Retirement Plus
          </li>
          <li className="bg-gray-50 rounded-lg p-4 shadow">
            AIA Education Builder
          </li>
          <li className="bg-gray-50 rounded-lg p-4 shadow">AIA Accident Pro</li>
        </ul>
      </div>
      <div className="text-center mt-8 px-4">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Why Choose Us</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <img
            src={trustImg}
            alt="Two people in a small office standing and sitting beside a round table displaying several trophies and a vase of red flowers. One person is giving a thumbs up and smiling, while the other stands close by holding keys. The atmosphere is friendly and celebratory. The office has light-colored walls, a chair, and a partition in the background. No visible text in the image."
            className="w-full sm:w-64 rounded-lg shadow mb-4 sm:mb-0"
          />
          <div className="text-left max-w-md">
            <ul className="list-disc pl-5 text-base sm:text-lg">
              <li>Licensed Life Planner</li>
              <li>2+ Years of Experience as a Life Planner</li>
              <li>Personalized insurance solutions for every client</li>
              <li>Trusted by Filipino families in Rizal and beyond</li>
              <li>Backed by AIA Philippines, a leading insurance provider</li>
              <li>
                Comprehensive support and guidance throughout your insurance
                journey
              </li>
              <li>part of Ardidon AAA Financials, a reputable agency</li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <Link to="/about">
            <button className="btn btn-primary mt-4 sm:mt-0">
              Learn more about us
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
