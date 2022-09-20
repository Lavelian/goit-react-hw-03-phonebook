import { Component } from 'react';
import { FormBox, Button } from './Form.styled';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  handleSubmit = e => {
    const { state, resetForm } = this;
    const { OnSubmit } = this.props;
    e.preventDefault();
    OnSubmit(state);
    resetForm();
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { name, number } = this.state;
    return (
      <FormBox onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Add to Contact</Button>
      </FormBox>
    );
  }
}
