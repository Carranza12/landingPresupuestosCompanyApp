const btnNextStep = window.document.getElementById("btnNextStep");
const circlesContainer = window.document.getElementById("circlesContainer");
let currentStep = "stepInitial";
let stepNext = "stepOne";
let currentCircle = "circleInitial";
let CircleNext = "circleOne";
let stepAnterior = "stepInitial";
let circleAnterior = "circleInitial";

const btnPrevStep = window.document.getElementById("btnPrevStep");
//INFORMACION DE CONTACTO INPUTS
const inputNombre = document.getElementById("txtNombre");
const inputEmail = document.getElementById("txtEnail");
const inputTelefono = document.getElementById("txtTelefono");
const inputComentarios = document.getElementById("txtComentarios");
//QUE TIPO DE TRABAJO NECESITAS?


//MEDIDAS DE TERRENO
const inputMedidas = document.getElementById("txtMedidas");

const nextStep = (paso_actual) => {
  //PASO INICIAL
  if (paso_actual === "stepInitial") {
    document.getElementById("stepInitial").style.display = "none";
    document.getElementById("stepOne").style.display = "block";
  }
  //INFORMACION DE CONTACTO
  if (paso_actual === "stepOne") {
    if (
      !inputNombre.value ||
      inputNombre.value === " " ||
      !inputEmail.value ||
      inputEmail.value === " " ||
      !inputTelefono.value ||
      inputTelefono.value === " "
    ) {
      Swal.fire(
        "Campos Requeridos!",
        "Por favor rellena todos los campos",
        "error"
      ); 
      return;
    }
    if (campos.nombre && campos.email && campos.telefono) {
        document.getElementById("stepOne").style.display = "none";
        document.getElementById("stepTwo").style.display = "block";
    }
    else{
        Swal.fire(
            "Campos Incorrectos!",
            "Por favor rellena todos los campos de manera correcta",
            "error"
          );
    }
   
  }


  //QUE TIPO DE TRABAJO NECESITAS
  if (paso_actual === "stepTwo") {
    document.getElementById("stepTwo").style.display = "none";
    document.getElementById("stepThree").style.display = "block";
    
  }



  if (paso_actual === "stepThree") {
    if(!inputMedidas.value ||
        inputMedidas.value === " " ){
        Swal.fire(
            "Campos Requeridos!",
            "Por favor rellena todos los campos",
            "error"
          ); 
          return;
    }
    if(campos.medidas){
        document.getElementById("stepThree").style.display = "none";
        document.getElementById("stepFour").style.display = "block";
    }
 else{
    Swal.fire(
        "Campos Incorrectos!",
        "Por favor rellena todos los campos de manera correcta",
        "error"
      ); 
 }
  }

  if (paso_actual === "stepFour") { 
        document.getElementById("stepFour").style.display = "none";
        document.getElementById("stepFive").style.display = "block";
  }
  if (paso_actual === "stepFive") {  
    if(!inputComentarios.value ||
      inputComentarios.value === " " ){
      Swal.fire(
          "Campos Requeridos!",
          "Por favor rellena todos los campos",
          "error"
        ); 
        return;
  }
  else{
    guardarDatos();
    document.getElementById("stepFive").style.display = "none";
    document.getElementById("stepEnd").style.display = "block";
  }
  }
};

const prevStep = (paso_actual) => {
  if (paso_actual === "stepOne") {
    document.getElementById("stepOne").style.display = "none";
    document.getElementById("stepInitial").style.display = "block";
  }

  if (paso_actual === "stepTwo") {
    document.getElementById("stepTwo").style.display = "none";
    document.getElementById("stepOne").style.display = "block";
  }
  if (paso_actual === "stepThree") {
    document.getElementById("stepThree").style.display = "none";
    document.getElementById("stepTwo").style.display = "block";
  }
  if (paso_actual === "stepFour") {
    document.getElementById("stepFour").style.display = "none";
    document.getElementById("stepThree").style.display = "block";
  }
  if (paso_actual === "stepFive") {
    document.getElementById("stepFive").style.display = "none";
    document.getElementById("stepFour").style.display = "block";
  }
};

const formulario = document.getElementById("btnNextStep");
const inputs = document.querySelectorAll("#formulario input");
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  medidas: /^[a-zA-ZÀ-ÿ-Z0-9\s]{1,140}$/ //informacion de terreno
};

const campos = {
  nombre: false,
  email: false,
  telefono: false,
  medidas: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");
      break;
    case "email":
      validarCampo(expresiones.correo, e.target, "email");
      break;
    case "telefono":
      validarCampo(expresiones.telefono, e.target, "telefono");
      break;

      case "medidas":
        validarCampo(expresiones.medidas, e.target, "medidas");
        break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo_${campo}`)
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo_${campo}`)
      .classList.add("formulario__grupo-correcto");
    campos[campo] = true;
  } else {
    document
      .getElementById(`grupo_${campo}`)
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo_${campo}`)
      .classList.remove("formulario__grupo-correcto");
    campos[campo] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});






//FUNCIONALIDAD DE LOS INPUTS
function guardarDatos(){
  //DATOS DEL USUARIO
  var nombreGuardar = inputNombre.value;
  var enailGuardar = inputEmail.value;
  var telefonoGuardar = inputTelefono.value;

  //TIPO DE TRABAJO
  var radiotp = document.getElementsByName('tipoTrabajo');
  for(i = 0; i < radiotp.length; i++) {
    if(radiotp[i].checked){
      var tipoTrabajoGuardar = radiotp[i].value;
    }
}
//TIPO DE UNIDADES
var radiouni = document.getElementsByName('Unidades');
for(i = 0; i < radiouni.length; i++) {
  if(radiouni[i].checked){
    var unidadesGuardar = radiouni[i].value;
  }
}

//MEDIDAS DEL TERRENO
var medidasGuardar = inputMedidas.value;

//PRESUPUESTO
var radioPres = document.getElementsByName('presupuesto');
for(i = 0; i < radioPres.length; i++) {
  if(radioPres[i].checked){
    var presupuestoGuardar = radioPres[i].value;
  }
}

//AGREGAR COMENTARIOS
var comentariosGuardar = inputComentarios.value;
//OBJETO
  const arreglo = {
    "nombre": nombreGuardar,
    "email": enailGuardar,
    "telefono": telefonoGuardar,
    "tipo_trabajo": tipoTrabajoGuardar,
    "unidades": unidadesGuardar,
    "medidas": medidasGuardar,
    "presupuesto": presupuestoGuardar,
    "comentarios": comentariosGuardar
  }

  console.log(arreglo);
}
