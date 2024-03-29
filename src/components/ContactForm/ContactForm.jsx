import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleSubmit = evt => {
    evt.preventDefault();

    const contactData = {
      ...this.state,  
      id: nanoid(),
    
    };
    
      this.props.onSubmit(contactData);
      this.setState({ name: '', number: '' });
    };

    handleInputChange = evt => {
    const value =
        evt.target.value;

    const name = evt.target.name;

    this.setState({
      [name]: value,
    });
    };
    
    render() {
        return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.formLabel}>
          Name
          <input
            className={css.formInput}
            type="text"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії]+(([' \-][a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії ])?[a-zA-Zа-яА-ЩЬЮЯҐЄІЇа-щьюяґєії]*)*$"
            title="Only Cyrillic/Latin letters, also name may contain hyphen, apostrophe or space character"
            required
          />
        </label>
        <label className={css.formLabel}>
            Number
          <input
            className={css.formInput}
            type="tel"
            name="number"  
            onChange={this.handleInputChange}
            value={this.state.number}
            pattern="[+380]{4}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
            title="Only digits, format +380-XX-XXX-XX-XX"
            required
          />
        </label>
            <button className={css.button} type="submit">Add contact</button>
      </form>
    );
    };
};
