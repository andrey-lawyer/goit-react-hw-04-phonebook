import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormUser, LabelUser, InputUser, ButtonAdd } from './Form.styled';

class ContactForm extends Component {
  loginInputIdName = nanoid();
  loginInputIdNumber = nanoid();

  state = {
    name: '',
    number: '',
    id: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <FormUser onSubmit={this.handleSubmit}>
          <LabelUser htmlFor={this.loginInputIdName}>Name</LabelUser>
          <InputUser
            id={this.loginInputIdName}
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <LabelUser htmlFor={this.loginInputIdNumber}>Number</LabelUser>
          <InputUser
            id={this.loginInputIdNumber}
            value={this.state.number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ButtonAdd type="submit">Add contact</ButtonAdd>
        </FormUser>
      </div>
    );
  }
}

export default ContactForm;
