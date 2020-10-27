/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/scripts.js":
/*!***************************!*\
  !*** ./app/js/scripts.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// CONTACT CONTROLLER\nvar contactController = function () {\n  var Contact = function Contact(id, firstName, lastName, adress, zipCode, country, email, phone, dateOfBirth, companyTitle) {\n    this.id = id, this.firstName = firstName;\n    this.lastName = lastName;\n    this.adress = adress;\n    this.zipCode = zipCode;\n    this.country = country;\n    this.email = email;\n    this.phone = phone;\n    this.dateOfBirth = dateOfBirth;\n    this.companyTitle = companyTitle;\n  };\n\n  var contactList = [];\n  var currentID;\n  return {\n    addContact: function addContact(firstName, lastName, adress, zipCode, country, email, phone, dateOfBirth, companyTitle) {\n      var newContact; // create new ID\n\n      if (contactList.length > 0) {\n        id = contactList[contactList.length - 1].id + 1;\n      } else {\n        id = 0;\n      } // create new item\n\n\n      newContact = new Contact(id, firstName, lastName, adress, zipCode, country, email, phone, dateOfBirth, companyTitle); //push to List\n\n      contactList.push(newContact); //return new element\n\n      return newContact;\n    },\n    deleteContact: function deleteContact(id) {\n      var ids, index;\n      ids = contactList.map(function (current) {\n        return current.id;\n      });\n      index = ids.indexOf(parseInt(id));\n\n      if (index !== -1) {\n        contactList.splice(index, 1);\n      }\n    },\n    setCurrentID: function setCurrentID(id) {\n      currentID = id;\n    },\n    getCurrentID: function getCurrentID() {\n      return currentID;\n    },\n    getContactIndex: function getContactIndex(itemID) {\n      var parsedID;\n      parsedID = parseInt(itemID);\n      var selectedIndex = contactList.findIndex(function (x) {\n        return x.id === parsedID;\n      });\n      return selectedIndex;\n    },\n    getContactList: function getContactList() {\n      return contactList;\n    }\n  };\n}(); // UI CONTROLLER\n\n\nvar UIController = function () {\n  var DOMstrings = {\n    firstName: '.first_name',\n    lastName: '.last_name',\n    adress: '.adress',\n    zipCode: '.zip_code',\n    country: '.country',\n    email: '.email',\n    phone: '.phone',\n    dateOfBirth: '.date',\n    companyTitle: '.company',\n    cardTitle: '.cardTitle',\n    companySubline: '.companyTitle',\n    firstNameCard: '.first_name_cardField',\n    lastNameCard: '.last_name_cardField',\n    adressCard: '.adress_cardField',\n    zipCodeCard: '.zip_code_cardField',\n    countryCard: '.country_cardField',\n    emailCard: '.email_cardField',\n    phoneCard: '.phone_cardField',\n    dateOfBirthCard: '.date_cardField',\n    companyTitleCard: '.company_cardField',\n    modal: '.formcontainer',\n    overlay: '.overlay',\n    newButton: '.newButton',\n    saveButton: '.button_save',\n    closeButton: '.closeButton',\n    contactListContainerUL: '.contactListAll',\n    buttonRowCard: '.button-row',\n    saveButtonCard: '.button_save_cardField',\n    deleteButtonCard: '.button_delete_cardField',\n    editButtonCard: '.editButton',\n    contactCard: '.contactCard'\n  };\n  return {\n    getInput: function getInput() {\n      return {\n        firstName: document.querySelector(DOMstrings.firstName).value,\n        lastName: document.querySelector(DOMstrings.lastName).value,\n        adress: document.querySelector(DOMstrings.adress).value,\n        zipCode: document.querySelector(DOMstrings.zipCode).value,\n        country: document.querySelector(DOMstrings.country).value,\n        email: document.querySelector(DOMstrings.email).value,\n        phone: document.querySelector(DOMstrings.phone).value,\n        dateOfBirth: document.querySelector(DOMstrings.dateOfBirth).value,\n        companyTitle: document.querySelector(DOMstrings.companyTitle).value\n      };\n    },\n    reloadContactList: function reloadContactList(arr) {\n      var html, newHtml, element;\n      element = DOMstrings.contactListContainerUL; // Delete all LI \n\n      document.querySelector(element).innerHTML = \"\";\n\n      if (arr.length > 0) {\n        arr.forEach(function (current, index, array) {\n          // ctreate HTML string\n          html = '<li class=\"contactListItemCell\" id=\"%id%\"><strong>%lastName%</strong> %firstName%</li>'; // Replace Placeholder\n\n          newHtml = html.replace('%firstName%', arr[index].firstName);\n          newHtml = newHtml.replace('%lastName%', arr[index].lastName);\n          newHtml = newHtml.replace('%id%', arr[index].id); // Insert HTML\n\n          document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);\n        });\n      } else {\n        document.querySelector(DOMstrings.contactCard).classList.remove('isVisible');\n      }\n    },\n    openModal: function openModal() {\n      document.querySelector(DOMstrings.modal).classList.add('isVisible');\n      document.querySelector(DOMstrings.overlay).classList.add('isVisible');\n    },\n    closeModal: function closeModal() {\n      document.querySelector(DOMstrings.modal).classList.remove('isVisible');\n      document.querySelector(DOMstrings.overlay).classList.remove('isVisible');\n    },\n    clearFields: function clearFields() {\n      var fields, fieldsArr;\n      fields = document.querySelectorAll(DOMstrings.firstName + ' , ' + DOMstrings.lastName + ' , ' + DOMstrings.adress + ' , ' + DOMstrings.zipCode + ' , ' + DOMstrings.country + ' , ' + DOMstrings.email + ' , ' + DOMstrings.phone + ' , ' + DOMstrings.dateOfBirth + ' , ' + DOMstrings.companyTitle);\n      fieldsArr = Array.prototype.slice.call(fields);\n      fieldsArr.forEach(function (current, index, array) {\n        current.value = \"\";\n      });\n      fieldsArr[0].focus();\n    },\n    disableCardFields: function disableCardFields(bool) {\n      var cardFields, cardFieldsArr;\n      cardFields = document.querySelectorAll(DOMstrings.firstNameCard + ' , ' + DOMstrings.lastNameCard + ' , ' + DOMstrings.adressCard + ' , ' + DOMstrings.zipCodeCard + ' , ' + DOMstrings.countryCard + ' , ' + DOMstrings.emailCard + ' , ' + DOMstrings.phoneCard + ' , ' + DOMstrings.dateOfBirthCard + ' , ' + DOMstrings.companyTitleCard);\n      cardFieldsArr = Array.prototype.slice.call(cardFields);\n      cardFieldsArr.forEach(function (current, index, array) {\n        current.disabled = bool;\n      });\n    },\n    enableEditingMode: function enableEditingMode(bool) {\n      if (bool === true) {\n        document.querySelector(DOMstrings.buttonRowCard).classList.add('isVisibleFlex');\n        document.querySelector(DOMstrings.editButtonCard).style.display = \"none\";\n        this.disableCardFields(false);\n      } else {\n        document.querySelector(DOMstrings.buttonRowCard).classList.remove('isVisibleFlex');\n        document.querySelector(DOMstrings.editButtonCard).style.display = \"block\";\n        this.disableCardFields(true);\n      }\n    },\n    displayContact: function displayContact(array, index) {\n      // Remove Editing Mode if true\n      document.querySelector(DOMstrings.buttonRowCard).classList.remove('isVisibleFlex'); // Show Contact Card\n\n      document.querySelector(DOMstrings.contactCard).classList.add('isVisible'); // Disable Fields\n\n      this.disableCardFields(true);\n      document.querySelector(DOMstrings.cardTitle).innerHTML = array[index].firstName + \" \" + array[index].lastName;\n      document.querySelector(DOMstrings.companySubline).innerHTML = array[index].companyTitle;\n      document.querySelector(DOMstrings.firstNameCard).value = array[index].firstName;\n      document.querySelector(DOMstrings.lastNameCard).value = array[index].lastName;\n      document.querySelector(DOMstrings.adressCard).value = array[index].adress;\n      document.querySelector(DOMstrings.zipCodeCard).value = array[index].zipCode;\n      document.querySelector(DOMstrings.countryCard).value = array[index].country;\n      document.querySelector(DOMstrings.emailCard).value = array[index].email;\n      document.querySelector(DOMstrings.phoneCard).value = array[index].phone;\n      document.querySelector(DOMstrings.dateOfBirthCard).value = array[index].dateOfBirth;\n      document.querySelector(DOMstrings.companyTitleCard).value = array[index].companyTitle;\n    },\n    changeContact: function changeContact(array, index) {\n      array[index].firstName = document.querySelector(DOMstrings.firstNameCard).value;\n      array[index].lastName = document.querySelector(DOMstrings.lastNameCard).value;\n      array[index].adress = document.querySelector(DOMstrings.adressCard).value;\n      array[index].zipCode = document.querySelector(DOMstrings.zipCodeCard).value;\n      array[index].country = document.querySelector(DOMstrings.countryCard).value;\n      array[index].email = document.querySelector(DOMstrings.emailCard).value;\n      array[index].phone = document.querySelector(DOMstrings.phoneCard).value;\n      array[index].dateOfBirth = document.querySelector(DOMstrings.dateOfBirthCard).value;\n      array[index].companyTitle = document.querySelector(DOMstrings.companyTitleCard).value;\n    },\n    getDOMstrings: function getDOMstrings() {\n      return DOMstrings;\n    }\n  };\n}(); // APP CONTROLLER\n\n\nvar controller = function (contactCtrl, UICtrl) {\n  var setupEventListeners = function setupEventListeners() {\n    var DOM = UICtrl.getDOMstrings();\n    document.querySelector(DOM.newButton).addEventListener('click', UICtrl.openModal); // move to Controller?\n\n    document.querySelector(DOM.closeButton).addEventListener('click', UICtrl.closeModal); // move to Conntroller?\n\n    document.querySelector(DOM.editButtonCard).addEventListener('click', ctrlEditingMode);\n    document.querySelector(DOM.deleteButtonCard).addEventListener('click', ctrldeleteContact);\n    document.querySelector(DOM.saveButtonCard).addEventListener('click', ctrlChangeContact);\n    document.querySelector(DOM.saveButton).addEventListener('click', ctrlAddContact);\n    document.addEventListener('keydown', function (event) {\n      if (event.key === 'Escape') {\n        UICtrl.closeModal();\n      }\n    });\n    document.querySelector(DOM.contactListContainerUL).addEventListener('click', ctrlDisplayContact);\n  };\n\n  var ctrlAddContact = function ctrlAddContact() {\n    var input, newItem, contactArray; // GET INPUT FROM FIELDS\n\n    input = UICtrl.getInput();\n    contactArray = contactController.getContactList(); // ADD THE INPUT TO THE DATASTRUCTURE\n\n    newItem = contactCtrl.addContact(input.firstName, input.lastName, input.adress, input.zipCode, input.country, input.email, input.phone, input.dateOfBirth, input.companyTitle); // DISPLAY THE CONTACT IN CONTACTLIST\n\n    UICtrl.reloadContactList(contactArray);\n    UICtrl.clearFields();\n    UICtrl.closeModal();\n  };\n\n  var ctrlDisplayContact = function ctrlDisplayContact(event) {\n    var itemID, contactArray, contactIndex;\n    itemID = event.target.id;\n    contactArray = contactController.getContactList();\n\n    if (itemID) {\n      contactIndex = contactController.getContactIndex(itemID);\n      UICtrl.displayContact(contactArray, contactIndex);\n      contactCtrl.setCurrentID(itemID);\n    }\n  };\n\n  var ctrlEditingMode = function ctrlEditingMode() {\n    UICtrl.enableEditingMode(true);\n  };\n\n  var ctrldeleteContact = function ctrldeleteContact() {\n    var currentID, contactArray;\n    currentID = contactCtrl.getCurrentID();\n    contactArray = contactController.getContactList();\n    contactCtrl.deleteContact(currentID);\n    UICtrl.reloadContactList(contactArray);\n  };\n\n  var ctrlChangeContact = function ctrlChangeContact() {\n    var currentID, contactIndex, contactArray;\n    currentID = contactCtrl.getCurrentID();\n    contactIndex = contactController.getContactIndex(currentID);\n    contactArray = contactController.getContactList();\n    UICtrl.changeContact(contactArray, contactIndex);\n    UICtrl.reloadContactList(contactArray);\n    UICtrl.enableEditingMode(false);\n    UICtrl.displayContact(contactArray, contactIndex);\n  };\n\n  return {\n    init: function init() {\n      setupEventListeners();\n    }\n  };\n}(contactController, UIController);\n\ncontroller.init();\n\n//# sourceURL=webpack:///./app/js/scripts.js?");

/***/ })

/******/ });