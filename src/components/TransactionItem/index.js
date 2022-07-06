// Write your code here
import './index.css'

const TransactionItem = props => {
  const {itemDetails, onDeleteTrans} = props
  const {id, titleIn, amountIn, typeIn} = itemDetails

  const onDelete = () => {
    onDeleteTrans(id)
  }

  return (
    <li className="tLiItem">
      <p className="liP">{titleIn}</p>
      <p className="liP">{`Rs ${amountIn}`}</p>
      <p className="liP">{typeIn}</p>
      <button
        onClick={onDelete}
        testid="delete"
        className="delBtn"
        type="button"
      >
        <img
          className="delImg"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
