function add(){
    var input= parseInt(document.getElementById('item').value);
    var input1 = parseInt(document.getElementById('item1').value);
    var r = input + input1;
    document.getElementById('show').innerHTML=r;
} 

function sub(){
    var input= parseInt(document.getElementById('item').value);
    var input1 = parseInt(document.getElementById('item1').value);
    var r = input - input1;
    document.getElementById('show').innerHTML=r;
}

function mul(){
    var input= parseInt(document.getElementById('item').value);
    var input1 = parseInt(document.getElementById('item1').value);
    var r = input * input1;
    document.getElementById('show').innerHTML=r;
}

function div(){
    var input= parseInt(document.getElementById('item').value);
    var input1 = parseInt(document.getElementById('item1').value);
    var r = input / input1;
    document.getElementById('show').innerHTML=r;
}