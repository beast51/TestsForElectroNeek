//1. Разработать функцию сортировки числовых значений в одномерном массиве.
//  а) Функция принимает на вход не сортированный массив, и режим сортировки (по возрастанию или по убыванию)
//  Б) возвращает отсортированный массив

arr = [2, 5, -7, 3, 4, 8, 6];

function sort(arr, method) {
    switch (method) {
        case 'up':
            return arr.sort();
        case 'down':
            return arr.sort((a, b) => b - a);
        default:
            console.log("Укажите метод сортировки 'up' или 'down'");
    }
}

console.log(sort(arr, 'up'));

//2. Построить флаг РФ из символа “О” размером 60х80 символов

function flag() {
    let out = {
        white: document.querySelector('.out-1'),
        blue: document.querySelector('.out-2'),
        red: document.querySelector('.out-3')
    };

    for (let color in out) {
        for (let i = 0; i < 20; i++) {
            for (let k = 0; k < 80; k++) {
                out[color].innerHTML += 'О';
            }
            out[color].innerHTML += '<br>';
        }
    }
}

flag();
