// JavaScript will be added by team members
console.log("Portfolio script loaded");
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            console.log('Form submitted with:', { name, email, message });
            
            // In a real application, you would send this data to a server
            alert('Thank you for your message, ' + name + '! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
