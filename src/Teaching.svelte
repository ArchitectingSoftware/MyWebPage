<script lang="ts">
    import { Container, Image, Row, Col, Table, CardBody, CardTitle, CardText } from 'sveltestrap';
    import Fa from 'svelte-fa'
    import {faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons'
    import {faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

    import CCILogo from './assets/DrexelCCISmall.png'
    import BSM from './assets/bmitchellHeader.png'
    import BRIAN from './assets/BrianMitchell.jpg'
    import MITCHELL_FAMILY from './assets/MitchellFamily.jpg'
import Counter from './lib/Counter.svelte';
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
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">SE575</th>
                        <td>Software Design</td>
                      </tr>
                      <tr>
                        <th scope="row">CS576</th>
                        <td>Dependable Software Systems</td>
                      </tr>
                      <tr>
                        <th scope="row">SE577</th>
                        <td>Software Architecture</td>
                      </tr>
                      <tr>
                        <th scope="row">CS680</th>
                        <td>Foundations of Computer Science</td>
                      </tr>
                      <tr>
                        <th scope="row">CS720</th>
                        <td>Operating Systems</td>
                      </tr>
                      <tr>
                        <th scope="row">CS721</th>
                        <td>Distributed Systems</td>
                      </tr>
                      <tr>
                        <th scope="row">SE451</th>
                        <td>Software Engineering</td>
                      </tr>
                      <tr>
                        <th scope="row">CS281</th>
                        <td>Systems Architecture I</td>
                      </tr>
                      <tr>
                        <th scope="row">CS282</th>
                        <td>Systems Architecture II</td>
                      </tr>
                      <tr>
                        <th scope="row">CS350</th>
                        <td>Object Oriented Programming</td>
                      </tr>
                      <tr>
                        <th scope="row">CS470</th>
                        <td>Computer Networks</td>
                      </tr>
                    </tbody>
                  </Table>
            </Row>
        </Container>
        
    </section>
  </Container>