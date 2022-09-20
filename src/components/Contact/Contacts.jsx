import { Container, LiItem } from './Contact.styled';
import PropTypes from 'prop-types';
const Contact = ({ filteredContacts, filter, handleChange, removeBook }) => {
  return (
    <Container>
      <h2>Conatcts</h2>
      <label>
        Find Contacts by name
        <input
          type="text"
          name="filter"
          onChange={handleChange}
          value={filter}
          placeholder="Filter"
        />
      </label>

      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <LiItem key={id}>
            <span>{name + ':'}</span> <span>{number}</span>
            <button type="button" onClick={() => removeBook(id)}>
              Delete
            </button>
          </LiItem>
        ))}
      </ul>
    </Container>
  );
};
Contact.defaultProps = {
  filteredContacts: [],
};
Contact.propTypes = {
  filter: PropTypes.string.isRequired,
  filteredContacts: PropTypes.array.isRequired,
};

export default Contact;
