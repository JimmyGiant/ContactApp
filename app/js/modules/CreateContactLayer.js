class CreateContactLayer {
  constructor() {

      this.modal = document.querySelector(".formcontainer");
      this.closeButton = document.querySelector(".closeButton");
      this.newButton = document.querySelector(".newButton");
      this.events();

    }

    events() {

      // clicking the x close modal button
      this.closeButton.addEventListener("click", this.closeModal.bind(this));

      // clicking the open modal button
      this.newButton.addEventListener("click", this.openModal.bind(this));
    }

    closeModal() {
      this.modal.classList.remove("isVisible");

    }
    
    openModal() {
      this.modal.classList.add("isVisible");
      return false;
    }

  }


export default CreateContactLayer;
