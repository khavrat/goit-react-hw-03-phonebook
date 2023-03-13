import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContactSet,
  ContactElement,
  ContactElSpan,
  ContactBtn,
} from './ContactList.styled';

class ContactList extends Component {
  static propTypes = {
    visibleContacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

  render() {
    const { visibleContacts, onDeleteContact } = this.props;

    return (
      <ContactSet>
        {visibleContacts.map(visibleContact => (
          <ContactElement key={visibleContact.id}>
            <ContactElSpan>{visibleContact.name}:</ContactElSpan>
            <ContactElSpan>{visibleContact.number}</ContactElSpan>
            <ContactBtn
              type="button"
              onClick={() => onDeleteContact(visibleContact.id)}
            >
              Delete
            </ContactBtn>
          </ContactElement>
        ))}
      </ContactSet>
    );
  }
}

export default ContactList;
