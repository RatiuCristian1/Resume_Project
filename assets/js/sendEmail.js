function sendMail(contactForm) {
    emailjs.send("gmail1", "template1", {
        "from_name": contactForm.name.value,
        "emailaddress": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}