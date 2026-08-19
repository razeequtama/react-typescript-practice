import { useEffect, useState } from "react";
import type { QuestionType } from "../data/questions"; 
import { questions } from "../data/questions";

/* 
    Shape:
    {
        id: number;
        type: "multiple-choice";
        question: string;
        options: string[];
        answer: string[];
      }
    {
        id: number;
        type: "true-false";
        question: string;
        answer: boolean;
      }
    {
        id: number;
        type: "one-answer";
        question: string;
        options: string[];
        answer: string;
    };

    Plan:
    1. Make a variable that holds the answers.
    2. Make another variable that holds the choices.
    3.  - For multiple choice, iterate each of the two variables. If they're the same and true, increment.
        - For true false, just compare if they're the same, then determine if correct or not.
        - For one answer question, just compare if they're the same, then determine if correct or not.

*/

export default function Quiz()
{

    let [userAnswer, setUserAnswer] = useState<Record<number, string | string[] | boolean>>({})

    useEffect(() => {
        console.log("--------------------");
        for (let i = 0; i < questions.length; i++) {
            console.log(JSON.stringify(userAnswer[i + 1]) == JSON.stringify(questions[i].answer));
        }

    }, [userAnswer]);


    function setAnswers(event: any)
    {

        event.preventDefault();

        const questionDivs = document.querySelectorAll("[data-question-id]");

        let ansArrayFinal: Record<number, string | string[]> = {}

        questionDivs.forEach(question => {
            const qId = Number(question?.getAttribute("data-question-id"))

            const answer = question.querySelectorAll<any>(
                "label > input:checked"
            );

            if(answer.length !== 1)
            {
                const ansArray = []
                for(let i = 0; i < answer.length; i++)
                {
                    ansArray[i] = answer[i].getAttribute("value")
                }
                ansArrayFinal[qId] = ansArray;
            }
            else
            {
                let individualAnswer = answer[0].getAttribute("value");
                if (individualAnswer === "true" || individualAnswer === "false") {
                    individualAnswer = (individualAnswer === "true");
                }
                ansArrayFinal[qId] = individualAnswer;
            }
            setUserAnswer(ansArrayFinal);
        })
        
        
    }

    function renderMultipleQuestions(question: QuestionType)
    {
        if(question.type === "multiple-choice")
        {
            return(
                <div data-question-id={question.id} key={question.id}>
                    <h2>{question.id}. {question.question}</h2>
                    <p data-result-id={question.id} style={{display: "none"}}></p>
                    {question.options.map(option => {
                        return (
                            <label>
                                <input type="checkbox" value={option} name={`q${question.id}`}/>
                                {option}
                            </label>
                        )
                    })}
                </div>
                
            )
        }

        return null;

    }

    function renderTrueFalseQuestions(question: QuestionType)
    {
        if(question.type === "true-false")
        {
            return(
                <div data-question-id={question.id} key={question.id}>
                    <h2>{question.id}. {question.question}</h2>
                    <p data-result-id={question.id} style={{display: "none"}}></p>
                    <label>
                        <input
                            name={`q${question.id}`}
                            type="radio"
                            value="true"
                        required />
                        True
                    </label>

                    <label>
                        <input
                            name={`q${question.id}`}
                            type="radio"
                            value="false"
                        required />
                        False
                    </label>
                </div>
                
            )
        }

        return null;

    }

    function renderOneAnserQuestions(question: QuestionType)
    {
        if(question.type === "one-answer")
        {
            return(
                <div data-question-id={question.id} key={question.id}>
                    <h2>{question.id}. {question.question}</h2>
                    <p data-result-id={question.id} style={{display: "none"}}></p>
                    {question.options.map(option => {
                        return <label>
                                    <input
                                        name={`q${question.id}`}
                                        type="radio"
                                        value={option}
                                    required />
                                    {option}
                                </label>
                    })}
                </div>
                
            )
        }

        return null;

    }


    return(
        <>  
            <form onSubmit={setAnswers}>
                {questions.map(question => {
                    return question.type === "multiple-choice" ? renderMultipleQuestions(question) : (question.type === "one-answer" ? renderOneAnserQuestions(question) : renderTrueFalseQuestions(question));
                })}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}