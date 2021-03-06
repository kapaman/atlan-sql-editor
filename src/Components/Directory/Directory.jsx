import React, { useState } from "react";
import { Wrapper } from "../../Styles/Directory.styled";
import Body from "./Body";
import Header from "./Header";

const Directory = ({ overviewData, setRunQuery }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Wrapper collapsed={collapsed}>
      <Header collapsed={collapsed} setCollapsed={setCollapsed}></Header>
      <Body
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        overviewData={overviewData}
        setRunQuery={setRunQuery}
      ></Body>
    </Wrapper>
  );
};

export default Directory;
