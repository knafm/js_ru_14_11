import React  from 'react'
import store from '../store'
import {setExtra} from '../AC/filter'
// TODO: проверка на открыт - не
// articles передается из листа

export default (Component) => class WrappedComponent extends React.Component {
  constructor() {
      super(),
      this.searchDateByID = this.searchDateByID.bind(this)
  }

  render(){
    const { articles } = this.props
    return <Component {...this.props} isOpen = {this.isOpen} toggleOpenItem = {this.toggleOpenItem}/>
  }
  // TODO: логика : сравниваем даты - возвращаем bool
  // проход по статьям, ищем с данным id , сравниваем даты, если нашли то тру
  searchDateByID(id){
    for (let key in this.props.articles){

       if (this.props.articles[key].id === id){
         console.log(`нашли дату ${this.props.articles[key].date}`);
         console.log(`вернули ${Date.parse(this.props.articles[key].date)}`);
         return Date.parse(this.props.articles[key].date)
       }
     }

  }
  isOpen = id => {

    return this.props.articles.some(item=>{
       if (item.id === id){
         //console.log(`совпало? ${this.compareDates(item.date)}`);
         return this.compareDates(item.date)
       }
     })

  }

  //нечистоты
  compareDates(itemDate){
    // TODO: сравнить, что лежит в диапазоне и с набором дат из extra
    let dates = store.getState().filter;

      //console.log(`${Date.parse(itemDate)} , diap ${dates.from} ${dates.to}`);
    if (Date.parse(itemDate) >= dates.from && Date.parse(itemDate) <= dates.to){
      return true
    } else {
      //говнокод
      return itemDate in dates.extra? true: false ;
    }
  }
  // TODO: диспатч extra , пихаем туда дату соотв статье (считаем что она уникальная)
  toggleOpenItem = id => ev => {
    console.log(`туглим id ${id}`);
    let dat = this.searchDateByID(id);
    console.log(`в диспатчер ушло ${dat}`);
    store.dispatch(setExtra(dat));


  }
}
