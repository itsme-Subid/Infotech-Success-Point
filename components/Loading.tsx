import React from "react";
import { Spin } from "antd";
import styled from "styled-components";

const Loader = styled.div`
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: grid;
  place-items: center;
  z-index: 9999;
`;


const App: React.FC = () => (
  <Loader className="hello">
    <Spin />
  </Loader>
);

export default App;
