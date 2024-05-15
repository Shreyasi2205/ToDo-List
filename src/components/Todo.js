import { useEffect, useState } from "react";

function Todo() {
    const [task, setTask] = useState("");
    const [todoList, setTodoList] = useState([]);

    function handleValue(e) {
        // console.log(e);
        setTask(e.target.value);
        console.log(task);
    }

    function addTodo(e) {
        if (e.code === "Enter") {
            e.preventDefault();
            console.log(e);
            if (task.trim() !== '') {
                // Create a new array with the updated task
                // const newTodoList = [...todoList, { task: task }];
                const newTodoList = todoList;
                newTodoList.push({ task: task });
                // Set the new array as the todoList state
                setTodoList(newTodoList);
                console.log(newTodoList);
                setTask('');
                addToLocalStorage();
            }
        };
    }

    function editTask(currentTask, e) {
        removeTask(currentTask);
        setTask(currentTask);
    }

    function removeTask(currentTask) {
        const filteredTodoList = todoList.filter((elem) => elem.task !== currentTask);
        console.log("removed item list ", filteredTodoList);
        setTodoList(filteredTodoList);
    }

    function addToLocalStorage() {
        localStorage.setItem('task', task);
    }

    useEffect(() => {
        const storedTask = localStorage.getItem('task');
        setTask(storedTask);
    }, []);


    return (
        <div className="todo-container">
            <div>
                <h1>ToDo List</h1>
            </div>
            <hr />
            <form>
                <input
                    type="text"
                    className="todo-input"
                    placeholder="Your task..."
                    value={task}
                    // onChange={(e) => setTask(e.target.value)}
                    onChange={handleValue}
                    onKeyDown={addTodo}
                />
            </form>
            <div className="todo-list">
                {todoList.map((item, index) => (
                    <span className="todo-item" key={index}>
                        {/* <input type="checkbox" /> */}
                        <p onClick={() => editTask(item.task)} style={{ cursor: "pointer" }}>📝</p>
                        <p style={{ marginLeft: "8px" }}>{item.task}</p>
                        <p onClick={() => removeTask(item.task)} style={{ cursor: "pointer" }}>❌</p>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Todo;