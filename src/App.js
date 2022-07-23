import { Component } from "react";
import "./styles.css";

class App extends Component {
  //! State ......................
  state = {
    tasks: [{ taskName: "stay inside" }, { taskName: "cook food" }]
  };
  //! Functions ...................
  NewTask = (event) => {
    this.setState({
      newTask: event.target.value
    });
    console.log(this.state.tasks);
  };
  AddTask = () => {
    // console.log(e.target.value,"add task");
    console.log("is add");
    const Tasks = [...this.state.tasks];
    Tasks.push({ taskName: this.state.newTask });
    this.setState({
      tasks: Tasks,
      newTask: ""
    });
    console.log(this.state.tasks);
  };
  Completed = (index) => {
    console.log(index, "is completed");
    let checked = document.querySelectorAll(`.task[id="${index}"]`);
    console.log(checked);
    //https://bobbyhadz.com/blog/react-add-remove-class-on-click#:~:text=%2Dsalmon')%3B-,The%20classList.,toggle()%20method%20as%20necessary.
    // checked.style.backgroundColor = "#fff";
    // checked.classList.toggle("doit");
  };
  Deleted = (index) => {
    console.log(index, "is deleted");
    const Tasks = [...this.state.tasks];
    Tasks.splice(index, 1);
    this.setState({
      tasks: Tasks
    });
  };
  render() {
    return (
      <div className="App container">
        <h1>To do</h1>
        <div className="filied-input">
          <div className="input">
            <input
              className="Input"
              type="text"
              onChange={this.NewTask}
              // dangerouslySetInnerHTML={{ __html:}}
            />
            <button
              value={this.state.newTask}
              onClick={this.AddTask}
              className="fa-solid fa-plus"
            ></button>
          </div>
          <div className="option">
            All
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>

        <div className="tasks">
          {this.state.tasks.map((task, index) => (
            <div className="task" key={index.toString()} id={index}>
              <div className="title-task">{task.taskName}</div>
              <div className="icons">
                <button
                  onClick={() => this.Completed(index)}
                  className="fa-solid fa-check"
                  id="1"
                ></button>
                <button
                  onClick={() => this.Deleted(index)}
                  className="fa-solid fa-trash-can"
                  id="11"
                ></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
