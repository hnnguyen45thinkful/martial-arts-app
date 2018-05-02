import React, {Component} from 'react';
import './Question.css';

class Scoreboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="well">
                <h3>
                    Question {this.props.currentQuestion} out of {this.props.questions.length}
                    <strong>Score: {this.props.score}</strong>
                </h3>
            </div>
        )
    }
}

export default Scoreboard;