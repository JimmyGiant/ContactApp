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

eval("// import CreateContactLayer from './modules/CreateContactLayer';\n// import ContactCreator from './modules/ContactCreator';\n// import ContactDatabase from './modules/ContactDatabase';\n// var createContactLayer = new CreateContactLayer();\n// var contactCreator = new ContactCreator();\n// var contactDatabase = new ContactDatabase();\nvar ted = 34; // CONTACT CONTROLLER\n\nvar contactController = function () {\n  var Contact = function Contact(id, firstName, lastName, adress, zipCode, country, email, phone, dateOfBirth) {\n    this.id = id, this.firstName = firstName;\n    this.lastName = lastName;\n    this.adress = adress;\n    this.zipCode = zipCode;\n    this.country = country;\n    this.email = email;\n    this.phone = phone;\n    this.dateOfBirth = dateOfBirth;\n  };\n\n  var contactList = [];\n  return {\n    addContact: function addContact(firstName, lastName, adress, zipCode, country, email, phone, dateOfBirth) {\n      var newContact; // create new ID\n\n      if (contactList.length > 0) {\n        id = contactList[contactList.length - 1].id + 1;\n      } else {\n        id = 0;\n      } // create new item\n\n\n      newContact = new Contact(id, firstName, lastName, adress, zipCode, country, email, phone, dateOfBirth); //push to List\n\n      contactList.push(newContact);\n      console.log(contactList); //return new element\n\n      return newContact;\n    },\n    getContactList: function getContactList() {\n      return contactList;\n    }\n  };\n}(); // UI CONTROLLER\n\n\nvar UIController = function () {\n  var DOMstrings = {\n    firstName: '.first_name',\n    lastName: '.last_name',\n    adress: '.adress',\n    zipCode: '.zip_code',\n    country: '.country',\n    email: '.email',\n    phone: '.phone',\n    dateOfBirth: '.date',\n    modal: '.formcontainer',\n    overlay: '.overlay',\n    newButton: '.newButton',\n    saveButton: '.button_save',\n    closeButton: '.closeButton',\n    contactListContainerUL: '.contactListAll',\n    contactWindowContainer: '.contactWindow'\n  };\n  return {\n    getInput: function getInput() {\n      return {\n        firstName: document.querySelector(DOMstrings.firstName).value,\n        lastName: document.querySelector(DOMstrings.lastName).value,\n        adress: document.querySelector(DOMstrings.adress).value,\n        zipCode: document.querySelector(DOMstrings.zipCode).value,\n        country: document.querySelector(DOMstrings.country).value,\n        email: document.querySelector(DOMstrings.email).value,\n        phone: document.querySelector(DOMstrings.phone).value,\n        dateOfBirth: document.querySelector(DOMstrings.dateOfBirth).value\n      };\n    },\n    reloadContactList: function reloadContactList(arr) {\n      var html, newHtml, element;\n      element = DOMstrings.contactListContainerUL; // delete all LI \n\n      document.querySelector(element).innerHTML = \"\"; // for each in contactlist add Li\n\n      arr.forEach(function (current, index, array) {\n        // ctreate HTML string\n        html = '<li class=\"contactListItemCell\"><span class=\"lastNameBold\">%lastName%</span> %firstName%</li>'; // Replace Placeholder\n\n        newHtml = html.replace('%firstName%', arr[index].firstName);\n        newHtml = newHtml.replace('%lastName%', arr[index].lastName); // Insert HTML\n\n        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);\n      });\n    },\n    openModal: function openModal() {\n      document.querySelector(DOMstrings.modal).classList.add('isVisible');\n      document.querySelector(DOMstrings.overlay).classList.add('isVisible');\n    },\n    closeModal: function closeModal() {\n      document.querySelector(DOMstrings.modal).classList.remove('isVisible');\n      document.querySelector(DOMstrings.overlay).classList.remove('isVisible');\n    },\n    clearFields: function clearFields() {\n      var fields, fieldsArr;\n      fields = document.querySelectorAll(DOMstrings.firstName + ' , ' + DOMstrings.lastName + ' , ' + DOMstrings.adress + ' , ' + DOMstrings.zipCode + ' , ' + DOMstrings.country + ' , ' + DOMstrings.email + ' , ' + DOMstrings.phone + ' , ' + DOMstrings.dateOfBirth);\n      fieldsArr = Array.prototype.slice.call(fields);\n      fieldsArr.forEach(function (current, index, array) {\n        current.value = \"\";\n      });\n      fieldsArr[0].focus();\n    },\n    getDOMstrings: function getDOMstrings() {\n      return DOMstrings;\n    }\n  };\n}(); // APP CONTROLLER\n\n\nvar controller = function (contactCtrl, UICtrl) {\n  var setupEventListeners = function setupEventListeners() {\n    var DOM = UICtrl.getDOMstrings();\n    document.querySelector(DOM.newButton).addEventListener('click', UICtrl.openModal);\n    document.querySelector(DOM.closeButton).addEventListener('click', UICtrl.closeModal);\n    document.querySelector(DOM.saveButton).addEventListener('click', ctrlAddContact);\n    document.addEventListener('keydown', function (event) {\n      if (event.key === 'Escape') {\n        UICtrl.closeModal();\n      }\n    });\n  };\n\n  var ctrlAddContact = function ctrlAddContact() {\n    var input, newItem, contactArray; ////  1 GET INPUT FROM FIELDS\n\n    input = UICtrl.getInput();\n    contactArray = contactController.getContactList(); // TODO: 2 ADD THE INPUT TO THE DATASTRUCTURE\n\n    newItem = contactCtrl.addContact(input.firstName, input.lastName, input.adress, input.zipCode, input.country, input.email, input.phone, input.dateOfBirth); // TODO: 3 DISPLAY THE CONTACT IN CONTACTLIST\n\n    UICtrl.reloadContactList(contactArray); // UICtrl.clearFields();\n    // UICtrl.closeModal();\n    // TODO: 4 SHOW CONTACT IN WINDOW ON CLICK\n    // Return the contact\n  };\n\n  return {\n    init: function init() {\n      setupEventListeners();\n    }\n  };\n}(contactController, UIController);\n\ncontroller.init();\n\n//# sourceURL=webpack:///./app/js/scripts.js?");

/***/ })

/******/ });