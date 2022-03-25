            const mainhead=document.querySelector(".super")
            const button=document.querySelectorAll(".tile")
            const buttons=button[3]
            buttons.addEventListener("click",()=>{
            var Div=document.createElement("div")
            Div.className="MainDiv"
            mainhead.appendChild(Div)
            Div.style.padding="1rem 1rem"
            const headDiv=document.createElement("div")
            headDiv.className="todoContainer"
            const pDiv=document.createElement("div")
            const textNode=document.createTextNode("ToDo")
            pDiv.appendChild(textNode)
            headDiv.appendChild(pDiv)
            const iconDiv=document.createElement("div")
            iconDiv.innerHTML=`<i class='fa fa-plus-circle dark-grey'></i>`
            headDiv.appendChild(iconDiv)
            Div.appendChild(headDiv)
            iconDiv.addEventListener("click",()=>{
            const todoDiv=document.createElement("div")
            todoDiv.className="todoContain"
            const inputForm=document.createElement("form")
            inputForm.className="inputform"
            const Input=document.createElement("input")
            Input.className="inputElement"
            Input.setAttribute("type","text");
            const todoList=document.createElement("div")
            todoList.className="to-do"
            todoDiv.appendChild(todoList)
            inputForm.appendChild(Input);
            todoDiv.appendChild(inputForm)
            Div.appendChild(todoDiv)
            inputForm.addEventListener("submit",(e)=>{
                e.preventDefault()
                const inputTodo=document.querySelector(".inputform input[type='text']")
                const newTodoText=inputTodo.value;
                const newLi=document.createElement("li")
                newLi.className="tlist"
                newLi.innerHTML=`${newTodoText}
                <div class="todobuttons">
                        <i class='fa fa-check-circle dark-grey'></i>
                        <i class='fa fa-minus-circle dark-grey'></i>
                </div>`;
                todoList.appendChild(newLi);
                inputTodo.value=""
                inputForm.remove();
            })
            todoList.addEventListener("click", (e) => {
                 if (e.target.classList.contains("fa-minus-circle")) {
                  const targetedLi = e.target.parentNode.parentNode;
                   targetedLi.style.cursor="pointer";
                  targetedLi.remove();
                }
                if (e.target.classList.contains("fa-check-circle")) {
                  const liSpan = e.target.parentNode.parentNode;
                  liSpan.style.textDecoration = "line-through";
                  liSpan.style.cursor="pointer"
                  liSpan.style.opacity="0.45";
                }
              });
        })
      },{once: true})
    
