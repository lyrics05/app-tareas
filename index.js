const input = document.querySelector("#input")
const lista = document.querySelector("#lista")
const fecha = document.querySelector("#fecha")
const botonEnter = document.querySelector("#boton-enter")
const check = "fa-check-circle"
const unCheck = "fa-circle"
const lineThrough = "line-through"
let id = 1
const date = new Date()
fecha.innerHTML =date.toLocaleDateString('es-MX',{weekday: 'long', month: 'short', day:'numeric'})


function agregarTarea(tarea,realizado){
    const REALIZADO = realizado ? check : unCheck
    const elemento = `<li id="elemento">
    <i class="far ${REALIZADO}" data="realizado" id=${id}></i>
    <p class="text">${tarea}</p>
    <i class="fas fa-trash de" data="eliminado" id=${id}></i> 
    </li>`

    lista.insertAdjacentHTML("beforeend",elemento)
}

botonEnter.addEventListener("click",function(){
    const tarea = input.value
     if(tarea){
        agregarTarea(tarea)
     }
     input.value=""
     id ++
})

lista.addEventListener("click",function(e){
   const element =  e.target
   console.log(element)
   const elementData = element.attributes.data.value
       if(elementData==="realizado"){
        element.classList.toggle(check)
        element.classList.toggle(unCheck)
        element.parentNode.querySelector(".text").classList.toggle(lineThrough)
       }else if(elementData==="eliminado"){
        element.parentNode.parentNode.removeChild(element.parentNode)
       }
})