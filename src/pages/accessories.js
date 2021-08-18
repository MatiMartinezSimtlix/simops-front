import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessory } from "../redux/action/accessory.action";
import { getAccessories } from "../querys/accessory.query";
import FetchLoading from "../components/common/FetchLoading";

import Table from "../components/accessories/table/Table";
import Filters from "../components/common/filters/Filters";


const Accessories = () => {

  const accessories = [
    { id: 1, type: 'Mouse', quantity: 1, collaborator: 'Snow', model: 'Jon', brand: 'Jon', technicaldetails: 'Jon' },
  ];

  /*   const dispatch = useDispatch();
    const { accessories, loading } = useSelector((state) => state.accessoryReducer);
  
    useEffect(() => {
      if (!accessories) {
        dispatch(fetchAccessory({ query: getAccessories }));
      }
    }, []);
  
    if (!accessories || loading) {
      return <FetchLoading />;
    } 
  
    }

    const displayData = ({ accessories }) => {
    const rows = [];
    const key = 0;

    if (accessories) {
      accessories.map((accessory) => {
        rows.push({
          id: key++,
          type: accessory.type,
          quantity: accessory.quantity,
          collaborator: accessory.collaborator,
          model: accessory.model,
          brand: accessory.brand,
          technicaldetails: accessory.technicaldetails
        })
      })
    }

    return rows;
  }
   
  */

  return (
    <Container>
      <Filters />
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

