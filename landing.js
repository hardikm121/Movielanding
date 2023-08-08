document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        
        alert("Thank you for your Request! your requested Movies/Series will been uploading on our Telegram channel please join it fast. Link given above");
        form.reset();
    });
});
