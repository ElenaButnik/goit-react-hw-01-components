import PropTypes from 'prop-types';

export default function FriendList({items}) {
    //const isOnLine = true;
   return <ul>
        {items.map(({id, isOnLine, avatar, name}) =>(
            <li key={id}>
            <span className={isOnLine ? 'status-online' : 'status-offline'}></span>
            <img src={avatar} alt={name} width="48" />
            <p>{name}</p>
          </li>
        ))}
    </ul>
};

FriendList.defaultProps = {
    name: 'no name',
}

FriendList.propTypes = {
    status: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
    id:PropTypes.number,
}