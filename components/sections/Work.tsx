import { Badge } from "@/components/ui/badge";
import { SectionHead } from "@/components/sections/SectionHead";
import { cases, workIntro } from "@/lib/portfolio-data";

export function Work() {
  return (
    <section className="sec wrap" id="work" aria-labelledby="work-t">
      <SectionHead num="02" title="Work" id="work-t" />
      <p className="secIntro">{workIntro}</p>
      <div className="cases">
        {cases.map((c) => (
          <article className="case" key={c.title}>
            <div className="caseTop">
              <div>
                <span className="caseIndex">{c.index}</span>
                <h3 className="caseTitle">{c.title}</h3>
              </div>
            </div>
            <p className="caseSummary">{c.summary}</p>
            <div className="caseGrid">
              {c.blocks.map((block) => (
                <div className="caseBlock" key={block.label}>
                  <div className="caseLabel">{block.label}</div>
                  <p className="caseText">{block.text}</p>
                </div>
              ))}
            </div>
            <div className="caseFoot">
              <div className="tags">
                {c.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <a
                className="repoLink"
                href={c.repoUrl}
                target="_blank"
                rel="noopener"
                aria-label={`View source — ${c.title}`}
              >
                View source <span className="ar">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
