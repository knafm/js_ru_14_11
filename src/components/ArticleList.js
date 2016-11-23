import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'


class ArticleList extends Component {

  /**
   * getArticleItems - просто вынес в метод
   *
   * @return {array}  массив статей
   */
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
ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
  openArticle: PropTypes.func.isRequired,
  openArticleId: PropTypes.string,


}

export default accordion(ArticleList)
