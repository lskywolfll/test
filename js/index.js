

window.onload = function () {


    console.log("hola")
    document.getElementById("sumar").addEventListener("click", (e) => suma())

}


function suma() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    const resultado = parseInt(numero1) + parseInt(numero2);

    alert("La suma es: " + resultado)
}