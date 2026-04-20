import Hero from '../components/Hero'
import CategoryGrid from '../components/CategoryGrid'
import ProductCarousel from '../components/ProductCarousel'
import LabTestsSection from '../components/LabTestsSection'
import AutoRefill from '../components/AutoRefill'
import TrustBanner from '../components/TrustBanner'
import OffersBar from '../components/OffersBar'
import HealthArticles from '../components/HealthArticles'
import { products } from '../data/products'

const Home = () => (
  <div className="min-h-screen">
    <Hero />
    <div className="max-w-7xl mx-auto px-8">
      {/* Offers Bar */}
      <OffersBar />

      {/* Category Grid */}
      <section id="categories" className="py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-2">Shop by Category</h2>
            <p className="text-text-muted font-medium">Find everything you need for your healthcare</p>
          </div>
          <button className="text-primary font-bold hover:underline flex items-center gap-1">
            View All Categories
          </button>
        </div>
        <CategoryGrid />
      </section>

      {/* Trending Products */}
      <div id="medicine">
        <ProductCarousel 
          title="Best Sellers" 
          subtitle="Most ordered healthcare products this week"
          products={products} 
        />
      </div>

      {/* Trust Banner */}
      <TrustBanner />

      {/* Lab Tests Section */}
      <section id="lab-tests" className="py-20">
        <LabTestsSection />
      </section>

      {/* Wellness Products */}
      <div id="wellness">
        <ProductCarousel 
          title="Wellness Essentials" 
          subtitle="Boost your immunity and overall health"
          products={[...products].reverse()} 
        />
      </div>

      {/* Auto Refill Promo */}
      <div id="auto-refill">
        <AutoRefill />
      </div>

      {/* Health Articles */}
      <div id="articles">
        <HealthArticles />
      </div>
    </div>
  </div>
)

export default Home
