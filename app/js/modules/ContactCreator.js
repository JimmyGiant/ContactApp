class ContactCreator {
    constructor() {
  
        this.firstName = document.querySelector(".first_name");
        this.lastName = document.querySelector(".last_name");
        this.adress = document.querySelector(".adress");
        this.zipCode = document.querySelector(".zip_code");
        this.country = document.querySelector(".country");
        this.email = document.querySelector(".email");
        this.phone = document.querySelector(".phone");
        this.dateOfBirth = document.querySelector(".date");

        this.saveButton = document.querySelector(".button_save");

        this.events();
  
      }
  
      events() {
        // clicking the save Button
        this.saveButton.addEventListener("click", this.saveToDatabase.bind(this));
        
        
      }
  
      saveToDatabase() {

        // var contact = {
        //   firstName: this.firstName.value,
        //   lastName: this.lastName.value,
        //   adress: this.adress.value,
        //   zipCode: this.zipCode.value,
        //   country: this.country.value,
        //   email: this.email.value,
        //   phone: this.phone.value,
        //   dateOfBirth: this.dateOfBirth.value,
        // }
        // console.log(contact)
        // this.contactList.push(contact);

      }
      
      clearAllFields() {
        return false;
      }
  
    }
  
  
  export default ContactCreator;
  