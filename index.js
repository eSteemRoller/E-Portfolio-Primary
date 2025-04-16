// service_js40s9s
// template_wss5nnd
// 2oRTUQrHpH8BsiEhE

// animateShapes(mouseMovement)


let contrastStatus = false;
let isModalOpen = false;
const scaleFactor = 1 / 20;
const domBody = document.getElementById(`root`);


function toggleContrast() {
    contrastStatus = !contrastStatus;
    if (contrastStatus) {
        document.body.classList += ` dark_theme`;
    }
    else {
        document.body.classList.remove(`dark_theme`);
    }
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove(`modal--open`);
    }
    isModalOpen = true;
    document.body.classList += ` modal--open`;
}


function contact(email_submit) {
    email_submit.preventDefault();
    const loading = document.querySelector(`.modal__overlay--loading`);
    const success = document.querySelector(`.modal__overlay--success`);
    loading.classList += ` modal__overlay--visible`
    
    emailjs
        .sendForm(
            `service_js40s9s`,
            `template_wss5nnd`,
            email_submit.target,
            `2oRTUQrHpH8BsiEhE`
        ).then(() => {
            loading.classList.remove(`modal__overlay--visible`);
            success.classList += ` modal__overlay--visible`;
        }).catch(() => {
            loading.classList.remove(`modal__overlay--visible`);
            alert[
                `The e-mail service is currently unavailable.
                Please, contact me directly via jasondoroughonfb@live.com.`
            ];
        });
}


domBody.addEventListener(`mousemove`, (e) => animateShapes(e));

function animateShapes(mouseMovement) {
    const allShapes = document.querySelectorAll(`.animating_shape`);
    const x = mouseMovement.clientX * scaleFactor;
    const y = mouseMovement.clientY * scaleFactor;

    for (let i = 0; i < allShapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const booleanInteger = isOdd ? -1 : 1;
        allShapes[i].style.transform = `translate(${x * booleanInteger}px, ${y * booleanInteger}px) 
        rotate(${x * booleanInteger * 10}deg)`;
    }
}


let contrastStatus2 = false;
let isModalOpen2 = false;
const scaleFactor2 = 1 / 20;
const domBody2 = document.getElementById(`root`);