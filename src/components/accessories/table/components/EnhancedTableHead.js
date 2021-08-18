import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";

const EnhancedTableHead = (props) => {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              style={{ fontWeight: "700" }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;

const headCells = [
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
    id: "collaborator",
    width: 150,
    editable: true,
    disablePadding: false,
    headerName: "Collaborator",
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
