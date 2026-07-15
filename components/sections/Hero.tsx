import { Button } from "@/components/ui/button";
import { NAME, RESUME_URL, SOCIALS, hero } from "@/lib/portfolio-data";

export function Hero() {
  return (
    <section className="hero wrap" id="top">
      <p className="heroEyebrow">{hero.eyebrow}</p>
      <h1 className="heroName serif">{NAME}</h1>
      <p className="heroStatement">{hero.statement}</p>
      <p className="heroSupport">{hero.support}</p>
      <div className="heroMeta">
        {hero.meta.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="heroCtas">
        <Button asChild variant="primary">
          <a href="#work">View work →</a>
        </Button>
        <Button asChild variant="ghost">
          <a href={RESUME_URL} target="_blank" rel="noopener">
            Résumé ↗<span className="sr-only"> (opens in new tab)</span>
          </a>
        </Button>
      </div>
      <div className="socials heroSocials">
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            className="social"
            href={social.url}
            target="_blank"
            rel="noopener"
          >
            {social.label} <span className="ar">↗</span>
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        ))}
      </div>
    </section>
  );
}
