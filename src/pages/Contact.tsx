import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl font-semibold text-foreground">Contact Us</h1>
        <p className="mt-4 text-muted-foreground">
          Send us a message and we’ll get back to you as soon as possible.
        </p>

        <div className="mt-10 rounded-2xl border border-foreground/10 bg-surface p-8 shadow-card">
          <label className="block">
            <span className="text-sm font-medium text-foreground">Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-lg border border-foreground/10 bg-background px-4 py-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Your name"
            />
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-foreground">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="mt-2 w-full rounded-lg border border-foreground/10 bg-background px-4 py-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="you@example.com"
            />
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-foreground">Message</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="mt-2 w-full rounded-lg border border-foreground/10 bg-background px-4 py-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="How can we help you?"
            />
          </label>

          <button
            type="button"
            onClick={() => {
              alert("Message submitted! Thank you for reaching out.");
              setName("");
              setEmail("");
              setMessage("");
            }}
            className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-primary-hover"
          >
            Submit
          </button>
        </div>

        <section className="mt-10 space-y-2 text-sm text-muted-foreground">
          <p><strong>Phone:</strong> +91 9999999999</p>
          <p><strong>Email:</strong> xyz@gmail.com</p>
          <p><strong>Address:</strong> Tuljai Gruh Udyog, 123 Local Market, Nagpur, India</p>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
