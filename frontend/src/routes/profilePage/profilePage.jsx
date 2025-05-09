import './profilePage.css';
import Image from '../../components/image/image';
import { useState } from 'react';
import Boards from '../../components/boards/boards';
import Galery from "../../components/gallery/gallery"
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import apiRequest from '../../utils/apiRequest';
import FollowButton from './FollowButton';

const ProfilePage = () => {
  const [type, setType] = useState('saved');

  const {username} = useParams()

  const {isPending,error,data} = useQuery({
    queryKey:["profile", username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  })

  if(isPending) return "Loading...";

  if(error) return "An error has occurred: " + error.message;

  if(!data) return "User not found!";
  
  return (
    <div className='profilePage'>
      <Image className='profileImg' src={data.img || '/general/noAvatar.png'} w={100} h={100} alt='' />
      <h1 className='profileNaame'>{data.displayName}</h1>
      <span className='profileUsername'>@{data.username}</span>
      <div className="followCounts">{data.followerCount} followers · {data.followingCount} followings</div>
      <div className="profileInteractions">
        <Image path='/general/share.svg' alt='' />
        <div className="profileButtons">
          <button>Message</button>
          <FollowButton isFollowing={data.isFollowing} username={data.username} />
        </div>
        <Image path='/general/more.svg' alt='' />
      </div>
      <div className="profileOptions">
        <span className={type==='created' ? 'active': ''} onClick={() => setType('created')}>Created</span>
        <span className={type==='saved' ? 'active' : ''} onClick={() => setType('saved')}>Saved</span>
      </div>
      {type==="created" ? <Galery userId={data._id} /> : <Boards userId={data._id} />}
    </div>
  )
}

export default ProfilePage