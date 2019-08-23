import React from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'chayns-components';
import { List, ListItem } from 'chayns-components';
import listText from './text';

function ListComponent(props) {

    const { onSearch, data, handleClick } = props;
    let listItem = listText.emptyString;

    if (data.sites !== null) {
        listItem = data.sites.map(item => <ListItem
            key={item.siteId}
            title={item.appstoreName}
            image={`https://sub60.tobit.com/l/${item.siteId}`}
            onClick={() => handleClick(`http://chayns.net/${item.siteId}/`)}
        />)
    }

    return (
        <Accordion
            dataGroup={listText.accordionDataGroup}
            head={listText.accordionHeadline}
            open={listText.isAccordionOpen}
            searchPlaceholder={listText.searchPlaceholder}
            onSearch={(value) => onSearch(value)}
            onSearchEnter={(value) => onSearch(value)}
        >
            <div className={listText.accordion__content}>
                <List>{listItem}</List>
            </div>
        </Accordion>
    )
}

ListComponent.PropTypes = {
    onSearch: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    handleClick: PropTypes.func,
}

export default ListComponent