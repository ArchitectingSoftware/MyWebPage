<script lang="ts">
    import { Container, Image, Row, Col, Card, CardBody, CardText } from 'sveltestrap';
    import Fa from 'svelte-fa'
    import {faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons'
    import {faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

    import CCILogo from './assets/DrexelCCISmall.png'
    import BRIAN from './assets/BrianMitchell.jpg'
  </script>

  <style>
    .bkimage {
        background-image: url("./assets/drexel-dragon.png");
        background-size: cover;
    }
  </style>

  <Container fluid class="p-0">
    <section class=" text-center bkimage">
    <!-- <section class=" text-center"> -->
        <Row class="pt-5"></Row>

        <Row class="justify-content-center">
        <Card class="mb-5" style="max-width:750px;">
            <Row class="">
                <h1 class="jumbotron-heading display-6 strong">Brian S. Mitchell, Ph.D.</h1>
            </Row>
            <Row>
                <Col class="col-12 col-sm-4 g-2 align-self-center">
                    <Image  src={BRIAN} class="img-fluid rounded-start" alt="Dr. Brian Mitchell" />
                    
                </Col>
                <Col class="col-12 col-sm-8">
                    <CardBody>
                        <CardText class="g-0 align-self-center">
                            <Image src={CCILogo} class="img-fluid d-none d-lg-block d-md-block" alt="CCI Logo" />
                            <h4 class="d-md-none"><code>$ whoami</code></h4>
                        </CardText>
                        <CardText class="text-align-left lead lh-sm">
                            <small>
                            Welcome to my homepage.  I am a member of the Drexel University
                            Computer Science 
                            Department and teach a number of Software Engineering and
                            Systems classes.  My research activity and interests are at the 
                            intersection of Software Engineering, Software Architecture and 
                            Cloud Native Computing.
                            </small>
                        </CardText>
                    </CardBody>
                </Col>
            </Row>
            <Row class="pt-3">
                <p>
                    <span><Fa icon={faBuilding}/></span> Office: 1134 |   
                          <br class="d-block d-sm-none" />
                    <span><Fa icon={faEnvelope}/></span> bsm23@drexel.edu |   
                          <br class="d-block d-sm-none" />
                    <span><Fa icon={faTwitter}/></span> 
                            <a href="https://twitter.com/DrBrianMitchell">@DrBrianMitchell</a> |
                            <br class="d-block d-sm-none" />
                    <span><Fa icon={faGithub}/></span> 
                              <a href="https://github.com/ArchitectingSoftware">@ArchitectingSoftware </a>
                </p>
            </Row>
        </Card>
        </Row>
    </section>
  </Container>