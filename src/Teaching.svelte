<script lang="ts">
    import { Container, Image, Row, Col, Table, CardBody, CardTitle, CardText } from 'sveltestrap';
    import { CourseList } from './lib/courses';
  </script>
  
  <Container fluid  class="drexel-light-blue py-5" id="teaching" >
    <section class="jumbotron">
        <h2 class="jumbotron-heading display-6 text-center">Teaching</h2>
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
        </Container>
        
    </section>
  </Container>