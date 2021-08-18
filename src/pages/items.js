import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Table from "../components/items/table/Table";
import Filters from "../components/common/filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/action/item.action";
import { getItems } from "../querys/item.query";
import FetchLoading from "../components/common/FetchLoading";
import { FunctionsRounded } from "@material-ui/icons";

const Items = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.itemReducer);

  const [type, setType] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!items) {
      dispatch(fetchItems({ query: getItems }));
    }
  }, []);

  function handleChangeType(e) {
    setType(e.target.value);
  }

  function handleChangeSearch(e) {
    setSearch(e.target.value);
  }

  function filterItems() {
    if (type === "") {
      return items;
    }
    return items.filter((item) => item.type === type);
  }

  if (!items || loading) {
    return <FetchLoading />;
  }

  return (
    <Container>
      <Filters
        type={type}
        handleChangeType={handleChangeType}
        search={search}
        handleChangeSearch={handleChangeSearch}
      />
      <Table items={filterItems()} />
    </Container>
  );
};

export default Items;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;
