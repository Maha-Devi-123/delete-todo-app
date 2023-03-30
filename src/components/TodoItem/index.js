import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteOnclick} = props
  const {title, id} = itemDetails

  const deleteTodo = () => {
    deleteOnclick(id)
  }

  return (
    <li className="list-item-style-eachtodos">
      <p>{title}</p>
      <button
        onClick={deleteTodo}
        className="delete-button-style"
        type="button"
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
