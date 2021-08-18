import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Table from "../components/items/table/Table";
import Filters from "../components/common/filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/action/item.action";
import { getItems } from "../querys/item.query";
import FetchLoading from "../components/common/FetchLoading";

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
    let filteredItems = items;
    if (type !== "") {
       filteredItems = filteredItems.filter((item) => item.type === type);
    };
    if (search) {
      filteredItems = filteredItems.filter(item => JSON.stringify(item).includes(search));
    }
    return filteredItems;
  }

  // function filterItems() {
  //   let filteredCollaborators = collaborators;
  //   if (active) {
  //     filteredCollaborators = filteredCollaborators.filter((collaborator) => collaborator.active === active)
  //   }
  //   if (search) {
  //     filteredCollaborators = filteredCollaborators.filter(collaborator => {
  //       const substr = collaborator.collaboratorSimOpsId.substring(0,search.length).toLowerCase();
  //       if (substr === search.toLowerCase()) return true;
  //       return false;
  //     });
  //   }

  //   return filteredCollaborators;
  // }

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
