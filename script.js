// const input=document.querySelector(".inputField input")
// const add=document.querySelector(".inputField button")
// const tasklist=document.querySelector(".todolist")

// const deleteall=document.querySelector(".footer button")
// console.log(input)
// console.log(add);
// console.log(deleteall);
// add.addEventListener("click",()=>
// {
//     // document.querySelector("ul ").innerHTML= '<li>"input.value"</li>'

//     // document.querySelector(".inputField").reset();
//     // document.getElementsByClassName(".inputField").reset()

// //     var ul = document.getElementById("todolist");
// //   var li = document.createElement("li");
// //   li.appendChild(document.createTextNode("One"));
// //   ul.appendChild(li);
//   document.querySelector("ul ").innerHTML=input.value
//   let getda=localStorage.getItem("todo")
//   if(getda==null)
//     {
//      list=[];

//     }
//    else{
//   // list=JSON.parse(getda)


//    localStorage.setItem("list",JSON.stringify(input.value)) 
//    list=input.value;
//    }
//    Showf()
//   //  localStorage.setItem("list",JSON.stringify(input.value)) 
//   input.value=""
// })
// function Showf()
// {

// }

// const inputBox=document.querySelector(".inputField input")
// const addbtn=document.querySelector(".inputField button")
// const deltall=document.querySelector(".footer button")
// const todoList = document.querySelector(".todoList");

// addbtn.addEventListener("click",()=>
// {
//   let localu=localStorage.getItem("todo")
//   if(localu==null)
//     {
//        list=[]
//     }
//     else
//     {
//       list=JSON.parse(localu)
//       console.log(list)

//     }
//     // list.push(inputBox.value)
//     list.push(inputBox.value)
//     localStorage.setItem("new todo",JSON.stringify(inputBox.value))
//     console.log(list)
//     let userEnteredValue = inputBox.value; //getting input field value 
//     // let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
//     // if (getLocalStorageData == null) { //if localstorage has no data
//     //   listArray = []; //create a blank array
//     // } else {
//     //   listArray = JSON.parse(getLocalStorageData); //transforming json string into a js object
//     // }
//     list.push(userEnteredValue); //pushing or adding new value in array
//     localStorage.setItem("todo", JSON.stringify(list)); //
//     showf()
//     console.log(list)

// })
// function showf()
// {
//   let localu=localStorage.getItem("todo")
//   if(localu==null)
//     {
//        list=[]
//     }
//     else
//     {
//       list=JSON.parse(localu)
//       console.log(list)

//     }
//     const pendingTasksNumb = document.querySelector(".pendingTasks");
//   pendingTasksNumb.textContent = list.length; //passing the array length in pendingtask
//   if (list.length > 0) { //if array length is greater than 0
//     deltall.classList.add("active"); //active the delete button
//   } else {
//     deltall.classList.remove("active"); //unactive the delete button
//   }
//   let newLiTag = "";
//   list.forEach((element, index) => {
//     newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fa-solid fa-pen"></i></span></li>`;
//   });
//   todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
//   inputBox.value = ""; //once task added leave the input field blank
//   addbtn.classList.remove("active"); 
// }

// deltall.addEventListener("click",()=>
// {
//   // list=[];
//   a=confirm("are you sure")
//   if(a==true)
//       localStorage.clear()
//   showf();
// // })
//  const addbtn=document.querySelector(".inputField button")
//  const deltall=document.querySelector(".footer button")
//  const listall=document.querySelector(".todoList")
//  addbtn.addEventListener("click",()=>
// {
//   let text=addbtn.value
//   if(localStorage.getItem("new todo")==null)
//     {
//       list=[]
//     }
//     else
//     {
//       list=localStorage()
//     }
// })

// getting all required elements
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAlBtn = document.querySelector(".footer button");
const datee=document.querySelector(".inputField .due");


// const date=document.querySelector("")
deleteAlBtn.classList.add("active");
// onkeyup event
inputBox.onkeyup = () => {
  let EnteredValue = inputBox.value;

}

showTasks();
addBtn.onclick = () => {
  let EnteredValue = inputBox.value;
  let datevalue=datee.value;
  let ar=[EnteredValue,datevalue]
console.log(datevalue)
  // if(EnteredValue==null && datevalue==null && EnteredValue=="" && datevalue==""  )
  //   {
  //     alert("fill all");
  //     // return;
  //   }
  //   if(ar==["",""])
  //     {
  //       alert("fill all");
  //     }
  
  let StorageData = localStorage.getItem("New Todo");
  if (StorageData == null) {
    list = [[]];
  } else {
    list = JSON.parse(StorageData);
  }
  console.log(StorageData)
  console.log(list)

  list.push(ar);
  localStorage.setItem("New Todo", JSON.stringify(list));
  console.log(StorageData)
  console.log(list)
  showTasks();

}

function showTasks() {
  let getLocalStorageData = localStorage.getItem("New Todo");
  if (getLocalStorageData == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorageData);
  }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length;
  // if (listArray.length > 0) {

  // } else {

  // }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li >${element[0]}<span class="icon1" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span ><span><span onclick="show(${index})" class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fa-solid fa-bars"></i>
  </span></span><span class="icon2" onclick="editTask(${index})"><i class="fa-regular fa-pen-to-square"></i></span></li><p>
    
</p>
<div class="collapse aa" id="collapseExample" >
  <div class="card card-body ">
    date: ${element[1]}
  </div>
</div>
    `;
  });
  todoList.innerHTML = newLiTag;
  inputBox.value = "";
}
function show(index) {
  let x = document.querySelectorAll(".aa");
  // x.setAttribute("class","collapse.show")
  if(x[index].classList.contains("show"))
    {
      x[index].classList.remove("show")
    }
    else{

    
  x[index].classList.add("show")
    }
}
// function descr(element)
//  {
//   // document.body.innerHTML+='<div class="wrapper" style="float:left"><header>Todo App</header><div><span class="da" onload="displaydate()"></span></div><div class="inputField"><input type="text" placeholder="Add your new todo"><input type="date"  class="due" placeholder=" date"><!-- <button><i class="fas fa-plus"></i></button> --><button><i class="fa-solid fa-pen"></i></button><!-- <button><i class="fa-duotone fa-pen"></i></button> --><!-- <button><i class="fa-solid fa-bars-staggered"></i></button> --></div><ul class="todoList"><!-- <li class="dated"></li> --><!-- data are comes from local storage --></ul><div class="footer"><span>You have <span class="pendingTasks"></span> pending tasks</span><button>Clear All</button></div></div>'

// }

function deleteTask(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}

deleteAlBtn.onclick = () => {
  listArray = [];
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  localStorage.clear()
  showTasks();
}

function editTask(index) {
  let getLocalStorageData = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorageData);
  
  // listArray.splice(index, 1); 
  listArray[index][0] = prompt("?")
  if (listArray[index] == null || listArray[index] == "") {
    showTasks();
    return;
  }
  console.log(listArray)
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();

}
