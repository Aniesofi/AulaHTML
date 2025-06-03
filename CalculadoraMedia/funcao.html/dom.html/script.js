let contadorElemento = document.getElementById("contador");
let botaoIncrementar = document.getElementById("incrementar");
let botaoDecrementar = document.getElementById("decrementar");

let contador = 0;

function atualizarContador() {
    contadorElemento.textContent = contador;
    if(contador<0) contador  = 0;
    if(contador>9) contador = 9;
    contadorElemento.style.color=contador <0?"red":"black";
    contadorElemento.textContent=contador/;


}

botaoIncrementar.addEventListener("click", function () {
    contador++;
    atualizarContador();

});

botaoDecrementar.addEventListener("click", function () {
    contador--;

    atualizarContador();

});
atualizarContador();
