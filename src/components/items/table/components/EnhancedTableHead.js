import {
  Checkbox,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";

const EnhancedTableHead = (props) => {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
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
    disablePadding: true,
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

/*
  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
  };*/
