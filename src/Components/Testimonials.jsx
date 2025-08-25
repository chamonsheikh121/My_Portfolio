import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
// import bgImage from './../../../assets/reviewbg.jpg'
import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS library

const reviews = [
  {
    name: "jackhurst21",
    description: "If you’re looking for a reliable web developer, I highly recommend Ali. He went above and beyond to bring my vision to life with professionalism and attention to detail. Thank you for your exceptional work!",
    rating: 5,
    country: 'USA',
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/73a67eb9d672b6b2af09e68be242c3b4-1650110331732/51d74721-d9aa-4bfc-80ed-7df6eab54fee.jpg",
  },
  {
    name: "jonathanncrotea",
    description: "Ali delivered exceptional work with top-notch professionalism, coding expertise, and keen attention to detail. His clear communication, deep understanding, and timely delivery made the experience fantastic 😊. Highly recommended for any web development project!",
    rating: 5,
    country: 'USA',
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/30e62db68b16fa4c8a2916361730e460-1668361105806/951eedd0-c37c-419f-82f6-ef02262fac03.jpg",
  },
  {
    name: "averydm2015",
    description: "I was amazed by Ali's professionalism and efficiency. He not only built a stunning website but also ensured it was optimized for performance and SEO. His communication was clear, and he delivered everything on time!",
    rating: 5,
    country: 'USA',
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/236ed81d0046ecccf37a6c8f07701da5-1645501439848/b01d947b-5fb2-4aaf-ad36-eea0c038ddd3.jpg",
  },
  {
    name: "tfreed253",
    description: "Ali is truly an expert in web development! He took the time to understand my needs and created a website that looks great and functions flawlessly. The project was completed ahead of schedule, and the results exceeded my expectations.",
    rating: 5,
    country: 'USA',
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/a4e00e6ac56dff39a8521bff54bebdd1-1406820701671773196.357586/B4CE595B-987D-48F7-82FE-3F8DA12107B9",
  },
  {
    name: "mikedz1",
    description: "I struggled to find a reliable web developer until I found Ali. His expertise, dedication, and problem-solving skills are top-notch. The final product was better than I imagined, and his support throughout the process was fantastic!",
    rating: 5,
    country: 'Netherlands',
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/bdb931f6c01a5fbd652f83ad39194162-1737455235273/4a79d056-0168-467d-9967-c088c1d9db17.jpeg",
  },
  {
    name: "atizzle7",
    description: "Ali is a game-changer! He transformed my outdated website into a modern, high-performing platform that attracts more visitors and conversions. His design skills, responsiveness, and professionalism set him apart from the rest.",
    rating: 5,
    country: 'USA',
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/6d1e2fb6a1497e39611ff77f52587c6b-1930972441737644521.762051/0A77E4FE-18E7-4CD6-A926-1F49C7BFA65F",
  },
  {
    name: "achsial",
    description: "If you're looking for a web developer that delivers high-quality results on time, look no further than Ali. He went above and beyond to ensure every detail was perfect. I’m beyond satisfied with his service.",
    rating: 5,
    country: 'Austria',
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1a57aea77a99a9b6c50c32c2e8e381d3-1553341450844/41f18a91-78e7-4c0d-ac2d-7219b8d4af80.jpg",
  },
  {
    name: "nadster74",
    description: "From start to finish, Ali was incredible to work with. He understood my requirements, provided expert recommendations, and delivered a website that not only looks amazing but also functions seamlessly. I highly recommend him!",
    rating: 5,
    country: 'France',
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1cec3f3b5d20540ddd6fa4aadadf30e0-1727697705673/762e575c-feed-4019-bea8-37c6bbcea053.jpg",
  },
  {
    name: "elad345",
    description: "Working with Ali was a fantastic experience! He built a fully responsive and visually stunning website for my business. His professionalism and dedication made the entire process smooth and enjoyable.",
    rating: 5,
    country: 'USA',
    image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/566db1695f1a1c83dfb6df476aa5bf4e-10831521736636853.093014/6ADDE82B-8EB8-46FD-B5AD-6D3AD73A0B1A",
  }
];

const Testimonial = () => {


  useEffect(() => {

    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: false,
    });


    AOS.refresh();

  }, []);


  return (
    <div className="bg-gray-900 py-52">
      <div className="pb-32 pl-10">
  <h2 data-aos="fade-up" className="text-5xl text-purple-700 font-extrabold mb-6">
    <span className="text-purple-100">Client</span> Testimonials
  </h2>
  <p data-aos="fade-up" className="text-lg mb-8 text-purple-100">
    Hear directly from clients who trusted Ali for their projects. Their experiences reflect quality, dedication, and results.
  </p>
</div>

      <div data-aos="zoom-in" className="max-w-7xl mx-auto">
        <Swiper
          spaceBetween={0}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination]}
          className=""  // 🔥 force swiper container transparent
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="relative bg-gradient-to-tr from-purple-800/70 via-gray-900/70 to-black/70 backdrop-blur-xl border border-purple-500/30 p-6 rounded-2xl shadow-lg shadow-purple-900/40 m-4 text-center hover:h- h-[420px] flex flex-col justify-between gap-3 transform transition-all  hover:shadow-purple-600/50">

                {/* Profile image */}
                <div className="flex justify-center -mt-10">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-24 h-24 rounded-full border-4 border-purple-400 shadow-lg shadow-purple-600/50 object-cover"
                  />
                </div>

                {/* Quote */}
                <div className="px-2">
                  <p className="text-base text-gray-200 italic leading-relaxed flex items-start justify-center">
                    <FaQuoteLeft  className="mr-2 text-purple-400 text-lg" />
                    {review.description}
                  </p>
                </div>

                {/* Name + Country */}
                <div>
                  <h4 className="mt-2 text-xl font-bold text-white tracking-wide">{review.name}</h4>
                  <p className="text-purple-300 font-medium">{review?.country}</p>
                </div>

                {/* Rating */}
                <div className="mt-2 flex justify-center space-x-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className={`text-2xl drop-shadow-md ${index < review.rating ? "text-yellow-400" : "text-gray-500"
                        }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default Testimonial;
