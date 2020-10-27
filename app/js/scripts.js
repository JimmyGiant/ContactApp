
// CONTACT CONTROLLER
var contactController = (function(){

        var Contact = function(id, firstName, lastName, adress, zipCode, country, email, phone, dateOfBirth, companyTitle){
            this.id = id,
            this.firstName = firstName;
            this.lastName = lastName;
            this.adress = adress;
            this.zipCode = zipCode;
            this.country = country;
            this.email = email;
            this.phone = phone;
            this.dateOfBirth = dateOfBirth;
            this.companyTitle = companyTitle;

        };
        
        var contactList = [];
        var currentID;

        return {
            addContact: function(firstName, lastName, adress, zipCode, country, email, phone, dateOfBirth, companyTitle) {
                var newContact;

                // create new ID
                if (contactList.length > 0) {
                    id = contactList[contactList.length - 1].id + 1;
                } else {
                    id = 0;
                }

                // create new item
                newContact = new Contact(id, firstName, lastName, adress, zipCode, country, email, phone, dateOfBirth, companyTitle);

                //push to List
                contactList.push(newContact);         

                //return new element

                return newContact;
            },

            deleteContact: function(id) {
                var ids, index;

                ids = contactList.map(function(current){
                    return current.id;
                });

                index = ids.indexOf(parseInt(id));

                if (index !== -1) {
                    contactList.splice(index, 1);

                }

            },



            setCurrentID: function(id) {
                currentID = id;
            },

            getCurrentID: function() {
                return currentID;
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
        companyTitle: '.company',
        cardTitle: '.cardTitle',
        companySubline: '.companyTitle',
        firstNameCard: '.first_name_cardField',
        lastNameCard: '.last_name_cardField',
        adressCard: '.adress_cardField',
        zipCodeCard: '.zip_code_cardField',
        countryCard: '.country_cardField',
        emailCard: '.email_cardField',
        phoneCard: '.phone_cardField',
        dateOfBirthCard: '.date_cardField',
        companyTitleCard: '.company_cardField',
        modal: '.formcontainer',
        overlay: '.overlay',
        newButton: '.newButton',
        saveButton: '.button_save',
        closeButton: '.closeButton',
        contactListContainerUL: '.contactListAll',
        buttonRowCard: '.button-row',
        saveButtonCard: '.button_save_cardField',
        deleteButtonCard: '.button_delete_cardField',
        editButtonCard: '.editButton',
        contactCard: '.contactCard'
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
                dateOfBirth: document.querySelector(DOMstrings.dateOfBirth).value,
                companyTitle: document.querySelector(DOMstrings.companyTitle).value
            }
        },

        reloadContactList: function(arr) {
            var html, newHtml, element;
            element = DOMstrings.contactListContainerUL;
            // Delete all LI 
            document.querySelector(element).innerHTML = "";

            if (arr.length > 0) {
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
             } else {
                document.querySelector(DOMstrings.contactCard).classList.remove('isVisible');
             }
            
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

            fields = document.querySelectorAll(DOMstrings.firstName + ' , ' + DOMstrings.lastName + ' , ' + DOMstrings.adress + ' , ' + DOMstrings.zipCode + ' , ' + DOMstrings.country + ' , ' + DOMstrings.email + ' , ' + DOMstrings.phone + ' , ' + DOMstrings.dateOfBirth + ' , ' + DOMstrings.companyTitle);
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current, index, array){
            current.value = "";
            });

            fieldsArr[0].focus();
        },

        disableCardFields: function(bool) {
            var cardFields, cardFieldsArr;

            cardFields = document.querySelectorAll(DOMstrings.firstNameCard + ' , ' + DOMstrings.lastNameCard + ' , ' + DOMstrings.adressCard + ' , ' + DOMstrings.zipCodeCard + ' , ' + DOMstrings.countryCard + ' , ' + DOMstrings.emailCard + ' , ' + DOMstrings.phoneCard + ' , ' + DOMstrings.dateOfBirthCard + ' , ' + DOMstrings.companyTitleCard);
            cardFieldsArr = Array.prototype.slice.call(cardFields);
            cardFieldsArr.forEach(function(current, index, array){
            current.disabled = bool;
            });
        },

        enableEditingMode: function(bool) {

            if (bool === true) {
                document.querySelector(DOMstrings.buttonRowCard).classList.add('isVisibleFlex');
                document.querySelector(DOMstrings.editButtonCard).style.display = "none";
                this.disableCardFields(false);
                } else {
                document.querySelector(DOMstrings.buttonRowCard).classList.remove('isVisibleFlex');
                document.querySelector(DOMstrings.editButtonCard).style.display = "block";
                this.disableCardFields(true);
            }
        },

        displayContact: function(array, index) {

            // Remove Editing Mode if true
            document.querySelector(DOMstrings.buttonRowCard).classList.remove('isVisibleFlex');
            
            // Show Contact Card
            document.querySelector(DOMstrings.contactCard).classList.add('isVisible');

            // Disable Fields

            this.disableCardFields(true);

            document.querySelector(DOMstrings.cardTitle).innerHTML = array[index].firstName + " " + array[index].lastName;
            document.querySelector(DOMstrings.companySubline).innerHTML = array[index].companyTitle;
            document.querySelector(DOMstrings.firstNameCard).value = array[index].firstName;
            document.querySelector(DOMstrings.lastNameCard).value = array[index].lastName;
            document.querySelector(DOMstrings.adressCard).value = array[index].adress;
            document.querySelector(DOMstrings.zipCodeCard).value = array[index].zipCode;
            document.querySelector(DOMstrings.countryCard).value = array[index].country;
            document.querySelector(DOMstrings.emailCard).value = array[index].email;
            document.querySelector(DOMstrings.phoneCard).value = array[index].phone;
            document.querySelector(DOMstrings.dateOfBirthCard).value = array[index].dateOfBirth;
            document.querySelector(DOMstrings.companyTitleCard).value = array[index].companyTitle;
        },

        changeContact: function(array, index) {
            array[index].firstName = document.querySelector(DOMstrings.firstNameCard).value
            array[index].lastName = document.querySelector(DOMstrings.lastNameCard).value
            array[index].adress = document.querySelector(DOMstrings.adressCard).value
            array[index].zipCode = document.querySelector(DOMstrings.zipCodeCard).value
            array[index].country = document.querySelector(DOMstrings.countryCard).value
            array[index].email = document.querySelector(DOMstrings.emailCard).value
            array[index].phone = document.querySelector(DOMstrings.phoneCard).value
            array[index].dateOfBirth = document.querySelector(DOMstrings.dateOfBirthCard).value
            array[index].companyTitle = document.querySelector(DOMstrings.companyTitleCard).value

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

        document.querySelector(DOM.newButton).addEventListener('click', UICtrl.openModal); // move to Controller?
        document.querySelector(DOM.closeButton).addEventListener('click', UICtrl.closeModal); // move to Conntroller?


        document.querySelector(DOM.editButtonCard).addEventListener('click', ctrlEditingMode);
        document.querySelector(DOM.deleteButtonCard).addEventListener('click', ctrldeleteContact);
        document.querySelector(DOM.saveButtonCard).addEventListener('click', ctrlChangeContact);

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

        // GET INPUT FROM FIELDS
        input = UICtrl.getInput();
        contactArray = contactController.getContactList();

        // ADD THE INPUT TO THE DATASTRUCTURE

        newItem = contactCtrl.addContact(input.firstName, input.lastName, input.adress, input.zipCode, input.country, input.email, input.phone, input.dateOfBirth, input.companyTitle)

        // DISPLAY THE CONTACT IN CONTACTLIST

        UICtrl.reloadContactList(contactArray);
        UICtrl.clearFields();
        UICtrl.closeModal();
    }

    var ctrlDisplayContact = function(event) {
        var itemID, contactArray, contactIndex;

        itemID = event.target.id;
        contactArray = contactController.getContactList();
        
        if (itemID) {

            contactIndex = contactController.getContactIndex(itemID);

            UICtrl.displayContact(contactArray, contactIndex);

            contactCtrl.setCurrentID(itemID);
        }
    }

    var ctrlEditingMode = function() {

        UICtrl.enableEditingMode(true);

    }

    var ctrldeleteContact = function() {
        var currentID, contactArray;

        currentID = contactCtrl.getCurrentID();
        contactArray = contactController.getContactList();
        contactCtrl.deleteContact(currentID)
        UICtrl.reloadContactList(contactArray);

    }

    var ctrlChangeContact = function() {
        var currentID, contactIndex, contactArray;

        currentID = contactCtrl.getCurrentID();
        contactIndex = contactController.getContactIndex(currentID);
        contactArray = contactController.getContactList();

        UICtrl.changeContact(contactArray, contactIndex);
        UICtrl.reloadContactList(contactArray);
        UICtrl.enableEditingMode(false);

        UICtrl.displayContact(contactArray, contactIndex);

    }

    return {
        init: function() {
            setupEventListeners();
        }
    }


})(contactController, UIController);

controller.init();