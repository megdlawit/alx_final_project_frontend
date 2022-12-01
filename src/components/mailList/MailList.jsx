import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">get hotel easily!</h1>
      <span className="mailDesc">Sign up and we'll send the best for you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>register</button>
      </div>
    </div>
  )
}

export default MailList