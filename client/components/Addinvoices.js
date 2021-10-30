import AddIcon from "@mui/icons-material/Add";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import DehazeIcon from "@mui/icons-material/Dehaze";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { blue, orange } from "@mui/material/colors";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/dist/client/image";
import Link from "next/link";
import ReactPlayer from "react-player";

export default function AddInvoice() {

  return (
    <div style={{ float: "right", marginRight: "20px" }}>
      <div className="navba" style={{ marginLeft: "1180px" }}>
        <button
          className="btn btn-primary newicon"
          data-ember-action=""
          data-ember-action-2061="2061"
          style={{ background: "green" }}
        >
          {" "}
          <AddIcon sx={{ color: "#DCDCDC" }} />{" "}
          <Link href="/addSales">
            <a style={{ textDecoration: "none", color: "white" }}>New </a>
          </Link>{" "}
        </button>
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
          Page Tips{" "}
        </a>
      </div>

      <hr />

      <div>
        <div className="intro text-center">
          <div className="videoimg">
            <div id="ember3610" className="yt-video-container ember-view">
              <div className="yt-video-section">
                <ReactPlayer
                  width="36%"
                  height="300px"
                  style={{ marginLeft: "590px", marginTop: "70px" }}
                  url="https://youtu.be/c6-TWhdcrKs"
                />
              </div>
            </div>
          </div>{" "}
        </div>{" "}
        <h3
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginLeft: "220px",
          }}
        >
          It's time to get paid!
        </h3>
        <p
          className="text-muted"
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginLeft: "240px",
            fontSize: "14px",
          }}
        >
          We don't want to boast too much, but sending amazing invoices and
          getting paid is easier than ever. Go ahead! Try it yourself.
        </p>
        <div
          style={{ margintop: "25px", display: "flex", marginLeft: "150px" }}
          className="cb"
        >
          <Link href="/addSales">
            <button
              className="btn btn-primary uppercase"
              style={{
                padding: "10px 24px",
                textAlign: "center",
                marginTop: "20px",
                marginLeft: "530px",
                background: "green",
              }}
              data-ember-action=""
              data-ember-action-3613="3613"
            >
              NEW INVOICE
            </button>
          </Link>
          <Link href="/addSales">
            <button
              className="btn btn-primary uppercase"
              style={{
                padding: "10px 24px",
                textAlign: "center",
                marginTop: "20px",
                marginLeft: "20px",
                borderColor: "#ddd",
                color: "#212529",
                backgroundColor: "#f5f5f5",
              }}
              data-ember-action=""
              data-ember-action-3613="3613"
            >
              NEW RECURRING INVOICE
            </button>
          </Link>
        </div>
        <p
          style={{
            margintop: "14px",
            textAlign: "center",
            marginTop: "20px",
            marginLeft: "200px",
          }}
        >
          <a
            href="#/quotes/import"
            id="ember3614"
            className="ember-view"
            style={{ textDecoration: "none" }}
          >
            Import Invoices
          </a>
        </p>
        <br />
        <br />
        <br />
        <div
          id="ember3615"
          className="intro-lifecycle text-center ember-view"
          style={{
            background: "#f8f7f7",
            paddingBottom: "50px",
            marginLeft: "250px",
          }}
        >
          <h4
            className="text-regular"
            style={{
              paddingTop: "40px",
              paddingBottom: "30px",
              textAlign: "center",
            }}
          >
            Life cycle of an Invoice
          </h4>

          <Image
            src="/LifeCycleOfAnInvoice.png"
            alt="site logo"
            width={606}
            height={140}
          />

          {/* <div
            className="row workflow-block"
            style={{
              
              maxWidth: "800px",
              margin: "50px auto",
            }}
          >
          
            </div> */}

          <div className="row features-section" style={{ paddingTop: "80px" }}>
            <div className="col-lg-4 text-center" style={{ marginLeft: " 100px" }}>
              <ColorLensOutlinedIcon color="success" />
              <h4 className="font-large" style={{ paddingTop: "10px" }}>
                Brand Your Invoice
              </h4>
              <div className="px-4 text-muted">
                Choose your favourite theme from our <br /> gallery of templates
                and personalize <br />
                your invoice to reflect your brand.
                <br />
                <a
                  className="font-small text-capitalize"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none" }}
                  href="https://zoho.com/in/books/help/settings/templates.html"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-center" style={{ marginLeft: " -100px" }}>
              <PaymentOutlinedIcon sx={{ color: orange[300] }} />
              <h4 className="font-large" style={{ paddingTop: "10px" }}>
                Collect Online Payments
              </h4>
              <div className="px-4 text-muted">
                Configure a payment gateway and <br />
                collect online payments from your <br /> customer with ease.
                <br />
                <a
                  className="font-small text-capitalize"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none" }}
                  href="https://zoho.com/in/books/help/settings/integrations.html#online-payments"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-center" style={{ marginLeft: " -100px" }}>
              <FolderSharedOutlinedIcon sx={{ color: blue[900] }} />
              <h4 className="font-large" style={{ paddingTop: "10px" }}>
                Client Portal
              </h4>
              <div className="px-4 text-muted">
                Enable Client Portal for your <br /> customers and allow them to
                accept <br />
                estimates, keep track of invoices and <br /> make payments.
                <br />
                <a
                  className="font-small text-capitalize"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ textDecoration: "none" }}
                  href="https://zoho.com/in/books/help/client-portal/"
                >
                  Learn More
                </a>
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}