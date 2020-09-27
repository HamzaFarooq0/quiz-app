import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { makeStyles, Button, Paper } from "@material-ui/core";
import img from "./assets/mind-img.jpg";

const useStyles = makeStyles({
  main: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  start_button: {
    textDecoration: "none", color: 'white', padding: '10px'
  },
  home_heading: {
    fontSize: "2.2rem",
    color: "#002244",
  },
  home_body: {
    width: "80%",
    position: "absolute",
    padding: "60px",
    fontFamily: 'roboto'
  },
  home_img: {
    maxWidth: "90%",
    display: "block",
    height: "auto",
    margin: "0 auto",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Helmet>
        <title>Home - Quiz App</title>
      </Helmet>
      <Paper elevation={5} className={classes.home_body}>
        <h3 className={classes.home_heading}>
          If You Pass Our General Knowledge Quiz You’re Definitely In The 1%
        </h3>
        <img className={classes.home_img} src={img} alt="bg-img" />
        <p>
          Do you consider yourself to be more of a book smart person or a street
          smart person? Whichever you are, luckily this general knowledge quiz
          will test both sides of the coin. Though you should be warned, there
          are no actual questions about coins in this quiz, so you can sit down
          and take that sigh of relief right now.
        </p>
        <p>
          The thing about general knowledge is that it should be, well, general.
          But this isn’t always the case. On any given day you’ll run into
          people who ask dumb questions that defy the phrase “common sense”.
          Questions like “is it okay to microwave styrofoam?” or “is getting
          bleach on my hands really that bad”? Let’s hope that you’re not one of
          those people. But I believe in you! You seem like an intellectual! I
          have feeling in my gut that you’re going to ace this general knowledge
          quiz! Now prove to me and all your friends that you’re smarter than an
          idiot and go ace this general knowledge quiz. The world is counting on
          you
        </p>
        <p>
          Do you consider yourself to be more of a book smart person or a street
          smart person? Luckily this general knowledge quiz will test both sides
          of the coin.
        </p>

        {/* <Level /> */}
        <Button
          style={{ backgroundColor: "#002244" }}
          variant="contained"
        >
          <Link className={classes.start_button} to="/instructions">
            Start Quiz
          </Link>
        </Button>
      </Paper>
    </div>
  );
}
