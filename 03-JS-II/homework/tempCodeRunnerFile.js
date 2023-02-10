
function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  
  function tieneTresDigitos(numero){
  
    let num1 = numero.toString().length
    
    if(num1 === 3){
      return true
      
    }else{
      return false
    }
    
    
  }
  
  
}

console.log(tieneTresDigitos(100))