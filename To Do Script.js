var buttons=document.getElementById("enter");
var inputvalid=document.getElementById("text");
var ullist=document.querySelector("ul");

function textlenght(){
    return inputvalid.value.length;
}
function CreatElementList(){
    var li=document.createElement("li");
    var text=inputvalid.value;
    li.appendChild(document.createTextNode(inputvalid.value));
    ullist.appendChild(li);
    inputvalid.value="";
    function OutPut(){
        li.classList.toggle("done");
    }
    li.addEventListener("click",OutPut);
    var btn=document.createElement("button");
    btn.appendChild(document.createTextNode("X"));
    li.appendChild(btn);
    btn.addEventListener("click",deleteditem);
    function deleteditem(){
        li.remove();
    }
}
function addli(){
    if(textlenght()>0){
        CreatElementList();
    }
}
function addpresskey(event){
    if(textlenght()>0 && event.which===13){
        CreatElementList();
    }
}
buttons.addEventListener("click",addli);
inputvalid.addEventListener("keypress",addpresskey);