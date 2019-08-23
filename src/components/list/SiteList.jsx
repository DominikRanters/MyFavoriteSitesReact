import React, { PureComponent } from 'react';
import ListComponent from './ListComponent';

const handleClick = (siteUrl) => {
    const win = window.open(siteUrl, '_blank');
    win.focus();
};

class List extends PureComponent {
    constructor() {
        super();
        this.state = {
            sites: [],
        };

        this.fetchUrl('Ahaus');

        this.fetchUrl = this.fetchUrl.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(searchValue) {
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.fetchUrl(searchValue);
        }, 500);
    }

    async fetchUrl(searchValue) {
        chayns.showWaitCursor();

        const url = `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchValue}&Skip=0&Take=50`;

        const response = await fetch(url);
        try {
            const jsonBody = await response.json();

            chayns.hideWaitCursor();
            this.setState({
                sites: jsonBody.Data,
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const {
            sites,
        } = this.state;
        return (
            <ListComponent
                onSearch={this.onSearch}
                sites={sites}
                handleClick={handleClick}
            />
        );
    }
}

export default List;
