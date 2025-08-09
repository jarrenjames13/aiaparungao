import ContactForm from "../components/ContactForm.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/NavBar.tsx";
import { Helmet } from "react-helmet";
import { Phone, Mail, MapPin, Clock } from "lucide-react"; // You may need to install this package

const ContactPage = () => {
  return (
    <div data-theme="light" className="min-h-screen">
      <Helmet>
        <title>Contact Lilibeth and Jojo Parungao - AIA Life Insurance Planners</title>
        <meta
          name="description"
          content="Looking for life insurance advice in Rizal? Get in touch with Lilibeth and Jojo Parungao, your trusted AIA life insurance planners. Call, email, or send a message for expert guidance and personalized insurance solutions."
        />
        <meta
          name="keywords"
          content="AIA, Life Insurance, Rizal, Lilibeth Parungao, Jojo Parungao, Insurance Planner, Contact, Financial Advisor"
        />
        <link rel="canonical" href="https://aiaparungao.com/contact" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Contact Lilibeth and Jojo Parungao - AIA Life Insurance Planners" />
        <meta property="og:description" content="Looking for life insurance advice in Rizal? Get in touch with us for expert guidance and personalized insurance solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Lilibeth and Jojo Parungao - AIA Life Insurance Planners" />
        <meta name="twitter:description" content="Looking for life insurance advice in Rizal? Get in touch with us for expert guidance and personalized insurance solutions." />
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Lilibeth and Jojo Parungao - AIA Life Insurance Planners",
              "description": "Contact page for Lilibeth and Jojo Parungao, AIA Life Insurance Planners serving clients in Rizal.",
              "url": "https://aiaparungao.com/contact",
              "mainEntity": {
                "@type": "LocalBusiness",
                "name": "Lilibeth and Jojo Parungao - AIA Life Insurance Planners",
                "telephone": "0923 346 2017",
                "email": "parungaolilibeth0822@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Antipolo/San Juan",
                  "addressRegion": "Rizal",
                  "addressCountry": "PH"
                },
                "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "0923 346 2017",
                  "contactType": "customer service",
                  "areaServed": "Rizal",
                  "availableLanguage": ["en", "tl"]
                }
              }
            }
          `}
        </script>
      </Helmet>
      <Navbar />
      
      <main className="container mx-auto px-4 pb-12">
        <h1 className="text-3xl font-bold text-center my-8">Contact Us</h1>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-center md:text-left">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Phone className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-blue-700 font-bold">0923 346 2017</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-blue-700">parungaolilibeth0822@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p>Serving clients in Antipolo, San Juan, and throughout Rizal province</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Weekends: By appointment only</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
            <p className="mb-4 text-gray-600">
              We would love to hear from you! Please fill out the form below and we'll 
              get back to you as soon as possible.
            </p>
            <ContactForm />
          </section>
        </div>
        
        <section className="mt-12 max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-4">Looking for a Free Insurance Consultation?</h2>
          <p className="mb-6">
            Schedule a no-obligation consultation with us to discuss your insurance needs 
            and explore personalized solutions for your financial security.
          </p>
          <a 
            href="tel:+639233462017" 
            className="btn btn-primary px-6 py-3 inline-block"
            aria-label="Call us to schedule a free consultation"
          >
            Call Now for a Free Consultation
          </a>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;