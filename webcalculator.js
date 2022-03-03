window.onload = function()
{
    let waitForInput = false;
    const display = document.querySelector(".display");
    const buttons = document.querySelectorAll(".button");
    for(var i=0; i<buttons.length;i++)
    {
        buttons[i].addEventListener("click", initButtonclick,false)
    }
    function initButtonclick(e)
    {
        if(waitForInput==true)
        {
            display.innerText = "";
            waitForInput=false;
        }
        switch(e.target.innerText)
        {
            case "C":
                display.innerText = "";
                break;
            case "←":
                display.innerText = display.innerText.slice(0,-1);
                break;
            case "=":
                try
                {
                    if(typeof(eval(display.innerText))==="number")
                    {
                        display.innerText = eval(display.innerText);
                    }
                    else if(display.innerText!=""){
                        alert("not a number");
                    }
                }
                catch{
                    display.innerText = "Error!";
                    waitForInput=true;
                }
                break;
            default:
                display.innerText = display.innerText + e.target.innerText;
            
        }
    }
}

