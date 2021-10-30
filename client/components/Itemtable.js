import {
  Card,
  CardContent,
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
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DehazeIcon from "@mui/icons-material/Dehaze";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import { Box } from "@mui/system";
import * as React from "react";

const drawerWidth = 240;

export default function Itemtable({ items }) {
  return (
    <>
      {" "}
      <div className="navba">
        <Button
          variant="contained"
          color="success"
          component={Link}
          href="/additem"
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
        </a>
      </div>
      <div style={{ flexGrow: "1" }}>
        <Box
          component="main"
          lg={{
            flexGrow: 10,
            p: 3,
            width: { lg: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Card>
            <CardContent>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Rate</TableCell>
                      <TableCell>Usage Unit</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items &&
                      items.map((item) => (
                        <TableRow>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.selling_description}</TableCell>
                          <TableCell>{item.selling_price}.00</TableCell>
                          <TableCell>{item.unit}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
}
