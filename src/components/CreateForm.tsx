import { PlusCircle } from 'phosphor-react'

import { ChangeEvent, FormEvent, useState } from 'react'

import styles from './CreateForm.module.css'

interface CreateTaskProps {
  onCreateTask: (task: string) => void,
}

export function CreateForm({onCreateTask}: CreateTaskProps) {
  const [newContentTask, setNewContentTask] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    onCreateTask(newContentTask)
    setNewContentTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewContentTask(event.target.value)
  }

  return(
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <input 
        type="text" 
        name="newTask" 
        value={newContentTask}
        onChange={handleNewTaskChange} 
        placeholder='Adicione uma nova tarefa' />
      <button type='submit'>
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  )
}