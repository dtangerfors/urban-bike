const contactForm = document.forms.contactForm;

const message = document.querySelector(".contact-form__message");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (contactForm.contactName.value == "" || contactForm.contactMail.value == "" || contactForm.contactMessage.value == "") {
        message.innerHTML = "Please enter all fields";
        return false;
    } else {
        message.innerHTML = "";
        console.log(contactForm.contactName.value)
        console.log(contactForm.contactMail.value)
        console.log(contactForm.contactMessage.value)
        contactForm.reset();
    };


});