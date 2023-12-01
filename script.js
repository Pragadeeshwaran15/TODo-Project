const form=document.getElementById("exampleModal")
const textinput=document.getElementById("textInput")
const dateinput=document.getElementById("dateInput")
const taskinput=document.getElementById("textarea")
const bodyoftask=document.getElementById("tasks")
const add=document.getElementById("add")
const msg=document.getElementById("msg")


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formvalidations()
})

//!
const formvalidations=()=>{
    if(textinput.value===""){
        msg.innerText=`*Inuput Cannot be Empty`
        
    }
    else{
        msg.innerHTML="";
        getdata()

        add.setAttribute("data-bs-dismiss","modal")
        add.click();

        (()=>{
            add.setAttribute("data-bs-dismiss","") 
        })();
        
    }
}

const data={};

const getdata=()=>{
data["text"]=textinput.value;
data["date"]=dateinput.value;
data["task"]=taskinput.value;
createTODO()
}

const createTODO=()=>{
    bodyoftask.innerHTML +=` <div>
    <span>${data.text}</span>
    <p>${data.date}</p>
    <p>${data.task}</p>
    <span class="options">
      <i onClick="edit(this)" data-bs-toggle="modal" data-bs-target="#exampleModal" class="fa-solid fa-pen-to-square" ></i>
      <i class="fa-solid fa-trash" onClick="del(this)"></i>
    </span>
  </div>
  `
  resetForm();
}
//!reset
const resetForm = () => {
    textinput.value="" ;
    dateinput.value="";
    taskinput.value = "";
}


//!deleting
const del=(e)=>{
 e.parentElement.parentElement.remove(); 
}

//!editing

const edit=(e)=>{
    let task=e.parentElement.parentElement;
    textinput.value=task.children[0].innerHTML;
    dateinput.value=task.children[1].innerHTML;
    taskinput.value=task.children[1].innerHTML;
    console.log("he")
    task.remove();

}
