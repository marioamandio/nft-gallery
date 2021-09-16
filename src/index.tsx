import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NftProvider } from "use-nft";
import { ethersConfig } from "./ethereum";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    <NftProvider fetcher={["ethers", ethersConfig]}>
      <App />
    </NftProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
