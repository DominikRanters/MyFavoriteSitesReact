import React, { PureComponent } from 'react';
import './Form.scss';
import formText from './text';
import FormComponent from './FormConmponet';

class Form extends PureComponent {
    constructor() {
        super();
        this.state = {
            name: formText.emptyString,
            url: formText.emptyString,
            eMail: formText.emptyString,
            kommentar: formText.emptyString,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(value, name) {
        this.setState({ [name]: value });
    }

    async handleClick() {
        const {
            name,
            url,
            eMail,
            kommentar,
        } = this.state;

        if (name === formText.emptyString || url === formText.emptyString || eMail === formText.emptyString) {
            chayns.dialog.alert(formText.emptyString, formText.fillAllImportent);
        } else if (!eMail.includes('@')) {
            chayns.dialog.alert(formText.emptyString, formText.invalidEmail);
        } else if (!url.includes('.')) {
            chayns.dialog.alert(formText.emptyString, formText.invalidUrl);
        } else if (name !== formText.emptyString && url !== formText.emptyString && eMail !== formText.emptyString && kommentar !== formText.emptyString) {
            const data = await chayns.intercom.sendMessageToPage({
                text: `Hier ist meine Seite! Name:${name}. Url: ${url}. eMail: ${eMail}. Kommentar: ${kommentar}.`
            });
            if (data.status === 200) {
                this.setState({
                    [formText.name]: formText.emptyString,
                    [formText.url]: formText.emptyString,
                    [formText.eMail]: formText.emptyString,
                    [formText.kommentar]: formText.emptyString,
                });
                chayns.dialog.alert(formText.emptyString, formText.sendText);
            }
        } else if (name !== formText.emptyString && url !== formText.emptyString && eMail !== formText.emptyString) {
            chayns.intercom.sendMessageToPage({
                text: `Hier ist meine Seite! Name:${name}. Url: ${url}. eMail: ${eMail}.`
            });
            const data = await chayns.intercom.sendMessageToPage({
                text: `Hier ist meine Seite! Name:${name}. Url: ${url}. eMail: ${eMail}. Kommentar: ${kommentar}.`
            });
            if (data.status === 200) {
                this.setState({
                    [formText.name]: formText.emptyString,
                    [formText.url]: formText.emptyString,
                    [formText.eMail]: formText.emptyString,
                });
                chayns.dialog.alert(formText.emptyString, formText.sendText);
            }
        }
    }

    render() {
        return (
            <FormComponent
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                data={this.state}
            />
        );
    }
}

export default Form;
