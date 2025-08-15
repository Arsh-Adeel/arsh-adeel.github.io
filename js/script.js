// Feedback form submission
document.getElementById('feedbackForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const grade = document.getElementById('grade').value;
    const message = document.getElementById('message').value;

    if(name && grade && message) {
        document.getElementById('successMessage').textContent = "Thank you, your feedback has been submitted!";
        this.reset();
    }
});
