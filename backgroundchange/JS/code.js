

function changeColor(a) {
   var c =  document.body.style;
    var b = a.options[a.selectedIndex].innerHTML;
    c.backgroundColor = b;
    console.log(c);
}