import { useEffect, useState } from "react";
import "./OpeningIntro.css";

const storageKey = "portfolio-opening-seen";
let seenThisRun = false;

export function OpeningIntro({ children }) {
  const [phase, setPhase] = useState(() => {
    try { return seenThisRun || sessionStorage.getItem(storageKey) === "1" ? "done" : "hold"; }
    catch { return seenThisRun ? "done" : "hold"; }
  });
  const active = phase !== "done";

  useEffect(() => {
    if (!active) return;
    seenThisRun = true;
    try { sessionStorage.setItem(storageKey, "1"); } catch { /* Session memory still prevents repeat openings. */ }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveal = window.setTimeout(() => setPhase("reveal"), 1800);
    const curtainEnd = 1800 + (reducedMotion ? 180 : 950);
    const clear = window.setTimeout(() => setPhase("clearing"), curtainEnd);
    const finish = window.setTimeout(() => setPhase("done"), curtainEnd + (reducedMotion ? 180 : 850));
    const skip = event => { if (event.key === "Escape") setPhase("done"); };
    window.addEventListener("keydown", skip);
    return () => {
      window.clearTimeout(reveal);
      window.clearTimeout(clear);
      window.clearTimeout(finish);
      window.removeEventListener("keydown", skip);
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  return <div className={`opening-stage opening-${phase}`}>
    <div className="opening-home" inert={active ? true : undefined}>{children}</div>
    {active && phase !== "clearing" && <div className="opening-curtain" aria-hidden="true" />}
  </div>;
}
