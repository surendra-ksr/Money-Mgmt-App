// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props
  const bal = income - expenses

  return (
    <div className="midDiv">
      <div className="div2 divBox">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img1"
        />
        <div className="in2">
          <p className="in2p">Your Balance</p>
          <p className="in2a" testid="balanceAmount">{`Rs ${bal}`}</p>
        </div>
      </div>
      <div className="div3 divBox">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img1"
        />
        <div className="in2">
          <p className="in2p">Your Income</p>
          <p testid="incomeAmount" className="in2a">{`Rs ${income}`}</p>
        </div>
      </div>
      <div className="div4 divBox">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img1"
        />
        <div className="in2">
          <p className="in2p">Your Expenses</p>
          <p testid="expensesAmount" className="in2a">{`Rs ${expenses}`}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
