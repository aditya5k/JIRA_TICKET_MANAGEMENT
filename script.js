// const {  } = require("puppeteer");

let addbtn=document.querySelector(".add-btn");
let modal=document.querySelector(".modal-cont");
let addmodal=true;
let del=false;
let deletebtn=document.querySelector(".remove-btn");
let taskarea=document.querySelector(".text-cont");
let maincont=document.querySelector(".main-cont");
let allprioritycolours = document.querySelectorAll(".priority-colour");
let modalpriritycolour='bl';
addbtn.addEventListener('click',function(){
    if(addmodal){
    modal.style.display="flex";}
    else{
        modal.style.display="none";
    }
    addmodal= !addmodal;
})
for(let i=0;i<allprioritycolours.length;i++){
    let allprioritydivonecolour=allprioritycolours[i];
    allprioritydivonecolour.addEventListener("click",function(){
        
        for(let j=0;j<allprioritycolours.length;j++){
            allprioritycolours[j].classList.remove("active");
        }
        allprioritydivonecolour.classList.add("active");
        modalpriritycolour=allprioritydivonecolour.classList[0];
    })
}
modal.addEventListener("keydown",function(e){
    let key =e.key;
    if(key=='Enter'){
        createticket(modalpriritycolour,taskarea.value);
        taskarea.value="";
        modal.style.display="none";
        addmodal=!addmodal;
    }
})
deletebtn.addEventListener("click",function(){
    if(del){
        deletebtn.style.color ='black'
    }else{
        deletebtn.style.color='red'
    }
    del=!del;
})


function createticket(ticketcolour,task){
    let ticketcont = document.createElement("div");
    ticketcont.setAttribute('class','ticket-cont');
    ticketcont.innerHTML=`<div class="ticket-colour ${ticketcolour}"></div>
                          <div class="ticket-id">#qzu03</div></div>
                          <div class="task-area">${task}</div>`

    maincont.appendChild(ticketcont);
    ticketcont.addEventListener("click",function(){
        if(del){
            ticketcont.remove();
        }
    })
    
}