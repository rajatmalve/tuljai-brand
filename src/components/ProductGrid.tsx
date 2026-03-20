import { useState } from 'react';
import { motion } from 'framer-motion';

import productPapad from '@/assets/product-papad.jpg';
import productPickle from '@/assets/product-pickle.jpg';
import productMasala from '@/assets/product-masala.jpg';
import productGoda from '@/assets/product-goda.jpg';
import productHaldi from '@/assets/product-haldi.jpg';
import productMixedMasala from '@/assets/product-masala.jpg';

// 💡 PRO TIP: Buyer ko ye number change karna aasan hoga!
const WHATSAPP_NUMBER = '919999999999';

interface Product {
  name: string;
  tagline: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { name: 'Urad Papad', tagline: 'Crisp Tradition', price: '₹120', image: productPapad },
  { name: 'Mango Pickle', tagline: 'Sun-Ripened Joy', price: '₹180', image: productPickle },
  { name: 'Red Chilli Masala', tagline: 'Fiery Essence', price: '₹150', image: productMasala },
  { name: 'Goda Masala', tagline: 'Sweetly Spiced', price: '₹200', image: productGoda },
  { name: 'Haldi Powder', tagline: 'Golden Purity', price: '₹90', image: productHaldi },
  { name: 'Kitchen King Masala', tagline: 'Everyday Magic', price: '₹160', image: productMixedMasala },
];

// 🚀 Custom WhatsApp Icon Component
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const whatsappMsg = encodeURIComponent(`Hi, I'd like to order ${product.name} (${product.price}).`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group rounded-2xl bg-background p-1.5 shadow-card transition-shadow hover:shadow-elevated"
    >
      <div className="aspect-square overflow-hidden rounded-xl bg-surface">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-primary">
          {product.tagline}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">{product.price}</span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white transition-all hover:scale-105 active:scale-95"
          >
            {/* 💡 Ye lijiye, asli WhatsApp icon yahan aa gaya! */}
            <WhatsAppIcon size={14} />
            Order
          </a>
        </div>
      </div>
    </motion.div>
  );
};

type ProductGridProps = {
  showFilters?: boolean;
  showViewAllButton?: boolean;
};

const ProductGrid = ({ showFilters = true, showViewAllButton = false }: ProductGridProps) => {
  const categories = ['All', 'Papad', 'Pickle', 'Masala', 'Spice'];
  const [active, setActive] = useState('All');

  const filteredProducts = products.filter((product) => {
    if (!showFilters) return true;
    if (active === 'All') return true;
    if (active === 'Papad') return product.name.toLowerCase().includes('papad');
    if (active === 'Pickle') return product.name.toLowerCase().includes('pickle');
    if (active === 'Masala') return product.name.toLowerCase().includes('masala');
    if (active === 'Spice') return product.name.toLowerCase().includes('masala') || product.name.toLowerCase().includes('haldi');
    return true;
  });

  return (
    <section id="products" className="py-4">
      <div className="mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Products</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground lg:text-4xl">Handcrafted with Love</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Explore by category, and pick the best of Maharashtrian traditional flavors.
          </p>
        </motion.div>

        {showFilters && (
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-surface text-foreground hover:bg-surface/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, i) => <ProductCard key={product.name} product={product} index={i} />)
          ) : (
            <p className="col-span-full text-center text-muted-foreground">No products found for this category.</p>
          )}
        </div>

        {showViewAllButton && (
          <div className="mt-10 flex justify-center">
            <a
              href="/products"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 hover:shadow-md active:scale-95"
            >
              View All Products
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;