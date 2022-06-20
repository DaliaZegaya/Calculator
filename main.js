let myBtn=Array.from (document.getElementsByClassName("keys"))
let myResult= document.getElementById("result")

// myBtn.addEventListener ("click", ()=> {
//     myResult.innerText+= i.innerText
//     switch (i.innerText) {
//        case "AC": myResult.innerText= " "
//         break
//         default: myResult.innerText+=i.innerText
//     }
// })
// console.log(myBtn);

// myBtn.forEach (item=> {
//     item.addEventListener ("click",(e)=>{
//         switch (e.target.innerText){
//             case "AC": myResult.innerText= ""
//             break;
//             case "x": myResult.innerText+= "*"
//             break;
//             case '%': myResult.innerText += '/'
//             break; 
//             case "=": try { myResult.innerText=  eval(myResult.innerText)}
//             catch{
//                 myResult.innerText= "Error"
//             }
//             break;
//             default: myResult.innerText += e.target.innerText
//         }
//     })
// })


myBtn.forEach (item=> {
    item.addEventListener ("click",(e)=>{
        switch (e.target.innerText){
            case "AC": myResult.innerText= ""
            break;
            case "x": myResult.innerText+= "*"
            break;
            case '%': myResult.innerText += '/'
            break; 
            case "=": someFunc ()
            break;
            default: myResult.innerText += e.target.innerText
        }
    })
})




function someFunc (num1,x,num2) {
if (x == "*"){
   return parseInt(num1) * parseInt(num2)
}
}


