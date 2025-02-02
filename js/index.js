const c = (x) => {
    console.log(x);
}

const taskValue = document.getElementById('taskValue');
const addTaskButton = document.querySelector('.addTaskButton');
const activeTask = document.querySelector('.activeTasks');
const endedTask = document.querySelector('.endedTasks');

const listOfDoneTasks = document.createElement('ul');
activeTask.append(listOfDoneTasks);

const listOfEndedTasks = document.createElement('ul');
endedTask.append(listOfEndedTasks);


function deleteTask(){

    const currentLi = this.closest('.taskItem');
    currentLi.remove();

}

function addToDone(){

    const li = document.createElement('li');
    li.textContent = this.closest('.taskItem').firstChild.textContent;
    li.classList.add('taskItem');
    listOfEndedTasks.append(li);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtnDone');
    deleteBtn.innerText = '⨉';

    li.append(deleteBtn);

    deleteBtn.addEventListener('click', deleteTask);

    this.closest('.taskItem').remove();

}

addTaskButton.addEventListener('click', function(){

    if (!taskValue.value) return;

    const li = document.createElement('li');
    
    li.textContent = taskValue.value;
    li.classList.add('taskItem'); 
    listOfDoneTasks.append(li);

    const taskAction = document.createElement('div');
    taskAction.classList.add('taskAction')
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('doneBtn');
    doneBtn.innerText = '✓';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.innerText = '⨉';

    doneBtn.addEventListener('click', addToDone);
    deleteBtn.addEventListener('click', deleteTask);

    taskAction.append(doneBtn);
    taskAction.append(deleteBtn);

    taskAction.style.width = 'fit-content'

    li.append(taskAction);

    taskValue.value = '';

});
