import { Badge } from "@/components/ui/badge";
import { SectionHead } from "@/components/sections/SectionHead";
import { experience, experienceIntro } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section className="sec wrap" id="experience" aria-labelledby="experience-t">
      <SectionHead num="01" title="Experience" id="experience-t" />
      <p className="secIntro">{experienceIntro}</p>
      <div className="xpList">
        {experience.map((job) => (
          <article className="xpItem" key={job.company}>
            <div className="xpDate">{job.dates}</div>
            <div>
              <h3 className="xpRole serif">
                {job.role} <span className="xpCo">· {job.company}</span>
              </h3>
              <div className="xpMeta">{job.meta}</div>
              <ul className="bullets">
                {job.bullets.map((bullet, i) => (
                  <li className="bullet" key={i}>
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="tags">
                {job.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
