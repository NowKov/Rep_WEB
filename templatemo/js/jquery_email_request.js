"use strict"


document.addEventListener('DOMContentLoaded',function(){
    const contact=document.getElementById('contact');
    contact.addEventListener('submit',formSend)

    async function formSend(e){
        e.preventDefault();

        let error = formValidate(contact);
    }

    function formValidate(contact){
        let error = 0;
        let formReq=document.querySelectorAll('._req');

        for(let index=0; index<formReq.length;index++){
            const input = formReq[index];

            formRemoveError(input);

            if(input.classList.contains('_email')){
                formAddError(input);
                error++;
            }
            else{
                if(input.value===''){
                    formAddError(input);
                    error++;
                }
            }
        }

    }

    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)*(\.w{2,8})+$/.test(input.value);
    }
});