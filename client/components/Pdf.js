import React from "react";

export default function pdf() {
  return (
    <div style={{ marginLeft: "100px" }}>
      <div
        style={{
          overflow: "scroll",
          width: "1000px",
          height: "900px",
          marginTop: "100px",
          marginLeft: "200px",
        }}
      >
        <div style={{ background: "#fbfbfb" }}>
          <div>
            <div
              style={{ padding: "2% 3%", maxWidth: "150px", maxHeight: "50px" }}
            ></div>
          </div>
          <div
            style={{
              padding: "3%",
              textAlign: "center",
              background: "#4190f2",
            }}
          >
            <div style={{ color: "#fff", fontsize: "20px", fontWeight: "500" }}>
              Estimate #EST-000002
            </div>
          </div>
          <div style={{ maxWidth: "560px", margin: "auto", padding: "0 3%" }}>
            <div
              style={{ padding: "30px 0", color: "#555", lineHeight: "1.7" }}
            >
              Dear xx, <br />
              <br />
              Thank you for contacting us. Your estimate can be viewed, printed
              and downloaded as PDF from the link below. <br />
            </div>
            <div
              style={{
                padding: "3%",
                background: "#fefff1",
                border: "1px solid #e8deb5",
                color: "#333",
              }}
            >
              <div
                style={{
                  padding: "0 3% 3%",
                  borderBottom: "1px solid #e8deb5",
                  textAlign: "center",
                }}
              >
                <h4 style={{ marginBottom: "0" }}> ESTIMATE AMOUNT</h4>
                <h2 style={{ color: "#D61916", marginTop: "10px" }}>
                  ₹9,900.00
                </h2>
              </div>

              <div style={{ margin: "auto", maxWidth: "350px", padding: "3%" }}>
                <p>
                  <span
                    style={{ width: "35%", paddingLeft: "10%", float: "left " }}
                  >
                    Estimate No
                  </span>
                  <span
                    style={{
                      width: "40%",
                      paddingLeft: "10%",
                      display: "inline-block",
                    }}
                  >
                    <b>EST-000002</b>
                  </span>
                </p>
                <p>
                  <span
                    style={{ width: "35%", paddingLeft: "10%", float: "left" }}
                  >
                    Estimate Date
                  </span>
                  <span style={{ width: "40%", paddingLeft: "10%" }}>
                    <b>21/10/2021</b>
                  </span>
                </p>
              </div>
              <div style={{ textAlign: "center", margin: "25px 0" }}>
                {" "}
                <a
                  style={{ textDecoration: "none" }}
                  href="https://zohosecurepay.in/books/xxc60011311972/secure?CEstimateID=2-a2b74346aed4de444f36cb30c2fbe52c0d8fc5b7533b93476103590e28c2b02699c4813b71b091c21762a991fbf792745107e16ce722af48d289cac3b50232c5b88be9414a6d2144"
                >
                  <span
                    style={{
                      backgroundColor: "#4dcf59",
                      border: "1px solid #49bd54",
                      cursor: "pointer",
                      textAlign: "center",
                      minWidth: "140px",
                      color: "#fff",
                      display: "inline-block",
                      textDecoration: "none",
                      padding: "10px 20px",
                    }}
                  >
                    VIEW ESTIMATE
                  </span>
                </a>{" "}
              </div>
            </div>
            <br />
            <div style={{ padding: "3% 0", lineHeight: "1.6" }}>
              {" "}
              Regards,{" "}
              <div style={{ color: "#8c8c8c", fontWeight: "400" }}>MailId</div>
              <div style={{ color: "#b1b1b1" }}>xxc</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
