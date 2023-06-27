// Setting variables
const taskList = document.querySelector('.task-list');
const input = document.querySelector('input');

// Functions
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
                                <p id="task" class="uncompleted">${input.value}</p>
                            </div>
                        </div>
                        <div class="del-container">
                            <div class="del-wrapper">
                                <span id="delete" onclick="deleteTask()">
                                    <img src="../assets/icons/trash-svgrepo-com.svg" />
                                </span>
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

function doneTask() {
    const doneBttn = document.querySelectorAll("#done");

    doneBttn.forEach(span => {
        span.addEventListener('click', () => {
            const done = span.nextElementSibling;
            const task = done.querySelector('#task');
            const check = span.querySelector('#done-bttn');

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

function filerTask() {

}