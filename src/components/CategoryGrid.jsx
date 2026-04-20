import { Pill, TestTube, Stethoscope, Activity, Leaf, Baby, Smile } from 'lucide-react';

const categories = [
  { name: 'Medicines', icon: Pill, color: 'bg-blue-500', link: '#medicine' },
  { name: 'Lab Tests', icon: TestTube, color: 'bg-green-500', link: '#lab-tests' },
  { name: 'Devices', icon: Stethoscope, color: 'bg-purple-500', link: '#medicine' },
  { name: 'Wellness', icon: Activity, color: 'bg-orange-500', link: '#wellness' },
  { name: 'Ayurveda', icon: Leaf, color: 'bg-emerald-500', link: '#categories' },
  { name: 'Baby Care', icon: Baby, color: 'bg-pink-500', link: '#categories' },
  { name: 'Oral Care', icon: Smile, color: 'bg-yellow-500', link: '#categories' },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
      {categories.map((cat) => (
        <a
          key={cat.name}
          href={cat.link}
          className="group flex flex-col items-center gap-4 p-6 rounded-3xl bg-white border border-border-base transition-all duration-300 hover:border-primary hover:shadow-premium-hover hover:-translate-y-1"
        >
          <div className={`${cat.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-current/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
            <cat.icon size={32} />
          </div>
          <span className="text-sm font-bold text-text-primary group-hover:text-primary transition-colors">
            {cat.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default CategoryGrid;
