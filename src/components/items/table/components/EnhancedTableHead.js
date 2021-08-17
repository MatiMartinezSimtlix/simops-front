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
    id: "type",
    numeric: false,
    disablePadding: false,
    label: "Type",
  },
  {
    id: "simtlixCode",
    numeric: false,
    disablePadding: false,
    label: "simTLiXCode",
  },
  { id: "state", numeric: false, disablePadding: false, label: "State" },
  {
    id: "collaborator",
    numeric: false,
    disablePadding: false,
    label: "Collaborator",
  },
  {
    id: "requestedDate",
    numeric: false,
    disablePadding: false,
    label: "RequestedDate",
  },
  {
    id: "serialNumber",
    numeric: true,
    disablePadding: false,
    label: "SerialNumber",
  },
  {
    id: "Specification",
    numeric: false,
    disablePadding: false,
    label: "Specification",
  },
  { id: "warranty", numeric: false, disablePadding: false, label: "Warranty" },
  {
    id: "purchaseDate",
    numeric: false,
    disablePadding: false,
    label: "PurchaseDate",
  },
  { id: "supplier", numeric: false, disablePadding: false, label: "Supplier" },
];
