import * as React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
  Button,
  Container,
  Header as HeaderWrapper,
  Segment,
} from 'semantic-ui-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default () => {
  return (
    <>
      <Header />
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <HeaderWrapper as="h3" style={{ fontSize: '2em' }}>
            Some Text
          </HeaderWrapper>
          <p style={{ fontSize: '1.33em' }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <Button as="a" size="large">
            Read More
          </Button>
        </Container>
      </Segment>
      <Footer />
    </>
  );
};
