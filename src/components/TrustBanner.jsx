import { useEffect, useState, useRef } from 'react';
import { ShieldCheck, Truck, Users, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TrustBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stats = document.querySelectorAll('.stat-number');
      stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        gsap.to(stat, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: stat,
            start: 'top 90%',
          }
        });
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  const trustStats = [
    { label: 'Orders Delivered', target: 10, suffix: 'M+', icon: Truck },
    { label: 'Registered Users', target: 5, suffix: 'M+', icon: Users },
    { label: 'Pin Codes Served', target: 22, suffix: 'K+', icon: ShieldCheck },
    { label: 'Cities Covered', target: 500, suffix: '+', icon: Award },
  ];

  return (
    <div className="py-20 bg-text-primary text-white rounded-[2.5rem] px-8" ref={bannerRef}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {trustStats.map((stat, i) => (
          <div key={stat.label} className="text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-primary mx-auto mb-6">
              <stat.icon size={32} />
            </div>
            <div className="text-4xl lg:text-5xl font-extrabold flex items-center justify-center">
              <span className="stat-number" data-target={stat.target}>0</span>
              {stat.suffix}
            </div>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBanner;
