import React, {Component, PropTypes} from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import 'react-select/dist/react-select.css'
import DayPicker, {DateUtils} from "react-day-picker";
import 'react-day-picker/lib/style.css'
import moment from 'moment';

//лучше вынести DatePicker в отдельный компонент
class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    state = {
        selected: null,
        selectedDay: new Date(),
        from: null,
        to: null,
    }

    handleDayClick(e, day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick(e ) {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const { from, to } = this.state;
        return (
            <div>
                <Chart />
                <ArticleList articles={this.props.articles}/>
                <Select options={options} value={this.state.selected} onChange={this.handleChange} multi={true}/>
                <DayPicker
                    initialMonth={ new Date(2016, 1) }
                    selectedDays={ day => DateUtils.isDayInRange(day, {from, to}) }
                    onDayClick={ this.handleDayClick.bind(this) }
                />
                <p>
                    Диапазон: { moment(from).format('L') } - { moment(to).format('L') }.
                    { ' ' }<a href="." onClick={ this.handleResetClick }>Reset</a>
                </p>
            </div>
        )
    }

    handleChange = selected => this.setState({selected})
}

export default App
