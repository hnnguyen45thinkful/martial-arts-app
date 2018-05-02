import React, {Component} from 'react';
import './Question.css';

class Question extends Component {
    constructor(props) {
        super(props);
        this.answerQuestion = this.answerQuestion.bind(this);
    }

    answerQuestion(e) {
        e.preventDefault();

        let {setCurrentQuestion, setScore, question} = this.props;
        let selected = e.target.value;

        question.possibleAnswers.map(possibleAnswer => {
            if(possibleAnswer.id == selected){
                setScore(possibleAnswer.scores);
            }
        })

        // if (selected === question.correctAnswer) {
        //     setScore(this.props.score + 1);
        // }

        setCurrentQuestion(this.props.currentQuestion + 1);
    }

    render() {
        let {question} = this.props;

        return (
            <div className="well">
                <h3>{question.text}</h3>
                <ul className="list-group">
                    {
                        this.props.question.possibleAnswers.map(possibleAnswer => {
                            return (
                                <li className="list-group-item" key={possibleAnswer.id}>
                                    <div>
                                        <input
                                            type="radio"
                                            onChange={this.answerQuestion}
                                            name={question.id}
                                            value={possibleAnswer.id}
                                            id={possibleAnswer.id}
                                        />
                                        <label htmlFor={possibleAnswer.id}>{possibleAnswer.text}</label>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Question;