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
//QUE TIPO DE TRABAJO NECESITAS?

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
    document.getElementById("stepOne").style.display = "none";
    document.getElementById("stepTwo").style.display = "block";
  }
  //QUE TIPO DE TRABAJO NECESITAS
  if (paso_actual === "stepTwo") {
    document.getElementById("stepTwo").style.display = "none";
    document.getElementById("stepThree").style.display = "block";
  }
  if (paso_actual === "stepThree") {
    document.getElementById("stepThree").style.display = "none";
    document.getElementById("stepFour").style.display = "block";
  }
  if (paso_actual === "stepFour") {
    document.getElementById("stepFour").style.display = "none";
    document.getElementById("stepFive").style.display = "block";
  }
  if (paso_actual === "stepFive") {
    document.getElementById("stepFive").style.display = "none";
    document.getElementById("stepEnd").style.display = "block";
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
};

const campos = {
  nombre: false,
  email: false,
  telefono: false,
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

formulario.addEventListener("button", (e) => {
  e.preventDefault();
  if (campos.nombre && campos.email && campos.telefono) {
  }
});
