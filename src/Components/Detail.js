import './Css/Detail.scss';
import Button from "@material-ui/core/Button";
import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Css/listView.scss";


function Detail () {
  
  
  
 
  
  

return(
      <div className = "App">
     
        <div className="list-view-menu">
        <Menu >
              <Button variant="contained">หน้าแรก</Button>
              <Button >งานวิจัย</Button>
              <Button >พื้นที่งานวิจัย</Button>
              <Button >ข้อมูลนักวิจัย</Button>
        </Menu>
        </div> 

      

        
      </div>
  );
}


export default Detail ;