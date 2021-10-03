import PropTypes from 'prop-types';

export default function User ({
  avatar,
  name = 'не известно', 
  tag, 
  location, 
  statsFollowers,
  statsViews,
  statsLikes
}) {
    
   // console.log(props);
    return (

  <div>
    <div>
      <img
        src={avatar}
        alt={name}
      />
      <p >{name}</p>
      <p >@{tag}</p>
      <p >{location}</p>
    </div>
  
    <ul >
      <li>
        <span >Followers</span>
        <span >{statsFollowers}</span>
      </li>
      <li>
        <span >Views</span>
        <span >{statsViews}</span>
      </li>
      <li>
        <span >Likes</span>
        <span >{statsLikes}</span>
      </li>
    </ul>
    </div>
      )};
 

  User.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag:PropTypes.string,
    location:PropTypes.string,
    statsFollowers:PropTypes.number,
    statsViews:PropTypes.number,
    statsLikes:PropTypes.number,
  }