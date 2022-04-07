export default function initModal() {
  const botaoAbrir = document.querySelector("[data-modal='abrir']");
  const botaoFechar = document.querySelector("[data-modal='fechar']");
  const modalContainer = document.querySelector("[data-modal='container']");

  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle("ativo");
  }

  function clickForaModal(event) {
    if (event.target === modalContainer) {
      toggleModal(event);
    }
  }

  botaoAbrir.addEventListener("click", toggleModal);
  botaoFechar.addEventListener("click", toggleModal);
  modalContainer.addEventListener("click", clickForaModal);
}
