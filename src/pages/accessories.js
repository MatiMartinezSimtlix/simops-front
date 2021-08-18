import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessory } from "../redux/action/accessory.action";
import { getAccessories } from "../querys/accessory.query";
import FetchLoading from "../components/common/FetchLoading";

import Table from "../components/accessories/table/Table";
import Analytic from "../components/common/analytics/Analytic";
import NewAccessory from "../components/accessories/new-accessory/NewAccessory";

const Accessories = () => {
  const dispatch = useDispatch();
  const { accessories, loading } = useSelector(
    (state) => state.accessoryReducer
  );

  useEffect(() => {
    if (!accessories) {
      dispatch(fetchAccessory({ query: getAccessories }));
    }
  }, []);

  function getTotals() {
    let total = 0;
    let assigned = 0;
    accessories.forEach((accessory) => {
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
        <Analytic
          type={"Accessories available"}
          count={getTotals().available}
          total={getTotals().total}
        />
        <Analytic
          type={"Accessories assigned"}
          count={getTotals().assigned}
          total={getTotals().total}
        />
        <NewAccessory />
      </AnalyticsContainer>
      <Table accessories={accessories} />
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
  align-items: center;
  row-gap: 1.5rem;
`;
