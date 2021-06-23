import "./accountList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import {accountRows} from "../../dummyData";
import {Link} from "react-router-dom";
import { useState } from "react";

export default function AccountList() {

    const [dataAccount, setdataAccount] = useState(accountRows)

    const handleDelete = (id)=>{
        setdataAccount(dataAccount.filter(item=>item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'accountName', headerName: 'Account Name', width: 200, renderCell: (params)=>{
            return (
                <div className="accountListAccount">
                   <img src={params.row.avatar} alt="" className="accountListImg" />
                   {params.row.accountName}
                </div>
            )
        }
         },
        { field: 'status', headerName: 'Status', width: 160 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 200 },
        { field:'action', headerName:'Action' , width:200, renderCell: (params)=>{
            return(
                <>
                <Link to={"/account/"+params.row.id}>
                    <button className="accountListEdit">Edit</button>
                </Link>
                
                <DeleteOutline className="accountListDelete" onClick={()=>handleDelete(params.row.id)}/>
                </>
            )
        }}
       
      ];
      
     
      
    return (
        <div className="accountList">
             <DataGrid rows={dataAccount} columns={columns} pageSize={7} checkboxSelection disableSelectionOnClick/>
        </div>
    )
}
