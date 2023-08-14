import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Dope from './Dope';
import "./App.css";

function Netflix() {
  return (
    <>
      <h1 className='text-center text-danger'>BEST NETFLIX SERIES</h1>
      <Container>
        <Row>
          <Col md={4} className='mt-2'>
            <Card border='black'>
              <Card.Img src='images/dark2.jpg' className='card-img' height='306' width='200' />
              <Card.Body className='text-center'>
                <Card.Title>Dark</Card.Title>
                <Card.Subtitle>Netflix Series</Card.Subtitle>
                <Card.Text>
                  <Dope>
                    When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids.
                  </Dope></Card.Text>
                <Card.Link href='https://www.netflix.com/title/80100172' target='_blank'>Click Here</Card.Link>
                {/* <div className='d-grid'>
                  <Button variant='danger'>Read More</Button>
                </div> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='mt-2'>
            <Card border='black'>
              <Card.Img src='images/heist2.jpeg' className='card-img' height='306' width='200' />
              <Card.Body className='text-center'>
                <Card.Title>Money Heist</Card.Title>
                <Card.Subtitle>Netflix Series</Card.Subtitle>
                <Card.Text>
                  <Dope>
                  A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. 
                  </Dope></Card.Text>
                <Card.Link href='https://www.netflix.com/title/80192098' target='_blank'>Click Here</Card.Link>

                {/* <div className='d-grid'>
                  <Button variant='danger'>Read More</Button>
                </div> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='mt-2'>
            <Card border='black'>
              <Card.Img src='images/stranger.jpeg' className='card-img'  height='306' width='200' />
              <Card.Body className='text-center'>
                <Card.Title>Stranger Things </Card.Title>
                <Card.Subtitle>Netflix Series</Card.Subtitle>
                <Card.Text>
                  <Dope>
                  In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries
                  </Dope>
                </Card.Text>
                <Card.Link href='https://www.netflix.com/title/80057281' target='_blank'>Click Here</Card.Link>

                {/* <div className='d-grid'>
                  <Button variant='danger'>Read More</Button>
                </div> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4} className='mt-2'>
            <Card border='black'>
              <Card.Img src='images/peaky.jpeg' className='card-img' height='306' width='200' />
              <Card.Body className='text-center'>
                <Card.Title>Peaky Blinders</Card.Title>
                <Card.Subtitle>Netflix Series</Card.Subtitle>
                <Card.Text>
                <Dope>
                  Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities. </Dope>               </Card.Text>
                <Card.Link href='https://www.netflix.com/title/80002479' target='_blank'>Click Here</Card.Link>
                {/* <div className='d-grid'>
                  <Button variant='danger'>Read More</Button>
                </div> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='mt-2'>
            <Card border='black'>
              <Card.Img src='images/queen.jpeg' className='card-img' height='306' width='200' />
              <Card.Body className='text-center'>
                <Card.Title>The Queen's Gambit</Card.Title>
                <Card.Subtitle>Netflix Series</Card.Subtitle>
                <Card.Text>
                <Dope>
                  Set during the Cold War era, orphaned chess prodigy Beth Harmon struggles with addiction in a quest to become the greatest chess player in the world.  </Dope>               </Card.Text>
                <Card.Link href='https://www.netflix.com/title/80234304' target='_blank'>Click Here</Card.Link>

                {/* <div className='d-grid'>
                  <Button variant='danger'>Read More</Button>
                </div> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='mt-2'>
            <Card border='black'>
              <Card.Img src='images/d.jpeg' className='card-img' height='306' width='200' />
              <Card.Body className='text-center'>
                <Card.Title>Breaking Bad </Card.Title>
                <Card.Subtitle>Netflix Series</Card.Subtitle>
                <Card.Text>
                <Dope>
                  Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse. </Dope>               </Card.Text>
                <Card.Link href='https://www.netflix.com/title/70143836' target='_blank'>Click Here</Card.Link>

                {/* <div className='d-grid'>
                  <Button variant='danger'>Read More</Button>
                </div> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Netflix;