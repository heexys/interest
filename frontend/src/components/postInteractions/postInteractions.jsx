import Image from '../image/image'
import './postInteractions.css'

const PostInteractions = () => {
  return (
    <div className='postInteractions'>
      <div className="interactionIcons">
        <div className="like">
          <Image path="/general/react.svg" alt=""/>
          261
        </div>
        <Image path="/general/share.svg" alt=""/>
        <Image path="/general/more.svg" alt=""/>
      </div>
      <button>Save</button>
    </div>
  )
}

export default PostInteractions