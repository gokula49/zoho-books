import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function PdfViewer() {
  return (
    <div style={{ marginLeft: "250px" }}>
      <div style={{ marginTop: "20px" }}>
        <div
          className="aliceblue-bg mb-3 p-3"
          style={{
            backgroundColor: "#f3f8fe!important",
            padding: "10px!important",
            marginBottom: "10px!important",
            boxSizing: "border-box",
            display: "block",
          }}
        >
          <div className="row" style={{ boxSizing: "border-box" }}>
            <div className="col-lg-7">
              <div className="form-check py-2 px-5">
                <input
                  id="a0b046fa1"
                  className="ember-checkbox ember-view form-check-input"
                  type="checkbox"
                  style={{ margin: "10px 0px 0px 10px" }}
                />
                <label
                  className="form-check-label"
                  forhtml="a0b046fa1"
                  style={{ margin: "10px 0px 0px 10px" }}
                >
                  {" "}
                  Attach Estimate PDF{" "}
                </label>
              </div>
            </div>

            <div className="col-lg-4 offset-lg-1">
              <div className="input-group badge-editable">
                <div className="input-group-prepend">
                  {/* <div className="input-group-text"> */}
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div>
          <div className="row">
            <div className="col-lg-3 mt-3">
              <div
                id="ember409"
                className="dropdown ember-view"
                style={{ display: "flex" }}
              >
                <AttachFileIcon
                  color="primary"
                  style={{ margin: "10px 0px 0px 20px" }}
                />
                <button
                  id="ember410"
                  className="dropdown-toggle ember-view btn btn-link"
                  type="button"
                  style={{ backgroundColor: "transparent" }}
                >
                  <span style={{ margin: "-20px -10px -10px -10px" }}>
                    {" "}
                    Attach File(s)
                    <select className="value" name="unit"></select>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="txn-creation-column">
          <div className="btn-toolbar fixed-actions">
            <button
              id="ember1447"
              className="btn btn-primary ember-view"
              type="submit"
            >
              {" "}
              Save
            </button>
            &nbsp;
            <Link href="/addItem">
              <button
                className="btn btn-secondary"
                data-ember-action=""
                data-ember-action-1448="1448"
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
