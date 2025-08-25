import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaEye, FaTimes } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { motion } from 'framer-motion';

const Project = () => {
  const swiperRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null); // for popup





  const portfolioImages = [
    {
      projectName: "My Trades Person",
      imageLink: "https://res.cloudinary.com/dz28duolk/image/upload/v1756056655/Pink_Yellow_Blue_Bold_Nature_Photo_Spring_Season_Message_Facebook_Post_zyexmk.png",
      fullPageImage: "https://res.cloudinary.com/dz28duolk/image/upload/v1756056652/screencapture-mytradesperson-co-uk-2025-08-24-23_22_05_yo5oc5.png",
      description: "Connect with skilled tradespeople in your area. Post a job, find qualified professionals for your home or business projects, or grow your trade business with exclusive leads. Efficient, reliable, and user-friendly platform for trades and clients alike.",
      techStack: [
        "React",
        "JavaScript",
        "HTML",
        "CSS3",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",
        "Bootstrap",
        "Firebase",
        "JWT",
        "Axios"
      ],
      liveLink: "https://mytradesperson.co.uk/",
      github: "https://github.com/yourname/my-trades-person",
      clientReview: {
        name: "michaellebla962",
        description: "Ali created an outstanding platform! The project exceeded expectations, was delivered on time, and functions flawlessly. Highly recommended for professional web development.",
        rating: 5,
        country: "Netherlands",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/3527429d5eec3e4abcb8101962626a99-2054240291750363821824/JPEG_20250619_161020_940479623521889548.jpg"
      }
    }
    ,
    {
      projectName: "Travel agency",
      imageLink: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330633/project1_m5brwn.png",
      fullPageImage: "https://res.cloudinary.com/dz28duolk/image/upload/v1740332634/project12_gk62ia.png",
      description: "A modern travel booking platform where users can explore destinations, book tours, and connect with travel agencies in real time. Fully responsive and optimized for performance.",
      techStack: ["React", "JavaScript", "HTML", "CSS3", "Node.js", "MongoDB", "TailwindCSS", "Bootstrap", "Express", "Firebase", "JWT", "Axios"],
      // liveLink: "https://travel-agency.example.com",
      github: "https://github.com/yourname/travel-agency",
      clientReview: {
        name: "jackhurst21",
        description: "If you’re looking for a reliable web developer, I highly recommend Ali. He went above and beyond to bring my vision to life with professionalism and attention to detail. Thank you for your exceptional work!",
        rating: 5,
        country: "USA",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/73a67eb9d672b6b2af09e68be242c3b4-1650110331732/51d74721-d9aa-4bfc-80ed-7df6eab54fee.jpg"
      }
    },
    {
      projectName: "Trade Development Corporation",
      imageLink: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330599/proejct5_ry6thn.png",
      fullPageImage: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330694/project52_coruwq.png",
      description: "A corporate platform to manage trade operations efficiently, track performance metrics, and facilitate communication between departments. Fully responsive and secure.",
      techStack: ["React", "JavaScript", "HTML", "CSS3", "Node.js", "MongoDB", "TailwindCSS", "Bootstrap", "Express", "Firebase", "JWT", "Axios"],
      // liveLink: "https://trade-development.example.com",
      github: "https://github.com/yourname/trade-development",
      clientReview: {
        name: "jonathanncrotea",
        description: "Ali delivered exceptional work with top-notch professionalism, coding expertise, and keen attention to detail. Highly recommended for any web development project!",
        rating: 5,
        country: "USA",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/30e62db68b16fa4c8a2916361730e460-1668361105806/951eedd0-c37c-419f-82f6-ef02262fac03.jpg"
      }
    },
    {
      projectName: "Restaurant management system",
      imageLink: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330676/project3_gtqtnk.png",
      fullPageImage: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330566/project32_hexgyf.png",
      description: "A complete restaurant management solution including menu management, order tracking, payment history, and admin dashboards for staff management.",
      techStack: ["React", "JavaScript", "HTML", "CSS3", "Node.js", "MongoDB", "TailwindCSS", "Bootstrap", "Express", "Firebase", "JWT", "Axios"],
      // liveLink: "https://restaurant-management.example.com",
      github: "https://github.com/yourname/restaurant-management",
      clientReview: {
        name: "tfreed253",
        description: "Ali is truly an expert in web development! The project was completed ahead of schedule and exceeded expectations.",
        rating: 5,
        country: "United States",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/a4e00e6ac56dff39a8521bff54bebdd1-1406820701671773196.357586/B4CE595B-987D-48F7-82FE-3F8DA12107B9"
      }
    },
    {
      projectName: "Blood Donation Non-Profit",
      imageLink: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330650/project2_ychc5n.png",
      fullPageImage: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330507/project22_rdopek.png",
      description: "A non-profit platform to facilitate blood donations. Users can post requests, track donations, and connect with volunteers. Fully responsive and secure.",
      techStack: ["React", "JavaScript", "HTML", "CSS3", "Node.js", "MongoDB", "TailwindCSS", "Bootstrap", "Express", "Firebase", "JWT", "Axios"],
      liveLink: "https://blood-donation-aedcb.web.app/",
      github: "https://github.com/yourname/blood-donation",
      clientReview: {
        name: "achsial",
        description: "Ali delivered a robust platform that made blood donation management seamless. Highly professional and reliable!",
        rating: 5,
        country: "Austria",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1a57aea77a99a9b6c50c32c2e8e381d3-1553341450844/41f18a91-78e7-4c0d-ac2d-7219b8d4af80.jpg"
      }
    },
    {
      projectName: "Online Restaurant",
      imageLink: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330726/project4_scv6zf.png",
      fullPageImage: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330616/project42_vkfc2g.png",
      description: "An online platform for restaurants to display menus, accept orders, and manage customer feedback with integrated payment solutions.",
      techStack: ["React", "JavaScript", "HTML", "CSS3", "Node.js", "MongoDB", "TailwindCSS", "Bootstrap", "Express", "Firebase", "JWT", "Axios"],
      // liveLink: "https://online-restaurant.example.com",
      github: "https://github.com/yourname/online-restaurant",
      clientReview: {
        name: "mikedz1",
        description: "I struggled to find a reliable web developer until I found Ali. The final product was better than I imagined!",
        rating: 5,
        country: "Netherlands",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/bdb931f6c01a5fbd652f83ad39194162-1737455235273/4a79d056-0168-467d-9967-c088c1d9db17.jpeg"
      }
    },
    {
      projectName: "Car selling",
      imageLink: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330538/project6_haitji.png",
      fullPageImage: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330720/project62_eof4nt.png",
      description: "A car selling platform allowing users to list, browse, and purchase vehicles. Integrated payment system and real-time search filters.",
      techStack: ["React", "JavaScript", "HTML", "CSS3", "Node.js", "MongoDB", "TailwindCSS", "Bootstrap", "Express", "Firebase", "JWT", "Axios"],
      // liveLink: "https://car-selling.example.com",
      github: "https://github.com/yourname/car-selling",
      clientReview: {
        name: "atizzle7",
        description: "Ali transformed my outdated website into a modern, high-performing platform. Highly recommended!",
        rating: 5,
        country: "United States",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/6d1e2fb6a1497e39611ff77f52587c6b-1930972441737644521.762051/0A77E4FE-18E7-4CD6-A926-1F49C7BFA65F"
      }
    }, 
    {
      projectName: "E-Commerce Gadget Store",
      imageLink: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330517/headphone_sytpxc.png",
      fullPageImage: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330517/headphone2_aop8a4.png",
      description: "An e-commerce platform to sell gadgets online. Includes shopping cart, payment integration, product categories, and admin dashboard for inventory management.",
      techStack: ["React", "JavaScript", "HTML", "CSS3", "Node.js", "MongoDB", "TailwindCSS", "Bootstrap", "Express", "Firebase", "JWT", "Axios"],
      // liveLink: "https://ecommerce-gadgets.example.com",
      github: "https://github.com/yourname/ecommerce-gadgets",
      clientReview: {
        name: "nadster74",
        description: "Ali developed a flawless e-commerce website that is visually appealing and functionally excellent. Highly recommended!",
        rating: 5,
        country: "France",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1cec3f3b5d20540ddd6fa4aadadf30e0-1727697705673/762e575c-feed-4019-bea8-37c6bbcea053.jpg"
      }
    },
    {
      projectName: "Photography Portfolio",
      imageLink: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330751/camera_a0489c.png",
      fullPageImage: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330477/camera_2_ecv9dz.png",
      description: "A photography portfolio website for professional photographers. Showcases galleries, client testimonials, and contact forms with full responsiveness.",
      techStack: ["React", "JavaScript", "HTML", "CSS3", "Node.js", "MongoDB", "TailwindCSS", "Bootstrap", "Express", "Firebase", "JWT", "Axios"],
      // liveLink: "https://photography-portfolio.example.com",
      github: "https://github.com/yourname/photography-portfolio",
      clientReview: {
        name: "elad345",
        description: "Ali created a stunning photography website with smooth UI/UX and responsive design. Extremely professional and timely delivery!",
        rating: 5,
        country: "United States",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/566db1695f1a1c83dfb6df476aa5bf4e-10831521736636853.093014/6ADDE82B-8EB8-46FD-B5AD-6D3AD73A0B1A"
      }
    },
    {
      projectName: "Sports Club Management",
      imageLink: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330744/play_kginnl.png",
      fullPageImage: "https://res.cloudinary.com/dz28duolk/image/upload/v1740330723/play2_hx2kru.png",
      description: "A sports club management system to manage members, events, schedules, and payments. Includes dashboards for admin and coaches, fully responsive.",
      techStack: ["React", "JavaScript", "HTML", "CSS3", "Node.js", "MongoDB", "TailwindCSS", "Bootstrap", "Express", "Firebase", "JWT", "Axios"],
      // liveLink: "https://sports-club.example.com",
      github: "https://github.com/yourname/sports-club",
      clientReview: {
        name: "sharielehman",
        description: "Ali developed an excellent sports club management platform. Easy to use, very professional, and high-quality work!",
        rating: 5,
        country: "USA",
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/9318ed022429b1e0bf6f9321089cba5c-1657982287457/d6a8274f-5db8-442f-9e72-273bed94b83a.jpg"
      }
    }
  ];





  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease', once: false });
    AOS.refresh();
  }, []);

  const handleSlideChange = () => {
    const slides = swiperRef.current.swiper.slides;
    slides.forEach((slide) => {
      slide.style.filter = "blur(8px)";
      slide.style.transform = "scale(0.8)";
    });
    slides[swiperRef.current.swiper.activeIndex].style.filter = "blur(0px)";
    slides[swiperRef.current.swiper.activeIndex].style.transform = "scale(1)";
  };

  return (
    <div id="projects" className="relative">
      <section className="bg-gray-900 text-purple-600 pb-44">
        <div className="pb-32 pt-52 pl-10">
          <h2 data-aos="fade-up" className="text-5xl font-extrabold mb-6">
            <span className="text-purple-100">My</span> Projects
          </h2>
          <p data-aos="fade-up" className="text-lg mb-8 text-purple-100 max-w-xl">
            Showcasing creativity, innovation, and seamless execution in every project.
          </p>
        </div>


        <div data-aos="zoom-in-down">
          <div
            className="w-full"
            onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
            onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
          >
            <Swiper
              ref={swiperRef}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1.2}
              spaceBetween={10}
              touchRatio={1}
              resistanceRatio={0.85}
              breakpoints={{
                480: { slidesPerView: 1.3, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 20 },
              }}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              speed={700}
              onSlideChange={handleSlideChange}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="rounded-xl shadow-xl"
            >
              {portfolioImages.map((project, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center relative transition-all duration-500"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative w-full h-[500px]">
                    <img
                      src={project.imageLink}
                      alt={project.projectName}
                      className="rounded-lg object-cover shadow-2xl shadow-purple-800 w-full h-full"
                      loading="lazy"
                    />
                    {hoveredIndex === index && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg transition-opacity duration-500 z-10">
                        {/* <h3 className="text-2xl text-white font-bold mb-4">{project.projectName}</h3> */}
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg"
                        >
                          <FaEye className="text-xl" />
                          View
                        </button>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* POPUP MODAL */}
    {selectedProject && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white rounded-3xl w-full max-w-5xl h-[600px] shadow-2xl overflow-hidden flex relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute cursor-pointer top-4 right-4 text-gray-600 hover:text-gray-900 transition"
        >
          <FaTimes size={24} />
        </button>

        {/* Image (Left Half) */}
        <div className="w-1/2 h-full overflow-hidden relative">
          <img
            src={selectedProject.fullPageImage}
            alt={selectedProject.projectName}
            className="w-full h-auto min-h-full object-cover scroll-hover"
          />
        </div>

        {/* Content (Right Half) */}
        <div className="w-1/2 h-full p-6 flex flex-col gap-4 overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900">
            {selectedProject.projectName}
          </h2>

          {selectedProject.description && (
            <p className="text-gray-700">{selectedProject.description}</p>
          )}

          {/* Tech Stack */}
          {selectedProject.techStack && (
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4 mt-2">
            {selectedProject.liveLink && (
              <a
                href={selectedProject?.liveLink ? selectedProject.liveLink: ''}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold shadow hover:shadow-lg transition"
              >
                Live Demo
              </a>
            )}
          </div>

          {/* Client Review */}
          {selectedProject.clientReview && (
            <div className="bg-gray-50 p-4 rounded-xl shadow-inner mt-2">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={selectedProject.clientReview.image}
                  alt={selectedProject.clientReview.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-400"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {selectedProject.clientReview.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {selectedProject.clientReview.country}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "{selectedProject.clientReview.description}"
              </p>
              <div className="flex mt-1">
                {Array.from({ length: selectedProject.clientReview.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )}






    </div>
  );
};

export default Project;
