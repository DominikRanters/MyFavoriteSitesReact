import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'chayns-components';
import { List, ListItem } from 'chayns-components';

function ListComponent(props) {

    const {onSearchEnter, data, handleClick} = props;

    const listItem = data.sites.map(item => <ListItem 
        key={item.siteId} 
        title={item.appstoreName}
        image={`https://sub60.tobit.com/l/${item.siteId}`}
        onClick={ () => handleClick(`http://chayns.net/${item.siteId}/`)}
        />) 
        console.log(listItem);

    return (
        <Accordion 
            head="Sites" 
            open="true" 
            onSearchEnter={(value) => onSearchEnter(value)}
        >
            <div className="accordion__content">
            <List>{listItem}</List>
            </div>
        </Accordion>
    )
}

ListComponent.PropTypes = {
    onSearchEnter: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    handleClick: PropTypes.func,
}

export default ListComponent