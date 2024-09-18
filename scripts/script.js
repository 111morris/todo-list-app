window.addEventListener('load', () => {
 const form = document.querySelector("#new-task-form");
 const input = document.querySelector("#new-task-input");
 const list_element = document.querySelector("#tasks");

 form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = input.value;

  if (!task) {
   alert('Please fill out the task');
   return;
  };

  const task_element = document.createElement('div');
  task_element.classList.add('task');

  const task_content_element = document.createElement('div');
  task_content_element.classList.add('content');
  // task_content_element.innerHTML = task;

  task_element.appendChild(task_content_element);
  const task_input_element = document.createElement('input');
  task_input_element.classList.add('text');
  task_input_element.value = task;
  task_input_element.setAttribute('readonly', 'readonly');
  task_content_element.appendChild(task_input_element)
  list_element.appendChild(task_element);

  const task_actions_element = document.createElement('div');
  task_actions_element.classList.add('actions');

  const task_edit_element = document.createElement('button');
  task_edit_element.classList.add('edit');
  task_edit_element.innerHTML = 'Edit';

  const task_delete_element = document.createElement('button');
  task_delete_element.classList.add('delete');
  task_delete_element.innerHTML = 'Delete';

  task_actions_element.appendChild(task_edit_element);
  task_actions_element.appendChild(task_delete_element);

  task_element.appendChild(task_actions_element);
  list_element.appendChild(task_element);

  input.value = '';
  task_edit_element.addEventListener('click', () => {
   if (task_edit_element.innerHTML.toLowerCase() == 'edit') {
    task_input_element.removeAttribute('readonly');
    task_input_element.focus();
    task_edit_element.innerHTML = 'Save'
   } else {
    task_input_element.setAttribute('readonly', 'readonly');
    task_edit_element.innerHTML = 'Edit';
   }
  });
  task_delete_element.addEventListener('click', () => {
   if (confirm('Are you sure you want to delete this task?')) {
    list_element.removeChild(task_element)
   }
  });
 });

});

// my script

// window.addEventListener('load', () => {
//  let tasksList = [];
//  const input = document.querySelector('#new-task-input');
//  const form = document.querySelector('#new-task-form');
//  const edit = document.querySelector(".js-edit");
//  let tasks = document.querySelector('#tasks');
//  let tasksListHTML = '';


// /*   function saveToStorage() {
//    localStorage.setItem('lists', JSON.stringify(tasksList))
//   } */

//  function renderTaskslist() {
//  tasksList.forEach((element) => {
//   return tasksListHTML += `
//    <div class="task">
//      <div class="content">
//       <input type="text" name="" id="" class="text" value="${element}" readonly>
//      </div>
//      <div class="actions">
//       <button class="edit js-edit">Edit</button>
//       <button class="delete">Delete</button>
//      </div>
//     </div>
//    `;
//   });
//  };


//  form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const task = input.value;
//   tasksList.push(task)
//   renderTaskslist()
//   tasks.innerHTML = tasksListHTML;
//   input.value = '';
//   tasksListHTML = '';
//  });

//  edit.addEventListener('click', () => {

//   console.log('helllo there');
//  });

// });
