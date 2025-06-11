import SmallBanner from "../components/banners/SmallBanner";
import { siteConfig } from "../config/siteConfig";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactUsPage = () => {
  const { whatsapp, email, social, additionalInfo } = siteConfig.contact;

  return (
    <div>
      {/* Banner */}
      <SmallBanner
        image="/contact-us/banner.jpg"
        title="Contact Us"
        subtitle="We'd love to hear from you!"
      />

      {/* Main content */}
      <section className="px-6 py-5 mt-4 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Contact Information</h2>
          
          <div className="flex items-center gap-4">
            <FaWhatsapp className="text-primary text-3xl" />
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-700 hover:text-primary transition"
            >
              {siteConfig.contact.whatsapplabel}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-primary text-3xl" />
            <a
              href={`mailto:${email}`}
              className="text-lg text-gray-700 hover:text-primary transition"
            >
              {email}
            </a>
          </div>
        </div>

        {/* Social Media Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Follow Us</h2>
          
          {social.map((socialLink, index) => (
            <div key={index} className="flex items-center gap-4">
              {socialLink.icon === "facebook" && <FaFacebookF className="text-primary text-3xl" />}
              {socialLink.icon === "instagram" && <FaInstagram className="text-primary text-3xl" />}
              <a
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-gray-700 hover:text-primary transition"
              >
                {socialLink.icon.charAt(0).toUpperCase() + socialLink.icon.slice(1)}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="px-6 py-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text content */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">{additionalInfo.title}</h2>
          <p className="text-lg text-gray-700">{additionalInfo.description}</p>
        </div>

        {/* Image */}
        <div>
          <img
            src={additionalInfo.image}
            alt="Why Choose Balu"
            className="w-auto max-h-72 rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
