class Nome {

    static validarNome(nome){ 
        const regex = /^[a-zA-Z]{6,}$/;

        if (!nome.match(regex)) {
            return false;
        }
        return true;
    }
}

if (typeof exports !== 'undefined') {
    module.exports = Nome;
}
