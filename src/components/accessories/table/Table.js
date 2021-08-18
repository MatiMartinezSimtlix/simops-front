import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'type', headerName: 'Type', width: 150 },
  {
    field: 'quantity',
    headerName: 'Quantity',
    width: 150,
    editable: true,
  },
  {
    field: 'collaborator',
    headerName: 'Collaborator',
    width: 200,
    editable: true,
  },
  {
    field: 'model',
    headerName: 'Model',
    width: 150,
    editable: true,
  },
  {
    field: 'brand',
    headerName: 'Brand',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'technicaldetails',
    headerName: 'Technical Details',
    type: 'number',
    width: 200,
    editable: true,
  }
];

export default function DataTable({ accessories }) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={accessories}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}