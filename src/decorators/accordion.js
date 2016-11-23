import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
  state = {
      openArticleId: null
  }
  openArticle = id => ev => {
    // если id тот же, то просто сбрасываем openArticleId в null
    if (this.state.openArticleId == id) {
      this.setState({
          openArticleId: null
      })
    }else{
      this.setState({
        openArticleId: id
      })
    }

  }
  render(){
    // насколько нормально так выносить ? помоему так лучше читается.
    // нет подводных камней?
    const settings = {
      ...this.props,
      ...this.state,
      openArticle: this.openArticle
    }

    return <Component {...settings}/>
  }
}
