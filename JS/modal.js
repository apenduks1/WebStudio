window.addEventListener("DOMContentLoaded",() =>{
    const openModal = document.querySelector("[data-open-modal]");
    const close = document.querySelector("[data-close-modal]");
    const modal = document.querySelector("[data-modal]");
  
    openModal.addEventListener("click",toggleModal);
    close.addEventListener("click",toggleModal)


    function toggleModal () {
        modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll")

    }
})