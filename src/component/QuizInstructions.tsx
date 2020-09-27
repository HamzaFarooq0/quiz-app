import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//Styles
import "./StylingQuizInstructions.css";
import { Paper, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    body: {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    h1: {
        fontSize: '3.4rem',
        textAlign: 'center',
    },
    button1: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '1.3em',
        padding: '15px',
    }
})

export const QuizInstructions: React.FC = () => {
    const classes = useStyles()
  return (
    <div className={classes.body}>
      <Helmet>
        <title>Quiz Instructios - Quiz App</title>
      </Helmet>
      <Paper elevation={15} className="instructions">
        <h1 className={classes.h1}>Quiz Instructions</h1>
        <p>
          The quizzes consists of questions carefully designed to help you
          self-assess your comprehension of the information presented on the
          topics covered in the module. No data will be collected on the website
          regarding your responses or how many times you take the quiz.
        </p>
        <p>
          Each question in the quiz is of multiple-choice or "true or false"
          format. Read each question carefully, and click on the button next to
          your response that is based on the information covered on the topic in
          the module. Each correct or incorrect response will result in
          appropriate feedback immediately at the bottom of the screen.
        </p>
        <p>
          After responding to a question, click on the "Next Question" button at
          the bottom to go to the next questino. After responding to the 8th
          question, click on "Close" on the top of the window to exit the quiz.
        </p>
        <p>
          If you select an incorrect response for a question, you can try again
          until you get the correct response. If you retake the quiz, the
          questions and their respective responses will be randomized.
        </p>
        <p>
          The total score for the quiz is based on your responses to all
          questions. If you respond incorrectly to a question or retake a
          question again and get the correct response, your quiz score will
          reflect it appropriately. However, your quiz will not be graded, if
          you skip a question or exit before responding to all the questions.
        </p>
        <div className="buttons">
          <span className="left">
            <Button variant="contained" color="secondary">
              <Link className={classes.button1} to="/">
                No, take me back
              </Link>
            </Button>
          </span>
          <span className="right">
          <Button variant="contained" color="primary">
              <Link className={classes.button1} to="/start">
                Okay, let's do this
              </Link>
            </Button>
          </span>
        </div>
      </Paper>
    </div>
  );
};
