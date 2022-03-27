function p1()
{
    var a1 = document.querySelector('#1').value;
    if (a1==' ' || a1== 0){
      alert='dato incorrecto';
      return false;

    }
    var a2 = document.querySelector('#11').value;
    if (a1==' ' && a1 > 48){
        alert='dato incorrecto';
        return false;
  
      }
      var ganancia1 = 0;
      var final1 = 0;
      var a3= 0;
      ganancia1 = parseFloat(a1*2/100);
      
      final1 = ganancia1*a2;
       var a3 = 'el resultado es' + final1;
       document.querySelector('#p-1').textContent= a3






}




function p2(){
    var b1 = document.querySelector('#2').value;
    var b2 = document.querySelector('#22').value;
    if (b1==' '&& b2== ' '){
        alert='dato incorrecto'
        return false;
    }
    if (b1==0 && b2==0){
        alert='dato incorrecto'
        return false;
    }
    var b3 = parseFloat(b1*10/100);
    var b4 = b2*b3;
    var b6 = b4 + b1;

    var b5 = '';
    b5 = 'tu sueldo  total es ' + b6 + 'tu ganancia por las ventas es'+ b4 ;

    document.querySelector('#p-2').textContent = b5;

    







}





function p3(){
    var c1 = document.querySelector('#3').value;
    if (c1==0 || c1==' '){
        alert='dato incorrecto'
        return false;
    }
    var c2 =  parseFloat(c1*15/100);
    var c3 = 'el total de tu compra es' + c2
document.querySelector('#p-3').textContent=c3;
}



function p4(){
    var d1 = document.querySelector('#41').value;
    var d11 = document.querySelector('#4122').value;
    var d111 = document.querySelector('#4133').value;
    
    var d2  = document.querySelector('#42').value;
    var d3 = document.querySelector('#43').value;

    if(d1==0||d2==0||d3==0||d2==' '||d1==' '||d3==''||d3>10||d2>10||d1>10||d3<0||d2<0||d1<0
    ||d111==0||d111==' '||d111<0||d11<0||d11==0||d11==' '|| d111>10||d11>10){
        alert = 'dato incorrecto';
        return false;
    }
    var d4 = d1+d11+d111*0.55
    var d5 = d2*30/100;
    var d6 = d3*15/100;
    var d7= d4 +d5 +d6;
var res = 'tu calif  total es '+ d7
document.querySelector('#p-4').textContent = res 


    



}




function p5(){
    var e1 = document.querySelector('#5').value;
    var e2 = document.querySelector('#55').value;
    if (e1<=0||e2<=0 || e1==' '| e2==' '){
        alert = 'dato incorrecto';
        return false;

    }
    var e3 = e1 + e2;
    var e4 = e1/e3*100;
    var e5 = e2/e3*100;

    var e6 = 'M'+e4+'%  ' +'F'+ e5+'%';
    document.querySelector('#p-5').textContent =e6



}
function p6()
{
f1 = document.querySelector('#6').value;
f2 = document.querySelector('#66').value;
if (f1<=0||f2<=0 || f1==' '| f2==' '){
    alert = 'dato incorrecto';
    return false;

}
if (f1>=f2){lert = 'dato incorrecto';
return false;}
f3 = f2 - f1;
f4 = 'tu edad es '+ f3
document.querySelector('#p-6').textContent = f4

}
