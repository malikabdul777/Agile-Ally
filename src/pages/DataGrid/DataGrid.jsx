// React
import { useMemo } from "react";

// Thirdparty
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MaterialReactTable from "material-react-table";

// Data
import { userData } from "../../data";

// APISlices

// Enums

// Interfaces

// Styles
import "./DataGrid.css";

// Local enums

// Local constants

// Local Interfaces

const DataGrid = () => {
  const columns = useMemo(
    () => [
      { accessorKey: "name.firstName", header: "First Name" },
      { accessorKey: "name.lastName", header: "Last Name" },
      { accessorKey: "address", header: "Address" },
      { accessorKey: "city", header: "City" },
      { accessorKey: "state", header: "State" },
    ],
    []
  );

  const theme = useMemo(() => createTheme({ palette: { mode: "dark" } }), []);

  return (
    <div className="table-container">
      <ThemeProvider theme={theme}>
        <MaterialReactTable columns={columns} data={userData} />
      </ThemeProvider>
    </div>
  );
};

export default DataGrid;
