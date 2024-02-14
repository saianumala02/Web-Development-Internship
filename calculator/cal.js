let display = document.getElementById('display');

function addtodisplay(value)
{
    display.value +=value;
}
function clearAll()
{
display.value="";
}
function calculate() {
    try 
    {
      display.value = eval(display.value);
    } 
    catch (error) 
    {
      display.value = 'Error';
    }
  }
  function del() {
    display.value = display.value.slice(0, -1); 
  }

  
