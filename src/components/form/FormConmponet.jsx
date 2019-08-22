import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'chayns-components';
import { Input } from 'chayns-components';
import { Button } from 'chayns-components';
import './Form.scss';
import formText from './text';

function FormComponent(props) {

    const { handleChange, handleClick, data } = props;

    return (
        <Accordion
            head={formText.accordionHeadline}
            dataGroup={formText.accordionDataGroup}
        >

            <div className={formText.accordion__content}>

                <Input
                    className={formText.inputClassName}
                    name={formText.name}
                    placeholder={formText.placeholderName}
                    value={data.name}
                    onChange={(value) => handleChange(value, formText.name)}
                />

                <Input
                    className={formText.inputClassName}
                    name={formText.url}
                    placeholder={formText.placeholderUrl}
                    value={data.url}
                    onChange={(value) => handleChange(value, formText.url)}
                />


                <Input
                    className={formText.inputClassName}
                    name={formText.eMail}
                    placeholder={formText.placeholderEMail}
                    value={data.eMail}
                    onChange={(value) => handleChange(value, formText.eMail)}
                />


                <Input
                    className={formText.inputClassName}
                    name={formText.kommentar}
                    placeholder={formText.placeholderKommentar}
                    value={data.kommentar}
                    onChange={(value) => handleChange(value, formText.kommentar)}
                />

                <div className={formText.buttonClassName}>
                    <Button onClick={() => handleClick()}>senden</Button>
                </div>

            </div>
        </Accordion>
    )
}

FormComponent.PropTypes = {
    handleChange: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
}


export default FormComponent