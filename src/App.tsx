import { useEffect, useState } from "react";
import { Card, Container, Header } from "semantic-ui-react";
import Punk from "./Punk";
import usePunks from "./usePunks";

const App: React.VoidFunctionComponent<{}> = () => {
  const { punksId, handleLoadingPunks } = usePunks();
  const [trackingLoadingPunks, setTrackingLoadingPunks] = useState<number>(0);

  const isReady = () => {
    setTrackingLoadingPunks(trackingLoadingPunks + 1);
  };

  useEffect(() => {
    if (punksId.length === trackingLoadingPunks) {
      handleLoadingPunks();
    }
  }, [punksId.length, trackingLoadingPunks, handleLoadingPunks]);

  return (
    <Container>
      <Header as="h1" textAlign="center">
        Covid punks
      </Header>
      <Card.Group centered>
        {punksId.map((punk) => (
          <Punk key={punk} punkId={punk} isReady={isReady} />
        ))}
      </Card.Group>
    </Container>
  );
};

export default App;
