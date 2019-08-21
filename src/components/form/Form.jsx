import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'chayns-components';
import { Input } from 'chayns-components';

class Form extends PureComponent {
    render() {
        return (
            <Accordion head="Hinzufügen">
                <div className="accordion__content">

                    <Input
                        name="name"
                        placeholder="Name*"
                        style={{
                            marginBottom: '10px',
                        }}
                    />

                    <Input
                    name="url"
                        placeholder="Ulr*"
                        style={{
                            marginBottom: '10px',
                        }}
                    />


                    <Input
                    name="eMail"
                        placeholder="eMail*"
                        style={{
                            marginBottom: '10px',
                        }}
                    />


                    <Input
                    name="kommentar"
                        placeholder="Kommentar"
                        style={{
                            marginBottom: '10px',
                        }}
                    />

                </div>
            </Accordion>
        )
    }
}

export default Form
