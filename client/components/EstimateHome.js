import AddIcon from "@mui/icons-material/Add";
import DehazeIcon from "@mui/icons-material/Dehaze";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Link from "next/link";
import Image from "next/dist/client/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "bootstrap/dist/css/bootstrap.css";

import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import * as React from "react";
import ReactPlayer from "react-player";
export default function Estimates() {
  return (
    <div style={{ float: "right", marginRight: "20px" }}>
      <div className="navba">
        <button
          className="btn btn-primary newicon"
          data-ember-action=""
          data-ember-action-2061="2061"
          style={{ background: "green" }}
        >
          {" "}
          <AddIcon sx={{ color: "#DCDCDC" }} />{" "}
          <Link href="/addEstimates">
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
                  style={{ marginLeft: "460px", marginTop: "100px" }}
                  url="https://youtu.be/ffLnye2IPXw"
                />
              </div>
            </div>
          </div>{" "}
        </div>{" "}
        <h3
          style={{ textAlign: "center", marginTop: "20px", marginLeft: "40px" }}
        >
          Seal the deal.
        </h3>
        <p
          className="text-muted"
          style={{ textAlign: "center", marginTop: "20px", marginLeft: "70px" }}
        >
          With estimates, give your customers an offer they can’t refuse!
        </p>
        <div style={{ margintop: "25px" }} className="cb">
          <Link href="/addEstimates">
            <button
              className="btn btn-primary uppercase"
              style={{
                padding: "10px 24px",
                textAlign: "center",
                marginTop: "20px",
                marginLeft: "580px",
                background: "green",
              }}
              data-ember-action=""
              data-ember-action-3613="3613"
            >
              CREATE NEW ESTIMATE
            </button>
          </Link>
        </div>
        <p
          style={{
            margintop: "14px",
            textAlign: "center",
            marginTop: "20px",
            marginLeft: "40px",
          }}
        >
          <a
            href="#/quotes/import"
            id="ember3614"
            className="ember-view"
            style={{ textDecoration: "none" }}
          >
            Import Estimates
          </a>
        </p>
        <br />
        <br />
        <br />
        <div
          id="ember3615"
          className="intro-lifecycle text-center ember-view"
          style={{ background: "#f8f7f7", paddingBottom: "50px" }}
        >
          <h4
            className="text-regular"
            style={{
              paddingTop: "40px",
              paddingBottom: "30px",
              marginLeft: "70px",
            }}
          >
            Life cycle of an Estimate
          </h4>

          <Image src="/customer.png" alt="site logo" width={506} height={180} />

          <div
            className="row workflow-block"
            style={{
              borderTop: "1px solid #ddd",
              maxWidth: "800px",
              margin: "50px auto",
            }}
          >
            <div className="col-lg-9 offset-lg-3 workflow-list-section text-left">
              <h4
                className="workflow-list-head text-regular"
                style={{ paddingTop: "50px" }}
              >
                In the
                <span className="text-capitalize"> Estimates</span> section, you
                can:
              </h4>

              <div className="icon align-text-bottom text-blue">
                <ul className="list-unstyled">
                  <li style={{ paddingTop: "20px" }}>
                    <CheckCircleOutlineRoundedIcon color="primary" /> Customize
                    your estimate
                    <span>
                      <a
                        className="font-small"
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://zoho.com/in/books/help/settings/templates.html"
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        Learn More
                      </a>
                    </span>{" "}
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <CheckCircleOutlineRoundedIcon color="primary" /> Convert an
                    accepted estimate into an invoice{" "}
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <CheckCircleOutlineRoundedIcon color="primary" /> Know when
                    an estimate has been viewed, accepted, or declined
                    <span>
                      <a
                        className="font-small"
                        target="_blank"
                        rel="noreferrer noopener"
                        href="https://zoho.com/in/books/help/client-portal"
                        style={{ textDecoration: "none" }}
                      >
                        {" "}
                        Learn More
                      </a>
                    </span>
                  </li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
