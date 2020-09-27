import React, { useEffect, useState, FormEvent } from "react";
import { QuizAPI } from "../../service/API";
import { QuestionCard } from "./QuestionCard";
import { QuizType } from "../../types/quiz_type";
import { makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import load from "../../assets/loading.gif";

const useStyles = makeStyles({
  loader: {
    textAlign: 'center',
    backgroundColor: 'blue',
    color: 'white',
    padding: '30px',
    margin: '0'
  },
  button: {
    textDecoration: 'none',
    padding: '5px',
    color: 'white',
    fontSize: '1.4rem',
  }
})

export default function QuestionData() {
  const classes = useStyles()
  const [quiz, setQuiz] = useState<QuizType[]>([]);
  const [questionNr, setQuestionNr] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  

  useEffect(() => {
    const FetchAPI = async () => {
      const question: QuizType[] = await QuizAPI(5, "easy");
      setQuiz(question);
      //console.log(question);
    };
    FetchAPI();
  }, []);

  const NextQuestionHandler = (
    e: React.FormEvent<EventTarget>,
    userAns: string
  ) => {
    e.preventDefault();
    const questions = quiz[questionNr].answer;
    if (userAns === questions) setScore(score + 1);

    if (questionNr !== quiz.length - 1) setQuestionNr(questionNr + 1);
    else setShowResult(true);
  };



  if(showResult) {
    return ( 
      <div style={{textAlign: 'center'}}>
        <Helmet>
        <title>Result - Quiz App</title>
      </Helmet>
        <h1 className={classes.loader}>General Knowledge</h1>
        <h3 style={{fontSize: '2.8rem'}}><b>Your result: </b>{score}/{quiz.length} ({score*100/quiz.length}%)</h3>
        <p style={{padding: '10px', fontSize: '1.8rem'}}>Status: <span style={{
          color: score>1 ? 'green' : 'red'
        }}>
        <span>
          {
            score>1 ? 'Pass' : 'Fail'
          }
        </span><br /><br />
          <span style={{marginTop: '25px'}}>
          {
            score>1 ? "Congratulation! You've Successfully passed the test." : "Better luck next time."
          }
          </span>
        </span>
        </p>
        <Button variant="contained" style={{width: '50%', borderRadius: '14px', backgroundColor: 'blueviolet'}}>
        <Link className={classes.button} to="/instructions">
                Try Again
        </Link>
      </Button>
      </div>
    ) 
  }

  if (!quiz.length) return (
    <>
    <h1 className={classes.loader}>Loading..</h1>
    <img  src={load} alt="Loading.." />;
    </>
  ) 
  return (
    <div>
      <QuestionCard
        que={quiz[questionNr].question}
        options={quiz[questionNr].options}
        callback={NextQuestionHandler}
        questionNr={questionNr}
      />
    </div>
  );
}
