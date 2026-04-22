import { useNavigate } from 'react-router-dom';
import { GcdsContainer, GcdsHeading, GcdsText, GcdsButton } from '@gcds-core/components-react';

function Home() {
  const navigate = useNavigate();

  return (
    <GcdsContainer size="xl" centered tag="div" style={{ padding: '2rem' }}>
      <GcdsHeading tag="h1">Home</GcdsHeading>
      <GcdsText>Welcome to my GC app!</GcdsText>
      <GcdsButton onClick={() => navigate('/about')}>Go to About</GcdsButton>
    </GcdsContainer>
  );
}

export default Home;