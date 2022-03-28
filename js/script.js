// Trocar texto ao clique na lista de imagens

function initTabMenu() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent div");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((conteudo) => {
        conteudo.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabMenu();

// Mostrar e ocultar o texto ao clique

function initMostrarTexto() {
  const faqdt = document.querySelectorAll(".js-hidden dt");
  const faqdd = document.querySelectorAll(".js-hidden dd");

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

initMostrarTexto();

function initScrollReveal() {
  const sections = document.querySelectorAll(".js-scroll");
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

initScrollReveal();
