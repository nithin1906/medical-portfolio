import { Upload, ChevronRight, Star, Clock, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from '../context/LocationContext';

const Hero = () => {
  const { currentLocation } = useLocation();

  return (
    <section className="relative bg-canvas overflow-hidden pt-12 pb-20 px-8">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7 hero-content">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Zap size={14} fill="currentColor" /> Fastest Delivery in {currentLocation.name}
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-text-primary leading-[1.1] mb-6">
            Your Health, <br />
            <span className="text-primary">Delivered with Care.</span>
          </h1>
          <p className="text-lg text-text-body mb-8 max-w-xl leading-relaxed">
            Order genuine medicines, book lab tests at home, and consult with top doctors. Trusted by over 10 million families for reliable healthcare.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="btn-primary flex items-center gap-2 group">
              Order Medicines <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline flex items-center gap-2 group">
              Book Lab Test <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border-base">
            <div>
              <div className="flex items-center gap-1 text-primary mb-1">
                <Star size={16} fill="currentColor" />
                <span className="text-xl font-bold text-text-primary">4.8</span>
              </div>
              <p className="text-xs text-text-muted font-medium">Average Rating</p>
            </div>
            <div>
              <div className="text-xl font-bold text-text-primary mb-1">10M+</div>
              <p className="text-xs text-text-muted font-medium">Happy Customers</p>
            </div>
            <div>
              <div className="text-xl font-bold text-text-primary mb-1">2 Hours</div>
              <p className="text-xs text-text-muted font-medium">Express Delivery</p>
            </div>
          </div>
        </div>

        {/* Right Content - Prescription Card */}
        <div className="lg:col-span-5">
          <div className="prescription-card glass-panel p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <ShieldCheck className="text-accent" size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-text-primary mb-2">Order with Prescription</h3>
            <p className="text-sm text-text-body mb-8">Upload your prescription and we'll handle the rest.</p>
            
            <div className="border-2 border-dashed border-primary/20 rounded-2xl p-10 bg-primary/5 flex flex-col items-center justify-center gap-4 transition-all hover:border-primary/40 hover:bg-primary/10 cursor-pointer mb-6">
              <div className="w-16 h-16 rounded-full bg-white shadow-medical flex items-center justify-center text-primary">
                <Upload size={28} />
              </div>
              <div className="text-center">
                <p className="font-bold text-text-primary">Click to upload prescription</p>
                <p className="text-xs text-text-muted">PDF, JPG, or PNG (Max 5MB)</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-text-body">
                <Clock size={16} className="text-primary" />
                <span>Our pharmacist will call to confirm within 15 mins</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-body">
                <ShieldCheck size={16} className="text-primary" />
                <span>Prescription is checked by certified pharmacists</span>
              </div>
            </div>

            <button className="w-full mt-8 py-4 bg-primary text-white rounded-xl font-bold transition-all hover:bg-primary-dark shadow-lg shadow-primary/20">
              Continue to Upload
            </button>
          </div>
        </div>
      </div>

      {/* Announcement Ticker */}
      <div className="absolute bottom-0 left-0 w-full bg-accent text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="mx-8 font-bold text-xs uppercase tracking-widest">FLASH SALE: Flat 25% OFF on all Chronic Medicines! Use Code: HEALTH25</span>
          <span className="mx-8 font-bold text-xs uppercase tracking-widest">FREE Lab Test with any medicine order above ₹999</span>
          <span className="mx-8 font-bold text-xs uppercase tracking-widest">MediCare Care Plan: Get unlimited free deliveries & consultations at ₹499/year</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;
