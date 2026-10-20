// Change CTA_URL to your offer / tracking link. URL parameters on the page (e.g. ?click_id=...) are passed through.
const CTA_URL = "https://endfield.gryphline.com/";

(function () {
  const cta = document.getElementById("cta");
  const url = new URL(CTA_URL);
  new URLSearchParams(location.search).forEach((v, k) => url.searchParams.set(k, v));
  cta.href = url.toString();

  const video = document.querySelector(".bg__video");
  video.play().catch(() => {});

  // Light parallax on the background video when the mouse moves.
  if (matchMedia("(pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    video.style.transform = "scale(1.06)";
    video.style.transition = "transform .3s ease-out";
    addEventListener("mousemove", (e) => {
      const x = (e.clientX / innerWidth - 0.5) * -16;
      const y = (e.clientY / innerHeight - 0.5) * -10;
      video.style.transform = `scale(1.06) translate(${x}px, ${y}px)`;
    }, { passive: true });
  }
})();
