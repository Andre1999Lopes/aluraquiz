import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
import Link from '../src/components/Link';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget
            as={motion.section}
            transition={{
              delay: 0,
              duration: 0.5,
            }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Header>
              <h1>Gossip Girl</h1>
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
          <Widget
            as={motion.section}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
          >
            <Widget.Header>
              <h1>Quizes da galera</h1>
            </Widget.Header>
            <Widget.Content>
              <ul>
                {db.external.map((link) => {
                  const [projectName, githubUser] = link.replace(/\//g, '').replace('https:', '').replace('.vercel.app', '').split('.');
                  return (
                    <li key={projectName}>
                      <Widget.Topic
                        as={Link}
                        href={`/quiz/${projectName}___${githubUser}`}
                      >
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                  );
                })}
              </ul>
            </Widget.Content>
          </Widget>
          <Footer
            as={motion.section}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
          />
        </QuizContainer>
        <GithubCorner projectUrl="https://www.github.com/Andre1999Lopes/aluraquiz" />
      </QuizBackground>
    </>
  );
}
