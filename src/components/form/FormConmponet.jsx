import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Input, Button } from 'chayns-components';
import './Form.scss';
import formText from './text';

const FormComponent = (props) => {
    const {
        handleChange,
        handleClick,
        data,
    } = props;

    return (
        <Accordion head="Hinzufügen">
            <div className="accordion__content">

                <Input
                    className={formText.inputClassName}
                    name={formText.name}
                    placeholder={formText.placeholderName}
                    value={data.name}
                    onChange={value => handleChange(value, formText.name)}
                />

                <Input
                    className={formText.inputClassName}
                    name={formText.url}
                    placeholder={formText.placeholderUrl}
                    value={data.url}
                    onChange={value => handleChange(value, formText.url)}
                />

                <Input
                    className={formText.inputClassName}
                    name={formText.eMail}
                    placeholder={formText.placeholderEMail}
                    value={data.eMail}
                    onChange={value => handleChange(value, formText.eMail)}

                />

                <Input
                    className={formText.inputClassName}
                    name={formText.kommentar}
                    placeholder={formText.placeholderKommentar}
                    value={data.kommentar}
                    onChange={value => handleChange(value, formText.kommentar)}
                />

                <div className="form_button">
                    <Button onClick={() => handleClick()}>senden</Button>
                </div>

            </div>
        </Accordion>
    );
};

FormComponent.propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    data: PropTypes.instanceOf(Object).isRequired
};


export default FormComponent;
