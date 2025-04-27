import Image from '../image/image';
import './galleryItem.css';
import { Link } from 'react-router';

const GalleryItem = ({item}) => {

const optimizedHeight = (372 * item.height) / item.width
  return (
    <div className='galleryItem' style={{gridRowEnd:`span ${Math.ceil(item.height / 100 )}`}}>
      <Image src={item.media} alt="" w={372} h={optimizedHeight} />
      <Link to={`/pin/${item._id}`} className="overlay"/>
      <button className='saveButton'>Save</button>
      <div className="overlayIcons">
        <button>
          <Image path="/general/share.svg" alt="share" />
        </button>
        <button>
          <Image path="/general/more.svg" alt="more" />
        </button>
      </div>
    </div>
  )
}

export default GalleryItem