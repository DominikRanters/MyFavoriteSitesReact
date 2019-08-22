import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'chayns-components';
import { List, ListItem } from 'chayns-components';

function ListComponent(props) {

    const {onSearch, data, handleClick, loading} = props;
    let listItem = '';

    console.log(data.sites);
    if(data.sites !== null) {
        listItem = data.sites.map(item => <ListItem 
            key={item.siteId} 
            title={item.appstoreName}
            image={`https://sub60.tobit.com/l/${item.siteId}`}
            onClick={ () => handleClick(`http://chayns.net/${item.siteId}/`)}
            />) 
    }

    return (
        <Accordion 
            head="Sites" 
            open="true" 
            onSearch={(value) => onSearch(value)}
            onSearchEnter={(value) => onSearch(value)}
        >
            <div className="accordion__content">
            <List>{!loading ? {listItem} : chayns.hideWaitCursor()}</List>
            </div>
        </Accordion>
    )
}

ListComponent.PropTypes = {
    onSearch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    handleClick: PropTypes.func,
    loading: PropTypes.bool,
}

export default ListComponent