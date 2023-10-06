import throttle from "lodash.throttle";


const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[type="email"]');
const message = document.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onRestart);

const LOCALSTORAGE_KEY = 'feedback-form-state';

let formData = {
    email: '',
    message: '',
  };
// масив для збереження даних
let formContent = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

isSaved();

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function isSaved() {
    const savedForm = formContent;
    if (savedForm) {
        formData = savedForm;
        email.value = savedForm.email || '';
        message.value = savedForm.message || '';
    }

}

function onRestart(evt) {
evt.preventDefault();
localStorage.removeItem('LOCALSTORAGE_KEY');      
// щоб видалити все
// localStorage.clear();
evt.currentTarget.reset();
    console.log(formData);

}














