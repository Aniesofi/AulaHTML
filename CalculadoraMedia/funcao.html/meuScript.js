function calcular(valor) {
    return valor * 365;
}
function imprime(resp) {
    document.getElementById('resultado').textContent = "sua idade em dias é:" + resp;

}
document.getElementById('calcularIdade').addEventListener('click', function () {
    let idade = parseInt(document.getElementById("idadeInput").value);
    let total = calcular(idade);
    imprime(total);
});


