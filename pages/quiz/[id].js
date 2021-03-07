/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPages({ dbExterno }) {
  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen externalQuestions={dbExterno.questions} externalBg={dbExterno.bg} />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((apiRes) => {
      if (apiRes.ok) return apiRes.json();
      throw new Error('Falha ao pegar os dados');
    })
    .then((apiJson) => apiJson)
    .catch((err) => {
      throw new Error(err);
    });

  return {
    props: {
      dbExterno,
    },
  };
}
