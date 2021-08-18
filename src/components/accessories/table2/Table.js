import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';



export default function DataTable({ accessories }) {
  const columns = [
    {
      id: "id",
      width: 150,
      editable: false,
      headerName: "ID",
    },
    {
      id: "type",
      width: 150,
      editable: true,
      headerName: "Type",
    },
    {
      id: "quantity",
      width: 150,
      editable: true,
      disablePadding: false,
      headerName: "Quantity",
    },
    {
      id: "brand",
      width: 150,
      editable: true,
      headerName: "Brand",
    },
    {
      id: "model",
      width: 150,
      editable: true,
      headerName: "model",
    },
    {
      id: "technicalDetails",
      width: 200,
      editable: true,
      headerName: "Technical Details",
    }
  ];
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={accessories}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}