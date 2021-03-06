import React from "react";
import {
  DirectoryBody,
  WorkspaceWrapper,
  TableHeading,
  TableSubHeading,
} from "../../Styles/Directory.styled";
import { ReactComponent as Right } from "../../img/right.svg";
import Keys from "../Keys";

const Body = ({ collapsed, setCollapsed, overviewData, setRunQuery }) => {
  if (collapsed)
    return (
      <DirectoryBody collapsed={collapsed}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            cursor: "pointer",
          }}
          onClick={() => setCollapsed(false)}
        >
          <Right />
        </div>
      </DirectoryBody>
    );

  return (
    <DirectoryBody collapsed={collapsed}>
      <WorkspaceWrapper>
        <TableHeading>Tables</TableHeading>
        <TableSubHeading>Tables with their respective records</TableSubHeading>
        {overviewData.map((table, i) => (
          <Keys
            name={table.name}
            keys={table.keys}
            records={table.records}
            setRunQuery={setRunQuery}
            key={i}
          />
        ))}
      </WorkspaceWrapper>
    </DirectoryBody>
  );
};

export default Body;
