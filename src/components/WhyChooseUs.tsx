import { Sun, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Sun,
    title: 'Sun-Dried Ingredients',
    description: 'Every spice is sun-dried naturally to preserve its aroma, color, and nutritional value — the way it has been done for generations.',
  },
  {
    icon: ShieldCheck,
    title: 'Small Batch Production',
    description: 'We produce in small, carefully controlled batches ensuring freshness and consistent quality in every single pack.',
  },
  {
    icon: Users,
    title: 'Women-Led Craft',
    description: 'Our products are handcrafted by local women artisans, empowering communities while keeping traditional recipes alive.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-surface">
      {/* <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Why Choose Us
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground lg:text-4xl">
            The Taste of Home, Crafted by Hand.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-background p-8 shadow-card"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <feature.icon size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default WhyChooseUs;
