//console.log(div)

let grid=document.querySelector(".grid")
let button=document.querySelector(".btn")


const select=document.querySelector("#number")
let n=3
 n=parseInt(select.value)

let divs=[];
let div;


let current_element="x"
//array initialization filling wit null 
let arr=Array(n*n).fill(null)
console.log(arr)

   //  grid.innerHTML=""

 for(let i=0;i<n;i++){
     div=document.createElement("div")
   div.classList.add("rows")
   divs.push(div)
     for(let j=0;j<n;j++){   
     let  boxes=document.createElement("div")
     boxes.classList.add("row")
     boxes.onclick=function handel_click(el){
         let id=el.target.id
        if(arr[id]!=null) return
         arr[id]=current_element 
         boxes.innerHTML=current_element
         //checking_winner()
          checking_winner()
         
         current_element=current_element==="x"?"o":"x"
         
     }
     console.log(divs.length)

    div.appendChild(boxes)
     }
     



 }
 for(let i=0;i<n;i++){
     console.log(divs[i])
     grid.appendChild(divs[i])
 }

 let give_id=document.querySelectorAll('.row')
 for(let i=0;i<give_id.length;i++){
     give_id[i].id=i
 }
//game main engine 
function checking_winner(){
 if (arr[0]!==null&&arr[0]==arr[1]&&arr[1]==arr[2]||
     arr[3]!==null&&arr[3]==arr[4]&&arr[4]==arr[5]||
     arr[6]!==null&&arr[6]==arr[7]&&arr[7]==arr[8]||
     arr[0]!==null&&arr[0]==arr[3]&&arr[3]==arr[6]||
     arr[1]!==null&&arr[1]==arr[4]&&arr[4]==arr[7]||
     arr[2]!==null&&arr[2]==arr[5]&&arr[5]==arr[8]||
     arr[0]!==null&&arr[0]==arr[4]&&arr[4]==arr[8]||
     arr[2]!==null&&arr[2]==arr[4]&&arr[4]==arr[6]
 ){
    alert("winner is "+current_element)
    window.location.reload()
 }
 else{
    if(!(arr.some((e)=> e===null ))){
        alert("Draw")
        window.location.reload()
     }
 }

}




button.addEventListener("click",()=>{
    const select=document.querySelector("#number")
    let n=3
     n=parseInt(select.value)
    
    let divs=[];
    let div;
    

    if(n===3){
        let current_element="x"
   //array initialization filling wit null 
   let arr=Array(n*n).fill(null)
console.log(arr)

        grid.innerHTML=""

    for(let i=0;i<n;i++){
        div=document.createElement("div")
      div.classList.add("rows")
      divs.push(div)
        for(let j=0;j<n;j++){   
        let  boxes=document.createElement("div")
        boxes.classList.add("row")
        boxes.onclick=function handel_click(el){
            let id=el.target.id
            arr[id]=current_element 
            boxes.innerHTML=current_element
            checking_winner()
           
            current_element=current_element==="x"?"o":"x"
            
        }
        console.log(divs.length)

       div.appendChild(boxes)
        }
        



    }
    for(let i=0;i<n;i++){
        console.log(divs[i])
        grid.appendChild(divs[i])
    }

    let give_id=document.querySelectorAll('.row')
    for(let i=0;i<give_id.length;i++){
        give_id[i].id=i
    }
 //game main engine 
 function checking_winner(){
    if (arr[0]!==null&&arr[0]==arr[1]&&arr[1]==arr[2]||
        arr[3]!==null&&arr[3]==arr[4]&&arr[4]==arr[5]||
        arr[6]!==null&&arr[6]==arr[7]&&arr[7]==arr[8]||
        arr[0]!==null&&arr[0]==arr[3]&&arr[3]==arr[6]||
        arr[1]!==null&&arr[1]==arr[4]&&arr[4]==arr[7]||
        arr[2]!==null&&arr[2]==arr[5]&&arr[5]==arr[8]||
        arr[0]!==null&&arr[0]==arr[4]&&arr[4]==arr[8]||
        arr[2]!==null&&arr[2]==arr[4]&&arr[4]==arr[6]
    ){
     alert(`${current_element} is Winner`)
     window.location.reload()
    }
    else{
        if(!(arr.some((e)=> e===null ))){
            alert("Draw")
            window.location.reload()
         }
     }
 }




}
  else if(n===4){
    let current_element="x"

   let arr=Array(n*n).fill(null)
console.log(arr)

    grid.innerHTML=""
    for(let i=0;i<n;i++){
        div=document.createElement("div")
      div.classList.add("rows")
      divs.push(div)
        for(let j=0;j<n;j++){   
        let  boxes=document.createElement("div")
        boxes.classList.add("row")
        boxes.onclick=function handel_click(el){
            let id=el.target.id
            arr[id]=current_element 
            boxes.innerHTML=current_element
            checking_winner()
            current_element=current_element==="x"?"o":"x"
            console.log(arr)
        }


        console.log(divs.length)

       div.appendChild(boxes)
        }
        
    }
    for(let i=0;i<n;i++){
        console.log(divs[i])
        grid.appendChild(divs[i])
    }
    let give_id=document.querySelectorAll('.row')
    for(let i=0;i<give_id.length;i++){
        give_id[i].id=i
    }
    function checking_winner(){
        if (arr[0]!==null&&arr[0]==arr[1]&&arr[1]==arr[2]&&arr[2]==arr[3]||
            arr[4]!==null&&arr[4]==arr[5]&&arr[5]==arr[6]&&arr[6]==arr[7]||
            arr[8]!==null&&arr[8]==arr[9]&&arr[9]==arr[10]&&arr[10]==arr[11]||
            arr[12]!==null&&arr[12]==arr[13]&&arr[13]==arr[14]&&arr[14]==arr[15]||
            arr[0]!==null&&arr[0]==arr[4]&&arr[4]==arr[8]&&arr[8]==arr[12]||
            arr[1]!==null&&arr[1]==arr[5]&&arr[5]==arr[9]&&arr[9]==arr[13]||
            arr[2]!==null&&arr[2]==arr[6]&&arr[6]==arr[10]&&arr[10]==arr[14]||
            arr[3]!==null&&arr[3]==arr[7]&&arr[7]==arr[11]&&arr[11]==arr[15]||
            arr[0]!==null&&arr[0]==arr[5]&&arr[5]==arr[10]&&arr[10]==arr[15]||
            arr[3]!==null&&arr[3]==arr[6]&&arr[6]==arr[9]&&arr[9]==arr[12]
        ){
         alert(`${current_element} is Winner`)
         window.location.reload()
        }
        else{
            if(!(arr.some((e)=> e===null ))){
                alert("Draw")
                window.location.reload()
             }
         }
     }
  }
  else if(n===5){
    let current_element="x"

    let arr=Array(n*n).fill(null)
    console.log(arr)

    grid.innerHTML=""
    for(let i=0;i<n;i++){
        div=document.createElement("div")
      div.classList.add("rows")
      divs.push(div)
        for(let j=0;j<n;j++){   
        let  boxes=document.createElement("div")
        boxes.classList.add("row")
        boxes.onclick=function handel_click(el){
            let id=el.target.id
            arr[id]=current_element 
            boxes.innerHTML=current_element
            checking_winner()
            current_element=current_element==="x"?"o":"x"
            console.log(arr)
        }
        console.log(divs.length)

       div.appendChild(boxes)
        }
        
    }
    for(let i=0;i<n;i++){
        console.log(divs[i])
        grid.appendChild(divs[i])
    }
    let give_id=document.querySelectorAll('.row')
    for(let i=0;i<give_id.length;i++){
        give_id[i].id=i
    }

    function checking_winner(){
        if (arr[0]!==null&&arr[0]==arr[1]&&arr[1]==arr[2]&&arr[2]==arr[3]&&arr[3]==arr[4]||
            arr[5]!==null&&arr[5]==arr[6]&&arr[6]==arr[7]&&arr[7]==arr[8]&&arr[8]==arr[9]||
            arr[10]!==null&&arr[10]==arr[11]&&arr[11]==arr[12]&&arr[12]==arr[13]&&arr[13]==arr[14]||
            arr[15]!==null&&arr[15]==arr[16]&&arr[16]==arr[17]&&arr[17]==arr[18]&&arr[18]==arr[19]||
            arr[20]!==null&&arr[20]==arr[21]&&arr[21]==arr[22]&&arr[22]==arr[23]&&arr[23]==arr[24]||
            arr[0]!==null&&arr[0]==arr[5]&&arr[5]==arr[10]&&arr[10]==arr[15]&&arr[15]==arr[20]||
            arr[1]!==null&&arr[1]==arr[6]&&arr[6]==arr[11]&&arr[11]==arr[16]&&arr[16]==arr[21]||
            arr[2]!==null&&arr[2]==arr[7]&&arr[7]==arr[12]&&arr[12]==arr[17]&&arr[17]==arr[22]||
            arr[3]!==null&&arr[3]==arr[8]&&arr[8]==arr[13]&&arr[13]==arr[18]&&arr[18]==arr[23]||
            arr[4]!==null&&arr[4]==arr[9]&&arr[9]==arr[14]&&arr[14]==arr[19]&&arr[19]==arr[24]||
            arr[0]!==null&&arr[0]==arr[6]&&arr[6]==arr[12]&&arr[12]==arr[18]&&arr[18]==arr[24]||
            arr[4]!==null&&arr[4]==arr[8]&&arr[8]==arr[12]&&arr[12]==arr[16]&&arr[16]==arr[20]
        ){
         alert(`${current_element} is Winner`)
         window.location.reload()
        }
        else{
            if(!(arr.some((e)=> e===null ))){
                alert("Draw")
                window.location.reload()
             }
         }
     }


  }

 
})


