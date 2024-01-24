let inputbox = document.querySelector(".inputbox");
let btn = document.querySelector(".btn");
let resultof = document.querySelector(".resultof");
let Number_regex = '^([1-9][0-9]{0,2}|1000)$';
let btn2 = document.querySelector(".btn2");

btn.addEventListener("click" , function(){

     if ( inputbox.value == "" ){

        alert("please Enter Your Number");
     }
     
     else if ( !(inputbox.value.match(Number_regex)) ){

        resultof.innerHTML = "Please Enter Your Valid Number";
        resultof.style.opacity = "1";
     }

     else{

        for( i = 1; i <= 10; i++  ){

            resultof.innerHTML += inputbox.value + " x " + i + " = " + inputbox.value * i + "<br>";
            resultof.style.opacity = "1"
        }
     }
});


btn2.addEventListener("click" , function(){

    inputbox.value = location.reload();
})