import {NavLink, useParams, useNavigate} from 'react-router-dom';
import {quizzes} from './catalog';

export function Question(props) {
  const params = useParams();
  const navigate = useNavigate();
  const quiz = quizzes[params.quizSlug];
  const index = quiz.questions.findIndex(question => question.slug === params.questionSlug);
  const question = quiz.questions[index];

  let inputs;
  if (question.type === 'true-false') {
    inputs =
      <div className="response">
        <label>
          <input type="radio" name="group" />
          True
        </label>
        <label>
          <input type="radio" name="group" />
          False
        </label>
      </div>;
  } else if (question.type === 'blank') {
    inputs =
      <div className="response">
        <input type="text" />
      </div>;
  }

  let button;
  if (index < quiz.questions.length - 1) {
    button =
      <button
        onClick={() => navigate(`/quiz/${quiz.slug}/question/${quiz.questions[index + 1].slug}`)}
      >Next</button>;
  } else {
    button =
      <button>Submit</button>;
  }

  return (
    <div className="question-page">
      <ol className="question-picker">
        {quiz.questions.map(question =>
          <li key={question.title}>
            <NavLink
              to={`/quiz/${quiz.slug}/question/${question.slug}`}
              className="question-link"
            >{question.title}</NavLink>
          </li>
        )}
      </ol>
      <div className="current-question">
        <h2>{index + 1}. {question.title}</h2>
        <p>{question.prompt}</p>

        {inputs}
        {button}
      </div>
    </div>
  );
}
