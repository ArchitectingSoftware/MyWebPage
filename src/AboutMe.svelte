<script lang="ts">
    import { Container, Image, Row, Col, Card, CardBody, CardTitle, CardText } from 'sveltestrap';
    import Fa from 'svelte-fa'
    import {faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons'
    import {faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

    import CCILogo from './assets/DrexelCCISmall.png'
    import BSM from './assets/bmitchellHeader.png'
    import BRIAN from './assets/BrianMitchell.jpg'
    import MITCHELL_FAMILY from './assets/MitchellFamily.jpg'
    import Counter from './lib/Counter.svelte';
  </script>
  
  <Container fluid  class="drexel-yellow py-5" id="me"  >
    <section class="jumbotron">
        <h2 class="jumbotron-heading display-6 text-center">About Me</h2>
        <Container>
            <Row class="lead text-align-left">
                <Col>
                    <Image alt="Mitchell Family" 
                        src={MITCHELL_FAMILY}
                        class="rounded float-sm-start imgshadow pe-2 pt-2"/>
                    
                    <p>
                        For more than 20 years I balanced an active career in both industry and 
                        academia.  In the summer of 2022 I decided to leave industry and put all 
                        of my energy into my academic teaching and research interests.  
                        My last industry role was at a Fortune 15 company where I worked on driving
                        digital innovation and creating products that are used daily by millions of
                        people.  I held the role of Distinguished Engineer, which gave me the 
                        opportunity to lead and work with thousands of talented engineers across
                        the company.  Collectively we helped to create a culture where we could 
                        use disruptive technologies to differentiate our services from competitors.
                        For example, we aggressively adopted the public cloud, built competencies 
                        in developing solutions using complex cloud native architectures, and 
                        starting contributing to open source and patenting our own technology 
                        inventions.
                    </p>
                    <p>
                        In addition to jobs that involve talking and pushing buttons I am a proficient
                        Carpenter, IoT Maker, and sometimes even an appliance repair man.  I have built
                        many decks, lots of finish carpentry, built furniture, and significant home
                        remodels.   My wife is an accomplished musician and my son has many academic,
                        musical, and sports talents.
                    </p>
                </Col>
            </Row>
        </Container>
        
    </section>
  </Container>