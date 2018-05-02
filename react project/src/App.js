//http://stackoverflow.com/questions/20905227/reactjs-unexpected-token-error
//http://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value

//http://stackoverflow.com/questions/32861889/reactjs-how-do-i-sort-an-array-of-objects-based-on-value-of-props

import React, { Component } from 'react';
import QuestionList from './components/quest/QuestionList';
import Scoreboard from './components/quest/Scoreboard';
import Result from './components/quest/Result';
import './App.css';

class App extends Component {
  constructor(props) {
        super(props);

        this.state = {
            arts : [
            //point system scores starts at zero
                {title: "Boxing", score:0}, //0
                {title: "Karate", score:0},//1
                {title: "Mixed Martial Arts (MMA)", score:0 },//2
                {title: "Tae Kwon Do", score:0},//3
                {title: "Jiu-Jitsu", score:0}, //4
                {title: "Judo", score:0},//5
                {title: "Submission/Catch Wrestling", score:0}, //6 
                {title: "Kendo", score:0},//7
                {title: "Kickboxing/Thai Boxing", score:0}//8
            ],

            questions: [
                {
                    id: 1,
                    text: 'Do you prefer to strike and stand-up (punch and/or kick)?',
                    possibleAnswers: [
                        {
                            id: 'a',
                            text:'yes',
                            scores: [
                                1,
                                1,
                                1,
                                1,
                                0,
                                0,
                                0,
                                1,
                                1
                            ]
                            /*

                            for(var i=0;i<answer.scores.length;i++){
                                this.state.arts[i].score += answer.scores[i];
                            }
                            */
                        },
                        {
                            id: 'b',
                            text: 'no',
                            scores: [
                                0,
                                0,
                                0,
                                0,
                                1,
                                1,
                                1,
                                1,
                                0
                            ]
                        }
                    ],
                    
                },
                {
                    id: 2,
                    text: 'Do you feel comfortable grappling, doing submission, or throwing your opponent ? ',
                    possibleAnswers: [
                        {
                            id: 'a',
                            text: 'yes',
                            scores: [
                                0,
                                0,
                                1,
                                0,
                                1,
                                1,
                                1,
                                1,
                                0
                            ]

                        },
                        {
                            id: 'b',
                            text: 'no',
                            scores: [
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                1
                            ]
                        }
                    ],
                    
                },
                {
                    id: 3,
                    text: 'Are you okay using weapons, foreign objects, or any sharp weapons for hand to hand combat sparring ? ',
                    possibleAnswers: [
                        {
                            id: 'a',
                            text: 'yes',
                            scores: [
                                0,
                                1,
                                0,
                                1,
                                0,
                                0,
                                0,
                                1,
                                0
                            ]
                        },
                        {
                            id: 'b',
                            text: 'no',
                            scores: [
                                1,
                                0,
                                1,
                                0,
                                1,
                                1,
                                1,
                                0,
                                1
                            ]
                        }
                    ],
                    
                },
                {
                    id: 4,
                    text: 'Do you like to learn the history, arts, honor and compete in the olympics?',
                    possibleAnswers: [
                        {
                            id: 'a',
                            text: 'yes',
                            scores: [
                                0,
                                1,
                                0,
                                1,
                                1,
                                1,
                                0,
                                1,
                                0
                            ]
                        },
                        {
                            id: 'b',
                            text: 'no',
                            scores: [
                                1,
                                0,
                                1,
                                0,
                                0,
                                0,
                                1,
                                0,
                                1
                            ]
                        }

                    ],
                    
                },
                {
                    id: 5,
                    text: 'Would you like to learn how to break wooden boards, bricks, stones, etc. ? ',
                    possibleAnswers: [
                        {
                            id: 'a',
                            text: 'yes',
                            scores: [
                                0,
                                1,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                1
                            ]
                        },
                        {
                            id: 'b',
                            text: 'no',
                            scores: [
                                1,
                                0,
                                1,
                                0,
                                1,
                                1,
                                1,
                                1,
                                0
                            ]
                        }

                    ],
                    
                }    
            ],
            //Start off current score and question
            score: 0,
            currentQuestion: 1
        };
//text: 'Do you prefer to strike and stand-up (punch and/or kick)?',
//text: 'Do you feel comfortable grappling, doing submission, or throwing your opponent ? ',
//text: 'Are you okay using weapons, foreign objects, or any sharp weapons for hand to hand combat sparring ? ',
//text: 'Do you like to learn the history, arts, honor and compete in the olympics?',
//text: 'Would you like to learn how to break wooden boards, bricks, stones, etc. ? ',
// 1 : y,y,y,y,y => MMA 
//question 2 : 
        this.setCurrentQuestion = this.setCurrentQuestion.bind(this);
        this.setScore = this.setScore.bind(this);

    }

    setCurrentQuestion(currentQuestion) {
        this.setState({currentQuestion: currentQuestion});
    }

    setScore(scores) {
        let arts = this.state.arts;
        console.log(scores);
        for (var i = 0; i < scores.length; i++) {
            arts[i].score = parseInt(arts[i].score) + parseInt(scores[i]);
        }
        this.setState({arts:arts});

    }

    render() {
        let scoreboard,
            result;

        if (this.state.currentQuestion > this.state.questions.length) {
            scoreboard = '';
            result = <Result {...this.state}/>;
        } else {
            scoreboard = <Scoreboard {...this.state }/>;
            result = '';
        }

        return (
        <div className="App">
            <div className="col-md-6 col-md-offset-3">
                <h1 className="decision-heading">Martial Art : Decision Making</h1>
            <p className="App-intro">
        Interested in starting Martial Arts? Don't know which discipline to study or start! 
        Then you come to the right place to evaluate and decide which is a perfect fit for you.</p>
                <div className="App-header">
                {scoreboard}
                <QuestionList
                    {...this.state}
                    setCurrentQuestion={this.setCurrentQuestion}
                    setScore={this.setScore}
                />
                {result}
                </div>
            </div>
        </div>

        );
    }
}
    

export default App;
