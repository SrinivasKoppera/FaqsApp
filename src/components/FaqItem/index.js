// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isDisplayed: false}

  toggleBtn = () => {
    this.setState(prevState => ({isDisplayed: !prevState.isDisplayed}))
  }

  render() {
    const {faqsList} = this.props
    const {questionText, answerText} = faqsList
    const {isDisplayed} = this.state
    const changeImg = isDisplayed
      ? 'https:/assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    return (
      <li className="list-item">
        <div className="text-container">
          <h1 className="q-heading">{questionText}</h1>
          <button type="button" className="btn" onClick={this.toggleBtn}>
            <img src={changeImg} alt={isDisplayed ? 'minus' : 'plus'} />
          </button>
        </div>

        {isDisplayed && (
          <div>
            <hr className="border" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
