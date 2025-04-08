// service_js40s9s
// template_wss5nnd
// 2oRTUQrHpH8BsiEhE


let isModalOpen = false;
let toggleContrast = false;


function toggleContrast() {
    contrastStatus = !contrastStatus;
    if (contrastStatus) {
        document.body.classList += ` dark_theme`;
    }
    else {
        document.body.classList.remove(`dark_theme`);
    }
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


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove(`modal--open`);
    }
    isModalOpen = true;
    document.body.classList += ` modal--open`;
}