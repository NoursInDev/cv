window.onload = function() {
    var elements = document.querySelectorAll('.skill-part');
    var elements_balance = document.querySelectorAll('.skill-balance');

    for (var i = 0; i < elements.length; i++) {
        var initialFlex = window.getComputedStyle(elements[i]).flex;
        var initialFlex_balance = window.getComputedStyle(elements_balance[i]).flex;
        elements[i].style.flex = "1";
        elements_balance[i].style.flex = "5";

        setTimeout(function(element, element_balance, initialFlex, initialFlex_balance) {
            return function() {
                element.style.flex = initialFlex;
                element_balance.style.flex = initialFlex_balance;
                element.classList.add('transition');
            }
        }(elements[i], elements_balance[i], initialFlex, initialFlex_balance), 50);
    }


}