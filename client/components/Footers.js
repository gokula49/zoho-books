import React from "react";
import styles from "../styles/Footer.module.css";
import Link from 'next/link'
import Image from 'next/image'
export default function footer() {
  return (
    <div className="over">
      <div className="d-flex clrs">
        <div className="d-flex flex-column h-100">
          <footer className="w-100 py-4 flex-shrink-0">
            <div className="container py-4">
              <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6"></div>

                <div className="d-flex">
                  <div className="col-lg-2 col-md-6 ">
                    <div className="d-flex footImg">
                      <div className="foots">
                        <Image
                          src="/foot1.png"
                          alt="Picture of the author"
                          width={120}
                          height={59.5}
                          className="footImg"
                        />
                      </div>

                      <div className="foots">
                        <Image
                          src="/foot2.png"
                          alt="Picture of the author"
                          width={120}
                          height={59.5}
                          className="footImg"
                        />
                      </div>

                      <div className="foots">
                        <Image
                          src="/foot3.png"
                          alt="Picture of the author"
                          width={120}
                          height={59.5}
                          className="footImg"
                        />
                      </div>
                    </div>
                    <div className="footImg">
                      <a
                        href="https://www.zoho.com/in/books/accounting-software-demo/#/home/dashboard?source=footer&amp;url=https://www.zoho.com/in/books/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="footImgs">
                          <Image
                            src="/foot4.png"
                            alt="Picture of the author"
                            width={840}
                            height={545}
                          />
                        </div>
                      </a>

                      <a href="https://www.zoho.com/in/books/e-invoicing/?source=footer&amp;url=https://www.zoho.com/in/books/">
                        <div className="footImgs">
                          <Image
                            src="/foot5.png"
                            alt="Picture of the author"
                            width={380}
                            height={245}
                          />
                        </div>
                      </a>

                      <a href="https://www.zoho.com/books/resources/?source=footer&amp;url=https://www.zoho.com/in/books/">
                        <div className="footImgs">
                          <Image
                            src="/foot6.png"
                            alt="Picture of the author"
                            width={359}
                            height={120}
                          />
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-6 ">
                    <ul
                      className="list-unstyled "
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      <li style={{ fontSize: "25px", marginBottom: "8px" }}>
                        Features
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/invoice-management/">
                          Invoicing
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/customer-client-portal/">
                          Client Portal
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/vendor-portal/">
                          Vendor Portal
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/manage-projects/">
                          Projects
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/estimate-management/">
                          Estimates
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/expenses/">
                          Expenses
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/online-bills/">
                          Bills
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/bank-connect-reconciliation/">
                          Banking
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/inventory/">
                          Inventory
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/purchase-order/">
                          Purchase Orders
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/online-payments.html">
                          Online Payments
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/sales-order/">
                          Sales Orders
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/document-management/">
                          Documents
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/gst-accounting-software/">
                          GST Accounting
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/accounting-automation/">
                          Automation
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/accounting-financial-reports/">
                          Reporting
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/e-invoicing-compliance/">
                          E-invoicing
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/accounting-mobile-apps/">
                          Mobile Accounting
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/accounting-software-features/">
                          All Accounting Features
                        </a>
                      </li>
                    </ul>

                    <ul
                      className="list-unstyled "
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      <li style={{ fontSize: "25px", marginBottom: "8px" }}>
                        Accountants &amp; Partners
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/accountant/">
                          Accountants
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/accountant/find-accountant.html">
                          Find Accountant
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/partners/partner-signup.html#finance">
                          Become a Partner
                        </a>
                      </li>
                    </ul>

                    <ul
                      className="list-unstyled 
                  "
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      <li style={{ fontSize: "20px", marginBottom: "8px" }}>
                        Banking Partners
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/icici-integration/">
                          ICICI Bank
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/standard-chartered-bank-integration/">
                          Standard Chartered Bank
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/yesbank-integration/">
                          YES Bank
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <ul
                      className="list-unstyled "
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      <li style={{ fontSize: "25px", marginBottom: "8px" }}>
                        Solutions
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/bookkeeping-software.html">
                          Bookkeeping Software
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/accounting-for-non-profits/">
                          Accounting Software for Non-profits
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/accounting-for-startups/">
                          Accounting Software for Startups
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/crm-integration/">
                          CRM Accounting Software
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/gst-accounting-software/">
                          GST Accounting Software
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/medium-sized-accounting/">
                          Medium Sized Accounting Solutions
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/move-from-spreadsheet-accounting-to-zoho-books/">
                          Accounting for Spreadsheet Users
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/small-business-accounting-software/">
                          Small Business Accounting
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/free-accounting-software/">
                          Free Accounting Software
                        </a>
                      </li>

                      <li>
                        <a href="https://www.zoho.com/in/books/windows-accounting-app/">
                          Accounting Software for Windows Users
                        </a>
                      </li>

                      <ul>
                        <li
                          style={{
                            fontSize: "25px",
                            marginBottom: "8px",
                            marginTop: "20px",
                            marginRight: "10px",
                          }}
                        >
                          Alternative Software comparison
                        </li>
                        <li>
                          <a href="https://www.zoho.com/in/books/tally-alternative.html">
                            Tally
                          </a>
                        </li>
                        <li>
                          <a href="https://www.zoho.com/in/books/quickbooks-alternative.html">
                            QuickBooks
                          </a>
                        </li>
                        <li>
                          <a href="https://www.zoho.com/in/books/xero-alternative.html">
                            Xero
                          </a>
                        </li>
                        <li>
                          <a href="https://www.zoho.com/in/books/kashflow-alternative.html">
                            KashFlow
                          </a>
                        </li>
                        <li>
                          <a href="https://www.zoho.com/in/books/freeagent-alternative.html">
                            FreeAgent
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li
                          style={{
                            fontSize: "25px",
                            marginBottom: "8px",
                            marginTop: "10px",
                          }}
                        >
                          GST Resources
                        </li>

                        <li>
                          <a href="https://www.zoho.com/in/books/gst/gst-india-basics.html">
                            GST Basics
                          </a>
                        </li>
                        <li>
                          <a href="https://www.zoho.com/in/books/gst/faq/">
                            GST FAQ
                          </a>
                        </li>
                        <li>
                          <a href="https://www.zoho.com/in/books/gst/gst-registration.html">
                            GST Registration
                          </a>
                        </li>
                        <li>
                          <a href="https://www.zoho.com/in/books/gst/e-way-bill.html">
                            E-Way Bill
                          </a>
                        </li>
                        <li>
                          <a href="https://www.zoho.com/in/books/gst/gst-returns.html">
                            GST Returns
                          </a>
                        </li>
                        <li>
                          <a href="https://www.zoho.com/in/books/gst/reverse-charge-mechanism-gst.html">
                            Reverse Charge
                          </a>
                        </li>
                        <li>
                          <a href="https://www.zoho.com/in/books/gst/gst-transactions.html">
                            GST Transactions
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <ul
                      className="list-unstyled "
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      <li style={{ fontSize: "25px", marginBottom: "8px" }}>
                        Quick Links
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/what-is-zoho-books/">
                          What is Zoho Books
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/pricing/">
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/pricing/pricing-comparison.html">
                          Pricing Plan Comparison
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/case-study/case-study.html">
                          Customer Case Studies
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/customer-videos/">
                          Customer Videos
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/webinars/maste className.html">
                          ZB Master classNamees
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/addons/">
                          Integrations
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/gst/hsn-sac-finder/">
                          HSN - SAC Finder
                        </a>
                      </li>
                    </ul>
                    <ul
                      className="arrange-col"
                      className="list-unstyled "
                      style={{ color: "aliceblue" }}
                    >
                      <li style={{ fontSize: "25px", marginBottom: "8px" }}>
                        Resources
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/help/getting-started/welcome.html">
                          Help Documentation
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/books/api/v3/">
                          Developers API
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/kb/invoices/">
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/welcome-guide.html">
                          Welcome Guide
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/videos/general/">
                          Product Videos
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/webinars/">
                          Webinars
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/books/blog">Blogs</a>
                      </li>
                      <li>
                        <a href="https://help.zoho.com/portal/en/community/zoho-books">
                          Forums
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/whats-new.html">
                          What’s New
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/release-notes.html">
                          Release Notes
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/support/">
                          Support
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/zohobooks-certification/">
                          Zoho Books Certification
                        </a>
                      </li>
                    </ul>
                    <ul
                      className="list-unstyled "
                      style={{ color: "rgb(255, 255, 255)" }}
                    >
                      <li style={{ fontSize: "25px", marginBottom: "8px" }}>
                        General Learning
                      </li>
                      <li>
                        <a href="https://www.zoho.com/in/books/accounting-terms/">
                          Accounting Dictionary
                        </a>
                      </li>
                      <li>
                        <a href="https://www.zoho.com/accounting-software/">
                          What is Accounting Software
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginLeft: "500px" }}>
              <ul className="call-us">
                <li style={{ textTransform: "none" }}>
                  <a
                    href="mailto:support.india@zohobooks.com"
                    style={{
                      color: "blue",
                      fontWeight: "400px",
                      fontSize: "25px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Send us an Email (or)
                  </a>
                  <l1
                    style={{
                      color: "aliceblue",
                      fontWeight: "400px",
                      fontSize: "20px",
                    }}
                  >
                    Call us: India - 18005726671
                  </l1>
                </li>

                <li>
                  <p>
                    India - 18005726671
                    <span
                      style={{
                        fontSize: "12px",
                        color: "aliceblue",
                        whiteSpace: "nowrap",
                      }}
                    >
                      (Monday - Friday 9:00AM to 7:00PM)
                    </span>
                  </p>
                </li>
              </ul>

              <ul className="call-us social-media-handles">
                <li
                  style={{
                    color: "aliceblue",
                    fontWeight: "800px",
                    fontSize: "20px",
                  }}
                >
                  Connect With Us
                </li>
                <li className="social-media-icons">
                  <a
                    href="https://www.twitter.com/ZohoBooks/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 512 512">
                      <path
                        fill="#1EABF1"
                        d="M475.1 0H36.9C16.5 0 0 16.5 0 36.9V475c0 20.5 16.5 37 36.9 37H475c20.4 0 36.9-16.5 36.9-36.9V36.9C512 16.5 495.5 0 475.1 0z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M398.3 167.8c-10.6 4.6-21.9 7.7-33.6 9.2 12.1-7.2 21.3-18.6 25.7-32.2-11.3 6.7-23.7 11.5-37 14.1-10.7-11.4-26-18.5-42.6-18.5-32.3 0-58.3 26.2-58.3 58.3 0 4.6.4 9.1 1.4 13.3-48.5-2.4-91.4-25.6-120.2-61-5 8.7-8 18.7-8 29.5 0 20.2 10.4 38.1 25.9 48.5-9.4-.2-18.6-2.9-26.4-7.2v.6c0 28.3 20.2 51.9 46.7 57.3-4.7 1.3-9.9 1.9-15.3 1.9-3.7 0-7.5-.2-11-1 7.6 23.1 29 40.1 54.5 40.6-19.8 15.5-45 24.9-72.3 24.9-4.8 0-9.4-.2-14-.8 25.8 16.7 56.5 26.2 89.5 26.2 107.3 0 166-88.9 166-166 0-2.6-.1-5.1-.2-7.5 11.5-8.2 21.2-18.4 29.2-30.2z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/zoho_books/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 512 512">
                      <linearGradient
                        id="a1qw"
                        gradientUnits="userSpaceOnUse"
                        x1="212.665"
                        y1="334.498"
                        x2="223.216"
                        y2="345.84"
                        gradientTransform="matrix(0 -42.2827 39.3387 0 -13125.9 9471.328)"
                      >
                        <stop offset="0" stopColor="#fd5"></stop>
                        <stop offset=".5" stopColor="#ff543e"></stop>
                        <stop offset="1" stopColor="#c837ab"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a1qw)"
                        d="M32 34.8C-8.2 76.6 0 121 0 255.9c0 112-19.5 224.3 82.7 250.7 31.9 8.2 314.9 8.2 346.8 0 42.6-11 77.2-45.5 82-105.7.7-8.4.7-281.3 0-289.9-5-64.1-44.5-101.1-96.6-108.6C403 .6 400.6.1 339.4 0 122.4.1 74.8-9.6 32 34.8z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M256 67c-77.5 0-151-6.9-179.1 65.2-11.7 29.8-10 68.4-10 123.8 0 48.6-1.6 94.3 9.9 123.8 28 72.1 102.2 65.2 179.1 65.2 74.2 0 150.7 7.7 179.1-65.2 11.6-30.1 9.9-68.2 9.9-123.8 0-73.9 4.1-121.5-31.7-157.3C376.9 62.4 327.9 67 256 67zm-17 34c161.6-.3 182.1-18.2 170.8 231.3-4 88.3-71.2 78.6-153.8 78.6-150.6 0-154.9-4.3-154.9-155C101 103.5 113 101.1 239 101zm117.9 31.4c-12.5 0-22.7 10.2-22.7 22.7s10.2 22.7 22.7 22.7 22.7-10.2 22.7-22.7c-.1-12.5-10.2-22.7-22.7-22.7zM256 158.9c-53.6 0-97.1 43.5-97.1 97.1s43.5 97.1 97.1 97.1 97-43.5 97-97.1-43.4-97.1-97-97.1zm0 34.1c83.3 0 83.4 126 0 126-83.3 0-83.5-126 0-126z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UC12OzqYu2z-D6mVJCTjQvwg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 512 512">
                      <path
                        d="M475.1 0H36.9C16.5 0 0 16.5 0 36.9V475c0 20.5 16.5 37 36.9 37H475c20.4 0 36.9-16.5 36.9-36.9V36.9C512 16.5 495.5 0 475.1 0z"
                        fill="red"
                      ></path>
                      <path
                        d="M390.1 206.2c0-21.5-17.4-39-39-39H168.3c-21.5 0-39 17.5-39 39v104.6c0 21.5 17.4 39 39 39h182.8c21.5 0 39-17.5 39-39V206.2zm-156.4 96.4v-98.2l74.5 49.1-74.5 49.1z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
              <div className="footer-d-flex flex-wrap support-container">
                <ul className="select-edition">
                  <li
                    style={{
                      color: "aliceblue",
                      fontWeight: "400px",
                      fontSize: "20px",
                    }}
                  >
                    Select Edition
                  </li>
                  <li style={{ fontWeight: "400" }}>
                    <div className="edition-select-box">
                      <a href="#">
                        <div className="edition-image-india"></div>
                        <div className="edition-label">India</div>
                        <div className="edition-dropdown select-caret"></div>
                      </a>
                    </div>
                    <div className="edition-select-list">
                      <div className="edition-list-container dangled-edition">
                        <div className="edition-select-list-item">
                          <a href="#">
                            <div className="edition-image-uk"></div>
                            <div className="edition-label"></div>
                          </a>
                        </div>

                        <div className="edition-select-list-item">
                          <a href="#">
                            <div className="edition-image-canada"></div>
                            <div className="edition-label"></div>
                          </a>
                        </div>
                      </div>

                      <div className="edition-list-container"></div>
                    </div>
                  </li>
                </ul>

                <div className="d-flex"></div>
                <ul className="d-flex">
                  <li
                    style={{
                      color: "aliceblue",
                      fontWeight: "400px",
                      fontSize: "20px",
                    }}
                  >
                    Available On
                  </li>

                  <img
                    src="/foot7.svg"
                    alt="Zoho Books - iOS App Download"
                    title="Zoho Books - Android App Download"
                    className="foot10"
                  ></img>

                  <img
                    src="/foot8.svg"
                    alt="Zoho Books - iOS App Download"
                    title="Zoho Books - Android App Download"
                    className="foot10"
                  ></img>

                  <img
                    src="/foot9.svg"
                    alt="Zoho Books - iOS App Download"
                    title="Zoho Books - Android App Download"
                    className="foot10"
                  ></img>
                </ul>
              </div>
              <ul className="zoho-privacy">
                <li style={{ color: "rgb(255, 255, 255)", fontWeight: "800" }}>
                  Choose Privacy. Choose Zoho.
                </li>

                <li>
                  <div className="d-flex">
                    <img
                      src="/foot10.svg"
                      alt="Zoho Books - iOS App Download"
                      title="Zoho Books - Android App Download"
                      height="65px"
                      width="110px"
                      style={{ marginRight: "50px" }}
                    ></img>

                    <img
                      src="/foot11.svg"
                      alt="Zoho Books - iOS App Download"
                      title="Zoho Books - Android App Download"
                      height="65px"
                      width="110px"
                      style={{ marginRight: "50px" }}
                    ></img>

                    <img
                      src="/foot12.svg"
                      alt="Zoho Books - iOS App Download"
                      title="Zoho Books - Android App Download"
                      height="65px"
                      width="110px"
                      style={{ marginRight: "50px" }}
                    ></img>

                    <Image
                      src="/foot13.png"
                      alt="Picture of the author"
                      width={65}
                      height={65}
                      className="circle"
                    />
                    <div style={{ marginLeft: "30px" }}>
                      <Image
                        src="/foot14.png"
                        alt="Picture of the author"
                        width={65}
                        height={65}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>

      <div className="iconss">
        <ul className="zoho-apps payroll-supported footer-d-flex flex-wrap">
          <li>Other Zoho Finance Apps</li>
          <li>
            <Link href="/">
              <a className="footer-d-flex align-items-center">
                <div className="expense-logo"></div>
                <div className="app-description">
                  <span className="other-app-title">Expense</span>
                  <div className="other-app-desc">Online Expense Reporting</div>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="footer-d-flex align-items-center">
                <div className="subscriptions-logo"></div>
                <div className="app-description">
                  <span className="other-app-title">Subscriptions</span>
                  <div className="other-app-desc">Subscription Management</div>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="footer-d-flex align-items-center">
                <div className="inventory-logo"></div>
                <div className="app-description">
                  <span className="other-app-title">Inventory</span>
                  <div className="other-app-desc">
                    Online Inventory Management
                  </div>
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="footer-d-flex align-items-center">
                <div className="checkout-logo"></div>
                <div className="app-description">
                  <span className="other-app-title">Checkout</span>
                  <div className="other-app-desc">Online Payments Software</div>
                </div>
              </a>
            </Link>
            <br />
            <br />
            <br />
          </li>
          <li>
            <Link href="/">
              <a className="footer-d-flex align-items-center">
                <div className="payroll-logo"></div>
                <div className="app-description">
                  <span className="other-app-title">Payroll</span>
                  <div className="other-app-desc">Online Payroll Software</div>
                </div>
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.footer}>
          <div className={styles.commonfooter}>
            <ul>
              <li>
                <a href="#">Zoho Home</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">IPR Complaints</a>
              </li>
              <li>
                <a href="#"> Anti-spam Policy</a>
              </li>
              <li id="footer-terms">
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#"> Privacy Policy</a>
              </li>
              <br />
              <li id="cookie-policy">
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">GDPR Compliancenbnbn</a>
              </li>
              <li>
                <a href="#">Abuse Policy</a>
              </li>
            </ul>
            <p>© 2021, Zoho Corporation Pvt. Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
