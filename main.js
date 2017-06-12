var btn = document.querySelectorAll(".btn");
var clear = document.querySelector('.clear');
var equals = document.querySelector('.equals');
var display = document.querySelector('.display');
var operators = document.querySelector('.operator');
var operator = ['/', '*', '+', '-'];


for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (e) {
        var value = e.target.innerHTML;
        display.innerHTML += value;
        console.log("value:", value);
        // value = value.replace(/x/g, '*');

    });
}

clear.addEventListener("click", function (e) {
    display.innerHTML = '';
});

for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function (e) {
        var value = e.target.innerHTML;
        display.innerHTML += value;
    });
}

equals.addEventListener('click', function (e) {
    console.log(e);
    var value = display.innerHTML;
    console.log(value)
    var total = eval(value);
    display.innerHTML = total;
    console.log('total:', total);
});

