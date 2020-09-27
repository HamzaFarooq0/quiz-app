import React, { useState } from "react";
import { Helmet } from "react-helmet";

import { QuizQuestionCard } from "../../types/quiz_type";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  heading: {
    textAlign: "center",
    padding: '20px',
    fontSize: '3.4rem'
  },
  questionContainer: {
    maxWidth: "500px",
    boxShadow: "0 5px 24px #e69696",
    padding: "30px",
    margin: "0 auto",
    display: "block",
  },
  button: {
    width: "100%",
    margin: "30px 0 10px 0",
    fontSize: "1.1rem",
    padding: "8px",
    cursor: "pointer",
    backgroundColor: "#800000",
    color: "white",
    boxShadow: "2px 2px 5px #C0C0C0",
    border: "none",
  },
  opt: {
    display: "block",
    padding: "2px",
  },
});

export const QuestionCard: React.FC<QuizQuestionCard> = ({
  que,
  options,
  callback,
  questionNr,
}) => {
  const classes = useStyles();
  const [userAnswer, setUserAnswer] = useState("");

  const AnsSelectedHandler = (e) => {
    //console.log(e.target.value)
    setUserAnswer(e.target.value);
  };

  return (
    <>
    <Helmet>
        <title>Questions - Quiz App</title>
      </Helmet>
      <h1 className={classes.heading}>General Knowledge</h1>
      <div className={classes.questionContainer}>
        <p>Question No.{questionNr+1} {que}</p>
        <form
          className="questionForm"
          onSubmit={(e) => callback(e, userAnswer)}
        >
          {options.map((option) => {
            return (
              <div key={option}>
                <label className={classes.opt}>
                  <input
                    onChange={AnsSelectedHandler}
                    required
                    type="radio"
                    name="question"
                    value={option}
                    checked={userAnswer === option}
                  />
                  {option}
                </label>
              </div>
            );
          })}
          <input
            className={classes.button}
            type="submit"
            value="Next Question"
          />
        </form>
      </div>
    </>
  );
};
