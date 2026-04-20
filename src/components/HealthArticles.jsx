import { Clock, ChevronRight, X, User, Calendar, Share2, Bookmark } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const articles = [
  {
    id: 1,
    title: "10 Immunity Boosting Foods to Include in Your Diet",
    category: "Nutrition",
    time: "5 min read",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800",
    author: "Dr. Sarah Johnson",
    date: "15 Apr 2026",
    content: `
      <p>Building a strong immune system is more important than ever. While no single food can magically prevent illness, a well-balanced diet rich in specific nutrients can help your body's natural defenses perform at their best.</p>
      <h3>1. Citrus Fruits</h3>
      <p>Most people turn straight to vitamin C after they've caught a cold. That's because it helps build up your immune system. Vitamin C is thought to increase the production of white blood cells, which are key to fighting infections.</p>
      <h3>2. Red Bell Peppers</h3>
      <p>If you think citrus fruits have the most vitamin C of any fruit or vegetable, think again. Ounce for ounce, red bell peppers contain almost 3 times as much vitamin C as a Florida orange. They’re also a rich source of beta carotene.</p>
      <h3>3. Broccoli</h3>
      <p>Broccoli is supercharged with vitamins and minerals. Packed with vitamins A, C, and E, as well as fiber and many other antioxidants, broccoli is one of the healthiest vegetables you can put on your plate.</p>
      <h3>4. Garlic</h3>
      <p>Garlic is found in almost every cuisine in the world. It adds a little zing to food and it’s a must-have for your health. Early civilizations recognized its value in fighting infections.</p>
    `
  },
  {
    id: 2,
    title: "Managing Hypertension: A Guide to Healthy Living",
    category: "Lifestyle",
    time: "8 min read",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
    author: "Dr. Michael Chen",
    date: "12 Apr 2026",
    content: `
      <p>Hypertension, or high blood pressure, is often called the "silent killer" because it typically has no symptoms but can lead to serious health problems like heart disease and stroke.</p>
      <h3>Understand Your Numbers</h3>
      <p>The first step in managing hypertension is knowing your blood pressure readings. A normal reading is typically around 120/80 mmHg. If your numbers are consistently higher, it's time to take action.</p>
      <h3>Reduce Sodium Intake</h3>
      <p>Excess sodium causes the body to retain fluid, which increases blood pressure. Aim for less than 2,300 milligrams a day, or ideally, 1,500 mg for most adults.</p>
      <h3>Regular Exercise</h3>
      <p>Physical activity helps your heart use oxygen more efficiently, so it doesn't have to work as hard to pump blood. Aim for at least 150 minutes of moderate-intensity aerobic activity per week.</p>
    `
  },
  {
    id: 3,
    title: "Why Regular Full Body Checkups are Essential",
    category: "Checkups",
    time: "6 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    author: "Dr. Emily Williams",
    date: "10 Apr 2026",
    content: `
      <p>In the hustle and bustle of modern life, we often neglect our most valuable asset—our health. Regular full body checkups are not just for when you feel sick; they are a vital part of preventive healthcare.</p>
      <h3>Early Detection Saves Lives</h3>
      <p>Many serious conditions, including cancer, diabetes, and heart disease, can be treated more effectively when caught in their early stages. A routine checkup can identify risk factors before they become problems.</p>
      <h3>Monitor Your Vital Stats</h3>
      <p>Regular screenings help track changes in your cholesterol, blood sugar, and blood pressure over time, allowing for timely lifestyle or medical adjustments.</p>
      <h3>Peace of Mind</h3>
      <p>There's an incredible mental health benefit to knowing that you are taking proactive steps to manage your health. It reduces anxiety and helps you feel more in control of your well-being.</p>
    `
  }
];

const HealthArticles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="py-20">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">Health Articles</h2>
          <p className="text-text-muted font-medium">Expert advice to help you live a healthier life</p>
        </div>
        <button className="text-primary font-bold hover:underline flex items-center gap-1">
          View All Articles
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div 
            key={article.id} 
            className="group cursor-pointer"
            onClick={() => setSelectedArticle(article)}
          >
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 shadow-lg border border-border-base">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                {article.category}
              </div>
            </div>
            <div className="space-y-3 px-2">
              <div className="flex items-center gap-2 text-xs text-text-muted font-bold">
                <Clock size={14} /> {article.time}
              </div>
              <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors leading-tight">
                {article.title}
              </h3>
              <div className="flex items-center gap-1 text-primary font-bold text-sm">
                Read Article <ChevronRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-text-primary/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="absolute top-6 right-6 z-10 flex gap-2">
                <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-text-muted hover:text-primary transition-colors shadow-sm">
                  <Share2 size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-text-muted hover:text-primary transition-colors shadow-sm">
                  <Bookmark size={18} />
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-text-muted hover:text-primary transition-colors shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="overflow-y-auto">
                <div className="relative h-64 md:h-96">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                      {selectedArticle.category}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                      {selectedArticle.title}
                    </h2>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-border-base">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-canvas flex items-center justify-center text-primary">
                        <User size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-text-primary">{selectedArticle.author}</div>
                        <div className="text-[10px] text-text-muted font-bold uppercase">Certified Expert</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-muted font-medium">
                      <Calendar size={16} /> {selectedArticle.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-muted font-medium">
                      <Clock size={16} /> {selectedArticle.time}
                    </div>
                  </div>

                  {/* 
                    SECURE: Content is currently static and trusted. 
                    If this becomes dynamic, integrate DOMPurify for sanitization.
                  */}
                  <div 
                    className="prose prose-slate max-w-none prose-headings:text-text-primary prose-headings:font-bold prose-p:text-text-body prose-p:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                  />
                  
                  <div className="mt-12 p-8 bg-canvas rounded-3xl border border-border-base text-center">
                    <h4 className="text-xl font-bold text-text-primary mb-2">Was this article helpful?</h4>
                    <p className="text-sm text-text-muted mb-6">Your feedback helps us provide better healthcare information.</p>
                    <div className="flex justify-center gap-4">
                      <button className="btn-outline px-8">Yes, Helpful</button>
                      <button className="btn-outline px-8 border-text-muted text-text-muted hover:bg-canvas">No</button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HealthArticles;
