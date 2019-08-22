import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'chayns-components';
import { Input } from 'chayns-components';
import { Button } from 'chayns-components';

function FormComponent(props) {

    const {handleChange, handleClick, data} = props;

    return (
        <Accordion head="Hinzufügen">
            <div className="accordion__content">

                <Input
                    name="name"
                    placeholder="Name*"
                    value={data.name} 
                    onChange={ (value) => handleChange(value, 'name')}
                    style={{
                        marginBottom: '10px',
                    }}
                />

                <Input
                    name="url"
                    placeholder="Ulr*"
                    value={data.url} 
                    onChange={ (value) => handleChange(value, 'url')}
                    style={{
                        marginBottom: '10px',
                    }}
                />


                <Input
                    name="eMail"
                    placeholder="eMail*"
                    value={data.eMail} 
                    onChange={ (value) => handleChange(value, 'eMail')}
                    style={{
                        marginBottom: '10px',
                    }}
                />


                <Input
                    name="kommentar"
                    placeholder="Kommentar"
                    value={data.kommentar} 
                    onChange={ (value) => handleChange(value, 'kommentar')}
                    style={{
                        marginBottom: '10px',
                    }}
                />

                <div className="form_button">
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