import React  from 'react'
import store from '../store'
import {toggleExtra} from '../AC/filter'

export default (Component) => class WrappedComponent extends React.Component {
    constructor() {
        super()
        this.searchDateByID = this.searchDateByID.bind(this)
    }

    render() {
        const {articles} = this.props
        return <Component {...this.props} isOpen={this.isOpen} toggleOpenItem={this.toggleOpenItem}/>
    }

    searchDateByID(id) {
        for (let key in this.props.articles) {

            if (this.props.articles[key].id === id) {
                return Date.parse(this.props.articles[key].date)
            }
        }
    }

    isOpen = id => {
        const {articles} = this.props;
        for (let item of articles) {
            if (item.id === id) return this.compareDates(item.date)
        }

    }

    compareDates(itemDate) {
        let dates = this.props.filter;
        let parcedDate = Date.parse(itemDate);
        if (Date.parse(itemDate) >= dates.from && Date.parse(itemDate) <= dates.to) {
            return true
        } else {
            for (let item of dates.extra) {
                if (parcedDate == item) return true;
            }
            return false
        }
    }

    toggleOpenItem = id => ev => {
        let dat = this.searchDateByID(id);
        store.dispatch(toggleExtra(dat));
    }
}
