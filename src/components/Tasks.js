import { useState } from 'react';

// by placing the object within Tasks rather than outside of the component, it becomes part of the component state which can then be changed using setTasks
// state is immutable and needs to be re-created and sent back 
const Tasks = () => {
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

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks
