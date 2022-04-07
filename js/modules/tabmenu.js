export default function initTabMenu() {
  const tabMenu = document.querySelectorAll("[data-anima='menu'] li");
  const tabContent = document.querySelectorAll("[data-anima='content'] div");

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
