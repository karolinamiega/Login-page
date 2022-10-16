let checkbox = document.querySelector('#checkbox');
let submitButton = document.querySelector('#button');
let form = document.querySelector('#login-form');
let main = document.querySelector('.main');
let sidenav = document.querySelector('.sidenav');
let container = document.querySelector('.container');
let usernameBox = document.querySelector('#name');
let passwordBox = document.querySelector('#password');

checkbox.addEventListener('change', () => {
    btnDisable();
});

const users = [
    {
        userName: 'john112',
        userPassword: '12345'
    },
    {
        userName: 'doe772',
        userPassword: '123456'
    },
    {
        userName: 'mary456',
        userPassword: '789456'
    },
    {
        userName: 'iamfunny',
        userPassword: 'asdfghj'
    },
    {
        userName: 'karolina',
        userPassword: 'nugaraite'
    }

]


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let username = event.target.elements.name.value;
    let password = event.target.elements.password.value;
    
    
    let usersFilter = users.filter(element => element.userName === username && element.userPassword === password);
    console.log(usersFilter.length);
    if(usersFilter.length > 0){
        form.remove();
        sidenav.remove();
        let h1 = document.createElement('h1');
        h1.textContent = 'Sveikiname sėkmingai prisijungus!';
        h1.classList.add('after-login');
        container.append(h1);
    } else{
        let loginErrorElement = document.querySelector('.login-error');
        if(loginErrorElement){
            loginErrorElement.remove();
        }
    }      

    let errorElement = document.createElement('span');
    errorElement.classList.add('login-error');
    errorElement.textContent = 'Slaptažodis ir/arba prisijungimo vardas buvo neteisingas.';
    event.target.append(errorElement);
    event.target.password.value = '';
});

usernameBox.addEventListener('input', () => {
    btnDisable();
})
passwordBox.addEventListener('input', () => {
    btnDisable();
})

function btnDisable(){
    if(!checkbox.checked || !usernameBox.value || !passwordBox.value || usernameBox.value.length < 5 || passwordBox.value.length < 11){
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}
    









