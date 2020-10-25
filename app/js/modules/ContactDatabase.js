class ContactDatabase { 
    constructor(){
        this.contactList = [
            "hans", "hans"
        ];
    }
    Add(item) {
        this.contactList.push(item);
    }
    Get(){
        return this.contactList;
    }
}

export default ContactDatabase;
