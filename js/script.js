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
