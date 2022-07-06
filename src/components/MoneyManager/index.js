import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transList: [],
    titleIn: '',
    amountIn: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onTitleChange = event => {
    this.setState({titleIn: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amountIn: parseInt(event.target.value)})
  }

  onAddButton = event => {
    event.preventDefault()
    const {titleIn, amountIn, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachOp => eachOp.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      titleIn,
      amountIn,
      typeIn: displayText,
    }
    this.setState(prevState => ({
      transList: [...prevState.transList, newTransaction],
      titleIn: '',
      amountIn: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getIncome = () => {
    const {transList} = this.state
    let income = 0
    transList.forEach(eachTrans => {
      if (eachTrans.typeIn === transactionTypeOptions[0].displayText) {
        income += eachTrans.amountIn
      }
    })
    return income
  }

  getExpenses = () => {
    const {transList} = this.state
    let expenses = 0
    transList.forEach(eachTrans => {
      if (eachTrans.typeIn === transactionTypeOptions[1].displayText) {
        expenses += eachTrans.amountIn
      }
    })
    return expenses
  }

  onChangeOption = event => {
    this.setState({optionId: event.target.value})
  }

  onDeleteTrans = id => {
    const {transList} = this.state
    const updatedTransList = transList.filter(eachItem => eachItem.id !== id)
    this.setState({
      transList: updatedTransList,
    })
  }

  render() {
    const {transList, titleIn, amountIn, optionId} = this.state
    const income = this.getIncome()
    const expenses = this.getExpenses()

    return (
      <div className="main-div">
        <div className="topDiv">
          <h1 className="top-h1">Hi, Richard</h1>
          <p className="top-p">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <div>
          <MoneyDetails income={income} expenses={expenses} />
        </div>
        <div className="lastDiv">
          <div className="lDiv">
            <h1 className="lastP">Add Transaction</h1>
            <form className="formDiv" onSubmit={this.onAddButton}>
              <label htmlFor="title" className="labelItem">
                TITLE
              </label>
              <input
                type="text"
                className="inputCss"
                onChange={this.onTitleChange}
                placeholder="TITLE"
                id="title"
                value={titleIn}
              />
              <label htmlFor="amount" className="labelItem">
                AMOUNT
              </label>
              <input
                type="text"
                className="inputCss"
                onChange={this.onAmountChange}
                placeholder="AMOUNT"
                id="amount"
                value={amountIn}
              />
              <label htmlFor="type" className="labelItem">
                TYPE
              </label>
              <select
                id="type"
                value={optionId}
                onChange={this.onChangeOption}
                className="inputCss"
              >
                {transactionTypeOptions.map(eachOpt => (
                  <option key={eachOpt.optionId} value={eachOpt.optionId}>
                    {eachOpt.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="addButton">
                Add
              </button>
            </form>
          </div>
          <div className="lDiv historyDiv">
            <h1 className="lastP">History</h1>
            <ul className="ulDiv">
              <li className="htTop">
                <p className="liP">Title</p>
                <p className="liP">Amount</p>
                <p className="liP">Type</p>
                <p> </p>
              </li>
              {transList.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  itemDetails={eachItem}
                  onDeleteTrans={this.onDeleteTrans}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
