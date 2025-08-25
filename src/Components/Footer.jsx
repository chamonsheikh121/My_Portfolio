const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 text-center relative">
      <div className="max-w-7xl mx-auto px-4">
        <p className="mb-4 text-gray-400">
          &copy; {new Date().getFullYear()} Chamon Ali. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/chamonali"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chamonali/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:chamonali11@gmail.com"
            className="hover:text-purple-500 transition-colors"
          >
            Email
          </a>
        </div>
        <p className="text-sm text-gray-500">
          Crafted with ❤️ using React & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
