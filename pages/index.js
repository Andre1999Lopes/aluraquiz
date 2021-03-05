import React, { useState } from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>The Legend of Zelda</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={(e) => {
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
              <h1>Quizes da galera</h1>
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
