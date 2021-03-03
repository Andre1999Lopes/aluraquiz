import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <>
      <Head>
        <title>Alura Quiz</title>
        <meta property="og:image" content={db.bg} />
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>The Legend of Zelda</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function (e) {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
              >
                <Input
                  name="nomeDoUsuario"
                  // eslint-disable-next-line react/jsx-no-bind
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Diz aí seu nome"
                  value={name}
                />
                <Button
                  type="submit"
                  disabled={name.length === 0}
                >
                  {`Jogar ${name}`}
                </Button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>
              <h1>Quiz da galera</h1>
            </Widget.Header>
            <Widget.Content>
              <p>lorem ipsum</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GithubCorner projectUrl="https://www.github.com/Andre1999Lopes/aluraquiz" />
      </QuizBackground>
    </>
  );
}
