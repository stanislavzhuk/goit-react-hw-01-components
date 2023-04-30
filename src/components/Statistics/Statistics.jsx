
import PropTypes from 'prop-types';

export function Statistics({ title, stats }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        <li>
          <span></span>
          <span></span>
        </li>
        <li>
          <span></span>
          <span></span>
        </li>
        <li>
          <span></span>
          <span></span>
        </li>
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};