import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'chayns-components';
import { Input } from 'chayns-components';
import { Button, ChooseButton } from 'chayns-components';
import './Form.scss';
import fomrText from './text';
import FormComponent from './FormConmponet';

class Form extends PureComponent {

    constructor() {
        super();
        this.state = {
            name: '',
            url: '',
            eMail: '',
            kommentar: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(value, name) {
        this.setState({ [name]: value })
    }

    handleClick() {
        if (this.state.name === fomrText.emptyString || this.state.url === fomrText.emptyString || this.state.eMail === fomrText.emptyString) {
            chayns.dialog.alert(fomrText.emptyString, fomrText.fillAllImportent);

        } else if (!this.state.eMail.includes('@')) {
            chayns.dialog.alert(fomrText.emptyString, fomrText.invalidEmail);

        } else if (!this.state.url.includes('.')) {
            chayns.dialog.alert(fomrText.emptyString, fomrText.invalidUrl);

        } else if (this.state.name !== fomrText.emptyString && this.state.url !== fomrText.emptyString && this.state.eMail !== fomrText.emptyString && this.state.kommentar !== fomrText.emptyString) {
            chayns.intercom.sendMessageToPage({
                text: `Hier ist meine Seite! Name:${this.state.name}. Url: ${this.state.url}. eMail: ${this.state.eMail}. Kommentar: ${this.state.kommentar}.`
            }).then((data) => {
                if (data.status == 200) {
                    this.setState({
                        ['name']: fomrText.emptyString,
                        ['url']: fomrText.emptyString,
                        ['eMail']: fomrText.emptyString,
                        ['kommentar']: fomrText.emptyString,
                    })
                    chayns.dialog.alert(fomrText.emptyString, fomrText.sendText);
                }
            })

        } else if (this.state.name !== fomrText.emptyString && this.state.url !== fomrText.emptyString && this.state.eMail !== fomrText.emptyString) {
            chayns.intercom.sendMessageToPage({
                text: `Hier ist meine Seite! Name:${this.state.name}. Url: ${this.state.url}. eMail: ${this.state.eMail}.`
            }).then((data) => {
                if (data.status == 200) {
                    this.setState({
                        ['name']: fomrText.emptyString,
                        ['url']: fomrText.emptyString,
                        ['eMail']: fomrText.emptyString,
                    })
                    chayns.dialog.alert(fomrText.emptyString, fomrText.sendText);
                }
            });
        }
    }

    render() {
        return (
            <FormComponent
                handleChange={this.handleChange}
                handleClick = {this.handleClick}
                data = {this.state}
            />
        )
    }
}

export default Form
