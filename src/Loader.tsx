import { Card, Image, Loader } from "semantic-ui-react";

const CardLoader = () => (
  <>
    <Image
      src="https://react.semantic-ui.com/images/wireframe/square-image.png"
      wrapped
      ui={false}
    ></Image>
    <Card.Content>
      <Loader active />
    </Card.Content>
  </>
);

export default CardLoader;
