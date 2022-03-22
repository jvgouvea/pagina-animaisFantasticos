// Trocar texto ao clique na lista de imagens

const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent div");
tabContent[0].classList.add("ativo");

if (tabMenu.length && tabContent.length) {
  function activeTab(index){
    tabContent.forEach((conteudo) => {
      conteudo.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  }
  
  tabMenu.forEach((item,index) => {
    item.addEventListener("click",() => {
      activeTab(index);
    })
  });
}

// Mostrar e ocultar o texto ao clique

const faqdt = document.querySelectorAll(".js-hidden dt");
const faqdd = document.querySelectorAll(".js-hidden dd");
faqdd[0].classList.add("ativo");
faqdt[0].classList.add("setadown");

function mostrarTexto(index) {
  faqdd[index].classList.toggle("ativo");
  faqdt[index].classList.toggle("setadown");
}

faqdt.forEach((dt,index) => {
  dt.addEventListener("click", () => {
    mostrarTexto(index);
  })
});

