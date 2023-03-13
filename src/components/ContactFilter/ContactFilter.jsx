import { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './ContactFilter.styled';

class ContactFilter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
  };

  render() {
    const { filter, changeFilter } = this.props;

    return (
      <div>
        <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={changeFilter}
        />
      </div>
    );
  }
}

export default ContactFilter;
