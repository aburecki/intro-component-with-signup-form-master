const btn = document.querySelector('button');
// const firstName = document.querySelector('input[name="first-name"]');
// const lastName = document.querySelector('input[name="last-name"]');
// const email = document.querySelector('input[name="email"]');
// const password = document.querySelector('input[name="password"]');

const ps = document.querySelectorAll('.container p');
const psTab = [...ps];
psTab.pop();

const imgs = document.querySelectorAll('img');
const imgsTab = [...imgs];

const inputs = document.querySelectorAll('input');
const inputsTab = [...inputs];




function validEmail(email) {
    const reg = /[a-z]+\@+[a-z]+\.+[a-z]{2,}/i;
    return reg.test(email);
}


// btn.addEventListener('click', () => {
//     for (let i = 0; i < inputsTab.length; i++) {
//         if (!inputsTab[i].value) {
//             imgsTab[i].classList.remove('inactive');
//             imgsTab[i].classList.add('error-icon');
//             psTab[i].classList.remove('inactive');
//         } else if (!validEmail(inputsTab[2].value)) {
//             console.log('zawiera nieporprany email');
//             psTab[2].innerHTML = "Looks like this is not an email";
//         } else if (inputsTab[i].value && validEmail(inputsTab[2].value)) {
//             location.reload();
//             console.log('wszystkie inputy uzupełnoine i poprawny email');
//         }
//     }
// })



btn.addEventListener('click', ()=> {
    for (let i = 0; i < inputsTab.length; i++) {
        if(inputsTab[i] && validEmail(inputsTab[2].value)) {
            location.reload();
            console.log('Wszystkie inputy wwypełnione i adres email ok');
        } else if (!inputsTab[i].value) {
            imgsTab[i].classList.remove('inactive');
            imgsTab[i].classList.add('error-icon');
            psTab[i].classList.remove('inactive');
        } else if (!validEmail(inputsTab[2].value)) {
            psTab[2].innerHTML = "Looks like this is not an email";
            imgsTab[2].classList.add('error-icon');
            psTab[2].classList.remove('inactive');
            console.log('adres email błędny');
        } 
    }
})




