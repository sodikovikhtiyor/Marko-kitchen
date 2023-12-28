import "./Button.scss";

function Button({btnType, text, arrow}) {
  return (
    <>
        <button className={btnType}>{text}{arrow}</button>
    </>
  )
}

export default Button