export default function initMostrarTexto() {
  const faqdt = document.querySelectorAll("[data-anima='hidden'] dt");
  const faqdd = document.querySelectorAll("[data-anima='hidden'] dd");

  if (faqdd.length && faqdt.length) {
    faqdd[0].classList.add("ativo");
    faqdt[0].classList.add("setadown");

    function mostrarTexto(index) {
      faqdd[index].classList.toggle("ativo");
      faqdt[index].classList.toggle("setadown");
    }

    faqdt.forEach((dt, index) => {
      dt.addEventListener("click", () => {
        mostrarTexto(index);
      });
    });
  }
}
