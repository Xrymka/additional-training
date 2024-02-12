type TaskPropsType = {
  taskId: number
  title: string
  isDone: boolean
}

export type DataPropsType = {
  title: string
  tasks: Array<TaskPropsType>
  students: Array<string>
}


export const Tasks = (props: DataPropsType) => {
  const TaskList = props.tasks.map(task => {
    return (
      <li key={task.taskId}>
        <input type="checkbox" checked={task.isDone} />
        <span>{task.title}</span>
      </li>
    )});
  const StudentList = props.students.map(student => <li key={student}>{student}</li>);
  const Title = <h1>{props.title}</h1>;

  return (
    <div>
      {Title}
      <h3>Tasks:</h3>
      <ul>
        {TaskList}
      </ul>
      <h3>Students:</h3>
      <ul>
        {StudentList}
      </ul>
    </div>
  );
}