// Agregar valor 
function agregar(valor){
    document.getElementById('pantalla').value += valor
}
//Vaciar pantalla
function borrar() {
    document.getElementById('pantalla').value = ''
}

//Tomar valor de la pantalla y ejecutar cálculo
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
    
}