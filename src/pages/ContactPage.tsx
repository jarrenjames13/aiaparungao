import ContactForm from "../components/ContactForm.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/NavBar.tsx";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <div data-theme="light" className="min-h-screen">
      <Helmet>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Looking for life insurance advice in Rizal? Get in touch with Lilibeth and Jojo Parungao, your trusted AIA life insurance planners. Call, email, or send a message for expert guidance and personalized insurance solutions."
        />
        <meta
          name="keywords"
          content="AIA, Life Insurance, Rizal, Lilibeth Parungao, Jojo Parungao, Insurance Planner, Contact, Financial Advisor"
        />
      </Helmet>
      <Navbar />
      <div>
        <h1 className="text-3xl font-bold text-center my-8">Contact Us</h1>

        <div className="max-w-md mx-auto">
          <div className="bg-gray-50 border border-red-100 rounded-lg p-4 mb-6 flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-2">Call Us</h2>
            <p className="text-blue-700 font-bold text-xl">0923 346 2017</p>
          </div>
          <p className="text-center mb-4">
            We would love to hear from you! Please fill out the form below.
          </p>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
