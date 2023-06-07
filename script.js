 



  const email = document.querySelector('#email');
const submit=document.querySelector('#submit');
const email1 = document.querySelector('#email1');
const submit1 =document.querySelector('#submit1');

submit.addEventListener('click',()=>{
    if(email.validity.typeMismatch){
      document.getElementById("demo").innerHTML = "Please check your email.";
    }
    
    else{
      document.getElementById("demo").innerHTML = " "; 
    }
})



submit1.addEventListener('click',()=>{
  if(email1.validity.typeMismatch){
    document.getElementById("demo1").innerHTML = "Please check your email.";
  }
  
  else{
    document.getElementById("demo1").innerHTML = " "; 
  }
})
