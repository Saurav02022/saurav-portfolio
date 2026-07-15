import { LOCATION, NAME, ROLE } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap footInner">
        <div>
          <div className="footName serif">{NAME}</div>
          <div className="footRole">
            {ROLE} · {LOCATION}
          </div>
        </div>
        <div className="footRight">
          <a className="toTop" href="#top">
            Back to top ↑
          </a>
          <div className="copy">© 2026 {NAME}</div>
        </div>
      </div>
    </footer>
  );
}
