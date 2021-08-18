import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessory } from "../redux/action/accessory.action";
import { getAccessories } from "../querys/accessory.query";
import FetchLoading from "../components/common/FetchLoading";

import Table from "../components/accessories/table/Table";
import Filters from "../components/common/filters/Filters";
import Analytic from "../components/common/analytics/Analytic";


const Accessories = () => {

  /* const accessories = [
    { id: 1, type: 'Mouse', quantity: 1, collaborator: 'Snow', model: 'Jon', brand: 'Jon', technicaldetails: 'Jon' },
  ]; 
  
  {
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
  }
}*/

    const dispatch = useDispatch();
    const { accessories, loading } = useSelector((state) => state.accessoryReducer);
  
    useEffect(() => {
      if (!accessories) {
        dispatch(fetchAccessory({ query: getAccessories }));
      }
    }, []);
  
    if (!accessories || loading) {
      return <FetchLoading />;
    } 

  return (
    <Container>
      <Filters />
      <AnalyticsContainer>
        <Analytic type={"Accessories available"} count={9} total={100} />
        <Analytic type={"Accessories assigned"} count={9} total={100} />
      </AnalyticsContainer>

      {/* <Table accessories={accessories} /> */}
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

