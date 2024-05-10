let create=document.querySelector(".create");
let notes=document.querySelector(".notes")
let note=document.querySelector(".input")
create.addEventListener("click",createnote);

function updatestorage() {
    localStorage.setItem("note",notes.innerHTML)
}
function showdata() {
    notes.innerHTML=localStorage.getItem("note")
}
showdata();



function createnote() {
   let input=document.createElement("p");
   let copyimg=document.createElement("img");
    let deleteimg=document.createElement("img");
    input.classList.add("input");
    input.setAttribute("contenteditable","true");
    copyimg.src="copy.png"
    deleteimg.src="delete.png"
    copyimg.classList.add("copy");
    deleteimg.classList.add("delete")
    notes.appendChild(input)
    input.appendChild(copyimg);
    input.appendChild(deleteimg);
   
}
// let copybtn=document.querySelector(".copy");

notes.addEventListener("click",(e)=>{
    // console.log(e.target);
    let element=e.target;
    // console.log(element);
    if(element.className==="delete"){
       element.parentElement.remove();
       updatestorage();
    }
    if(element.className==="copy"){
        let input=document.querySelector("p")
        // console.log(input);
        let value=input.innerText;
        if(value){
            navigator.clipboard.writeText(value)
            alert(`${value} has been copied to clipboard`)
        }
       
        // console.log(value);
    }
    else if(element.tagName==="p"){
        note=document.querySelectorAll(".input");
        note.forEach(ele => {
            ele.onkeyup=function(){
                updatestorage()
            }
        });
    }
    
})



