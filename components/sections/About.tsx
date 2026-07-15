import { SectionHead } from "@/components/sections/SectionHead";
import { SOCIALS, about } from "@/lib/portfolio-data";

export function About() {
  return (
    <section className="sec wrap" id="about" aria-labelledby="about-t">
      <SectionHead num="03" title="About" id="about-t" />
      <div className="aboutGrid">
        <div className="aboutText">
          {about.leads.map((lead, i) => (
            <p className="lead" key={i}>
              {lead}
            </p>
          ))}
        </div>
        <aside className="details" aria-label="Quick facts">
          <div className="detailRow">
            <div className="dLabel">Based in</div>
            <div className="dValue">
              {about.basedIn.value}
              <span className="dSub">{about.basedIn.sub}</span>
            </div>
          </div>
          <div className="detailRow">
            <div className="dLabel">Focus</div>
            <div className="dValue">{about.focus}</div>
          </div>
          <div className="detailRow">
            <div className="dLabel">Education</div>
            {about.education.map((edu) => (
              <div className="dValue" key={edu.value}>
                {edu.value}
                <span className="dSub">{edu.sub}</span>
              </div>
            ))}
          </div>
          <div className="detailRow">
            <div className="dLabel">Elsewhere</div>
            <div className="dLinks">
              {SOCIALS.map((social) => (
                <a key={social.label} href={social.url} target="_blank" rel="noopener">
                  {social.label} ↗<span className="sr-only"> (opens in new tab)</span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
