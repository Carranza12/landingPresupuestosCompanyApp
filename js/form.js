const btnNextStep=window.document.getElementById("btnNextStep");
const circlesContainer= window.document.getElementById("circlesContainer");
let currentStep="stepInitial";
let stepNext="stepOne"
let currentCircle="circleInitial"
let CircleNext="circleOne"
let stepAnterior='stepInitial'
let circleAnterior='circleInitial'

const btnPrevStep=window.document.getElementById("btnPrevStep");
let type_job="";
window.document.querySelector('#type_job').addEventListener('change',()=>{
   type_job= document.querySelector('#type_job').value;
   console.log('change')
})

const saveData=()=>{
    const nombre = window.document.getElementById("txtNombre").vallue;
    const email = window.document.getElementById("txtEnail").value;
    const phone = window.document.getElementById("txtTelefono").value;
   
 
   
    const document={
        name,
        email,
        phone,
        type_job
    }
    console.log(document);
}



const nextStep=(paso_actual)=>{
    if(paso_actual==='stepInitial') {
        document.getElementById('stepInitial').style.display="none";
        document.getElementById('stepOne').style.display="block";
    }
    if(paso_actual==='stepOne'){
        document.getElementById('stepOne').style.display="none";
        document.getElementById('stepTwo').style.display="block";
    }

    if(paso_actual==='stepTwo'){
        document.getElementById('stepTwo').style.display="none";
        document.getElementById('stepThree').style.display="block";
        saveData();
    }
    if(paso_actual==='stepThree'){
        document.getElementById('stepThree').style.display="none";
        document.getElementById('stepFour').style.display="block";
    }
    if(paso_actual==='stepFour'){
        document.getElementById('stepFour').style.display="none";
        document.getElementById('stepFive').style.display="block";
    }
    if(paso_actual==='stepFive'){
        document.getElementById('stepFive').style.display="none";
        document.getElementById('stepEnd').style.display="block";
    }
   
}


const prevStep=(paso_actual)=>{  
    if(paso_actual==='stepOne'){
        document.getElementById('stepOne').style.display="none";
        document.getElementById('stepInitial').style.display="block";
    }

    if(paso_actual==='stepTwo'){
        document.getElementById('stepTwo').style.display="none";
        document.getElementById('stepOne').style.display="block";
    }
    if(paso_actual==='stepThree'){
        document.getElementById('stepThree').style.display="none";
        document.getElementById('stepTwo').style.display="block";
    }
    if(paso_actual==='stepFour'){
        document.getElementById('stepFour').style.display="none";
        document.getElementById('stepThree').style.display="block";
    }
    if(paso_actual==='stepFive'){
        document.getElementById('stepFive').style.display="none";
        document.getElementById('stepFour').style.display="block";
    }
}

