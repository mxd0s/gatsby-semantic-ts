import * as React from 'react';
import { Segment, Container, Header as HeaderWrapper } from 'semantic-ui-react';

export const Header: React.FC = () => {
  return (
    <Segment
      inverted
      textAlign="center"
      style={{ minHeight: 700, padding: '1em 0em' }}
      vertical
    >
      <Container text>
        <HeaderWrapper
          as="h1"
          content="Header"
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em',
          }}
        />
        <HeaderWrapper
          as="h2"
          content="Let's go"
          inverted
          style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            marginTop: '1.5em',
          }}
        />
      </Container>
    </Segment>
  );
};
