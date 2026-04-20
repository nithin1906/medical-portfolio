import { RefreshCw, Calendar, Sparkles, ChevronRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const AutoRefill = () => {
  return (
    <div className="py-20">
      <div className="bg-text-primary rounded-[2.5rem] overflow-hidden relative group">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-all duration-500"></div>

        <div className="flex flex-col lg:flex-row p-12 lg:p-20 relative z-10 gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              <Sparkles size={14} fill="currentColor" /> Never Run Out
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              MediCare <span className="text-accent">Auto-Refill</span> Subscription
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              Set up recurring orders for your chronic medications and save an extra 15% on every refill. Free delivery on all subscription orders.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Flexible Schedule', desc: 'Choose weekly, monthly or custom dates.', icon: Calendar },
                { title: 'Zero Hassle', desc: 'Automatic payment & doorstep delivery.', icon: RefreshCw }
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-accent mb-4"><item.icon size={24} /></div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="bg-accent text-white px-10 py-4 rounded-xl font-bold hover:bg-accent-dark transition-all flex items-center gap-3 group">
              Start Subscription <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-3xl p-8 shadow-2xl relative">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-text-primary">Subscription Preview</h3>
                <div className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full uppercase">15% Discount Applied</div>
              </div>

              <div className="space-y-6 mb-10">
                {[
                  { name: 'Metformin 500mg', qty: '60 Tablets', price: '₹450', next: 'May 05' },
                  { name: 'Telmisartan 40mg', qty: '30 Tablets', price: '₹220', next: 'May 05' }
                ].map((med) => (
                  <div key={med.name} className="flex items-center justify-between p-4 rounded-2xl bg-canvas border border-border-base">
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-xl bg-white border border-border-base flex items-center justify-center text-primary font-bold">
                        M
                      </div>
                      <div>
                        <div className="text-sm font-bold text-text-primary">{med.name}</div>
                        <div className="text-xs text-text-muted">{med.qty} • Next refill {med.next}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-primary">{med.price}</div>
                      <div className="text-[10px] text-accent font-bold">SAVED ₹68</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-dashed border-border-base pt-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Refill Frequency</span>
                  <span className="font-bold text-text-primary">Every 30 Days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Delivery Address</span>
                  <span className="font-bold text-text-primary">Home (Mumbai)</span>
                </div>
                <div className="flex justify-between text-lg pt-2">
                  <span className="font-bold text-text-primary">Total Payable</span>
                  <span className="font-extrabold text-primary">₹670</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 bg-accent/10 p-3 rounded-xl">
                <Check className="text-accent shrink-0" size={16} />
                <p className="text-[10px] text-accent font-bold uppercase tracking-wider">
                  You can pause or cancel anytime with one click
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoRefill;
