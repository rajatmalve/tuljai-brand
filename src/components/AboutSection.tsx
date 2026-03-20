import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="bg-surface py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
        <motion.div
          className="relative order-2 mx-auto w-full max-w-md lg:order-1 lg:max-w-lg"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-square overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-6 shadow-lg dark:from-orange-950/40 dark:via-amber-950/20 dark:to-slate-950">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] text-primary">
                  EST. 2018 · Nagpur
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                  A small home kitchen
                  <br />
                  with a big dream
                </h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  It started with neighbours asking,{" "}
                  <span className="font-medium text-foreground">
                    “Ye masala kahaan se liya?”
                  </span>
                </p>
                <p>
                  The answer was always the same –{" "}
                  <span className="font-medium text-foreground">
                    from Aai&apos;s hands, at home.
                  </span>
                </p>
                <p>
                  Today, every packet that leaves our kitchen still carries that
                  same warmth, care and honesty.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-dashed border-border pt-4 text-xs text-muted-foreground">
                <span>Women-led · Handcrafted · Preservative-free</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                  Tuljai Gruh Udyog
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="order-1 flex-1 text-left lg:order-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Our Story
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-foreground lg:text-4xl">
            From Aai&apos;s spice box
            <br className="hidden sm:block" />
            to homes across India
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tuljai Gruh Udyog was born from a simple belief –{" "}
            <span className="font-medium text-foreground">
              ghar ka swaad kabhi factory se nahi aa sakta.
            </span>{" "}
            In our small Maharashtrian kitchen, traditional recipes were never
            written in books; they were measured in{" "}
            <span className="italic">“thoda sa”</span>,{" "}
            <span className="italic">“ek mutthi”</span> and{" "}
            <span className="italic">“aandaz se”</span>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            What started as making masalas, papads and pickles for family and
            friends slowly turned into a{" "}
            <span className="font-medium text-foreground">
              women-led home enterprise
            </span>
            . Every batch is sun-dried, hand-roasted and packed in small
            quantities — without artificial colours, flavours or preservatives.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            When you choose Tuljai, you&apos;re not just buying ingredients.
            You are supporting{" "}
            <span className="font-medium text-foreground">
              local women, home kitchens and the art of slow, mindful cooking
            </span>
            . From our home to yours, we want every bite to feel like{" "}
            <span className="font-medium text-foreground">
              maa ke haath ka khaana
            </span>
            .
          </p>

          <div className="mt-8 grid gap-4 text-sm sm:grid-cols-3">
            <div className="rounded-2xl border border-border/60 bg-background/60 p-4 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                What drives us
              </p>
              <p className="mt-2 text-muted-foreground">
                To keep traditional recipes alive and accessible, exactly the
                way our grandmothers made them.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/60 p-4 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                How we work
              </p>
              <p className="mt-2 text-muted-foreground">
                Small batches, handpicked ingredients, slow processes and
                honest labelling — no shortcuts, ever.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/60 p-4 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                For whom
              </p>
              <p className="mt-2 text-muted-foreground">
                For families who miss the comfort of home-cooked flavours and
                want to cook with complete trust.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
