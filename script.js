const feature = document.getElementById("feature")
const company = document.getElementById("company")

const menuItens = document.querySelectorAll("li")

const button= document.getElementById("button")

//menuItens.addEventListener("mouseover", function(){
  //  menuItens.style.color = "hsl(0, 0%, 8%)"
//})

//menuItens.addEventListener("mouseout", function(){
  //  menuItens.style.color = "hsl(0, 0%, 41%)"
//})

menuItens.forEach(element => {
    element.addEventListener("mouseover", function(){
          element.style.color = "hsl(0, 0%, 8%)"
      })

      element.addEventListener("mouseout", function(){
        element.style.color = "hsl(0, 0%, 41%)"
    })
      
})

button.addEventListener("mouseover", function(){
    button.style.color = "hsl(0, 0%, 8%)"
    button.style.backgroundColor = "hsl(0, 0%, 98%)"
})

button.addEventListener("mouseout", function(){
    button.style.color = "hsl(0, 0%, 98%)"
    button.style.backgroundColor = "hsl(0, 0%, 8%)"
})