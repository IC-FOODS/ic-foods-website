
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-aggie-gray text-aggie-blue py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">IC-FOODS</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              International Center for Food Ontology Operability Data and Semantics.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-500">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/research" className="hover:text-aggie-gold">R&D</Link></li>
              <li><Link to="/publications" className="hover:text-aggie-gold">Publications</Link></li>
              <li><Link to="/partners" className="hover:text-aggie-gold">Partners</Link></li>
              <li><Link to="/about" className="hover:text-aggie-gold">About</Link></li>
              <li><Link to="/conferences" className="hover:text-aggie-gold">Conferences</Link></li>
            </ul>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-start text-sm text-gray-600 leading-relaxed">
              <MapPin size={18} className="mr-3 text-aggie-gold flex-shrink-0 mt-0.5" />
              <div>
                216 F Street, Suite 139<br />
                Davis, CA 95616<br />
                United States<br />
              </div>
            </div>
            <a
              href="mailto:info@ic-foods.org"
              className="inline-flex items-center text-sm text-gray-600 hover:text-aggie-gold transition-colors group"
            >
              <Mail size={18} className="mr-3 text-aggie-gold flex-shrink-0" />
              info@ic-foods.org
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-300 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} International Center for Food Ontology Operability Data and Semantics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
