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
    <!-- <section class=" text-center bkimage"> -->
    <section class=" text-center"> 
        <Row class="mt-5"></Row>
        <Row class="mt-5"></Row>


        <Row class="justify-content-center">
        <Card class="mb-5" style="max-width:775px;">
            <Row class="">
                <h1 class="jumbotron-heading display-6 strong">Brian S. Mitchell, Ph.D.</h1>
            </Row>
            <Row >
                <Col class="col-md-4 col-sm-6 g-2 align-self-center">
                    <Image  src={BRIAN} class="img-fluid rounded-start" alt="Dr. Brian Mitchell" />
                    
                </Col>
                <Col class="col-md-8 align-self-center">
                    <CardBody>
                        <CardText class="g-0">
                            <Image src={CCILogo} class="img-fluid d-none d-lg-block d-md-block" alt="CCI Logo" />
                            <h4 class="d-none d-sm-block d-md-none"><code>$ whoami</code></h4>
                        </CardText>
                        <CardText class="lead lh-sm">
                            <small>
                            Welcome to my homepage.  I am a member of the CS Department and
                            teach a number of Software Engineeing and
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
                    <span><Fa icon={faEnvelope}/></span> bmitchell@drexel.edu |   
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