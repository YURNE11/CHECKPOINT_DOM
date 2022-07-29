
//Augmenter la quantité
let plus = document.querySelector('.plus');

    plus.onclick = () => {
        let currentInputBox = plus.previousElementSibling;
        currentInputBox.value =  parseInt(currentInputBox.value) + 1;
    }
//Diminuer la quantité
let minus = document.querySelector('.minus');
    minus.onclick = function(){
        let currentInputBox = minus.nextElementSibling;
        if (currentInputBox.value > 0){
            currentInputBox.value =  currentInputBox.value - 1;
        }
    }
//liker un produit
let libliked = document.getElementsByClassName('like');
for(let like of libliked){
    like.onclick = () => {
        if (like.classList = "fa fa-heart like") {
            
        like.classList.remove('fa-heart-o');
        like.classList.add('fa-heart');
        }
        else {
        like.classList.remove('fa-heart');
        like.classList.add('fa-heart-o');
        }
    }
}
//calcul du montant de la facture
let total_price = 0;
let prod1 = document.getElementById('1');
let prod2 = document.getElementById('2');
let prod3 = document.getElementById('3');
let prod4 = document.getElementById('4');
prod1.onclick = () => {
    total_price += 30000;
    cal();
}
prod2.onclick = () => {
    total_price += 43000;
    cal();
}
prod3.onclick = () => {
    total_price += 30000;
    cal();
}
prod4.onclick = () => {
    total_price += 60000;
    cal();
}
let total = document.querySelector('.total');
let mttc = document.querySelector('.mttc');
let a = 0;
function cal (){
let tva = 0.18 * total_price;
let a = total_price + tva;
total.textContent = total_price+" FCFA";
mttc.textContent = a +" FCFA";
}

//ajouter a la liste de souhait
let newitem = document.querySelector('.itemadded');
listnewitem = document.querySelector('.listnewitem');
let add = document.querySelector('.add');
add.onclick = () => {
    let productName = document.getElementById('producName').value;
    let productqty = document.getElementById('qty').value; 
    listnewitem.innerHTML += `
    <div class="itemadded" aria-placeholder="Desired product...">
        <div><b>PRODUCT:</b> ${productName}     <b>QUANTITY:</b> ${productqty}</div>
    </div>`; 
}