import {useParams} from 'react-router-dom';
import {quizzes} from './catalog';

export function Quiz(props) {
  const params = useParams();
  const quiz = quizzes[params.quizSlug];

  return (
    <div className="quiz-page">
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>
    </div>
  );
}