import {useParams} from 'react-router-dom';
import {quizzes} from './catalog';

export function Question(props) {
  const params = useParams();
  const quiz = quizzes[params.quizSlug];
  const index = quiz.questions.findIndex(question => question.slug === params.questionSlug);
  const question = quiz.questions[index];

  return (
    <div className="question-page">
      <div className="current-question">
        <h2>{index + 1}. {question.title}</h2>
        <p>{question.prompt}</p>
      </div>
    </div>
  );
}
