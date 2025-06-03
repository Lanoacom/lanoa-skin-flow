
import { Instagram, Youtube } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          {/* Left side - Company info */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="font-medium">CNPJ: 12.345.678/0001-99</span>
            <span className="hidden md:block">|</span>
            <span>Powered by Lanoa Beauty Tech</span>
          </div>
          
          {/* Right side - Social media */}
          <div className="flex items-center gap-4">
            <span className="text-gray-500">Siga-nos:</span>
            <a 
              href="https://instagram.com/lanoa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
            >
              <Instagram size={16} />
              <span>Instagram</span>
            </a>
            <a 
              href="https://youtube.com/lanoa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
            >
              <Youtube size={16} />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
