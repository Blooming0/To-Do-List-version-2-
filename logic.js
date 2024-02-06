


  //get the items from local storage
  readFromLocalStorge()
  //fill the items from local storage
  fillTheTasks();
  //function of the tasks
  function fillTheTasks() {
    document.getElementById("tasks").innerHTML = "";
    var counter = 0
    for (task of tasks) {
      var content = `
              <!-- task -->
                  <div class="${task.isDone ? "done" : "task"} row justify-content-around mt-4" id="task">
                          <!-- taskText -->
                      <div class="col-4 task_text">${task.taskName}</div>

                      <!-- modfiy -->
                      <div class="col-2 modify">
                          <button onclick="modify(${counter})" type="button" class="btn btn-light">
                              <i class="bi bi-pen">modfiy</i>
                          </button>
                      </div>
                      <!-- //modfiy// -->

                      <!-- check -->
                      <div class="col-2 check">
                        
                        ${task.isDone?
                          
                          `
                          <button onclick="achived(${counter})" class="bi bi-x btn-light btn" style="margin-top: 30%;align-items: center;
                          background-color: tomato;color: black;font-size: larger; border-radius: 30px;">
                            <i></i>
                          </button>
                          `
                          :
                          `
                          <button onclick="achived(${counter})" type="button" class="btn btn-light">
                              <i class="bi bi-clipboard2-check-fill">Check</i>
                          </button>
                          `
                        }
                          
                        
                      </div>
                      <!-- //check// -->

                      <!-- trash -->
                      <div class="col-2 trash">
                          <button id="trash" onclick="trash(${counter})" type="button" class="btn btn-light">
                              <i class="bi bi-trash">Trash</i>
                          </button>
                      </div>
                      <!-- //trash// -->

                      <!-- date -->
                      <div class="row">
                              <span class="col-2" style="text-align: center; font-size: larger"
                              >Date~${task.date}</span>
                              <span class="col-2" style="text-align: center; font-size: larger"
                              >time~${task.time}</span>
                      </div>
                      <!-- //date// -->
                  </div>
              <!-- //task// -->
          `;
    document.getElementById("tasks").innerHTML += content;
    counter++;
    }
    wrightOnLocalStorge()
  }
  
  // 4 actions of the to do list
  function createBtn(){
    let taskName = prompt("please inter your task ")
    let date = new Date()
    if(taskName == "" || taskName == null){
      
    }else{
      let taskObj = {
        "taskName": taskName,
        "isDone": false,
        "date": `${date.getUTCDate()}/${date.getMonth()+1}/${date.getFullYear()} |`,
        "time":  `${date.getHours()}:${date.getMinutes()}`
      }
      tasks.push(taskObj)
      fillTheTasks()
    }
  }
  function modify(index){
    let taskName = prompt("please inter your new anme of the task ")
    let date = new Date()
    if(taskName == "" || taskName == null){

    }else{
     let taskObj = {
        "taskName" : taskName,
        "isDone" : false,
        "date" : `${date.getUTCDate()}/${date.getMonth()+1}/${date.getFullYear()} `,
        "time" : `${date.getHours()}:${date.getMinutes()}`,
        
     }
      tasks[index] = taskObj
      fillTheTasks()
    }
  }
  function trash(index){ 
    if(confirm(`are you sure you want to delete ${tasks[index].taskName} task`)){
             tasks.splice(index,1)
             fillTheTasks()
    }
  }
  function achived(index) {

    tasks[index].isDone = !tasks[index].isDone
    fillTheTasks();
  }

  //local sotorge wright 
  function wrightOnLocalStorge(){
          localStorage.setItem("tasks",JSON.stringify(tasks)) 
      }

  //local sotorge read 
  function readFromLocalStorge(){
          let retrivedTasks =  JSON.parse(localStorage.getItem("tasks"))
          if(retrivedTasks == null){
              tasks = []
          }else{
              tasks = retrivedTasks
          }
      }
