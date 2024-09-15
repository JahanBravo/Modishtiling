// Example of adding interactivity with JavaScript
document.getElementById('contact-btn').addEventListener('click', function() {
    let confirmContact = confirm('Would you like to call us at 0431 950 67 or send an email to info@modishtiling.com?');
    if (confirmContact) {
        window.location.href = "tel:+6143195067"; // Automatically opens the phone dialer
    }
});
