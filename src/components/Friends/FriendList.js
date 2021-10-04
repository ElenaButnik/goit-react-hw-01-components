import PropTypes from 'prop-types';
import s from './Friends.module.css';

export default function FriendList({items}) {
    //const isOnLine = true;
   return <ul className={s.list}>
        {items.map(({id, isOnline, avatar, name}) =>
            <li key={id} className={s.item} >
            <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
          </li>
        )}
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