import React, { useEffect } from "react";
import styled from "styled-components";

import Table from "../components/items/table/Table";
import Filters from "../components/items/filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/action/item.action";
import { getItems } from "../querys/item.query";
import FetchLoading from "../components/common/FetchLoading";

const Items = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.itemReducer);

  useEffect(() => {
    if (!items) {
      dispatch(fetchItems({ query: getItems }));
    }
  }, []);

  if (!items || loading) {
    return <FetchLoading />;
  }

  return (
    <Container>
      <Filters />
      <Table items={items} />
    </Container>
  );
};

export default Items;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;
