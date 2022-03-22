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
