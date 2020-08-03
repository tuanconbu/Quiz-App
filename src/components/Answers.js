import React, { useState } from 'react'
import { Button } from 'antd';
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons'

export default function Answers(props) {
    const [clickCheck, setClickCheck] = useState(true);
    const [trueCheck, setTrueCheck] = useState(null);

    var { score, loadScore, answers, rightAnswer } = props;

    const onAnswer = (e, rightAnswer) => {
        setClickCheck(false);
        if (e.target.textContent === rightAnswer) {
            score++;
            loadScore(score);
            setTrueCheck(true)
        }
    }

    return (
        <div>
            {clickCheck ? answers.map((answer, index) => (
                <Button
                    key={answer.index}
                    onClick={(e) => onAnswer(e, rightAnswer)}>{answer}</Button>
            )) : <Button type="primary">{rightAnswer}</Button>}
            {clickCheck ? "" : trueCheck
                ? <div style={{ marginTop: 30 }}><CheckCircleFilled style={{ color: 'green', margin: 10 }} />Correct!</div>
                : <div style={{ marginTop: 30 }}><CloseCircleFilled style={{ color: 'red', margin: 10 }} />Incorrect!</div>}
        </div>
    )
}
