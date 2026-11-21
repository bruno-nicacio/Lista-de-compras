

var Contador = 1;
function AddItem(){
    
    let InserirItem = document.getElementById("input").value; 
    var limparInput = "";

    if( InserirItem === ""){
        alert("Input Vazio");
    }
    else{
        
        document.getElementById("Lista").innerHTML += `<div id="c${Contador}">
                <p class="NaoMarcado"  id="${Contador}" onclick="MarcarItem(${Contador})">${InserirItem}</p>
                <img src="images/deleteIcon.png" alt="" class="Delete" onclick="DeletarItem(${Contador})">
            </div>`
            document.getElementById(Contador).value = InserirItem;
        input.value = "";
        input.focus();
        
        Contador++
}
    }
    
function MarcarItem(id) {
    var Item = document.getElementById(id);
    const ClassItem = Item.getAttribute('class');

    if(ClassItem == "Marcado"){
        Item.classList.remove("Marcado");
        Item.classList.add("NaoMarcado");
    } else {
        Item.classList.remove("NaoMarcado");
        Item.classList.add("Marcado")
    }
}

function DeletarItem(id) {
    const Item = document.getElementById("c" + id);
    if (!Item) return;

    Item.remove();

    document.getElementById("MSG").innerHTML = `
        <div class="MsgRemovido">
            <img src="images/alerta.png" alt="">
            <p class="TextoRemovido">O item foi removido com sucesso</p>
        </div>`;

    setTimeout(() => {
        document.getElementById("MSG").innerHTML = "";
    }, 5000);
}
