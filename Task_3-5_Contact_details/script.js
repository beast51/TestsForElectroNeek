let btn = document.createElement('div');
btn.innerHTML = '+';
btn.classList.add('phoneAddBtn');
document.querySelector('.phoneNumber .form-field').appendChild(btn);

let count = 1;
btn.onclick = () => {
    let div = document.createElement('div');
    div.classList.add('form-field', `phoneNumber-${count}`);
    let inp = document.createElement('input');
    inp.setAttribute('type', "number");
    inp.setAttribute('placeholder', "+380");
    inp.setAttribute('name', `phoneNumber-${count}`);
    document.querySelector(`.phoneNumber`).appendChild(div);
    document.querySelector(`.phoneNumber-${count}`).appendChild(inp);
    document.querySelector(`.phoneNumber-${count}`).appendChild(btn);
    count++;
};

let user_1 = new Person('Zveryanskiy Yuriy Igorevich', +380949530500, 'employee of the year');
document.getElementById('submit').onclick = () => user_1.send();





