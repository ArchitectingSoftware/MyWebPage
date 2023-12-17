<script lang="ts">
    import { Container, Image, Row, Col, Table, Collapse, Button, Card, CardBody, CardTitle, CardText } from 'sveltestrap';
    import { CourseList } from './lib/courses';
  </script>
  
  <Container fluid  class="drexel-light-blue py-5" id="teaching" >
    <section class="jumbotron">
        <h2 class="jumbotron-heading display-6 text-center">Teaching, Student Research & Mentoring</h2>
        <Container>
            <Row class="lead text-align-left">
                <Col>                    
                    <p>
                        I teach (or have taught) a number of different courses at Drexel.  They are listed
                        below.  In general I mix lectures with hands on demo and try to make my classes as 
                        interactive as possible.  I use a number of different technologies to manage my 
                        classes.  I try to use Drexel Learn (Blackboard) for its strengths in course 
                        organization, but complement with a number of other tools such as GitHub and 
                        Discord.
                    </p>
                </Col>
            </Row>
            <Row>
                <Table responsive hover>
                    <thead>
                      <tr>
                        <th>Course Number</th>
                        <th>Course Title</th>
                        <th>Course Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      {#each CourseList as course, index}
                            <tr>
                                <th scope="row">{course.id}</th>
                                <td>{course.title}</td>
                                <td>{course.level}</td>
                            </tr>
                        {/each}
                      <tr>
                    </tbody>
                  </Table>
            </Row>
            <Row class="lead text-align-left">
              <Col> 
                <p></p> 
                <h4>Student Research and Mentoring</h4>                  
                <p>
                  After spending many years in industry, I
                  enjoy career mentoring and getting students involved in research.  Please 
                  make arrangements to meet with me if this is something of interest to you. 
                  Here are a few other things that you should know about working with me
                  (click to get more information):
                </p>
                <p>
                  <Button color="primary" id="toggler" class="mb-3">+ Recommendation Letters</Button>
                    <Collapse toggler="#toggler">
                      <Card body>
                        I get many requests every year for recommendation letters from students who have only
                        taken a single course with me.  I am happy to write you a letter, but I will 
                        only be to comment to the extent of our relationship based on your performance 
                        in my class.  This might
                        be fine for a second or third letter, but often times employers and schools
                        are looking for letters from people who have worked with the student directly
                        over a longer period of time.  For example, you worked in one of my labs, 
                        we worked on research together, you were a TA for some of my classes. 
                      </Card>
                    </Collapse>
                    <Button color="primary" id="toggler1" class="mb-3">+ Unsolicited Research Support Emails</Button>
                    <Collapse toggler="#toggler1">
                      <Card body>
                        <p>
                          I receive dozens of emails every term from students seeking my support
                          to come to drexel to do research work with me.  These emails are very nice, but I am
                          unable to help with this, so please do not expect a response.  Please visit the 
                          <a href="https://drexel.edu/cci/">Drexel CCI webpage</a> for information on our 
                          undergraduate, graduate and PhD programs, including how to apply.
                        </p> 
                          
                    
                      </Card>
                    </Collapse>
                </p>
              </Col>
            </Row>
            <Row class="lead text-align-left">
              <Col>

            </Col>
            </Row>
        </Container>
        
    </section>
  </Container>