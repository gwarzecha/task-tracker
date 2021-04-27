import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
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

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
      {deleteTask} /> : 'Nothing to Show Here!'}
      
    </div>
  )
}

export default App;
