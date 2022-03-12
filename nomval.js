const nom = document.getElementById('nom')


function nomIsValid(name) {
    return /^[A-Z][a-zA-Z]+[\s]{0,1}[a-zA-Z]{0,10}$/.test(name);
}
function verification() {
    if (nom.value == '') {
        error.innerHTML = "name is required"
        nom.className="form-control is-invalid"
    }
    else if(nom.value.length < 4) {
        error.innerHTML = "name is too short"
        nom.className="form-control is-invalid"
    }
    else if(!nomIsValid(nom.value)) {
            error.innerHTML = "insert a valid name"
            nom.className="form-control is-invalid"
        }
    else
    {
        nom.className="form-control is-valid"
        error.innerHTML = ''
    }
}