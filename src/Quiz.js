import {useParams, useNavigate} from 'react-router-dom';
import {quizzes} from './catalog';

export function Quiz(props) {
  const params = useParams();
  const quiz = quizzes[params.quizSlug];
  const navigate = useNavigate();

  return (
    <div className="quiz-page">
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>
      <button
        onClick={() => {
          navigate(`/quiz/${quiz.slug}/question/${quiz.questions[0].slug}`);
        }}
      >Start</button>
    </div>
  );
}