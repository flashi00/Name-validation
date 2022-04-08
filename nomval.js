const nom = document.getElementById('nom')


function nomIsValid(name) {
    return /^[A-Z][a-zA-Z]+[\s]{0,1}[a-zA-Z]{0,10}$/.test(name);
}


$("#Check").click(function(){
    if (nom.value == '') {
        $(error).text("name is required");
        $(nom).removeClass("form-control is-valid");
        $(nom).addClass("form-control is-invalid");
    }
    else if(nom.value.length < 4) {
        $(error).text("name is too short");
        $(nom).removeClass("form-control is-valid");
        $(nom).addClass("form-control is-invalid");
    }
    else if(!nomIsValid(nom.value)) {
            $(error).text("insert a valid name")
            $(nom).removeClass("form-control is-valid");
            $(nom).addClass("form-control is-invalid");
        }
    else
    {
        $(nom).removeClass("form-control is-invalid");
        $(nom).addClass("form-control is-valid");
        
        $(error).text('');
    }
  });
