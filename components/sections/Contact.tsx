import { SectionHead } from "@/components/sections/SectionHead";
import { EMAIL, RESUME_URL, SOCIALS, contact } from "@/lib/portfolio-data";

export function Contact() {
  return (
    <section className="sec wrap" id="contact" aria-labelledby="contact-t">
      <SectionHead num="04" title="Contact" id="contact-t" />
      <p className="contactLead serif">{contact.lead}</p>
      <p className="contactSupport">{contact.support}</p>
      <a className="bigEmail" href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
      <div className="socials">
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            className="social"
            href={social.url}
            target="_blank"
            rel="noopener"
          >
            {social.label} <span className="ar">↗</span>
          </a>
        ))}
        <a className="social" href={RESUME_URL} target="_blank" rel="noopener">
          Résumé <span className="ar">↓</span>
        </a>
      </div>
    </section>
  );
}
