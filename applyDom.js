// var items = [
//     {name: 'Chemise 1', image: './images/chemise 1.jpg', price: 15000, quantite_commande: 1, total: 15000},
//     {name: 'Chemise 2', image: './images/chemise 1.jpg', price: 10000, quantite_commande: 1, total: 10000},
//     {name: 'Polo', image: './images/polo 1.jpg', price: 7500, quantite_commande: 1, total: 7500},
//     {name: 'Sac', image: './images/Sac 1.jpg', price: 18000, quantite_commande: 1, total: 18000},
// ]

// const tbody = document.getElementsByTagName('tbody');


// const buildRow = (item = {name: '-', image: '-', price: 0, quantite_commande: 0, total: 0}) => {
//     return `
//         <tr>
//             <td class="py-4">
//                 <div class="flex items-center">
//                     <img class="h-16 w-16 mr-4" src="${item.image}" alt="Product image">
//                     <span class="font-semibold"> ${item.name} </span>
//                 </div>
//             </td>
//             <td class="py-4"> ${item.price} </td>
//             <td class="py-4">
//                 <div class="flex items-center">
//                     <button class="border rounded-md py-2 px-4 mr-2"> - </button>
//                     <span class="text-center w-8"> ${item.quantite_commande} </span>
//                     <button class="border rounded-md py-2 px-4 ml-2"> + </button>
//                 </div>
//             </td>
//             <td class="py-4"> ${item.total} </td>
//         </tr>
//     `
// }

// document.addEventListener('DOMContentLoaded', function() {
//     // console.log('tbody: ', tbody)
//     // tbody.appendChild(document.createElement('h1'))
//     document.body.appendChild(  document.createElement('<h1>Shopping Cart</h1>'));
//  }, false);

// window.onloadeddata = (event) => {
//     for (let data of items) {
//         // console.log('tbody: ', tbody)
//         // document.tbale.tbody.appendChild(buildRow(data))
//         // tbody.appendChild(buildRow(data))
//         // tbody.appendChild(document.createElement('h1'))
//     }
// };

var prix_1 = Number(document.getElementById('prix_1').innerText);
var prix_2 = Number(document.getElementById('prix_2').innerText);
var qty_1 = Number(document.getElementById('qty_1').innerText);
var qty_2 = Number(document.getElementById('qty_2').innerText);
var total_1 = Number(document.getElementById('total_1').innerText);
var total_2 = Number(document.getElementById('total_2').innerText);

//Button plus et moins pour élément 1
document.getElementById('btn_plus_1').addEventListener('click', () => {
    document.getElementById('qty_1').innerText = Number(document.getElementById('qty_1').innerText) + 1;
    document.getElementById('total_1').innerText = Number(document.getElementById('prix_1').innerText) * Number(document.getElementById('qty_1').innerText);
    //Valeur du subtotal
    document.getElementById('subtotal').innerText = Number(document.getElementById('total_1').innerText) + Number(document.getElementById('total_2').innerText);
    document.getElementById('taxes').innerText = Number(document.getElementById('subtotal').innerText) * 0.05;

    //taxes
    document.getElementById('taxes').innerText = Number(document.getElementById('subtotal').innerText) * 0.05;

    // total
    document.getElementById('total').innerText = Number(document.getElementById('subtotal').innerText) + Number(document.getElementById('taxes').innerText) + Number(document.getElementById('shipping').innerText);

})

document.getElementById('btn_moins_1').addEventListener('click', () => {
    document.getElementById('qty_1').innerText = Number(document.getElementById('qty_1').innerText) - 1;
    document.getElementById('total_1').innerText = Number(document.getElementById('prix_1').innerText) * Number(document.getElementById('qty_1').innerText);
    // valeur du subtotal
    document.getElementById('subtotal').innerText = Number(document.getElementById('total_1').innerText) + Number(document.getElementById('total_2').innerText);

    //taxes
    document.getElementById('taxes').innerText = Number(document.getElementById('subtotal').innerText) * 0.05;

    // total
    document.getElementById('total').innerText = Number(document.getElementById('subtotal').innerText) + Number(document.getElementById('taxes').innerText) + Number(document.getElementById('shipping').innerText);
})

//Button plus et moins pour élément 2
document.getElementById('btn_plus_2').addEventListener('click', ()  => {
    document.getElementById('qty_2').innerText = Number(document.getElementById('qty_2').innerText) + 1;
    document.getElementById('total_2').innerText = Number(document.getElementById('prix_2').innerText) * Number(document.getElementById('qty_2').innerText);
    //Valeur du subtotal
    document.getElementById('subtotal').innerText = Number(document.getElementById('total_1').innerText) + Number(document.getElementById('total_2').innerText);

    //taxes
    document.getElementById('taxes').innerText = Number(document.getElementById('subtotal').innerText) * 0.05;

    // total
    document.getElementById('total').innerText = Number(document.getElementById('subtotal').innerText) + Number(document.getElementById('taxes').innerText) + Number(document.getElementById('shipping').innerText);
    
})

document.getElementById('btn_moins_2').addEventListener('click', ()  => {
    document.getElementById('qty_2').innerText = Number(document.getElementById('qty_2').innerText) - 1;
    document.getElementById('total_2').innerText = Number(document.getElementById('prix_2').innerText) * Number(document.getElementById('qty_2').innerText);
    // valeur du subtotal
    document.getElementById('subtotal').innerText = Number(document.getElementById('total_1').innerText) + Number(document.getElementById('total_2').innerText);

    //taxes
    document.getElementById('taxes').innerText = Number(document.getElementById('subtotal').innerText) * 0.05;

    // total
    document.getElementById('total').innerText = Number(document.getElementById('subtotal').innerText) + Number(document.getElementById('taxes').innerText) + Number(document.getElementById('shipping').innerText);
})



    //valeur pas default
    document.getElementById('subtotal').innerText = total(prix_1, qty_1) + total(prix_2, qty_2); //subtotal par defaut 
    document.getElementById('taxes').innerText = Number(document.getElementById('subtotal').innerText) * 0.05; //taxes par defaut

    document.getElementById('total').innerText = Number(document.getElementById('subtotal').innerText) + Number(document.getElementById('taxes').innerText) + Number(document.getElementById('shipping').innerText); //total par defaut


//console.log('prix_1: ', prix_1 * qty_1);

function majTotal_1 () {
    document.getElementById('total_1').innerText = total(prix_1, qty_1);
}
function majTotal_2 () {
    document.getElementById('total_2').innerText = total(prix_2, qty_2);
}

function total (prix = 0, qty = 0) {
    return prix * qty;
}

function majAllTotal () {
    majTotal_1()
    majTotal_2()
    
}

document.addEventListener('DOMContentLoaded', function() {
         majAllTotal();
});

document.getElementById('heart').addEventListener('click', () => {
      document.getElementById('heart').classList.toggle('text-red-500');
        //document.getElementById('heart').style.color = 'red';
       // document.getElementById('coeur1').style.color = 'red';
    // document.getElementById('coeur1').style.backgroundColor('#ff0000');
})

document.getElementById('heart2').addEventListener('click', () => {
    document.getElementById('heart2').classList.toggle('text-red-500');
   
})






