import {quizzes} from './catalog';
import {Link} from 'react-router-dom';

export function Quizzes(props) {
  return (
    <div className="quiz-list">
      <h2>Quizzes</h2>
      <ol>
        {Object.values(quizzes).map(quiz =>
          <li key={quiz.slug}>
            <Link to={`/quiz/${quiz.slug}`}>{quiz.title}</Link>
          </li>
        )}
      </ol>
    </div>
  );
}