const btnModal = document.querySelector('#btn-modal');
const btnForm = document.querySelector('#btnmodal');
const btnCloseModal = document.querySelector('.btn-closeModal');
const modal = document.querySelector('.section-modal');
const nameInput = document.querySelector('#name').value;
const emailInput = document.querySelector('#email').value;
const telInput = document.querySelector('#tel').value;
const messageInput = document.querySelector('#message').value;
document.addEventListener('DOMContentLoaded', () => {
    btnModal.addEventListener('click', activarModal);
    btnCloseModal.addEventListener('click', desactivarModal)
    btnForm.addEventListener('click', validarFormulario);
});

function activarModal() {
    if (btnModal) {
        modal.classList.remove('noVisible');
        modal.classList.add('visible');
    }
}
function desactivarModal(e) {
    console.log(e.target);
    modal.classList.remove('visible');
    modal.classList.add('noVisible');

}

function validarFormulario(){

    if(nameInput === '') return mostrarAlerta('All inputs are required' ,'error');
 
    if(emailInput === '') return mostrarAlerta('All inputs are required' ,'error');
 
    if(telInput === '') return mostrarAlerta('All inputs are required' ,'error');
 
    if(messageInput === '') return mostrarAlerta('All inputs are required' ,'error');
    
    return mostrarToast();

}

function mostrarAlerta(mensaje,tipo){
    console.log(btnForm);
    if(tipo === 'error'){
        const alertaParrafo = document.createElement('P');
        alertaParrafo.className = 'p-3 text-red bg-danger text-white fw-bold mt-2 mb-2';
        alertaParrafo.textContent = mensaje;

        document.querySelector('.form legend').appendChild(alertaParrafo);

        setTimeout(() => {
            alertaParrafo.remove();
        }, 3000);
    }
}

function mostrarToast() {

    

    const toastDiv = document.querySelector('#toast');
    const toastBody = document.querySelector('.toast-body');
    const toast = new bootstrap.Toast(toastDiv);

    toastBody.textContent = 'Email sent sucessfully!!';

    toast.show();
        setTimeout(() => {
            // <input type="hidden" name="_next" value="https://portfoliojakefernandez.netlify.app/">
              window.location.href = "https://portfoliojakefernandez.netlify.app/";    
        }, 3000);
   

    console.log('hecho');

}