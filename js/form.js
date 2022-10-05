const btnNextStep=window.document.getElementById("btnNextStep");
const circlesContainer= window.document.getElementById("circlesContainer");
let currentStep="stepInitial";
let stepNext="stepOne"
let currentCircle="circleInitial"
let CircleNext="circleOne"


const btnPrevStep=window.document.getElementById("btnPrevStep");


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


const prevStep=(stepActual,stepSiguiente,circleActual,circleSiguiente)=>{
    console.log('step actual:',stepActual,' step siguiente:',stepNext)
    document.getElementById(circleActual).classList.remove('active')
    document.getElementById(circleSiguiente).classList.add('active')
    document.getElementById(stepActual).style.display="none";
    document.getElementById(stepSiguiente).style.display="block";
    currentCircle=circleSiguiente
    circleActual=currentCircle
    currentStep=stepSiguiente
    stepActual=currentStep
    if(currentCircle==='circleOne') CircleNext='circleInitial'
    if(currentCircle==='circleTwo') CircleNext='circleOne'
    if(currentCircle==='circleThree') CircleNext='circleTwo'
    if(currentCircle==='circleFour') CircleNext='circleThree'
    if(currentCircle==='circleFive') CircleNext='circleFour'

    if(currentStep==='stepOne') stepNext='stepInitial'
    if(currentStep==='stepTwo') stepNext='stepOne'
    if(currentStep==='stepThree') stepNext='stepTwo'
    if(currentStep==='stepFour') stepNext='stepThree'
    if(currentStep==='stepFive')stepNext='stepFour'

    if(currentStep==='stepEnd'){
        stepNext='stepFive'
    }
}

