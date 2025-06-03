
import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Company info */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <span className="font-medium">CNPJ: 12.345.678/0001-99</span>
            <span className="hidden md:block text-gray-400">|</span>
            <span className="text-gray-300">Powered by Lanoa Beauty Tech</span>
          </div>
          
          {/* Right side - Social media */}
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">Siga-nos:</span>
            <a 
              href="https://instagram.com/lanoa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors text-sm"
            >
              <Instagram size={16} />
              <span>Instagram</span>
            </a>
            <a 
              href="https://youtube.com/lanoa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors text-sm"
            >
              <Youtube size={16} />
              <span>YouTube</span>
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Lanoa Beauty Tech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
