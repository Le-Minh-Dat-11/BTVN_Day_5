const form = document.getElementById("form")
const input = document.getElementById("input")
const button = document.getElementById("button")
const todo = document.getElementById("todo")

let todoList = []//<-------this is array
const render = () =>{
    todo.innerHTML = null
    todoList = JSON.parse(localStorage.getItem("todos"))||[]
    //vòng lặp duyệt từng phần tử con trong todoList
    for(let i = 0 ; i < todoList.length ; i++){
        //tạo từng li và đẩy lên(inner)HTML
        let li = document.createElement("li")
        todo.appendChild(li)
        li.innerHTML = `${todoList[i].text}`
        let div = document.createElement("div")
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        //add check box vào div
        div.appendChild(checkbox)
        let btn = document.createElement("button")
        let text = document.createTextNode("X")
        btn.classList.add("deleteBtn")
        btn.appendChild(text)
        div.appendChild(btn)
        li.appendChild(div)

        checkbox.addEventListener("click",(event)=>{
            todoList[i].completed = event.target.checked
            if(todoList[i].completed){
                li.classList.add("completed")
                li.classList.remove("uncompleted")
                checkbox.checked = todoList[i].completed
            }else{
                li.classList.add("uncompleted")
                li.classList.remove("completed")
                checkbox.checked = todoList[i].completed
            }
        })
    }
}
const addTodo = ()=>{
    const newTodo = input.value

    if(!newTodo)
    return console.log("No value")||alert("No value !")
    
    todoList.push({
        text:newTodo,
        completed:false
    })
   
    localStorage.setItem("todos",JSON.stringify(todoList))
    render()
}


form.addEventListener("submit",(event)=>{
    event.preventDefault()
    addTodo();
})
