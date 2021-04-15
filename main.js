function check(){
   get_number = document.getElementById("number").value;
   number = parseInt(get_number);

   remainder = number % 2;
   console.log("Remainder = "+remainder);

   if(remainder==0){
      document.getElementById("output").style.display="inline-block";
      document.getElementById("output").innerHTML="It is an even number";
   }
   else{
      document.getElementById("output").style.display="inline-block";
      document.getElementById("output").innerHTML="It is an odd number";
   }
}