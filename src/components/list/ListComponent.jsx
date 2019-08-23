import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, List, ListItem } from 'chayns-components';
import listText from './text';

const ListComponent = (props) => {
    const { onSearch, sites, handleClick } = props;
    return (
        <Accordion
            dataGroup={listText.accordionDataGroup}
            head={listText.accordionHeadline}
            open={listText.isAccordionOpen}
            searchPlaceholder={listText.searchPlaceholder}
            onSearch={value => onSearch(value)}
            onSearchEnter={value => onSearch(value)}
        >
            <div className={listText.accordion__content}>
                <List>
                    {
                        sites && (
                            sites.map(item => (
                                <ListItem
                                    key={item.siteId}
                                    title={item.appstoreName}
                                    image={`https://sub60.tobit.com/l/${item.siteId}`}
                                    onClick={() => handleClick(`http://chayns.net/${item.siteId}/`)}
                                />
                            ))
                        )
                    }
                </List>
            </div>
        </Accordion>
    );
};

ListComponent.propTypes = {
    onSearch: PropTypes.func.isRequired,
    sites: PropTypes.instanceOf(Array).isRequired,
    handleClick: PropTypes.func,
};

ListComponent.defaultProps = {
    handleClick: null,
};

export default ListComponent;
