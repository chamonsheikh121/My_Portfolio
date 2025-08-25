import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactImg from "../assets/flat-design-illustration-customer-support.png"; // your image path

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false)

  console.log(loading)
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // start loading

    setTimeout(() => {
      toast.success("Message sent successfully! I will contact you soon.");
      setForm({ name: "", email: "", message: "" });
      setLoading(false); // stop loading after message is sent
    }, 1000);
  };
  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-16 flex flex-col">
      <div className="pb-20 pl-10">
        <h2 data-aos="fade-up" className="text-5xl text-purple-700 font-extrabold mb-6">
          <span className="text-purple-100">Get in</span> Touch
        </h2>
        <p data-aos="fade-up" className="text-lg mb-8 text-purple-100">
          Have a project in mind or just want to say hello? I’m always open to discuss new ideas, collaborations, or opportunities. Let’s connect!
        </p>
      </div>

      <div  data-aos="fade-up" className="flex  flex-wrap mb-20 justify-between gap-8 max-w-6xl mx-auto">
        {/* Address */}
        <div className="flex items-center gap-4 ">
          <div className="bg-white text-gray-900 p-4 rounded-full flex-shrink-0">
            <FaMapMarkerAlt size={24} />
          </div>
          <div>
            <h4 className="text-teal-400 font-semibold">Address</h4>
            <p>Green House 24, Purbo Noyatola, Mogbazar</p>
          </div>
        </div>

        {/* Phone */}
        <div  className="flex items-center gap-4">
          <div className="bg-white text-gray-900 p-4 rounded-full flex-shrink-0">
            <FaPhone size={24} />
          </div>
          <div>
            <h4 className="text-teal-400 font-semibold">Phone</h4>
            <p>
              <a href="tel:+8801304100074" className="hover:underline">
                +8801304100074
              </a>
            </p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
          <div className="bg-white text-gray-900 p-4 rounded-full flex-shrink-0">
            <FaEnvelope size={24} />
          </div>
          <div>
            <h4 className="text-teal-400 font-semibold">Email</h4>
            <p>
              <a href="mailto:chamonali11@gmail.com" className="hover:underline">
                chamonali11@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div  data-aos="fade-up" className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-center">
        {/* Left Column: Image */}
        <div className="flex-1">
          <img src={contactImg} alt="Contact" className="w-full rounded-lg shadow-lg object-cover" />
        </div>

        {/* Right Column: Form & Info */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Info Icons */}


          {/* Form */}
          <div data-aos="flip-left" className="bg-gray-800 text-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-gray-500 focus:border-teal-400 outline-none py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-gray-500 focus:border-teal-400 outline-none py-2"
              />
              <textarea
                name="message"
                placeholder="Type your Message..."
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                className="border border-gray-500 focus:border-teal-400 outline-none py-2 resize-none rounded"
              ></textarea>
              <button
                type="submit"
                className="mt-4 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] transition-shadow duration-300"
              >
                {
                  loading ? 'Sending...' : 'Send'
                }
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
};

export default Contact;
