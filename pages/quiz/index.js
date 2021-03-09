import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizPage from '../../src/screens/Quiz';
import db from '../../db.json';

export default function QuizScreen() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizPage
        externalQuestions={db.questions}
        externalBg={db.bg}
      />
    </ThemeProvider>
  );
}
