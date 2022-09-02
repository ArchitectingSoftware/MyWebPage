<script lang="ts">
    import { Container, Image, Row, Col, Table, CardBody, CardTitle, CardText } from 'sveltestrap';
    import { TalksList } from './lib/talks';

  </script>
  
  <Container fluid  class="drexel-blue-2 py-5" id="talks" >
    <section class="jumbotron">
        <h2 class="jumbotron-heading display-6 text-center drexel-font-yellow">Conference and Technical Talks</h2>
        <Container>
            <Row class="lead text-align-left">
                <Col>                    
                    <p class="drexel-font-white">
                        The following are some talks that I have given at conferences
                    </p>
                </Col>
            </Row>
            <Row>
                <Table responsive hover>
                    <thead>
                      <tr>
                        <th class="drexel-font-white">Title</th>
                        <th class="drexel-font-white">Type</th>
                      </tr>
                    </thead>
                    
                    <tbody>
                        {#each TalksList as talk, index}
                            <tr>
                                <td class="drexel-font-white">{talk.title}</td>
                                <td class="drexel-font-white">{talk.type}</td>
                            </tr>
                        {/each}
                    </tbody>
                  </Table>
            </Row>
        </Container>
        
    </section>
  </Container>