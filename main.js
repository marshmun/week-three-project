var btn = document.querySelectorAll(".btn");
var clear = document.querySelector('.clear');
var equals = document.querySelector('.equal')
var operators = ['/', 'x', '+,' - ''];


for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (e) {
        var value = e.target.innerHTML;
        console.log("value:", value);
    });
}


