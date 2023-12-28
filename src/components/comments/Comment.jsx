import './Comment.scss'
import circle from "../../assets/Circles.svg";

function Comment({text, width, left}) {
  return (
    <>
    <div className='comment' style={{width: width}}>
        <p>{text}</p>
        <img src={circle} style={{left: left}}/>
    </div>
    </>
  )
}

export default Comment