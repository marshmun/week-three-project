var btn = document.querySelectorAll(".btn");
var clear = document.querySelector('.clear');
var equals = document.querySelector('.equals')
var display = document.querySelector('.display')
var operators = document.querySelector('.operator')
var operator = ['/', 'x', '+,' - ''];


for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (e) {
        var value = e.target.innerHTML;
        display.innerHTML += value;
        console.log("value:", value);
    });
}

clear.addEventListener("click", function (e) {
    display.innerHTML = '';
});

// for (var i = 0; i < operators.length; i++) {
//     operators[i].addEventListener('click', function (e) {
//         var value = e.target.innerHTML;
//         display.innerHTML += value;
//     });
// }

equals.addEventListener('click', function (e) {
    var value = display.innerHTML;
    var total = eval(value);
    console.log('total:', total);
});

