function validateFunction(){
    var email_input = document.getElementById("email").value;

    if (email_input === ""){
        alert("Please enter an email address");
        return false;
    }

    return true;
}