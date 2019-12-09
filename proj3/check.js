var dagger = true;
var link;
var show;

var itemCheck = function () {
if(dagger)
{
    if(w)
    {
        location.href = 'win.html';
    }
    else
    {
        location.href = 'lose.html';
    }
    

}
else
{
    var c = document.getElementById("use");
    c.innerHTML = "You used the garlic!!";
    show = 'END';
    if(!w)
    {
        location.href = 'lose.html';
    }
    else
    {
        location.href = 'win.html';
    }
}

}