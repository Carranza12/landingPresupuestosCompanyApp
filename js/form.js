const btnNextStep=window.document.getElementById("btnNextStep");
const circlesContainer= window.document.getElementById("circlesContainer");
let currentStep="stepInitial";
let stepNext="stepOne"
let currentCircle="circleInitial"
let CircleNext="circleOne"

const nextStep=(stepActual,stepSiguiente,circleActual,circleSiguiente)=>{
    console.log('step actual:',stepActual,' step siguiente:',stepNext)
    document.getElementById(circleActual).classList.remove('active')
    document.getElementById(circleSiguiente).classList.add('active')
    document.getElementById(stepActual).style.display="none";
    document.getElementById(stepSiguiente).style.display="block";
    currentCircle=circleSiguiente
    circleActual=currentCircle
    currentStep=stepSiguiente
    stepActual=currentStep
    if(currentCircle==='circleInitial') CircleNext='circleOne'
    if(currentCircle==='circleOne') CircleNext='circleTwo'
    if(currentCircle==='circleTwo') CircleNext='circleThree'
    if(currentCircle==='circleThree') CircleNext='circleFour'
    if(currentCircle==='circleFour') CircleNext='circleFive'
    if(currentStep==='stepInitial') stepNext='stepOne'
    if(currentStep==='stepOne') stepNext='stepTwo'
    if(currentStep==='stepTwo') stepNext='stepThree'
    if(currentStep==='stepThree') stepNext='stepFour'
    if(currentStep==='stepFour') stepNext='stepFive'
    if(currentStep==='stepFive')stepNext='stepEnd'

    if(currentStep==='stepEnd'){
        stepNext=''
        circlesContainer.style.display="none"
        btnNextStep.innerText="Finalizar"
    }
}

