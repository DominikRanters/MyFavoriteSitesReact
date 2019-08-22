import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListComponent from './ListComponent';


class List extends PureComponent {

    constructor() {
        super();
        this.state = {
            sites: [],
        }

        this._fetchUrl('Ahaus');

        this._fetchUrl = this._fetchUrl.bind(this);
        this.onSearchEnter = this.onSearchEnter.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onSearchEnter(searchValue) {

        this._fetchUrl(searchValue);
    }

    _fetchUrl(searchValue) {

        let url = `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchValue}&Skip=0&Take=50`

        fetch(url)
            .then((response) => {
                return response.json();
            }).then((json) => {
                this.setState({
                    sites: json.Data,
                }) //, json.ResultCode
            }).catch((ex) => {
                console.log(`Eroor`, ex)
            })
    }

    handleClick(siteUrl) {
        let win = window.open(siteUrl, '_blank');
        win.focus();
        
    }

    render() {

        return (
            <ListComponent
                onSearchEnter={this.onSearchEnter}  
                data={this.state}
                handleClick={this.handleClick}
            />

        )
    }
}

export default List;