import React from "react";
import ReactToPrint from "react-to-print";
import Pdf from "../components/Pdf";
import PdfViewer from "../components/PdfViewer";
import Button from "@mui/material/Button";
import Header from "../components/Header";
const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal",
  marginTop: "150px",
  marginLeft: "2000px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  float: "left",
};

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        <Pdf />
      </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
      <Header />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
        <Header/>
        <PdfViewer />
        <ReactToPrint
          trigger={() => (
            <Button
              variant="contained"
              size="small"
              style={{ margin: "0px 20px 100px 1000px" }}
            >
              Generate PDF
            </Button>
          )}
          content={() => this.componentRef}
        />
      </div>
    );
  }
}

export default Example;
