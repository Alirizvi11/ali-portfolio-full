
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface MobileNavProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const MobileNav = ({ activeSection, scrollToSection }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Experience', 'Resume', 'Projects', 'Skills', 'Services', 'Contact'];

  const handleNavClick = (item: string) => {
    scrollToSection(item.toLowerCase());
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="border-blue-400/50 text-blue-300 hover:bg-blue-400/10"
      >
        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div className="fixed right-0 top-0 h-full w-64 bg-slate-900/95 backdrop-blur-md border-l border-slate-700 p-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-bold text-white">Navigation</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <nav className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'bg-blue-500/20 text-blue-300 border-l-2 border-blue-400'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;