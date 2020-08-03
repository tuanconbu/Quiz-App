import React, { useState, useEffect } from 'react'
import quiz_data from './data'
import Answers from './Answers'
import { Card, Button } from 'antd';

export default function Quiz() {
    const [data, setData] = useState([]);
    const [score, setScore] = useState(0);
    const loadQuestions = () => {
        setData(quiz_data);
    }
    const loadScore = (score) => {
        setScore(score);
    }
    useEffect(() => {
        loadQuestions();
    })
    const playAgain = () => {
        setScore(0);
        window.location.reload();
    }
    return (
        <div className="site-card-border-less-wrapper">
            <Button onClick={playAgain}>Play Again!</Button>
            <h2>Score: {score}</h2>
            {data.map(item => (
                <Card title={item.quiz} style={{ borderBottom: '0.5px solid' }} key={item.id}>
                    <Answers score={score} loadScore={loadScore} key={item.id} answers={item.answers} rightAnswer={item.rightAnswer} />
                </Card>
            ))}
        </div>
    )
}
