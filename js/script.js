'use strcikt'

function nameOutput () {
    let userName = prompt('input your name, please!');
    alert(`Привет, ${userName}!`);
}

// nameOutput();

function ageUser () {
    const thisYear = 2020;

    let yearBirthUser = + prompt('В каком году вы родились?');
    let ageUser = thisYear-yearBirthUser;

    alert('Вам ' + ageUser + ' лет.');
}

// ageUser();

function squareArea () {
    const sideSquare = + prompt('Введите длину стороны квадрата');
    const area = sideSquare * 4;

    alert('Периметр квадрата равен ' + area);
}

// squareArea();

function circleArea () {
    const P = 3.14;
    const radius = + prompt('Введите радиус круга');

    const area = radius * P;

    alert (`Радиус круга равен ${area}.`)
}

function speedCanculation () {
    const distance = + prompt('Введите растояние которое вам необходимо преодолеть (в километрах).');
    const time = + prompt('Введите время за которое вы хотите добраться (в часах).');
    
    alert (`Вам нужно двигаться со скростью ${distance / time} км/ч.`);
}

// speedCanculation();

function currencyConverter () {
    const rateEUR = 0.89;

    let quantityUSD = + prompt('Введите колчиество доларов США');
    const quantityEUR = quantityUSD * rateEUR;

    alert(`${quantityUSD} USD = ${quantityEUR} EUR`);
}

// currencyConverter();

function USBControl () {
    const fileSize = 820;

    const usbSize = 1024 * ( + prompt('Введите размер флешки в Гб'))
    const quantityFile = usbSize / fileSize - (usbSize / fileSize) % 1;

    alert(quantityFile + ` Файлов можно вместить на данной флеш-карте`);
}

// USBControl();

function chocolateCalculator () {
    const moneyUser = + prompt('Количество денег в кошельке');
    const costChocolate = + prompt('Введите стоимость шиколадки.');

    const surrender = moneyUser / costChocolate % 1;
    const quantityChocolste = moneyUser / costChocolate - surrender;
    
    alert(quantityChocolste + ` плитки шиколада можно купить на ваши деньги и при этом останется у вас ${surrender} денег`);
}

// chocolateCalculator();

function invertedNumber () {
    let userNumber = + prompt('Введите 3-х значное число.');

    const firstNumber = userNumber % 10;
    userNumber = (userNumber - firstNumber) / 10;

    const secondNuber = userNumber % 10;
    userNumber = (userNumber - secondNuber) / 10;

    const lastNumber = userNumber % 10;

    alert('Ваше новое числа =' + firstNumber + secondNuber + lastNumber);
}

// invertedNumber();
