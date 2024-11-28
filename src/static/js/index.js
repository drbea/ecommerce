



var panier = {}


// console.log("page chargee");
var add_product = document.querySelectorAll(".add_product");
add_product.forEach(button => {
  button.addEventListener("click", function(){
    if (panier[this.id]){
      panier[this.id] += 1;
    }else {
      panier[this.id] = 1;
    }
    document.getElementById("idpanier").innerHTML += 1;
    // alert(panier)
  })
});

panier = document.getElementById("idpanier");
panier.addEventListener("click", function(){
  panier ++;
})


var para = document.createElement("p");
para.id = "new_paragraphe";
para.className = "fs-10 bg-primary mx-auto text-uppercase ";
para.innerHTML = "nouveau paragraphe ajoute";
document.body.querySelector(".div-1").appendChild(para);
