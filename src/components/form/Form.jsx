import React, { PureComponent } from 'react';
import './Form.scss';
import fomrText from './text';
import FormComponent from './FormConmponet';
import formText from './text';

class Form extends PureComponent {

    constructor() {
        super();
        this.state = {
            name: formText.emptyString,
            url: formText.emptyString,
            eMail: formText.emptyString,
            kommentar: formText.emptyString,
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
                        [formText.name]: fomrText.emptyString,
                        [formText.url]: fomrText.emptyString,
                        [formText.eMail]: fomrText.emptyString,
                        [formText.kommentar]: fomrText.emptyString,
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
                        [formText.name]: fomrText.emptyString,
                        [formText.url]: fomrText.emptyString,
                        [formText.eMail]: fomrText.emptyString,
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
