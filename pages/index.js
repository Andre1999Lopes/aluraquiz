import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GithubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg} >
      <QuizContainer>
        <Widget>
          <Widget.Content>
            <Widget.Header>
              <h1>The Legend of Zelda</h1>
            </Widget.Header>
            <p>lorem ipsum</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <Widget.Header>
              <h1>Quiz da galera</h1>
            </Widget.Header>
            <p>lorem ipsum</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl = '/https://www.github.com/Andre1999Lopes/aluraquiz'/>
    </QuizBackground>
  )
}
