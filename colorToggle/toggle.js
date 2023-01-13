
// function for toggling between colors
function toggleFunction() 
{
    var items = document.getElementById("colors");

    if (items.style.display === "block")  {
      items.style.display = "none";
    } else {
      items.style.display = "block";
  }
};

// clearing colors after selecting
function clearColors()
{
  bodycolor.classList.remove('buttonClass0', 'buttonClass1', 'buttonClass2', 'buttonClass3','buttonClass4')
}

// adding CSS class in each radiobtn
var changeColor0 = document.getElementById('radiobtn0');
changeColor0.addEventListener("click",function()
{
  clearColors();
  bodycolor.classList.add('buttonClass0');
  toggleFunction();
});

var changeColor1 = document.getElementById('radiobtn1');
changeColor1.addEventListener("click",function()
{
     clearColors();
  bodycolor.classList.add('buttonClass1');
  toggleFunction();
});

var changeColor2 = document.getElementById('radiobtn2');
changeColor2.addEventListener("click",function()
{
  clearColors();
  bodycolor.classList.add('buttonClass2');
  toggleFunction();
});

var changeColor3 = document.getElementById('radiobtn3');
changeColor3.addEventListener("click",function()
{
  clearColors();
  bodycolor.classList.add('buttonClass3');
  toggleFunction();
});

var changeColor4 = document.getElementById('radiobtn4');
changeColor4.addEventListener("click",function()
{
  clearColors();
  bodycolor.classList.add('buttonClass4');
  toggleFunction();
});
