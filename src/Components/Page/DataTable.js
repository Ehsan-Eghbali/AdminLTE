import React from "react"
import MUIDataTable from "mui-datatables";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import './DataTable.css'

const DataTable = () => {
    const columns = ["Name", "Company", "City", "State"];
    const rows = 10;
    const data = [
     ["Joe James", "Test Corp", "Yonkers", "NY"],
     ["John Walsh", "Test Corp", "Hartford", "CT"],
     ["Bob Herm", "Test Corp", "Tampa", "FL"],
     ["James Houston", "Test Corp", "Dallas", "TX"],
     ["Joe James", "Test Corp", "Yonkers", "NY"],
     ["John Walsh", "Test Corp", "Hartford", "CT"],
     ["Bob Herm", "Test Corp", "Tampa", "FL"],
     ["James Houston", "Test Corp", "Dallas", "TX"],
     ["Joe James", "Test Corp", "Yonkers", "NY"],
     ["John Walsh", "Test Corp", "Hartford", "CT"],
     ["Bob Herm", "Test Corp", "Tampa", "FL"],
     ["James Houston", "Test Corp", "Dallas", "TX"],
    ];
    
    const options = {
      filterType: 'checkbox',
      textLabels: {
        pagination: {
          next: "Next Page",
          previous: "Previous Page",
          rowsPerPage: "تعداد در صفحه:",
          displayRows: "از",
        },
        toolbar: {
          search: "Search",
          downloadCsv: "Download CSV",
          print: "Print",
          viewColumns: "View Columns",
          filterTable: "Filter Table",
        },
        filter: {
          all: "All",
          title: "FILTERS",
          reset: "RESET",
        },
        viewColumns: {
          title: "Show Columns",
          titleAria: "Show/Hide Table Columns",
        },
        selectedRows: {
          text: "row(s) selected",
          delete: "Delete",
          deleteAria: "Delete Selected Rows",
        },
      }
    };
    return(
        <div>
            <Navbar />
            <Sidebar />
            <MUIDataTable
              title={"Employee List"}
              data={data}
              rows={rows}
              columns={columns}
              options={options}
              
              className={"table-bordered"}
            />
        </div>
    )
}

export default DataTable
