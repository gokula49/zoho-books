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
  
  export default function Purchaseitems({purchaseitems}) {
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
                  <TableCell>DATE</TableCell>
                  <TableCell>PURCHASE ORDER#</TableCell>
                  <TableCell>REFERENCE#</TableCell>
                  <TableCell>VENDOR NAME</TableCell>
                  <TableCell>STATUS</TableCell>
                  <TableCell>BILLED STATUS</TableCell>
                  <TableCell>AMOUNT</TableCell>
                  <TableCell>EXPECTED DELIVERY DATE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {purchaseitems && purchaseitems.map((purchaseitem) => (
                  <TableRow>
                    <TableCell>{purchaseitem.date}</TableCell>
                    <TableCell>PO-0000</TableCell>
                    <TableCell>{purchaseitem.reference}</TableCell>
                    <TableCell>{purchaseitem.vendor}</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>.</TableCell>
                    <TableCell>{purchaseitem.total}</TableCell>
                    <TableCell>{purchaseitem.expected_delivery_date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    );
  }