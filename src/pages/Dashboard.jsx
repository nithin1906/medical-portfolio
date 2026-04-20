import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User, Package, Calendar, Award, LogOut,
  ChevronRight, Clock, MapPin, CheckCircle,
  TrendingUp, CreditCard, Bell
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'refills', label: 'Refill Schedule', icon: Calendar },
    { id: 'rewards', label: 'MediCare Rewards', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-canvas pb-20">
      <div className="max-w-7xl mx-auto px-8 pt-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-3xl p-8 border border-border-base shadow-premium sticky top-32">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                  JD
                </div>
                <div>
                  <h3 className="font-bold text-text-primary">Sample User</h3>
                  <p className="text-xs text-text-muted">Platinum Member</p>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === tab.id
                        ? 'bg-primary text-white shadow-lg shadow-primary/20'
                        : 'text-text-muted hover:bg-canvas hover:text-text-primary'
                      }`}
                  >
                    <tab.icon size={18} />
                    {tab.label}
                  </button>
                ))}
                <div className="pt-8 mt-8 border-t border-border-base">
                  <button
                    onClick={() => navigate('/')}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-danger hover:bg-danger/5 transition-all"
                  >
                    <LogOut size={18} />
                    Sign Out
                  </button>
                </div>
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <main className="lg:w-3/4">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-3xl border border-border-base shadow-sm">
                      <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                        <Package size={24} />
                      </div>
                      <div className="text-2xl font-bold text-text-primary">12</div>
                      <div className="text-xs font-bold text-text-muted uppercase tracking-wider">Total Orders</div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-border-base shadow-sm">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                        <TrendingUp size={24} />
                      </div>
                      <div className="text-2xl font-bold text-text-primary">2,450</div>
                      <div className="text-xs font-bold text-text-muted uppercase tracking-wider">Reward Points</div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-border-base shadow-sm">
                      <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                        <Calendar size={24} />
                      </div>
                      <div className="text-2xl font-bold text-text-primary">May 05</div>
                      <div className="text-xs font-bold text-text-muted uppercase tracking-wider">Next Refill</div>
                    </div>
                  </div>

                  {/* Active Order Tracker */}
                  <div className="bg-white rounded-3xl p-8 border border-border-base shadow-premium">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-xl font-bold text-text-primary">Active Order Tracking</h3>
                      <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase">Order #MC-8291</span>
                    </div>

                    <div className="relative">
                      {/* Tracking Line */}
                      <div className="absolute top-1/2 left-0 w-full h-1 bg-canvas -translate-y-1/2"></div>
                      <div className="absolute top-1/2 left-0 w-3/4 h-1 bg-primary -translate-y-1/2"></div>

                      <div className="relative flex justify-between">
                        {[
                          { label: 'Confirmed', status: 'done' },
                          { label: 'Packed', status: 'done' },
                          { label: 'In Transit', status: 'active' },
                          { label: 'Delivered', status: 'pending' }
                        ].map((step, i) => (
                          <div key={step.label} className="flex flex-col items-center gap-4 bg-white px-2">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 ${step.status === 'done' ? 'bg-primary border-primary text-white' :
                                step.status === 'active' ? 'bg-white border-primary text-primary' :
                                  'bg-white border-canvas text-text-muted'
                              }`}>
                              {step.status === 'done' ? <CheckCircle size={18} /> : i + 1}
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${step.status === 'pending' ? 'text-text-muted' : 'text-text-primary'
                              }`}>
                              {step.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-12 p-6 bg-canvas rounded-2xl flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                          <Clock size={24} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-text-primary">Expected Delivery</div>
                          <div className="text-xs text-text-muted">Today, by 6:00 PM</div>
                        </div>
                      </div>
                      <button className="text-primary font-bold text-sm hover:underline">Track on Map</button>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'orders' && (
                <motion.div
                  key="orders"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-3xl border border-border-base shadow-premium overflow-hidden"
                >
                  <div className="p-8 border-b border-border-base flex justify-between items-center">
                    <h3 className="text-xl font-bold text-text-primary">Order History</h3>
                    <div className="flex gap-2">
                      <select className="bg-canvas border border-border-base rounded-lg px-4 py-2 text-sm font-bold text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                        <option>Last 6 Months</option>
                        <option>2025</option>
                        <option>2024</option>
                      </select>
                    </div>
                  </div>
                  <div className="divide-y divide-border-base">
                    {[
                      { id: 'MC-8102', date: '12 Apr, 2026', items: '3 Items', total: '₹1,240', status: 'Delivered' },
                      { id: 'MC-7984', date: '28 Mar, 2026', items: '1 Item', total: '₹450', status: 'Delivered' },
                      { id: 'MC-7562', date: '05 Mar, 2026', items: '5 Items', total: '₹3,100', status: 'Returned' }
                    ].map((order) => (
                      <div key={order.id} className="p-6 hover:bg-canvas transition-colors flex items-center justify-between">
                        <div className="flex gap-6 items-center">
                          <div className="w-12 h-12 bg-canvas rounded-xl flex items-center justify-center text-text-muted">
                            <Package size={24} />
                          </div>
                          <div>
                            <div className="font-bold text-text-primary">{order.id}</div>
                            <div className="text-xs text-text-muted">{order.date} • {order.items}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-12">
                          <div className="text-right">
                            <div className="font-bold text-text-primary">{order.total}</div>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${order.status === 'Delivered' ? 'text-accent' : 'text-danger'
                              }`}>
                              {order.status}
                            </span>
                          </div>
                          <ChevronRight className="text-text-muted" size={20} />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
              {activeTab === 'refills' && (
                <motion.div
                  key="refills"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-3xl border border-border-base shadow-premium p-8"
                >
                  <h3 className="text-xl font-bold text-text-primary mb-8">Refill Schedule</h3>
                  <div className="space-y-6">
                    {[
                      { name: 'Metformin 500mg', date: '05 May, 2026', status: 'Upcoming' },
                      { name: 'Telmisartan 40mg', date: '05 May, 2026', status: 'Upcoming' },
                      { name: 'Vitamin C 500mg', date: '12 Jun, 2026', status: 'Scheduled' }
                    ].map((refill) => (
                      <div key={refill.name} className="flex items-center justify-between p-6 rounded-2xl bg-canvas border border-border-base">
                        <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary font-bold">
                            <Calendar size={24} />
                          </div>
                          <div>
                            <div className="font-bold text-text-primary">{refill.name}</div>
                            <div className="text-xs text-text-muted">Next Refill: {refill.date}</div>
                          </div>
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${refill.status === 'Upcoming' ? 'bg-primary/10 text-primary' : 'bg-canvas-alt text-text-muted'
                          }`}>
                          {refill.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'rewards' && (
                <motion.div
                  key="rewards"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-3xl border border-border-base shadow-premium p-8"
                >
                  <div className="bg-primary rounded-2xl p-8 text-white mb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-20"><Award size={120} /></div>
                    <div className="relative z-10">
                      <h4 className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">Total Balance</h4>
                      <div className="text-4xl font-extrabold mb-4">2,450 Points</div>
                      <p className="text-primary-light text-sm">Equivalent to ₹245. Redeem on your next order!</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-6">Recent Earnings</h3>
                  <div className="space-y-4">
                    {[
                      { reason: 'Order #MC-8291', points: '+120', date: 'Today' },
                      { reason: 'Referral Bonus', points: '+500', date: '15 Apr' },
                      { reason: 'Health Quiz', points: '+50', date: '10 Apr' }
                    ].map((item) => (
                      <div key={item.reason} className="flex items-center justify-between py-4 border-b border-border-base last:border-0">
                        <div>
                          <div className="font-bold text-text-primary text-sm">{item.reason}</div>
                          <div className="text-[10px] text-text-muted font-bold uppercase">{item.date}</div>
                        </div>
                        <div className="text-accent font-extrabold">{item.points}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
