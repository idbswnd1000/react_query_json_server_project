import React from 'react'
import TodoTemplate from '../no2_components/todo/TodoTemplate.jsx'
import TodoInsert from '../no2_components/todo/TodoInsert.jsx'
import TodoList from '../no2_components/todo/TodoList.jsx'

const TodoPage = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  )
}

export default TodoPage