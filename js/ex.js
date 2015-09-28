
var left;
var right;
var a;
window.onload = function(){
  
 left = document.querySelector(".long-rect");
  right = document.querySelector(".short-rect");
  
  left.addEventListener("mouseover" , function() {  
    a=true;
     right.innerText = "Mouse over the left";                
    
 right.addEventListener("click", function(){
  if(a==true)
    {
      alert("click")
      a = false;
    } 
 }) ;        
  });
  
  left.addEventListener("mouseout", function(){
    right.innerText = "Mosuse is inside";
    
  });
  
};

