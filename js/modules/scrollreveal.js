export default function initScrollReveal() {
  const sections = document.querySelectorAll("[data-anima='scroll']");
  const calculoWindow = window.innerHeight * 0.6;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((item) => {
        const distanciaTopo = item.getBoundingClientRect().top - calculoWindow;

        if (distanciaTopo < 10) {
          item.classList.add("ativo");
        }
      });
    }

    window.addEventListener("scroll", animaScroll);
  }
}
