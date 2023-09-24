let string = "";
let button = document.getElementsByClassName("btn");

Array.from(button).forEach((item)=>{
    item.addEventListener("click", (e)=>{
        if(e.target.innerHTML == "="){
            try{
                string = eval(string);
            document.querySelector("input").value = string;
            }catch(error){
                alert("Your input is invalid!");
            }
            
        }
        else if(e.target.innerHTML == "C"){
            string = "";
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1);
            document.querySelector("input").value = string;
        }
        else{
            console.log(e.target.innerHTML);
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
})

function sin(){
    string = Math.sin(document.querySelector("input").value);
    document.querySelector("input").value = string;
}
function cos(){
    string = Math.cos(document.querySelector("input").value);
    document.querySelector("input").value = string;
}
function tan(){
    string = Math.tan(document.querySelector("input").value);
    document.querySelector("input").value = string;
}
function square(){
    string = Math.pow(document.querySelector("input").value, 2);
    document.querySelector("input").value = string;
}
function cube(){
    string = Math.pow(document.querySelector("input").value, 3);
    document.querySelector("input").value = string;
}
function sqroot(){
    string = Math.sqrt(document.querySelector("input").value, 1/2);
    document.querySelector("input").value = string;
}
function cuberoot(){
    string = Math.pow(document.querySelector("input").value, 1/3);
    document.querySelector("input").value = string;
}
function log(){
    string = Math.log(document.querySelector("input").value);
    document.querySelector("input").value;
}
function pi(){
    string += 3.1416;
    document.querySelector("input").value = string;
}