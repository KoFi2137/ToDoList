let lista = [];

let elementInput = document.querySelector("#item");
let mainDiv = document.querySelector(".downdiv");
let ADD = document.querySelector(".up");
let EDIT = document.querySelector(".edit");
let removeButtonAll = document.querySelector(".remove")
let klasaAlert = document.querySelector(".alert")  

function displayList() {
    let counter = -1;
    mainDiv.innerHTML=lista.map(todo=> {
        counter ++;
        return(
            `
            <div class="divmap">
                <p class="todoboard">${todo}</p>
                <div>
                    <button  onclick="removeItem(${counter})" >x</button>
                    <button  onclick="confirmItem()" >v</button>
                    <button  onclick="editItem(${counter})">e</button>
                </div>
            </div>
            `
        )
    }
    
    ).join("")
}


let addItem=()=> {
    if(elementInput.value.length>0){
        lista.push(elementInput.value)
        klasaAlert.classList.remove("invisible")
        klasaAlert.innerHTML=`Item ${elementInput.value} had been added`
        setTimeout(()=>{ 
            klasaAlert.classList.add("invisible")
        },1500)
        displayList()
        elementInput.value=""
    }else{
        alert("write something")
    }
}

let removeAll=()=> {
    let potwierdzenie = confirm("Are you sure you want to delate all items ?")
    if(potwierdzenie===true){
        lista.length=0;
        klasaAlert.classList.remove("invisible")
        klasaAlert.innerHTML=`All items had been delated`
        setTimeout(()=>{ 
            klasaAlert.classList.add("invisible")
        },1500)
        displayList();
    }
}
let removeItem=(nbr)=> {
    klasaAlert.classList.remove("invisible")
    klasaAlert.innerHTML=`Item ${lista[nbr]} had been removed`
    lista.splice(nbr,1)
    setTimeout(()=>{ 
        klasaAlert.classList.add("invisible")
    },1500)
    displayList();
}
let confirmItem=(nbr)=> {
    let paragraf = event.target.parentElement.parentElement.children[0];
    paragraf.classList.toggle("comfirm");
}
let editItem=(nbr)=> {
    elementInput.value = lista[nbr]
    ADD.classList.add("invisible")
    EDIT.classList.remove("invisible")
    EDIT.addEventListener("click",()=> changetxt(nbr))
}
let changetxt=(nbr)=> {
    lista[nbr] = elementInput.value
    EDIT.classList.add("invisible")
    ADD.classList.remove("invisible")
    elementInput.value=""
    displayList();
}

ADD.addEventListener("click",addItem);
removeButtonAll.addEventListener("click", removeAll);
