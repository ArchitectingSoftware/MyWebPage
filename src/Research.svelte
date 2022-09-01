<script lang="ts">
    import { Container, Image, Row, Col, Accordion, AccordionItem, Card, CardBody, CardTitle, CardText } from 'sveltestrap';
    import Fa from 'svelte-fa'
    import {faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons'
    import {faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

    import CCILogo from './assets/DrexelCCISmall.png'
    import BSM from './assets/bmitchellHeader.png'
    import BRIAN from './assets/BrianMitchell.jpg'
    import MITCHELL_FAMILY from './assets/MitchellFamily.jpg'
    import Counter from './lib/Counter.svelte';

    import { PublicationsList } from './lib/publications';
  </script>

  <style>
    
  </style>
  
  <Container fluid  class="drexel-gray py-5" id="research"  >
    <section class="jumbotron">
        <h2 class="jumbotron-heading display-6 text-center">Research</h2>
        <Container>
            <Row>
                <h4>Ph.D. Thesis</h4>
            </Row>
            <Row class="text-align-left">
                <span class="font-italic fw-bold">
                    <a href="./pubs/MitchellPhD.pdf">
                      A Heuristic Search Approach to Solving the Software Clustering Problem
                    </a>
                </span>
                <p>
                    The focus of this work was to investigate recovering interesting views of 
                    the structure of software systems using heuristic search techniques. This 
                    work has applicability in multiple software engineering areas including: 
                    program understanding, software maintenance, and architecture recovery. 
                    As one of the founding members of the field of Search-Based Software 
                    Engineering (SBSE), this work has been widely sited by researchers 
                    interested in investigating software clustering algorithms and techniques.
                </p>
            </Row>
            <Row>
                <h4>Journal and Research Publications</h4>
            </Row>

            <!--
            {#each PublicationsList as pub, index}
            <Row>
                <Col>
                    <p>
                    {index +1}. <a href="{pub.link}">"{pub.title}"</a> by {pub.cite}
                    </p>
                </Col>
            </Row>
            {/each}
        -->
            
            <Row>
                <Col>
                    <div>
                        Please click on the down arrow icon to the right to view 
                        the papers abstract
                    </div>
                    <Accordion>
                    {#each PublicationsList as pub, index}
                        <AccordionItem>
                            <div  slot="header" >
                                <a href="{pub.link}">"{pub.title}"</a> by {pub.cite}
                            </div>
                            {pub.abstract}
                        </AccordionItem>
                    {/each}
                    </Accordion>
                </Col>
            </Row>
           
        </Container>
        
    </section>
  </Container>