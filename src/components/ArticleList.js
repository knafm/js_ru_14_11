import React, { Component }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'


class ArticleList extends Component {

//вынес в метод просто
  getArticleItems() {
    const { articles } = this.props;
    return articles.map(article => (
      <li key = {article.id}>
        <Article
          article = {article}
          isOpen = {article.id == this.props.openArticleId }
          toggleOpen = {this.props.openArticle(article.id)}
        />
      </li>
    ))
  }

    render() {
        return (
            <ul>
                {this.getArticleItems()}
            </ul>
        )
    }

}

export default accordion(ArticleList)
