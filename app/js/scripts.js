
// import CreateContactLayer from './modules/CreateContactLayer';
// import ContactCreator from './modules/ContactCreator';
// import ContactDatabase from './modules/ContactDatabase';


// var createContactLayer = new CreateContactLayer();
// var contactCreator = new ContactCreator();
// var contactDatabase = new ContactDatabase();


// CONTACT CONTROLLER
var contactController = (function(){

        var Contact = function(id, firstName, lastName, adress, zipCode, country, email, phone, dateOfBirth){
            this.id = id,
            this.firstName = firstName;
            this.lastName = lastName;
            this.adress = adress;
            this.zipCode = zipCode;
            this.country = country;
            this.email = email;
            this.phone = phone;
            this.dateOfBirth = dateOfBirth;

        };
        
        var contactList = [];

        return {
            addContact: function(firstName, lastName, adress, zipCode, country, email, phone, dateOfBirth) {
                var newContact;

                // create new ID
                if (contactList.length > 0) {
                    id = contactList[contactList.length - 1].id + 1;
                } else {
                    id = 0;
                }

                // create new item
                newContact = new Contact(id, firstName, lastName, adress, zipCode, country, email, phone, dateOfBirth);
                //push to List
                contactList.push(newContact);
                console.log(contactList);
            
                //return new element

                return newContact;
            },
            getContactIndex: function(itemID) {
                var parsedID;

                parsedID = parseInt(itemID);
  
                var selectedIndex = contactList.findIndex(x => x.id === parsedID);
                return selectedIndex;
            },

            getContactList: function() {
                return contactList;
            }


        }

})();

// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        firstName: '.first_name',
        lastName: '.last_name',
        adress: '.adress',
        zipCode: '.zip_code',
        country: '.country',
        email: '.email',
        phone: '.phone',
        dateOfBirth: '.date',
        cardTitle: '.cardTitle',
        firstNameCard: '.first_name_cardField',
        lastNameCard: '.last_name_cardField',
        adressCard: '.adress_cardField',
        zipCodeCard: '.zip_code_cardField',
        countryCard: '.country_cardField',
        emailCard: '.email_cardField',
        phoneCard: '.phone_cardField',
        dateOfBirthCard: '.date_cardField',
        modal: '.formcontainer',
        overlay: '.overlay',
        newButton: '.newButton',
        saveButton: '.button_save',
        closeButton: '.closeButton',
        contactListContainerUL: '.contactListAll',
        contactWindowContainer: '.contactWindow'
    }

    return {
        getInput: function() {

            return {
                firstName: document.querySelector(DOMstrings.firstName).value,
                lastName: document.querySelector(DOMstrings.lastName).value,
                adress: document.querySelector(DOMstrings.adress).value,
                zipCode: document.querySelector(DOMstrings.zipCode).value,
                country: document.querySelector(DOMstrings.country).value,
                email: document.querySelector(DOMstrings.email).value,
                phone: document.querySelector(DOMstrings.phone).value,
                dateOfBirth: document.querySelector(DOMstrings.dateOfBirth).value
            }
        },

        reloadContactList: function(arr) {
            var html, newHtml, element;
            element = DOMstrings.contactListContainerUL;
            // delete all LI 
            document.querySelector(element).innerHTML = "";
            // for each in contactlist add Li

            arr.forEach(function(current, index, array){
              // ctreate HTML string
              html = '<li class="contactListItemCell" id="%id%"><strong>%lastName%</strong> %firstName%</li>';
              // Replace Placeholder
              newHtml = html.replace('%firstName%', arr[index].firstName);
              newHtml = newHtml.replace('%lastName%', arr[index].lastName);
              newHtml = newHtml.replace('%id%', arr[index].id);
              // Insert HTML
              document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            });
            
        },

        openModal: function() {
            document.querySelector(DOMstrings.modal).classList.add('isVisible');
            document.querySelector(DOMstrings.overlay).classList.add('isVisible');
        },

        closeModal: function() {
            document.querySelector(DOMstrings.modal).classList.remove('isVisible');
            document.querySelector(DOMstrings.overlay).classList.remove('isVisible');
        },

        clearFields: function() {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.firstName + ' , ' + DOMstrings.lastName + ' , ' + DOMstrings.adress + ' , ' + DOMstrings.zipCode + ' , ' + DOMstrings.country + ' , ' + DOMstrings.email + ' , ' + DOMstrings.phone + ' , ' + DOMstrings.dateOfBirth);
            
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array){
                current.value = "";
            });

            fieldsArr[0].focus();
        },

        displayContact: function(array, index) {
        
            document.querySelector(DOMstrings.cardTitle).innerHTML = array[index].firstName + " " + array[index].lastName;
            document.querySelector(DOMstrings.firstNameCard).value = array[index].firstName;
            document.querySelector(DOMstrings.lastNameCard).value = array[index].lastName;
            document.querySelector(DOMstrings.adressCard).value = array[index].adress;
            document.querySelector(DOMstrings.zipCodeCard).value = array[index].zipCode;
            document.querySelector(DOMstrings.countryCard).value = array[index].country;
            document.querySelector(DOMstrings.emailCard).value = array[index].email;
            document.querySelector(DOMstrings.phoneCard).value = array[index].phone;
            document.querySelector(DOMstrings.dateOfBirthCard).value = array[index].dateOfBirth;
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    }
   
})();



// APP CONTROLLER
var controller = (function(contactCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.newButton).addEventListener('click', UICtrl.openModal);
        document.querySelector(DOM.closeButton).addEventListener('click', UICtrl.closeModal);
        document.querySelector(DOM.saveButton).addEventListener('click', ctrlAddContact);
    
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                UICtrl.closeModal();
            }
        });

        document.querySelector(DOM.contactListContainerUL).addEventListener('click', ctrlDisplayContact);

    }
    
    var ctrlAddContact = function() {
        var input, newItem, contactArray;

        ////  1 GET INPUT FROM FIELDS
        input = UICtrl.getInput();
        contactArray = contactController.getContactList();
        console.log("this is " + contactArray);

        // TODO: 2 ADD THE INPUT TO THE DATASTRUCTURE

        newItem = contactCtrl.addContact(input.firstName, input.lastName, input.adress, input.zipCode, input.country, input.email, input.phone, input.dateOfBirth)

        // TODO: 3 DISPLAY THE CONTACT IN CONTACTLIST

        UICtrl.reloadContactList(contactArray);
        // UICtrl.clearFields();
        // UICtrl.closeModal();

        // TODO: 4 SHOW CONTACT IN WINDOW ON CLICK

        // Return the contact
    }

    var ctrlDisplayContact = function(event) {
        var itemID, contactArray, contactIndex;

        itemID = event.target.id;
        contactArray = contactController.getContactList(); // FFFFFFEEEEEHHHHLLELRR ??? WARUM
        
        console.log(contactArray);

        if (itemID) {

            contactIndex = contactController.getContactIndex(itemID);

            console.log("hier ist der array  "  + contactArray);
            console.log("und hier der passende Index" + contactIndex);

            UICtrl.displayContact(contactArray, contactIndex);
        }
    }

    return {
        init: function() {
            setupEventListeners();
        }
    }


})(contactController, UIController);

controller.init();