import { useState } from "react";
import { covidPunksContract } from "./ethereum";

const usePunks = () => {
  const [punksId, setPunksId] = useState<string[]>([]);
  const [loadedPunks, setLoadedPunks] = useState<number>(0);

  const handleLoadingPunks = () => {
    const fetchData = async () => {
      let counter = loadedPunks;
      const tracker = [];

      while (counter < loadedPunks + 3 && counter < 100) {
        const id = await covidPunksContract.methods
          .tokenByIndex(counter)
          .call();

        tracker.push(id);
        counter++;
      }

      setPunksId([...punksId, ...tracker]);
      setLoadedPunks(counter);
    };

    fetchData();
  };

  return { punksId, handleLoadingPunks };
};

export default usePunks;
