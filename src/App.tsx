import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header'
import { CreateForm } from './components/CreateForm'
import { Task } from './components/Task';
import clipboard from './assets/clipboard.svg'

import './global.css'
import styles from './App.module.css'

export interface TaskProps {
  id: string,
  check: boolean,
  content: string,
}

const tasks = [
  {
    id: uuidv4(),
    check: false,
    content: 'testando esse teste'
  },
  {
    id: uuidv4(),
    check: false,
    content: 'Estudar JavaScript'
  },
  {
    id: uuidv4(),
    check: false,
    content: 'Ler um livro'
  },
  {
    id: uuidv4(),
    check: true,
    content: 'Estudar ReactJS'
  },
  {
    id: uuidv4(),
    check: true,
    content: 'Ir para a acadêmia'
  },
]

export function App() {
  const [tasksList, setTasksList] = useState<TaskProps[]>(tasks);

  function creatTask(newContent: string) {
    const newTask = {
      id: uuidv4(),
      check: false,
      content: newContent
    }
    setTasksList([...tasksList, newTask])
  }

  function checkTask(idCheckTask: string) {
    const listChecked = tasksList.map(task => {
      if(task.id === idCheckTask) {
        return {
          ...task,
          check: !task.check
        }
      }
      return task
    })

    setTasksList(listChecked)
  }

  function deleteTask(idDeleteTask: string) {
    const taskWhithoutDeleteOne = tasksList.filter(task => {
      return task.id !== idDeleteTask;
    })

    setTasksList(taskWhithoutDeleteOne)
  }

  const countCheck = tasksList.filter(check => (check.check)).length

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <CreateForm onCreateTask={creatTask} />
        <div className={styles.header}>
          <div >
            <strong>Tarefas criadas</strong>
            <span>{tasksList.length}</span>
          </div>
          <div >
            <strong className={styles.purple}>Concluídas</strong>
            <span>{countCheck} de {tasksList.length}</span>
          </div>
        </div>

        {tasksList.length > 0 
        ? 
          <div className={styles.list}>
            {tasksList.map(task => {
              return(
                <Task 
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  check={task.check}
                  onCheckTask={checkTask}
                  onDeleteTask={deleteTask}
                />
              )
            })}
          </div>
        :
          <div className={styles.noList}>
            <div>
              <div className={styles.noListImg}>
                <img src={clipboard} />
              </div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        }
      </main>
    </>
  )
}