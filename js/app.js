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
                            <span id="done">
                                <img src="../assets/icons/check-circle-svgrepo-com.svg" />
                            </span>
                            <div class="task">
                                <p>${input.value}</p>
                            </div>
                        </div>
                        <div class="edit-del">
                            <div class="edit-div">
                                <span id="edit">Edit</span>
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

function editBttn() {
    
}