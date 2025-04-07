// service_js40s9s
// template_wss5nnd
// 2oRTUQrHpH8BsiEhE

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(`.modal__overlay--loading`);
    const success = document.querySelector(`.modal__overlay--success`);
    loading.classList += ` modal__overlay--visible`
    
    emailjs
        .sendForm(
            `service_js40s9s`,
            `template_wss5nnd`,
            event.target,
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