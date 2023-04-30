
import PropTypes from 'prop-types';

export function Statistics({ title, stats }) {
  function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(({ id, label, percentage }) => (
          <li key={id}
          style={{ backgroundColor: randomHexColor() }}>
            <span>{label}</span>
            <span>{percentage}%</span>
        </li>
        ))}
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