const name = document.getElementById('name');
const subject = document.getElementById('subject');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contact = document.getElementById('contact');
const errorEl = document.getElementById('error');

contact.addEventListener('submit', (e)=> {

    let errors = [];
    let errMessage;

    if(name.value.trim().length < 3){
        errMessage = 'Insira um nome válido';
        setErrorFor(name, errMessage);
        errors.push(errMessage);
    }else{
        setSuccessFor(name);
    };

    if( email.value.trim().length < 3){
        errMessage = 'Insira um email válido';
        setErrorFor(email, errMessage);
        errors.push(errMessage);
    }else if (!isEmail(email.value)) {
        setErrorFor(email, errMessage);
        errors.push(errMessage);
	} else {
		setSuccessFor(email);
	}

    if(subject.value.trim().length < 3){
        errMessage = 'Insira um assunto válido';
        setErrorFor(subject, errMessage);
        errors.push(errMessage);
    }else{
        setSuccessFor(subject);
    };

    if(message.value.trim().length < 3){
        errMessage = 'Insira uma mensagem';
        setErrorFor(message, errMessage);
        errors.push(errMessage);
    }else{
        setSuccessFor(message);
    };
    
    if(errors.length>0){
        e.preventDefault();
    }
});


function setErrorFor(field, errMessage){
    const formGroup = field.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = errMessage;
    formGroup.className = "form-group error";
}

function setSuccessFor(field){
    const formGroup = field.parentElement;
    formGroup.className = "form-group success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



