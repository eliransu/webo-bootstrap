import React from "react";
import { Table as WeboTable } from "./Table.styled";
import Card from '../Card/Card'

function Table(props) {
  return (
    props.withCard
      ? <Card {...props}>
        <WeboTable {...props} />
      </Card>
      : <WeboTable {...props} />
  );
}

export default Table;
