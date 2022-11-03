import { FC } from 'react';
import './Nine.css'
import { ProfileProps } from './Profile';

const ItemCard: FC<ProfileProps> = ({username, avatar, email, name, title, skill, phone}) => {
  return (
    <div className="item-card">
      <div className="item-card-inner">
        <div className="flip-front">
          <div className='card-header'>{username}</div>
          <div className="card-body">
              <img className='avatar' src={avatar} alt="user avatar" />
          </div>
          <div className='card-footer'>{title}</div>
        </div>
        <div className="flip-back">
          <div className='row-info'><b>Name:</b> {name}</div> 
          <div className='row-info'><b>Skill:</b> {skill}</div>
          <div className='row-info'><b>Email:</b> {email}</div>
          <div className='row-info'><b>Phone:</b> {phone}</div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard;