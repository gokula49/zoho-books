import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Toolbar,
    Button,
    Link,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import AddIcon from "@mui/icons-material/Add";
import DehazeIcon from "@mui/icons-material/Dehaze";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";


  import * as React from "react";
  
  const drawerWidth = 240;
  
  export default function Vendoritems({vendorsitems}) {
    return (
      <div>
        <div className="navba">
          {/* <button
            className="btn btn-primary newicon"
            data-ember-action=""
            data-ember-action-2061="2061"
            style={{background:'green',marginLeft: "8px"}}
          >
            {" "}
            
            <AddIcon sx={{ color: "#DCDCDC" }} />{" "}
            <Link href="/addSales">
              <a style={{textDecoration:'none',color:'white'}}>New </a>
            </Link>{" "}
          </button> */}
           <Button
        variant="contained"
        color="success"
        component={Link}
        href="#"
      >
        &#xFF0B;&nbsp;New
      </Button>
          <SettingsOutlinedIcon style={{ marginLeft: "28px" }} />
          <DehazeIcon
            sx={{
              border: "1px solid #D3D3D3",
              borderRadius: "3px",
              padding: "3px",
              background: "#DCDCDC",
              marginLeft: "25px",
            }}
          />
          <a
            href="#"
            data-ember-action=""
            data-ember-action-2133="2133"
            className="blubs"
          >
            <EmojiObjectsTwoToneIcon
              color="primary"
              style={{ marginLeft: "25px" }}
            />{" "}
            {" "}
          </a>
         
        </div>
        
        <hr/>
        <Box
          component="main"
          lg={{
            flexGrow: 10,
            p: 3,
            width: { lg: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                <TableCell>NAME</TableCell>
                  <TableCell>COMPANY NAME</TableCell>
                  <TableCell>EMAIL</TableCell>
                  <TableCell>WORK PHONE</TableCell>
                  <TableCell>PAYABLES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {vendorsitems && vendorsitems.map((vendorsitem) => (
                  <TableRow>
                    <TableCell>{vendorsitem.vendor_display_name}</TableCell>
                    <TableCell>{vendorsitem.company_name}</TableCell>
                    <TableCell>{vendorsitem.vendor_email}</TableCell>
                    
                    <TableCell></TableCell>
                    <TableCell>{vendorsitem.vendor_phone}</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    );
  }