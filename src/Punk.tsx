import React, { useEffect, useRef } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { useNft } from "use-nft";
import { contractAddress } from "./ethereum";
import CardLoader from "./Loader";

const trimWallet = (walletAddress: string | undefined): string => {
  return walletAddress
    ? `${walletAddress.slice(0, 8)}...${walletAddress.slice(
        walletAddress.length - 8,
        walletAddress.length - 1
      )}`
    : "";
};

const Punk: React.VoidFunctionComponent<{
  punkId: string;
  isReady: () => void;
}> = ({ punkId, isReady }) => {
  const { loading, error, nft } = useNft(contractAddress, punkId);
  const ready = useRef<boolean>(false);

  useEffect(() => {
    if (!loading && !ready.current) {
      isReady();
      ready.current = true;
    }
  }, [isReady, loading]);

  return (
    <Card>
      {loading && !error ? (
        <CardLoader />
      ) : (
        <>
          <Image src={nft?.image} wrapped alt={nft?.name} />
          <Card.Content>
            <Card.Header>{nft?.name}</Card.Header>
            <Card.Meta>owner:</Card.Meta>
            <Card.Description>
              <a
                href={`https://etherscan.io/address/${nft?.owner}`}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="user" />
                {trimWallet(nft?.owner)}
              </a>
            </Card.Description>
          </Card.Content>
        </>
      )}
    </Card>
  );
};

export default Punk;
