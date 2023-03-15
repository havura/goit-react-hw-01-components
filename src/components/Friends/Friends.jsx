import PropTypes from "prop-types";
import css from "./Friends.module.css"

export const Friends = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li className={css.item} key= {id}>
                    <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
                    <img className={css.avatar} src={avatar} alt={name} width="48" />
                    <p className={css.name}>{name}</p>
                </li>))}
        </ul>
    )
};

Friends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar:PropTypes.string.isRequired,

        })
    ),
    

}
    

 