import React  from 'react'
import store from '../store'
import {addExtra, deleteExtra} from '../AC/filter'
//это ты перемудрил, во-первых лучше не тянуть стор руками, как ты теперь за обновлениями следить будешь? Используй react-redux
//во-вторых это разовая задача, незачем ее в декоратор выносить
//ну и логика сложная, надо было просто пофильтровать список статей
//не понятно к чему сдесь toggleOpenItem
export default (Component) => class WrappedComponent extends React.Component {
    constructor() {
        super()
        this.searchDateByID = this.searchDateByID.bind(this)
        this.articlesFilter = this.articlesFilter.bind(this)
    }

    render() {
        const {articles} = this.props
        return <Component {...this.props} isOpen={this.isOpen} toggleOpenItem={this.toggleOpenItem} articlesFilter={this.articlesFilter}/>
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
            for (let item of dates.extra) {
                if (parcedDate == item) return true;
            }
    }

    articlesFilter(itemDate){
      let date = Date.parse(itemDate)
      const {from, to} = this.props.filter
      if (date >= from && date <=to) {
        return true
      }else {
        return false
      }
    }

    toggleOpenItem = id => ev => {
        const {filter} = this.props
        const {addExtra, deleteExtra} = this.props
        let flag= false;
        let dat = this.searchDateByID(id);
        if (filter.extra.length){
          for (let item of filter.extra){
            if (item === dat){
              deleteExtra(dat);
              flag = true;
              break;
            }
          }
          if (!flag) addExtra(dat);
      } else {
        addExtra(dat);
      }
    }
}
