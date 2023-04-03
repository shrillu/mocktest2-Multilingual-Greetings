import './index.css'

const ButtonItem = props => {
  const {items, onChangeId, isActive} = props
  const {text, id} = items

  const s = isActive ? 'color-tab' : null

  const onClickButton = () => {
    onChangeId(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickButton} className={`btn ${s}`}>
        {text}
      </button>
    </li>
  )
}

export default ButtonItem
