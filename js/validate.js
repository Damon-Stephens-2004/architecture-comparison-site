// js/validate.js
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name.trim() === '' || email.trim() === '') {
        alert('Please fill in all required fields.');
        return false;
    }
    return true;
}
