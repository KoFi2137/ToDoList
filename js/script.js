let lista = [];

let elementInput = document.querySelector("#item");
let mainDiv = document.querySelector(".downdiv");
let ADD = document.querySelector(".up");
let removeButtonAll = document.querySelector(".remove") 

function displayList() {
    let counter = -1;
    mainDiv.innerHTML=lista.map(todo=> {
        counter ++;
        return(
            `
            <div class="divmap">
                <p id="todboard">${todo}</p>
                <div>
                    <button  onclick="removeItem(${counter})" >x</button>
                    <button>v</button>
                    <button>e</button>
                </div>
            </div>
            `
        )
    }
    
    )
}


let addItem=()=> {
    if(elementInput.value.length>0){
        lista.push(elementInput.value)
        displayList()
        elementInput.value=" "
    }else{
        alert("write something")
    }
}

let removeAll=()=> {
    lista.length=0;
    displayList();
}
let removeItem=(nbr)=> {
    lista.splice(nbr,1)
    displayList();
}

ADD.addEventListener("click",addItem);
removeButtonAll.addEventListener("click", removeAll);
