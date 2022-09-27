import { Component } from 'react';
import { nanoid } from 'nanoid';
import SectionPhoneBook from './SectionPhoneBook/';
const LS_KEY = 'contacts';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(LS_KEY));

    if (contacts && contacts.length) {
      this.setState({ contacts });
    }
  }
  componentDidUpdate(prevProbs, prevState) {
    const newContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (prevContacts !== newContacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(newContacts));
    }
  }
  formSubmitHandler = ({ name, number }) => {
    const { isDuplicate } = this;
    if (isDuplicate(name, number)) {
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id: nanoid() }],
      };
    });
  };
  removeBook = id => {
    this.setState(prev => {
      const newContacts = prev.contacts.filter(item => item.id !== id);

      return {
        contacts: newContacts,
      };
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    if (!filter) {
      return contacts;
    }

    return contacts.filter(
      ({ name, number }) =>
        name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        number.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  isDuplicate = (name, number) => {
    const { contacts } = this.state;

    const result = contacts.find(
      contact => contact.name === name && contact.number === number
    );
    return result;
  };

  render() {
    const { filter } = this.state;
    const { getFilteredContacts, formSubmitHandler, handleChange, removeBook } =
      this;
    const filteredContacts = getFilteredContacts();
    return (
      <SectionPhoneBook
        title={'PhoneBook'}
        OnSubmit={formSubmitHandler}
        filteredContacts={filteredContacts}
        filter={filter}
        handleChange={handleChange}
        removeBook={removeBook}
      />
    );
  }
}
