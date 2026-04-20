import { Globe, MessageSquare, Share2, Mail, Phone, MapPin, ShieldCheck, Award, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text-primary text-white pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <div className="w-5 h-5 border-2 border-white rounded-sm relative">
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-2xl font-extrabold tracking-tight">MediCare</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              MediCare is your trusted healthcare partner, providing 100% genuine medicines, diagnostic tests, and health products across India.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageSquare, Share2, Mail].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {[
                { name: 'About Us', href: '#categories' },
                { name: 'Contact Us', href: '#auto-refill' },
                { name: 'Careers', href: '#' },
                { name: 'Health Articles', href: '#articles' },
                { name: 'Offers', href: '#categories' },
                { name: 'Feedback', href: '#' }
              ].map(item => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-primary transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-6">Categories</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {[
                { name: 'Medicine', href: '#medicine' },
                { name: 'Lab Tests', href: '#lab-tests' },
                { name: 'Healthcare Devices', href: '#medicine' },
                { name: 'Wellness', href: '#wellness' },
                { name: 'Ayurveda', href: '#categories' },
                { name: 'Personal Care', href: '#categories' }
              ].map(item => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-primary transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & App */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>1800-123-4567 (Toll Free)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>support@medicare.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-primary" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
            <div className="pt-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Download Our App</h5>
              <div className="flex gap-3">
                <div className="bg-slate-800 px-3 py-1.5 rounded flex items-center gap-2 cursor-pointer hover:bg-slate-700 transition-all">
                  <div className="w-5 h-5 bg-white rounded-full"></div>
                  <div className="text-[10px] leading-tight">Get it on <br /><span className="font-bold text-sm">Google Play</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Markers */}
        <div className="border-y border-slate-800 py-10 mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="font-bold text-sm">Genuine Meds</div>
              <div className="text-xs text-slate-500">100% Authentic products</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Award size={24} />
            </div>
            <div>
              <div className="font-bold text-sm">Quality Checked</div>
              <div className="text-xs text-slate-500">Rigorous testing standards</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <CreditCard size={24} />
            </div>
            <div>
              <div className="font-bold text-sm">Secure Payment</div>
              <div className="text-xs text-slate-500">256-bit SSL encryption</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="font-bold text-sm">Free Delivery</div>
              <div className="text-xs text-slate-500">On orders above ₹500</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2026 MediCare Online Pharmacy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
