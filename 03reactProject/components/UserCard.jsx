import React from 'react'
import photo from './assets/photo.jpg'

const UserCard = (props) => {
  return (
    <div>
      <p className='user-name'>{props.name}</p>
      <img className='user-img' src={photo} alt="" />
      <p className='user-Descreption'>{props.des}</p>
    </div>
  )
}

export default UserCard
