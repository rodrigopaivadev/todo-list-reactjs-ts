import { CheckCircle, Circle, PlusCircle, Trash } from 'phosphor-react'

import styles from './Task.module.css'

interface TaskListProps {
  id: string,
  content: string,
  check: boolean
  onCheckTask: (id: string) => void,
  onDeleteTask: (id: string) => void,
}

export function Task({id, content, check, onCheckTask, onDeleteTask}: TaskListProps) {

  function handleCheckTask() {
    onCheckTask(id)
  }

  function handleDeleteTasnk() {
    onDeleteTask(id)
  }

  return(
    <div className={styles.task}>
      <button onClick={handleCheckTask} className={!check ? styles.check : styles.checked}>
        {!check ? <Circle size={17.45} /> : <CheckCircle size={17.45} weight="fill" /> }
      </button>
      <span className={check ? styles.taskChecked : ''}>{content}</span>
      <button onClick={handleDeleteTasnk} className={styles.trash}>
        <Trash size={14} />
      </button>
    </div>
  )
}