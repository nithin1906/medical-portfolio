import { PercentCircle as Percent, ChevronRight } from 'lucide-react';

const OffersBar = () => {
  const offers = [
    { title: 'FLAT 25% OFF', desc: 'On all Chronic Medicine orders', code: 'HEALTH25', color: 'bg-blue-600' },
    { title: 'FREE LAB TEST', desc: 'On orders above ₹999', code: 'LABFREE', color: 'bg-emerald-600' },
    { title: '₹100 CASHBACK', desc: 'On your first order today', code: 'NEW100', color: 'bg-purple-600' },
  ];

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div key={offer.code} className={`${offer.color} rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer`}>
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:scale-110 transition-transform duration-500">
              <Percent size={80} />
            </div>
            <div className="relative z-10">
              <h4 className="text-2xl font-black mb-1">{offer.title}</h4>
              <p className="text-white/80 text-sm font-medium mb-6">{offer.desc}</p>
              <div className="flex items-center justify-between">
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl font-mono font-bold text-sm border border-white/30">
                  {offer.code}
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white text-white group-hover:text-primary transition-all">
                  <ChevronRight size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersBar;
