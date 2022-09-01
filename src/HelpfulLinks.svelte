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

  <style>
    a.drexel-link {
        color: white;
        text-decoration: none;
    }
    a.drexel-link:hover {
        color: #FFC600;
        text-decoration: none;
        font-weight: bold;
    }
  </style>
  
  <Container fluid  class="drexel-blue py-5" id="links" >
    <section class="jumbotron drexel-font-yellow">
        <h2 class="jumbotron-heading display-6 text-center">Helpful Links</h2>
        <Container>
            <Row class="lead text-align-left">
                <Col>                    
                    <p>
                        Below are some helpful links to online resources
                    </p>
                </Col>
            </Row>
            <Row>
                <a class="drexel-link" 
                    href="https://github.com/ArchitectingSoftware"> 
                    My Github Page - @ArchitectingSoftware 
                </a>
                <a class="drexel-link" href="https://learn.dcollege.net/"> 
                    Drexel Learn (Blackboard)</a>
            </Row>
           
        </Container>
        
    </section>
  </Container>