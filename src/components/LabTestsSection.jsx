import { ChevronRight, TestTube, ShieldCheck, Check, ShoppingCart } from 'lucide-react';
import { labTests } from '../data/labTests';
import { useCart } from '../context/CartContext';

const LabTestsSection = () => {
  const { addToCart } = useCart();

  return (
    <div className="py-20 bg-primary-light/30 rounded-3xl px-8 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 pointer-events-none">
        <TestTube size={200} />
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
        <div className="lg:w-1/3">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck size={14} /> NABL Certified Labs
          </div>
          <h2 className="text-4xl font-bold text-text-primary mb-6">Book Lab Tests at Home</h2>
          <p className="text-text-body mb-8 leading-relaxed">
            Safe and hygienic sample collection from your home. Get digital reports within 24 hours.
          </p>
          
          <div className="space-y-4 mb-10">
            {[
              'Sample collection in 60 mins',
              'Report verified by doctors',
              'Up to 70% savings on packages'
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-text-primary">
                <div className="w-5 h-5 rounded-full bg-accent text-white flex items-center justify-center">
                  <Check size={12} />
                </div>
                {feature}
              </div>
            ))}
          </div>

          <button className="btn-primary w-full md:w-auto">View All Tests</button>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {labTests.slice(0, 4).map((test) => (
            <div
              key={test.id}
              className="bg-white p-6 rounded-2xl border border-border-base transition-all hover:border-primary hover:shadow-premium group cursor-pointer flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-canvas flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <TestTube size={24} />
                </div>
                {test.isPopular && (
                  <span className="bg-accent/10 text-accent text-[10px] font-bold px-2 py-1 rounded-full">POPULAR</span>
                )}
              </div>
              <h3 className="font-bold text-text-primary mb-1">{test.name}</h3>
              <p className="text-xs text-text-muted font-medium mb-6">Includes {test.parameters} parameters</p>
              
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <div className="text-lg font-extrabold text-text-primary">₹{test.sellingPrice}</div>
                  <div className="text-xs text-text-muted line-through">MRP ₹{test.mrp}</div>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(test);
                  }}
                  className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center text-text-muted group-hover:bg-primary group-hover:text-white transition-all shadow-sm"
                >
                  <ShoppingCart size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabTestsSection;
