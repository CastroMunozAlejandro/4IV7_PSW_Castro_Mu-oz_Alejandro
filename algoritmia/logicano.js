 function problema1(){
    
    var p1_input = document.querySelector('#pt').value;
    var p1_datos = p1_input.split(' ').reverse();

 var fraseversa = ' ';
    fraseversa = p1_datos.forEach(function(palabra,i){
        if (i!=0| i !=p1_datos.length ){
            p1_datos +=''
             p1_datos += palabra
  
        }
  
    }
    )
  

      
 


  document.querySelector('#peros').textContent = fraseversa;     
     
     



  
 }


 function problema2(){
    var p21_input = document.querySelector ('#p2-x1').value;
    var p22_input = document.querySelector ('#p2-x2').value;
    var p23_input = document.querySelector ('#p2-x3').value;
    var p24_input = document.querySelector ('#p2-x4').value;
    var p211_input = document.querySelector('#p2-y1').value;
    var p212_input = document.querySelector('#p2-y2').value;
    var p213_input = document.querySelector('#p2-y3').value;
    var p214_input = document.querySelector('#p2-y4').value;
   
var vectores1 = p21_input * p211_input;
var vectores2 = p22_input * p212_input;
var vectores3 = p23_input * p213_input;
var vectores4 = p24_input * p214_input;


var producto1 = vectores1 + vectores2 + vectores3 + vectores4



document.querySelector('#p2-output').textContent = producto1




 }
    
 


   





//problema 3

function problema3(){
    //definir un albeto
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F',
            'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
            'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
            'V', 'W', 'X', 'Y', 'Z'];

    //Obtener la cadena del input y separar por comas
    
    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    //eliminar el espacio que hay entre cada palabra
    p3_palabras = p3_palabras.map(function (palabra){
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //calcular los caracteres unicos de cada palabra

    var p3_res = '';

    //iterar en cada palabra

    p3_palabras.forEach(function (palabra, i){
        //separar las palabras en un array para leer cada letra
        var letras_unicas = [];
        var palabra_array = palabra.split('');
        //iterar al alfabeto
        alfabeto.forEach(function (letra, j){
            //iterar por palabra
            palabra_array.forEach(function (letra_palabra, k){
                //comprobar que la letra esta dentro del alfabeto
                if(letra_palabra == letra){
                    //si la letra no la hemos contado, la agregamos a un array
                    //para contar las letras unicas
                    if(letras_unicas.indexOf(letra) < 0){
                        letras_unicas.push(letra);
                    }
                }
            });

        });
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });

    document.querySelector('#p3-output').textContent = p3_res;

}  






























