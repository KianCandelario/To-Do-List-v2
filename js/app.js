// Setting variables
const taskList = document.querySelector('.task-list');
const input = document.querySelector('input');

// Functionalities
function addTask() {
    const taskDiv = document.createElement('div');

    if (input.value == '') {
        input.placeholder = "You can't add empty task!";
        setTimeout(() => {
            input.placeholder = "Start adding tasks...";
        }, 2000);
    }

    else {
        taskDiv.innerHTML = `<div class="check-task">
                            <span id="done" onclick="doneTask()">
                                <img id='done-bttn' src="../assets/icons/check-circle-svgrepo-com.svg" />
                            </span>
                            <div class="task-wrap">
                                <p id="task">${input.value}</p>
                            </div>
                        </div>
                        <div class="edit-del">
                            <div class="edit-div">
                                <span id="edit" onclick="editTask()">Edit</span>
                            </div>
                            <div class="del-div">
                                <span id="delete" onclick="deleteTask()">&#215;</span>
                            </div>
                        </div>`;

        taskDiv.classList.add('tasks-container');
        taskList.append(taskDiv);
        input.value = '';
    }
}

function deleteTask() {
    const deleteBttn = document.querySelectorAll("#delete");

    deleteBttn.forEach(span => {
        span.addEventListener('click', () => {
            const task = span.closest('.tasks-container');
            task.remove();
        });
    });
}

function editTask() {
    const editBttn = document.querySelectorAll("#edit");

    editBttn.forEach(span => {
        span.addEventListener('click', () => {
            const taskParent = span.closest('.check-task');
            const taskEdit = taskParent.querySelector('#task');
            taskEdit.setAttribute('contenteditable', true);
        });
    });
}

function saveTask() {

}

function doneTask() {
    const doneBttn = document.querySelectorAll("#done");

    doneBttn.forEach(span => {
        span.addEventListener('click', () => {
            const done = span.nextElementSibling;
            const task = done.querySelector('#task');
            const check = span.querySelector('#done-bttn');

            task.classList.toggle('comepleted');

            if (task.classList.contains('completed')) {
                task.classList.remove('completed');
                task.classList.add('uncompleted');
                check.classList.remove('complete-check');
            }

            else {
                task.classList.remove('uncompleted');
                task.classList.add('completed');
                check.classList.add('complete-check');
            }
        });
    });
}