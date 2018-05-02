import React, {Component} from 'react';
import Question from './Question';

class QuestionList extends Component {
    render() {
        return (
            <div className="questions">
                {
                    this.props.questions.map(question => {
                        if (this.props.currentQuestion === question.id) {
                            return <Question key={question.id} question={question} {...this.props}/>
                        }

                    })
                }
            </div>
        )
    }
}

export default QuestionList;