const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const clave = document.getElementById("clave");
const clave2 = document.getElementById("confirmarClave");

form.addEventListener("submit", e => {
    e.preventDefault();
    validarEntradas();
});

function validarEntradas() {
    const nombreValor = nombre.value.trim();
    const correoValor = correo.value.trim();
    const claveValor = clave.value.trim();
    const clave2Valor = clave2.value.trim();
    
    if(nombreValor === ""){
        setErrorInput(nombre, "El campo nombre no puede estar vacio.");
   } else {
       setSuccessInput(nombre);
   }


   if(correoValor === ""){
    setErrorInput(correo,"El campo correo no puede estar vacio.");
   } else {
    setSuccessInput(correo) && validarCorreo(correoValor) ;
   }

   if(claveValor == ""){
    setErrorInput(clave,"El campo clave no puede estar vacio.");
   } else {
    setSuccessInput(clave) && validarClave(claveValor);
   }

   if(clave2Valor == "" ){
    setErrorInput(clave2,"El campo confirmar clave no puede estar vacio.");
    } else if (clave2Valor !== claveValor) {
    setErrorInput(clave2, "Las llaves No coinciden.");
    } else {
        setSuccessInput(clave2);
    }
 }
   
function setErrorInput(input, Errormessage) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = Errormessage;
    formControl.className = "form__control error";
}

function setSuccessInput(input){
    const formControl = input.parentElement;
    formControl.className = "form__control success";
}
function validarCorreo(correo) {
    let regular_expressions = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
     return regular_expressions.test(string(correo).toLocaleLowerCase());
}

function validarClave(clave){
    let regular_expressions = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
    return regular_expressions.match(regular_expressions);
}
