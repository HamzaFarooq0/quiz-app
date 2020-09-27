import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Home from "./Home";
import { QuizInstructions } from "./component/QuizInstructions";
import QuestionData from "./component/QuestionCard/QuestionData";

const App: React.FC = () => {
  return (
    <div className='body'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path="/instructions" component={QuizInstructions} />
          <Route path="/start" component={QuestionData}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
