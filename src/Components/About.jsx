import profile from "../assets/WhatsApp_Image_2025-02-11_at_16.27.00_7723ff6a__1_-removebg-preview.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900  px-6 md:px-20 py-20 text-white"
    >
      <div className="pb-32  pl-10">
        <h2 data-aos="fade-up" className="text-5xl text-purple-700 font-extrabold mb-6">
          <span className="text-purple-100">About</span> Me
        </h2>
        <p data-aos="fade-up" className="text-lg mb-8 text-purple-100">
          Explore some of my best work, crafted with precision and creativity.
        </p>
      </div>

      <div className=" flex flex-col md:flex-row items-center justify-center ">


        {/* Profile Image */}
        <div

         data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"

          className="relative mb-8 md:mb-0 md:mr-12">
          <div className="w-64 bg-gradient-to-br from-blue-600 via-blue-100 to-blue-600 h-64  overflow-hidden   shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src={profile} // replace with your image
              alt="Chamon Ali"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0  bg-blue-500 opacity-10 blur-2xl"></div>
        </div>

        {/* Text Content */}
        <div

          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"

          className="max-w-2xl text-center md:text-left">

          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            I have been in the web development field for about <span className="text-white font-semibold">4 years</span>.
            I specialize in the <span className="text-blue-400 font-semibold">MERN stack</span> and
            am currently learning advanced web technologies to take my skills to the next level.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            I also gained valuable industry experience working with a company on
            <span className="text-white font-semibold"> WordPress development</span>.
            Alongside that, I have been freelancing on platforms like
            <span className="text-white font-semibold"> Fiverr</span>, delivering high-quality projects to clients worldwide.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            My passion lies in <span className="text-blue-400 font-semibold">learning new skills</span>
            and applying them to build modern, responsive, and interactive web applications.
          </p>
        </div>
      </div>
    </section>


  );
};

export default About;
