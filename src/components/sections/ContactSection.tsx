import { useState } from "react";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/site/SectionHeading";
import { toast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
    <path d="M18.244 2H21l-6.52 7.45L22 22h-6.797l-4.77-6.21L4.8 22H2.04l6.97-7.96L2 2h6.93l4.32 5.71L18.244 2Zm-2.38 18h1.83L7.21 4h-1.9l10.55 16Z" />
  </svg>
);

export default function ContactSection({ preview = true }: { preview?: boolean }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({ title: "Please check the form", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast({ title: "Message received", description: "Asante sana — the team will be in touch soon." });
      setForm({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/40 border-t-4 border-party">
      <div className="container">
        <SectionHeading
          eyebrow="Let's Talk"
          title="Have a concern? Want to get involved?"
          description="This movement is built by Nairobians, for Nairobians. Drop a message — every voice matters."
        />
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-5">
            <div className="p-6 rounded-2xl bg-background shadow-card border-l-4 border-primary">
              <h3 className="font-extrabold text-xl mb-4">Reach the Campaign</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3"><Mail className="h-5 w-5 text-primary mt-0.5" /><span>hello@cecilmiller.ke</span></li>
                <li className="flex items-start gap-3"><Phone className="h-5 w-5 text-primary mt-0.5" /><span>+254 700 000 000</span></li>
                <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5" /><span>Campaign HQ · Nairobi CBD</span></li>
              </ul>
              <div className="flex items-center gap-4 mt-5 pt-5 border-t border-border">
                <a href="#" aria-label="Facebook" className="text-foreground hover:text-primary"><Facebook className="h-5 w-5" /></a>
                <a href="#" aria-label="X" className="text-foreground hover:text-primary"><XIcon /></a>
                <a href="#" aria-label="Instagram" className="text-foreground hover:text-primary"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-3 p-8 rounded-2xl bg-background shadow-card space-y-4 border-t-4 border-primary">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} />
              <Input type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} />
            </div>
            <Textarea rows={6} placeholder="Your message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} />
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <Button type="submit" disabled={submitting} size="lg" className="bg-gradient-brand text-primary-foreground rounded-full px-8">
                {submitting ? "Sending…" : "Submit"}
              </Button>
              {preview && (
                <Link to="/contact" className="text-sm font-semibold text-primary hover:underline">Open full contact page →</Link>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
