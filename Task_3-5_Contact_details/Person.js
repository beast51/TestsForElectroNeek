class Person {
    constructor(name, phone, comments) {
        this.name = name;
        this.phone = phone;
        this.comments = comments;

    }
    send() {
        document.getElementById('name').value = this.name;
        document.getElementById('phoneNumber-0').value = this.phone;
        document.getElementById('comments').value = this.comments;
    }
}