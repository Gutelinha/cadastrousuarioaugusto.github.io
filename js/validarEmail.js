class Email {

    static validarEmail(email){ 
        const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(br|com|net|org)$/i;

        if (!email.match(regex)) {
            return false;
        }
        return true;
    }
}

if (typeof exports !== 'undefined') {
    module.exports = Email;
}
