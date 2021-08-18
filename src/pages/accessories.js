import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessory } from "../redux/action/accessory.action";
import { getAccessories } from "../querys/accessory.query";
import FetchLoading from "../components/common/FetchLoading";

import Table from "../components/accessories/table/Table";
//import Filters from "../components/common/filters/Filters";
import Analytic from "../components/common/analytics/Analytic";


const Accessories = () => {

  const accessoriesArray = [
    { id: 1, type: 'Mouse', quantity: 1, collaborator: 'Snow', model: 'Jon', brand: 'Jon', technicaldetails: 'Jon' },
  ];

  /* 

  /*  {
  "data": {
    "accessories": [
      {
        "id": "611d13c1aba39842fc790d0e",
        "quantity": 1,
        "specification": {
          "brand": "Lenovo",
          "model": "Mouse-Model",
          "technicalDetails": "Detail"
        },
        "collaborators": []
      },
      {
        "id": "611d17caaba39842fc790d13",
        "quantity": 1,
        "specification": {
          "brand": "Lenovo",
          "model": "Mouse-Model",
          "technicalDetails": "Detail"
        },
        "collaborators": []
      }
    ]
  },
  "extensions": {
    "runTime": 46
  } */

  const dispatch = useDispatch();
  const { accessories, loading } = useSelector((state) => state.accessoryReducer);
  const [type, setType] = useState("");

  useEffect(() => {
    if (!accessories) {
      dispatch(fetchAccessory({ query: getAccessories }));
    }
  }, []);

  function filterAccesories() {
    if (type === "") {
      return accessories.accessories;
    }
    return accessories.accessories.filter((accessory) => accessory.type === type);
  }

  function getTotals() {
    let total = 0;
    let assigned = 0;
    accessories.accessories.forEach(accessory => {
      total += accessory.quantity;
      assigned += accessory.collaborators.length;
    });
    return {
      total: total,
      assigned: assigned,
      available: total - assigned,
    };
  }

  if (!accessories || loading) {
    return <FetchLoading />;
  }

  return (
    <Container>
      <AnalyticsContainer>
        <Analytic type={"Accessories available"} count={getTotals().available} total={getTotals().total} />
        <Analytic type={"Accessories assigned"} count={getTotals().assigned} total={getTotals().total} />
      </AnalyticsContainer>

      <Table accessories={filterAccesories()} />
    </Container>
  );

};

export default Accessories;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

const AnalyticsContainer = styled.div`
  display: flex;
  justify: flex-end;
  flex-direction: row;
  row-gap: 1.5rem;
`;

