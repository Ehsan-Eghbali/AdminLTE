import React from "react"
import MUIDataTable from "mui-datatables";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import './DataTable.css'

const DataTable = () => {
    const columns = ["Name", "Company", "City", "State"];

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
    };
    return(
        <div>
            <Navbar />
            <Sidebar />
            <MUIDataTable
              title={"Employee List"}
              data={data}
              columns={columns}
              options={options}
              className={"table-bordered"}
            />
        </div>
    )
}

export default DataTable
