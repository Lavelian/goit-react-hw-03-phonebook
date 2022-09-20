import Form from 'components/Form';
import Contact from 'components/Contact';
import { Secton } from './SectionPhoneBook.styled';
import PropTypes from 'prop-types';
const SectionPhoneBook = ({
  title,
  OnSubmit,
  filter,
  filteredContacts,
  handleChange,
  removeBook,
}) => {
  return (
    <Secton>
      <h1>{title}</h1>
      <Form OnSubmit={OnSubmit} />
      <Contact
        filter={filter}
        filteredContacts={filteredContacts}
        handleChange={handleChange}
        removeBook={removeBook}
      />
    </Secton>
  );
};

SectionPhoneBook.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  filteredContacts: PropTypes.array.isRequired,
};

export default SectionPhoneBook;
