
export const Action = Object.freeze({
  SetResponse: 'SetResponse',
  StartQuiz: 'StartQuiz',
});

export function setResponse(slug, response) {
  return {
    type: Action.SetResponse,
    payload: {slug, response},
  };
}

export function startQuiz(slug) {
  return {
    type: Action.StartQuiz,
    payload: slug,
  };
}