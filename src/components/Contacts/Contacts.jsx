import PropTypes from 'prop-types';
import style from './Contacts.module.css';

export default function Contacts({ contacts, onDeleteContacts }) {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={style.item} key={id}>
            <p className={style.text}>
              {name}&#32;:&#32;{number}
            </p>
            <button
              className={style.btn}
              type="button"
              onClick={() => onDeleteContacts(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};
