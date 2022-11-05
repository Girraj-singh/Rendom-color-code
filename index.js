 function getCode()
{
   const rendomNumber = Math.floor(Math.random()*16777215)
   const randomCode = "#"+rendomNumber.toString(16)
    
  
   console.log(rendomNumber,randomCode)

   colorCode.innerHTML=randomCode
   color.style.backgroundColor=randomCode
   navigator.clipboard.writeText(randomCode)
}

// document.getElementById("btn").addEventListener(
//     "click",getCode
// )