import PropTypes from 'prop-types';
import style from './Section.module.css';

export default function Section({ children, title }) {
  return (
    <section className={style.section}>
      <h1 className={style.title}>{title}</h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
