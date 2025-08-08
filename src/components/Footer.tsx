
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center sm:items-start">
          <span className="font-bold text-lg">AIA Parungao</span>
          <span className="text-sm mt-1">Contact: 0923 346 2017</span>
          <span className="text-xs mt-1">&copy; {new Date().getFullYear()} Parungao. All rights reserved.</span>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-2">
          <div className="flex gap-4 mb-2">
           
            <a href="https://www.facebook.com/lilibeth.parungao.98" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              Facebook
            </a>
          </div>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
