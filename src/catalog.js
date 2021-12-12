export const quizzes = {
  trivia: {
    slug: 'trivia',
    title: 'Trivia',
    description: "Are you a student of life? If you've been paying attention to the world around you, then you'll ace this quiz.",
    questions: [
      {
        slug: 'leap-year',
        type: 'true-false',
        title: 'Leap Year',
        prompt: 'The year 1900 was a leap year.',
        answer: false,
      },
      {
        slug: 'tessellations',
        type: 'true-false',
        title: 'Tessellations',
        prompt: 'There are only three regular polygons that can form tessellations.',
        answer: true,
      },
      {
        slug: 'most-moons',
        type: 'blank',
        title: 'Mooniest',
        prompt: 'Which planet has the most moons?',
        answer: 'Saturn',
      },
      {
        slug: 'early-twitter',
        type: 'blank',
        title: 'Early Twitter',
        prompt: "What was Twitter's original name?",
        answer: 'twttr',
      },
    ],
  },
  'state-capitals': {
    slug: 'state-capitals',
    title: 'State Capitals',
    description: 'Test your knowledge of the capitals of the United States.',
    questions: [
      {
        slug: 'vermont',
        type: 'blank',
        title: 'Vermont',
        prompt: "What's the capital of Vermont?",
        answer: 'Montpelier',
      },
      {
        slug: 'iowa',
        type: 'blank',
        title: 'Iowa',
        prompt: "What's the capital of Iowa?",
        answer: 'Des Moines',
      },
      {
        slug: 'virginia',
        type: 'blank',
        title: 'Virginia',
        prompt: "What's the capital of Virginia?",
        answer: 'Richmond',
      },
      {
        slug: 'idaho',
        type: 'blank',
        title: 'Idaho',
        prompt: "What's the capital of Idaho?",
        answer: 'Boise',
      },
      {
        slug: 'rhode-island',
        type: 'blank',
        title: 'Rhode Island',
        prompt: "What's the capital of Rhode Island?",
        answer: 'Providence',
      },
    ],
  },
};