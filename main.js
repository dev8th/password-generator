let options = document.getElementsByClassName("checkbox");

Object.keys(options).forEach(element => {
    options[element].setAttribute("checked",true);
    options[element].addEventListener("click",function(){
        checkTheOptions(options[element]);
    });
});

let randomLength = document.getElementById("length");
let generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click",function(){
    runGen(randomLength.value);
});

let copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click",runCopy);

randomLength.addEventListener("input",changeLength);

function checkTheOptions(option){
    if(option.checked=true){
        option.setAttribute("checked",false);
    }else{
        option.setAttribute("checked",true);
    }
    console.log(option.checked);
}

function changeLength(){
    let randomLength = document.getElementById("length").value;
    document.getElementById("labelLength").innerText = randomLength;
}

function generator(length,options){

    let randomChar ="";
    let char = setChar(options);
    let array = char.split("");
    let arrayLength = array.length;

    for(var i = 0;i<length;i++){
        randomChar += array[Math.floor(Math.random()*arrayLength)];
    }

    return randomChar;

}

function setChar(options){
    let char = "";
    const array = [
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "abcdefghijklmnopqrstuvwxyz",
        "1234567890",
        "@#$%&*()-+=[]{}<>?"
    ];
    for(var i = 0;i<options.length;i++){
        if(options[i]==true){
            char += array[i];
        }
    }

    return char;

}

function runGen(length){

    let num = 0;
    let arrayOptions = [];
    var checkbox = document.getElementsByClassName("checkbox");
    Object.keys(checkbox).forEach(element => {     
        if(options[element].checked==true){
            arrayOptions[num] = true;
        }
        num++;
    });

    let randomChar = generator(length,arrayOptions);
    document.getElementById("output").value=randomChar;
}

function runCopy(){
    let output = document.getElementById("output");
    output.select();
    output.setSelectionRange(0,99999);
    navigator.clipboard.writeText(output.value);

    let notif = document.getElementsByClassName("notif");
    notif[0].style.display = "block";
    setTimeout(function(){
        notif[0].style.display = "none";
    },3000);
}