// function calculateT(){
//     let y = parseFloat(document.getElementById("f").value);
//     let i = parseFloat(document.getElementById("m").value);
//     let result = y * 150.95;
//     let result1 = i * 189.95;
//     document.getElementById("female").innerHTML = result.toFixed(2);
//     document.getElementById("male").innerHTML = result1.toFixed(2);
//     total= result + result1;
//     document.getElementById("total").innerHTML = total.toFixed(2);  
    
// }
function multiply() {
    a = Number(document.getElementById('MQTY').value);
    b = Number(document.getElementById('MPRICE').value);
    c = a * b;
  
    d = Number(document.getElementById('FQTY').value);
    e = Number(document.getElementById('FPRICE').value);
    f = d * e;
    document.getElementById('MTOTAL').value = c.toFixed(2);
    document.getElementById('FTOTAL').value = f.toFixed(2);
  
  }