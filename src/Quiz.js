import {useParams, useNavigate} from 'react-router-dom';
import {quizzes} from './catalog';
import {useDispatch} from 'react-redux';
import {startQuiz} from './actions';

export function Quiz(props) {
  const params = useParams();
  const quiz = quizzes[params.quizSlug];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="quiz-page">
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>
      <button
        onClick={() => {
          dispatch(startQuiz(quiz.slug));
          navigate(`/quiz/${quiz.slug}/question/${quiz.questions[0].slug}`);
        }}
      >Start</button>
    </div>
  );
}