"use client";

import TextAnimation from "@/components/uilayouts/scroll-text";
import { type ContactContent } from "../data/contact.data";

interface ContactFormProps {
  data: ContactContent;
}

export function ContactForm({ data }: ContactFormProps) {
  return (
    <section className="bg-[var(--color-surface)] border border-[var(--color-gold)]/30 rounded-none shadow-[0_0_0_2px_rgba(200,168,75,0.1),0_12px_40px_rgba(0,0,0,0.08)] mb-24 flex flex-col md:flex-row relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-gold)] opacity-10 blur-3xl transform translate-x-1/2 translate-y-1/2" />
      
      {/* Contact Info */}
      <div className="w-full md:w-5/12 bg-[var(--color-primary)] text-[var(--color-surface)] p-8 md:p-16 flex flex-col justify-between relative z-10">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl mb-12 !text-[var(--color-surface)]">
            Contact Information
          </h2>
          <div className="flex flex-col gap-8 font-body text-lg font-light">
            <div className="flex flex-col gap-2 border-l-2 border-[var(--color-lime)] pl-6">
              <span className="text-[var(--color-lime)] uppercase text-xs tracking-widest font-medium">Email</span>
              <a href={`mailto:${data.info.email}`} className="hover:text-[var(--color-gold)] transition-colors">{data.info.email}</a>
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-[var(--color-lime)] pl-6">
              <span className="text-[var(--color-lime)] uppercase text-xs tracking-widest font-medium">Phone</span>
              <a href={`tel:${data.info.phone}`} className="hover:text-[var(--color-gold)] transition-colors">{data.info.phone}</a>
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-[var(--color-lime)] pl-6">
              <span className="text-[var(--color-lime)] uppercase text-xs tracking-widest font-medium">Address</span>
              <span>{data.info.address}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Form Area */}
      <div className="w-full md:w-7/12 p-8 md:p-16 relative z-10">
        <h3 className="font-heading text-3xl md:text-4xl mb-10">
          <TextAnimation text={data.form.heading} direction="up" as="span" classname="!text-[var(--color-dark)]" />
        </h3>
        
        <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-3">
            <label className="font-body text-sm uppercase tracking-widest text-[var(--color-primary)] font-medium">
              {data.form.fields.name}
            </label>
            <input 
              type="text" 
              className="bg-transparent border-b-2 border-[var(--color-border)] focus:border-[var(--color-gold)] outline-none pb-2 text-[var(--color-dark)] font-body transition-colors rounded-none"
            />
          </div>
          
          <div className="flex flex-col gap-3">
            <label className="font-body text-sm uppercase tracking-widest text-[var(--color-primary)] font-medium">
              {data.form.fields.email}
            </label>
            <input 
              type="email" 
              className="bg-transparent border-b-2 border-[var(--color-border)] focus:border-[var(--color-gold)] outline-none pb-2 text-[var(--color-dark)] font-body transition-colors rounded-none"
            />
          </div>
          
          <div className="flex flex-col gap-3">
            <label className="font-body text-sm uppercase tracking-widest text-[var(--color-primary)] font-medium">
              {data.form.fields.message}
            </label>
            <textarea 
              rows={4}
              className="bg-transparent border-b-2 border-[var(--color-border)] focus:border-[var(--color-gold)] outline-none pb-2 text-[var(--color-dark)] font-body transition-colors resize-none rounded-none"
            />
          </div>
          
          <button 
            type="submit" 
            className="mt-6 self-start bg-[var(--color-primary)] text-[var(--color-surface)] px-10 py-4 font-body uppercase tracking-widest text-sm font-medium hover:bg-[var(--color-dark)] transition-colors rounded-none shadow-[4px_4px_0_0_var(--color-gold)] active:translate-y-1 active:translate-x-1 active:shadow-[0_0_0_0_var(--color-gold)]"
          >
            {data.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
