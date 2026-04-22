import { GcdsContainer, GcdsHeading, GcdsText } from '@gcds-core/components-react';

function About() {
  return (
    <GcdsContainer size="xl" centered tag="div" style={{ padding: '2rem' }}>
      <GcdsHeading tag="h1">About</GcdsHeading>
      <GcdsText>This is the about page.</GcdsText>
    </GcdsContainer>
  );
}

export default About;