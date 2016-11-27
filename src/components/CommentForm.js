import React, { PropTypes } from 'react'

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
      }
    state = {
        value:'',
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render(){
        return(
            <div>
                <form>
                    комментарий:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="button" value="Submit" />
                </form>
             </div>)
    }
}

export default CommentForm