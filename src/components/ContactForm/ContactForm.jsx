import { Component } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Form, FormInput, FormLabel, FormBtn } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onCreateContact: PropTypes.func.isRequired,
  };

  handleChange = e => {
    console.log(e.currentTarget.value);
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  getNewContact = () => {
    const { name, number } = this.state;

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    return newContact;
  };

  handleSubmit = e => {
    const { onCreateContact } = this.props;
    e.preventDefault();

    const newContact = this.getNewContact();
    onCreateContact(newContact);

    this.reset();
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput
          className="input"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleChange}
          required
        />
        <FormLabel htmlFor="number">Number</FormLabel>
        <FormInput
          className="input"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={this.handleChange}
          required
        />
        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    );
  }
}

export default ContactForm;
