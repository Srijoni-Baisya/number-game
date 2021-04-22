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
function verify(){
   get_whole_number = document.getElementById("whole_no").value;
   whole_number = parseInt(get_whole_number);
   console.log(whole_number);
   var factors = [];

   for(i=1;i<=whole_number;i++){
      if(whole_number%i==0){
         factors.push(i);
      }
   }
   console.log(factors);
  
   length_of_array = factors.length;
   console.log(length_of_array);

   if(length_of_array==2){
      console.log("prime");
      document.getElementById("info").style.display="inline-block";
      document.getElementById("info").innerHTML="It is a prime number";
   }
   else{
      console.log("composite");
      document.getElementById("info").style.display="inline-block";
      document.getElementById("info").innerHTML="It is a composite number";
   }
}