import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  // by placing the object within Tasks rather than outside of the component, it becomes part of the component state which can then be changed using setTasks
  // state is immutable and needs to be re-created and sent back 
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Homework',
        day: 'Apr 27th at 1430',
        reminder: false
      },
      {
        id: 2,
        text: 'Dinner',
        day: 'Apr 27th at 1530',
        reminder: false
      },
      {
        id: 3,
        text: 'Tutorial',
        day: 'Apr 27th at 1900',
        reminder: true
      }
    ]
  )

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {
          ...task, reminder:
            !task.reminder
        } : task
      )
    )
  }

  return (
    <div className="container">
      <Header 
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
          {deleteTask} onToggle={toggleReminder} />
      ) : ('Nothing to Show Here!'
      )}
    </div>
  )
}

export default App;
