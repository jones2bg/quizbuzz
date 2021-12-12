import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Quizzes} from './Quizzes';
import {Quiz} from './Quiz';
import {Question} from './Question';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quiz/:quizSlug" element={<Quiz />} />
        <Route path="/quiz/:quizSlug/question/:questionSlug" element={<Question />} />
      </Routes>
    </div>
  );
}

export default App;
