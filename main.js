let input =document.querySelectorAll("input");
let div =document.getElementById("div1");
let button =document.getElementById("button");
let button2=document.getElementById("button2");
let button3=document.getElementById("button3");
// let inputc=document.getElementById("inputc");
// let inputn=document.getElementById("inputn")
// console.log(inputc.value);
console.log(button3);



clickfunction = ()=>{
   let w=input[0].value;
  let  h=input[1].value;
  let c=input[2].value;
   div.style.width=`${w}px`;
   div.style.height= `${h}px`;
   div.style.background = `${c}`;
   div.style.borderRadius="";
   div.style.display="block";



}
circle=()=>{
    div.style.borderRadius="50%"
}

button.addEventListener("click",clickfunction);
button2.addEventListener("click",circle);
button3.onclick=function(){
    div.style.display="none"
}





