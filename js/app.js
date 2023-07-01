// Setting variables
const taskList = document.querySelector('.task-list');
const input = document.querySelector('input');
const filterOptions = document.querySelectorAll('.filter-option');

// Function for adding tasks
function addTask() {
    const taskDiv = document.createElement('div');

    if (input.value == '') {
        input.placeholder = "You can't add empty task!";
        alert("Sorry. Empty task is not allowed!");
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

// Function for deleting tasks
function deleteTask() {
    const deleteBttn = document.querySelectorAll("#delete");

    deleteBttn.forEach(span => {
        span.addEventListener('click', () => {
            const task = span.closest('.tasks-container');
            task.remove();
        });
    });
}

// Function for marking tasks as done
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

// Function to filter tasks based on the selected option
function filterTasks(filterOption) {
    const tasks = document.querySelectorAll('.tasks-container');
  
    tasks.forEach(task => {

        /*
            If the class "completed" is present in the class list of the selected <p> element, 
            the expression evaluates to 'completed', indicating that the task is completed. 
            Otherwise, it evaluates to 'uncompleted', indicating that the task is not completed.
        */
        const taskStatus = task.querySelector('#task').classList.contains('completed') ? 'completed' : 'uncompleted';
  
        if (filterOption === 'all' || taskStatus === filterOption) {
            task.classList.remove('hide'); // Show the task
        } 
        else {
            task.classList.add('hide'); // Hide the task
        }
    });
}
  
// Attaching a click event listener to each filter option span
filterOptions.forEach(span => {
    span.addEventListener('click', () => {
        // Remove the "selected" class from all spans
        filterOptions.forEach(option => {
            option.classList.remove('selected');
        });
  
        // Add the "selected" class to the clicked span
        span.classList.add('selected');
  
        // Get the filter option from the clicked span
        const filterOption = span.textContent.toLowerCase();
  
        // Call the filter function with the selected filter option
        filterTasks(filterOption);
    });
});