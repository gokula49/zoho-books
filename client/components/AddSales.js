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
import { useHistory } from "react-router-dom";

export default function Sales() {
  let history = useHistory();

  return (
    <div style={{ float: "right", marginRight: "20px" }}>
      <div className="navba" >
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
                  style={{ marginLeft: "460px", marginTop: "70px" }}
                  url="https://youtu.be/C91WVNHSkmI"
                />
              </div>
            </div>
          </div>{" "}
        </div>{" "}
        <h3
          style={{ textAlign: "center", marginTop: "20px", marginLeft: "60px" }}
        >
          Start Managing Your Sales Activities!
        </h3>
        <p
          className="text-muted"
          style={{ textAlign: "center", marginTop: "20px", marginLeft: "60px" }}
        >
          Create, customize and send professional Sales Orders.
        </p>
        <div style={{ margintop: "25px" }} className="cb">
          <Link href="/addSales">
            <button
              className="btn btn-primary uppercase"
              style={{
                padding: "10px 24px",
                textAlign: "center",
                marginTop: "20px",
                marginLeft: "590px",
                background: "green",
              }}
              data-ember-action=""
              data-ember-action-3613="3613"
            >
              CREATE SALES ORDER
            </button>
          </Link>
        </div>
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
              textAlign: "center",
            }}
          >
            Life cycle of a Sales Order
          </h4>

          <Image
            src="/LifecycleofSales.png"
            alt="site logo"
            width={956}
            height={280}
          />

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
                <span className="text-capitalize"> Sales Orders</span> section, you
                can:
              </h4>

              <div className="icon align-text-bottom text-blue">
                <ul className="list-unstyled">
                  <li style={{ paddingTop: "20px" }}>
                    <CheckCircleOutlineRoundedIcon color="primary" /> Create
                    sales orders to follow up an estimate or customer request.
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <CheckCircleOutlineRoundedIcon color="primary" /> Convert
                    the sales order into a purchase order if you are low on
                    stock.
                  </li>
                  <li style={{ paddingTop: "10px" }}>
                    <CheckCircleOutlineRoundedIcon color="primary" /> Convert
                    the sales order into an invoice if the sale goes through.
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