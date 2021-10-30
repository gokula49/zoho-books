import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import { useState } from "react";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { InputLabel, Select } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";

import SearchIcon from "@mui/icons-material/Search";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import FormControl from "@mui/material/FormControl";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "Registered Customer",
  },
  {
    value: "EUR",
    label: "Overseas Customer",
  },
  {
    value: "BTC",
    label: "Consumer Customer",
  },
  {
    value: "JPY",
    label: "SEZ Customer",
  },
];
const weekend = [
  {
    value: "abc",
    label: "Week",
  },
  {
    value: "def",
    label: "2 Weeks",
  },
  {
    value: "ghi",
    label: "Month",
  },
  {
    value: "jkl",
    label: "2 Months",
  },
  {
    value: "jkl",
    label: "3 Months",
  },
  {
    value: "jkl",
    label: "6 Months",
  },
  {
    value: "jkl",
    label: "Year",
  },
  {
    value: "jkl",
    label: "2 Years",
  },
  {
    value: "jkl",
    label: "3 Years",
  },
  {
    value: "jkl",
    label: "custom",
  },
];
const receipttable = [
  {
    value: "abc",
    label: "Net 15",
  },
  {
    value: "def",
    label: "Net 30",
  },
  {
    value: "ghi",
    label: "Net 45",
  },
  {
    value: "jkl",
    label: "Net 60",
  },
  {
    value: "jkl",
    label: "Due end of the month",
  },
  {
    value: "jkl",
    label: "Due of next month",
  },
  {
    value: "jkl",
    label: "Due on receipt ",
  },
];

const Input = styled("input")({
  display: "none",
});

const options = [
  {
    label: "Apple",
    value: "apple",
    price: "50",
  },
  {
    label: "Mango",
    value: "mango",
    price: "40",
  },
  {
    label: "Banana",
    value: "banana",
    price: "30",
  },
  {
    label: "Pineapple",
    value: "pineapple",
    price: "20",
  },
];

const template = {
  productId: "",
  quantity: 0,
};

export default function NewRecurringInvoice(props) {
  const customHandleClick = () => {};

  const [currency, setCurrency] = React.useState("Select Cusomer");
  const [weeks, setWeeks] = React.useState("Select");
  const [receipt, setReceipt] = React.useState("Select");
  const [fruit, setFruit] = React.useState("Apple");
  const [value, setValue] = React.useState(null);
  const [age, setAge] = React.useState("");

  const handleChanged = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChangedOf = (event) => {
    setWeeks(event.target.value);
  };
  const handleReceipt = (event) => {
    setReceipt(event.target.value);
  };

  const handleChangeFruit = (event) => {
    // console.log(options.price);
    setFruit(event.target.value, console.log(options.price));
  };

  const [products, setProducts] = useState([template]);
  const [party, setParty] = useState();

  const [parties, setParties] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const handleSubmit2 = async (event) => {
    if (party === undefined || party === "select") event.preventDefault();

    const data = {
      party: party,
      products: [...products],
    };
    let res = await Purchase.addCustomer(data);
    if (res.data.success) {
    }
  };

  const addFields = () => {
    const inputs = products;
    inputs.push(template);
    setProducts([...inputs]);
  };

  const deleteFields = (index) => {
    const inputs = products;
    inputs.pop(index);
    setProducts([...inputs]);
  };

  const handleChange2 = (e, index) => {
    const inputs = products;
    let values = inputs[index];
    values[e.target.name] = e.target.value;
    setProducts([...inputs]);
  };

  return (
    <div className="column content-column">
      <div className="fill header">
        <h3 className="float-left">{props.title} </h3>
        <span
          className="close-details close-details-header float-right"
          data-ember-action=""
          data-ember-action-1427="1427"
        >
          <CloseIcon sx={{ fontSize: 30 }} />
        </span>
      </div>
      <div className="scroll-y noscroll-x fill body scrollbox">
        {/* <form className="item-creation" autoComplete="off"> */}
        <div
          tabIndex="-1"
          id="ember1428"
          className="no-outline ember-view"
        ></div>
        <div className="primary-info grey-bg">
          <div className="item-new">
            <div className="row">
              <div className="col-lg-8">
                <div className="row form-group">
                  <label className="col-lg-3 col-form-label required">
                    Customer Name
                  </label>
                  <div className="col-lg-8" style={{ display: "flex" }}>
                    <select
                      id="outlined-select-currency"
                      select
                      name="customer"
                      label="Select Customer"
                      style={{ width: 500 }}
                    >
                      <option
                        disabled
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        Select
                      </option>
                      {props.customers.map((option) => (
                        <option
                          key={option._id}
                          value={option._id}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          {option.first_name + " " + option.last_name}
                        </option>
                      ))}
                    </select>
                    <div>
                      <SearchIcon
                        style={{
                          width: "50px",
                          padding: "8px",
                          height: "40px",
                          margin: "10px",
                          borderRadius: "5px",
                          backgroundColor: "#397db9",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="row form-group">
                  <label className="col-lg-3 col-form-label required">
                    {props.addItem}Profile Name
                  </label>
                  <div className="col-lg-8" style={{ display: "flex" }}>
                    <TextField id="outlined-basic" style={{ width: 500 }} />
                    <div></div>
                  </div>
                </div>

                <div className="row form-group">
                  <label
                    className="col-lg-3 col-form-label "
                    style={{ marginTop: "20px" }}
                  >
                    Order Number
                  </label>
                  <div className="col-lg-8" style={{ display: "flex" }}>
                    <TextField
                      id="outlined-basic"
                      value=""
                      style={{ width: 500 }}
                    ></TextField>
                    <div></div>
                  </div>
                </div>
                <div className="row form-group">
                  <label className="col-lg-3 col-form-label required">
                    {props.addItem}Repeat Every
                  </label>
                  <div className="col-lg-8" style={{ display: "flex" }}>
                    <TextField
                      id="outlined-select-weeks"
                      select
                      label="Week"
                      // value={weeks}
                      // onChange={handleChangedOf}
                      style={{ width: 500 }}
                    >
                      {weekend.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div className="row form-group">
                    <label
                      className="col-lg-3 col-form-label "
                      style={{ paddingRight: "80px" }}
                    >
                      {props.addItem}Start On
                    </label>
                    <div className="col-lg-8" style={{ display: "flex" }}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="14 Oct 2021"
                          value={value}
                          style={{ width: 500 }}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                      <div></div>
                    </div>
                  </div>

                  <div className="row form-group">
                    <label className="col-lg-3 col-form-label ">Ends On</label>

                    <div className="col-lg-8" style={{ display: "flex" }}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="dd/MM/yyyy"
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>

                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="row form-group">
                  <label className="col-lg-3 col-form-label ">
                    {props.addItem}Payment Terms
                  </label>
                  <div className="col-lg-8" style={{ display: "flex" }}>
                    <TextField
                      id="outlined-select-weeks"
                      select
                      label="Due on Receipt"
                      // value={receipt}
                      // onChange={handleReceipt}
                      style={{ width: 500 }}
                    >
                      {receipttable.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                </div>

                <div
                  className="row form-group"
                  style={{ borderTop: "1px solid  #f3f3f3" }}
                >
                  <label className="col-lg-3 col-form-label ">
                    Salesperson
                  </label>
                  <div className="col-lg-8" style={{ display: "flex" }}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Select or Add Salesperson"
                      // value={currency}
                      // onChange={handleChange}
                      // helperText="Select Customer"
                      style={{ width: 500 }}
                    >
                      {/* {currencies.map((option) => (
                          <MenuItem
                            key={option.value}
                            value={option.value}
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            {option.label}
                          </MenuItem>
                        ))} */}
                    </TextField>
                    <div></div>
                  </div>
                </div>

                <div className="row form-group">
                  <label className="col-lg-3 col-form-label ">
                    Associate Project(s) Hours
                  </label>
                  <div className="col-lg-8" style={{ display: "flex" }}>
                    <p style={{ color: "#777" }}>
                      There are no active projects for this customer
                    </p>
                    {/*
                    
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Select Project Name"
                        value={currency}
                        onChange={handleChange}
                        // helperText="Select Customer"
                        style={{ width: 500 }}
                      >
                        {currencies.map((option) => (
                          <MenuItem
                            key={option.value}
                            value={option.value}
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>{" "}
        <div className="zb-txn-form item-new">
          <div className="row">
            {" "}
            <div className="col-lg-6"> </div> <div className="col-lg-6"> </div>{" "}
          </div>{" "}
        </div>{" "}
        <hr />
        <Container component="main" maxWidth="s">
          <CssBaseline />
          <div>
            <h2>Item Details</h2>
            <form onSubmit={handleSubmit2} method={"post"}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl
                    variant="outlined"
                    fullWidth
                    required
                  ></FormControl>
                </Grid>

                {products.map((item, index) => {
                  return (
                    <>
                      <Grid item xs={3} sm={3}>
                        <FormControl variant="outlined" fullWidth required>
                          <InputLabel>Item Details</InputLabel>
                          <Select
                            native
                            onChange={(e) => handleChange2(e, index)}
                            label="Item Details"
                            name="productId"
                            inputProps={{
                              name: "productId",
                              id: "outlined-age-native-simple",
                            }}
                          >
                            <option value="select" defaultChecked>
                              Select
                            </option>
                            {allProducts.map((val) => (
                              <option value={val._id}>{val.productId}</option>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={2} sm={2}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="quantity"
                          onChange={(e) => handleChange2(e, index)}
                          label="Quantity"
                          name="quantity"
                        />
                      </Grid>

                      <Grid item xs={1} sm={1}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="rate"
                          onChange={(e) => handleChange2(e, index)}
                          label="Rate"
                          name="rate"
                        />
                      </Grid>

                      <Grid item xs={1} sm={1}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="discount"
                          onChange={(e) => handleChange2(e, index)}
                          label="Discount"
                          name="discount"
                        />
                      </Grid>

                      <Grid item xs={1} sm={1}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="tax"
                          onChange={(e) => handleChange2(e, index)}
                          label="Tax"
                          name="tax"
                        />
                      </Grid>

                      <Grid item xs={2} sm={2}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="amount"
                          onChange={(e) => handleChange2(e, index)}
                          label="Amount"
                          name="amount"
                        />
                        <Button
                          style={{ marginTop: "1px" }}
                          variant="contained"
                          color="error"
                          onClick={() => deleteFields(index)}
                        >
                          Delete
                        </Button>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
              <Button variant="contained" color="secondary" onClick={addFields}>
                Add
              </Button>
              <hr />
            </form>
          </div>
        </Container>
        {/* <Todo/> */}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ margin: "100px" }}>
            <h4>Customer Notes</h4>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Thanks for your business."
              style={{ width: 500, height: 100 }}
            />
          </div>
          {/* <CustomerNotes /> */}
          {/* <TotalSection/> */}
          <div
            className="total-section ml-auto invoice-discount col-lg-6 mt-5 rounded-xlg mr-4 grey-bg"
            id="total-section"
          >
            <div id="ember1836" className="ember-view">
              <div id="ember1837" className="ember-view">
                <div id="ember1838" className="ember-view collapse show">
                  <div
                    className="total-row sub-total  mt-3"
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      margin: "10px",
                    }}
                  >
                    <div className="total-label"> Sub Total </div>
                    <div className="total-amount"> 0.00 </div>
                  </div>
                  <div
                    className="total-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      margin: "10px",
                    }}
                  >
                    <div className="total-label">
                      <div className="row">
                        <div className="col-lg-5 col-sm-5 col-5">
                          <div className="form-control-plaintext">
                            {" "}
                            Discount{" "}
                          </div>
                        </div>
                        <div className="col-lg-5 col-sm-5 col-5">
                          <div
                            id="ember1839"
                            className="input-group ember-view"
                          >
                            <div
                              id="ember1841"
                              className="dropdown open ember-view input-group-append"
                            >
                              <div className="ember-text-field form-control ac-search-txt ember-view">
                                <select className="value">
                                  <option value="saab">₹</option>
                                  <option value="opel">%</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="total-amount" style={{ lineHeight: "2" }}>
                      <span> 0.00 </span>
                    </div>
                  </div>
                  <div id="ember1846" className="ember-view"></div>
                  <div id="ember1847" className="ember-view"></div>
                  <div className="table-row">
                    <div
                      className="total-row"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        margin: "10px",
                      }}
                    >
                      <div className="badge-editable total-label">
                        <div className="row">
                          <div className="col-lg-5 col-sm-5 col-5">
                            <input
                              id="ember1848"
                              className="ember-text-field ember-view form-control editable"
                              placeholder="Adjustment"
                              type="text"
                            />
                          </div>
                          <div className="col-lg-4 col-sm-4 col-4">
                            <input
                              id="ember1849"
                              className="ember-text-field text-right ember-view form-control"
                              type="text"
                            />
                          </div>
                          <span
                            id="ember1851"
                            className="popover-container ember-view"
                          >
                            <div
                              id="ember1853"
                              className="d-none popover bs-popover-top ember-view popover-help"
                            ></div>
                          </span>
                        </div>
                      </div>
                      <div
                        className="total-amount "
                        style={{ lineHeight: "2" }}
                      >
                        {" "}
                        0.00{" "}
                      </div>
                    </div>
                  </div>
                  <div className="table-row" id="tcs-field">
                    <div
                      className="total-row"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        margin: "10px",
                      }}
                    >
                      <div className="total-label">
                        <div className="row">
                          <div className="col-lg-5 col-sm-5 col-5 py-2">
                            <div className="form-control-plaintext"> TCS</div>
                          </div>

                          <div className="col-lg-6 col-sm-6 col-6 tds-select">
                            <div id="ember1855" className="ember-view">
                              <div className="ac-box ">
                                <span
                                  className="ac-selected form-control "
                                  tabIndex="0"
                                >
                                  <span className="text-muted">
                                    {" "}
                                    Select a Tax{" "}
                                  </span>
                                  <div>
                                    <i className="zf-ac-toggler"></i>
                                  </div>
                                </span>
                              </div>
                            </div>
                          </div>
                          <span
                            id="ember1857"
                            className="popover-container ember-view"
                          >
                            <div
                              id="ember1859"
                              className="d-none popover bs-popover-bottom ember-view popover-help"
                            ></div>
                          </span>
                        </div>
                      </div>
                      <div className="total-amount" style={{ lineHeight: "2" }}>
                        <div
                          id="ember1860"
                          className="popover-container ember-view"
                        >
                          <div className="text-muted align-center"> 0 </div>
                          <div
                            id="ember1861"
                            className="d-none popover bs-popover-bottom ember-view tax-override-popover"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="total-row gross-total mb-3  "
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "10px",
                  }}
                >
                  <div className="total-label"> Total ( ₹ ) </div>
                  <div className="total-amount "> 0.00 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fill-container txn-bottom-form grey-bg mt-7">
          <div className="zb-txn-form">
            <div className="row">
              <div className="col-lg-8 coll">
                <div className="form-group">
                  <div className="mb-2">Terms &amp; Conditions</div>
                  <div>
                    <textarea
                      rows="4"
                      style={{ width: "500px" }}
                      placeholder="Enter the terms and conditions of your business to be displayed in your transaction"
                      id="ember624"
                      className="ember-text-area ember-view form-control from-g"
                    ></textarea>
                    <div
                      className="form-check "
                      style={{ marginTop: "20px", marginLeft: "-20px" }}
                    >
                      <input
                        id="a49e3d366"
                        className="ember-checkbox ember-view form-check-input"
                        type="checkbox"
                      />
                      <label
                        htmlFor="a49e3d366"
                        className="hightlight form-check-label"
                      >
                        Use this in future.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <p className="clearfix">
                Want to get paid faster?
                <img
                  src="/invoice1.svg"
                  height="20px"
                  width="20px"
                  style={{ marginLeft: "10px" }}
                ></img>
                <img src="/invoice2.svg" height="20px" width="20px"></img>
              </p>
              <div style={{ display: "flex" }}>
                <p style={{ color: "#777" }}>
                  Configure payment gateways and receive payments online.
                </p>
                <p style={{ color: "#2485e8" }}>Set up Payment Gateway</p>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 170" className="icon icon-xlg align-bottom"><linearGradient id="payment-option-visa-1" gradientUnits="userSpaceOnUse" x1="1.735" y1="1.521" x2="2.751" y2="1.521" gradientTransform="rotate(-20.218 -987.747 2450.033) scale(447.2655)"><stop offset="0" stop-color="#222357"></stop><stop offset="1" stop-color="#254aa5"></stop></linearGradient><path fill="url(#payment-option-visa-1)" d="M307.2 49.6c.1-5.7 5.5-11.7 17.4-13.2 5.9-.8 22-1.3 40.3 7.1l7.2-33.5c-9.9-3.6-22.5-7-38.3-7-40.4 0-68.9 21.4-69.1 52.2-.3 22.8 20.3 35.5 35.8 43 16 7.7 21.2 12.7 21.2 19.6-.1 10.6-12.7 15.2-24.5 15.4-20.5.3-32.5-5.6-42-10l-7.4 34.6c9.6 4.4 27.1 8.2 45.4 8.4 43 0 71-21.2 71.2-54.1.2-41.5-57.6-43.9-57.2-62.5z"></path><linearGradient id="payment-option-visa-2" gradientUnits="userSpaceOnUse" x1="1.735" y1="1.33" x2="2.751" y2="1.33" gradientTransform="rotate(-20.218 -987.747 2450.033) scale(447.2655)"><stop offset="0" stop-color="#222357"></stop><stop offset="1" stop-color="#254aa5"></stop></linearGradient><path fill="url(#payment-option-visa-2)" d="M152.4 6l-42.7 107.5L92.4 22c-2-10.2-10-16-18.9-16H4l-1 4.5c14.3 3.1 30.5 8 40.3 13.4 6 3.3 7.7 5.9 9.8 13.7l32.6 125.9h43.2L195.1 6h-42.7z"></path><linearGradient id="payment-option-visa-3" gradientUnits="userSpaceOnUse" x1="1.736" y1="1.446" x2="2.75" y2="1.446" gradientTransform="rotate(-20.218 -987.747 2450.033) scale(447.2655)"><stop offset="0" stop-color="#222357"></stop><stop offset="1" stop-color="#254aa5"></stop></linearGradient><path fill="url(#payment-option-visa-3)" d="M212.7 6l-33.8 157.4h40.8L253.6 6z"></path><linearGradient id="payment-option-visa-4" gradientUnits="userSpaceOnUse" x1="1.736" y1="1.644" x2="2.751" y2="1.644" gradientTransform="rotate(-20.218 -987.747 2450.033) scale(447.2655)"><stop offset="0" stop-color="#222357"></stop><stop offset="1" stop-color="#254aa5"></stop></linearGradient><path fill="url(#payment-option-visa-4)" d="M476 6h-35.1c-8.1 0-14.3 4.4-17.3 11.4l-61.3 146.2h42.9l8.5-23.4h52.4l5 23.4H509L476 6zm-50.4 101.6l21.5-59.3 12.4 59.3h-33.9z"></path></svg>  <div className="text-muted mt-2"><div className="d-inline-block">Configure payment gateways and receive payments online.</div> <div id="ember626" className="ember-view d-inline-block"><span id="ember627" className="dropdown ember-view"><span id="ember628" className="dropdown-toggle no-caret ember-view text-blue cursor-pointer"> Set up Payment Gateway </span> <div id="ember629" className="dropdown-menu dropdown-menu-right ember-view paymentgw"> <div className="gw-list"> <h5>Configure and add more gateways from here!..</h5> <div className="flex-wrap-vcenter"> <div className="m-2" data-ember-action="" data-ember-action-632="632"> <div className="inv-gw"><div className="pmtgtw-icicieazypay"></div></div></div><div className="m-2" data-ember-action="" data-ember-action-635="635"> <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="-25 205.2 460 102.8" className="icon icon-landscape align-text-bottom cursor-pointer "><path fill="#29B7D6" d="M5.2 248.6l-18 11.8-12.2 27.5h12.6z"></path><path fill="#29B7D6" d="M13.6 229.5l-8.4 19.1 18.9-12.5L1 287.9h12.6l36.8-82.7z"></path><path fill="#0783B4" d="M5.2 248.6l-17.6 39.3H1l23.1-51.8z"></path><path fill="#2D2D2D" d="M79.1 287.9H61.7l-5.4-24.6h-6.9l-11 24.6H23.3l27.9-62.5h28.1c8.3 0 13.9 1 16.7 3 2.9 2 3.3 5.4 1.1 10.2l-4.9 11c-1.6 3.8-4.3 6.7-8 8.8-3.7 2-7.6 3.4-12 3.8l6.9 25.7zm-.1-41.4l2-4.5c1.1-2.3 1.1-3.9 0-4.8-1-.8-3.1-1.4-6.5-1.4H61.6l-7.7 17.4h12.9c3.5 0 6.1-.4 7.9-1.4 1.6-.8 3.1-2.5 4.3-5.3zm46.6 41.5h-13.7l1.9-4.2c-1.9 1.9-3.9 3.3-6.3 3.9-2.3.8-6 1.2-11.1 1.2-6.3 0-10.1-1-11.3-2.9-1.2-1.9-.4-6 2.3-12.1 2.4-5.6 5.3-9.4 8.3-11.6 3.1-2.2 7.3-3.3 12.8-3.3h15.8l1.4-3.1c1.2-2.9 1.5-4.8.5-5.7-1-1-3.5-1.4-7.7-1.4-3.9 0-9.7.4-16.9 1.1l3.9-8.8c5.6-.7 11.7-1 18.2-1 8.6 0 14.1 1.1 16.6 3.1 2.4 2 2.3 6.3-.5 12.4L125.6 288zm-8.8-12l4.1-9.1h-9.7c-3.1 0-5.2.4-6.3 1.1-1.1.7-2.3 2.6-3.7 5.7-1.4 3-1.8 4.9-1.2 5.4.5.7 2.4 1 5.7 1h3.5c.8 0 1.6-.1 2.6-.3s1.6-.3 2.2-.7c.5-.3 1-.7 1.5-1.2.5-.4.9-1 1.3-1.9zm56 12h-42l3.4-7.5 36.8-30h-22.6l4.1-9.1H193l-3.4 7.5-36.8 30h24.1l-4.1 9.1zm64.8-29.9l-6.1 13.7c-1.4 3-3 5.6-4.9 7.7-1.9 2.2-3.8 3.8-5.8 5-1.9 1.2-4.2 2-6.8 2.7s-4.9 1.1-6.8 1.2c-1.9.1-4.3.3-7.1.3s-5-.1-6.8-.3c-1.8-.1-3.7-.5-5.7-1.2s-3.4-1.5-4.3-2.7c-1-1.2-1.4-2.9-1.4-5 0-2.2.7-4.8 2-7.7l6.1-13.7c1.5-3.3 3.1-6 5.2-8.3s4.1-4.1 6-5.3c2-1.2 4.3-2.2 6.9-2.9 2.6-.7 4.9-1.1 6.8-1.2 1.9-.1 4.2-.3 6.8-.3s4.9.1 6.7.3c1.8.1 3.7.5 5.7 1.2s3.5 1.6 4.3 2.9c1 1.2 1.4 3 1.4 5.3 0 2.5-.7 5.2-2.2 8.3zm-20.9 15.5l7.9-17.7c1.1-2.4 1.2-4.3.4-5.3-.8-1.1-3.1-1.6-7.1-1.6-3.9 0-6.7.5-8.4 1.6-1.8 1.1-3.3 2.9-4.3 5.3l-7.9 17.7c-1.1 2.4-1.2 4.2-.4 5.2s3.3 1.5 7.1 1.5c3.9 0 6.7-.5 8.4-1.5 1.8-1.1 3.2-2.8 4.3-5.2zm60.5-21.6h-4.8c-3.8 0-7.1.5-9.5 1.8-2.4 1.2-4.3 3.3-5.7 6.1l-12.5 28h-14.1l20.8-46.6h13.5l-3.7 8.2c1.1-2.3 3.4-4.5 6.8-6.3 3.4-1.9 6.5-2.9 9.4-2.9h5l-5.2 11.7zm50.1 4.1l-6.8 15.4c-3.1 6.9-6.7 11.6-10.9 14-4.2 2.3-9.7 3.5-16.6 3.5-4.3 0-7.5-.4-9.4-1.1s-2.6-2.3-2.2-4.6l-11 24.7h-14.1l29.8-66.7h13.3l-2 4.6c1.8-2 4.1-3.5 6.9-4.3 2.9-.8 6.7-1.2 11.4-1.2 3.9 0 7.1.3 9.4 1 2.2.7 3.7 1.6 4.3 3.1.7 1.5.8 3 .4 4.8-.4 1.6-1.2 3.9-2.5 6.8zm-21.7 17.1l7.7-17.3c1.4-3 1.6-4.9.8-5.7-.8-.8-3.4-1.2-7.7-1.2-3.9 0-6.8.5-8.4 1.5-1.6 1.1-3 2.9-4.2 5.4l-7.7 17.3c-1.2 2.7-1.5 4.6-.7 5.6.7 1 3.1 1.4 7.3 1.4 4.1 0 7.1-.4 8.7-1.4 1.5-1 3-2.9 4.2-5.6zm56.5 14.8h-13.7l1.9-4.2c-1.9 1.9-3.9 3.3-6.3 3.9-2.3.8-6 1.2-11.1 1.2-6.3 0-10.1-1-11.3-2.9-1.2-1.9-.4-6 2.3-12.1 2.4-5.6 5.3-9.4 8.3-11.6 3.1-2.2 7.3-3.3 12.8-3.3h15.8l1.4-3.1c1.2-2.9 1.5-4.8.5-5.7-1-1-3.5-1.4-7.7-1.4-3.9 0-9.7.4-16.9 1.1l3.9-8.8c5.6-.7 11.7-1 18.2-1 8.6 0 14.1 1.1 16.6 3.1 2.4 2 2.3 6.3-.5 12.4L362.1 288zm-8.8-12l4.1-9.1h-9.7c-3.1 0-5.2.4-6.3 1.1-1.1.7-2.3 2.6-3.7 5.7-1.4 3-1.8 4.9-1.2 5.4.5.7 2.4 1 5.7 1h3.5c.8 0 1.6-.1 2.6-.3 1-.1 1.6-.3 2.2-.7.5-.3 1-.7 1.5-1.2.5-.4 1-1 1.3-1.9zm81.7-34.8l-55.3 66.7h-14.3l17.5-20.4 2-46.4h15.4l-4.2 33 24.2-33 14.7.1z"></path></svg> </span></div><div className="m-2" data-ember-action="" data-ember-action-638="638"> <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 176" className="icon icon-landscape align-text-bottom cursor-pointer "><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#1E398D" d="M2.7 35c0-3.5 2.4-5.3 5.3-5.3h51.7c15.9 1.8 26.9 9.9 28 31.1v28.7c0 4.3-.2 7.9-1.5 12-4.1 13.8-14 20.7-28.8 21.7H35.3v35.2c0 2.6-2.2 4-4.9 4H7.1c-2.8 0-4.9-1.6-4.9-4.8L2.7 35zm32.9 27.3h13.8c3.1 0 5.6 2.5 5.6 5.6v16.6c0 3.1-2.5 5.6-5.6 5.6H35.6V62.3zm77.7-32.5h36.1c21.2 1.2 32.6 12.3 32.3 35.4v85.3c0 6.6-6.7 11.6-12.4 11.6h-47.4c-14.4 0-23.9-11.2-26.2-22.2-2.3-10.5-.6-23.3-.6-34.1 0-16.6 11-33.1 29.4-33.1h19.3c5.6-.3 5.4-12.6 0-12.1h-30.1c-3.1 0-5.2-1.6-5.5-4.7V33.6c0-2.9 2.3-3.8 5.1-3.8zm19.9 73.8h11c2.6 0 4.7 2.1 4.7 4.7v19.2c0 2.6-2.1 4.7-4.7 4.7h-11a4.7 4.7 0 01-4.7-4.7v-19.2c0-2.6 2.1-4.7 4.7-4.7zm59.6-67.8v53.9c1.3 16.9 16.5 29.5 33 29.5H241c6.3 0 5.9 10.6 0 10.6h-33c-3.6 0-4.9 1.9-4.9 5v23.7c0 2.4 1.9 4.2 4.5 4.2h30.6c25.5 0 40-12.2 40-39.7V33.7c0-2.9-1.8-4-3.6-4H249c-2.4 0-3.8 2.6-3.8 4.5v49c0 2.1-1.2 3.3-3.1 3.3H230c-2.8 0-4.3-1.5-4.3-4.2V35c0-3.1-1.3-5.4-4.7-5.4h-24.7c-2.8-.1-3.5 2.7-3.5 6.2z"></path><path fill="#00AEEF" d="M291.1 58V34.7c0-2.5 2.1-4.6 4.5-4.6h5.6c14.4-3 17.9-11.5 26.7-21 5.4-5.9 10.2-7.4 13.7-1.2v22.2h13.2c2.5 0 4.5 2 4.5 4.6V58c0 2.5-2.1 4.5-4.5 4.5h-13.2V158c0 2.5-2 4.5-4.5 4.5h-23.3c-2.5 0-4.5-2-4.5-4.5V62.5h-13.6c-2.6 0-4.6-2-4.6-4.5zm165 98.5c0 3.1-2.6 5.6-5.7 5.6h-21.8c-3.1 0-5.7-2.5-5.7-5.6V68.8c.2-9.5-18.9-10.9-18.9 0v87.6c0 3.1-2.6 5.6-5.7 5.6h-21.8c-3.1 0-5.7-2.5-5.7-5.6V35c0-3.1 2.6-5.7 5.7-5.7h21.8c3.1 0 5.7 2.5 5.7 5.7v1.7c12.8-12.2 34.9-10.3 46.6 2.4 22.1-25.4 60.1-2.8 58.3 25.1 0 30.8-.3 61.3-.3 92.3 0 3.1-2.6 5.6-5.7 5.6h-21.8c-3.1 0-5.7-2.5-5.7-5.6v-87c-1.2-12.2-19.6-9.3-19.6 0 .1 28.8.3 57.8.3 87z"></path></g></svg> </span></div><div className="m-2" data-ember-action="" data-ember-action-641="641"> <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 246 60" className="icon icon-landscape align-text-bottom cursor-pointer "><path fill="#2790C3" d="M190.4 26.4c-.7 4.8-4.4 4.8-8 4.8h-2l1.4-9c.1-.5.6-.9 1.1-.9h.9c2.4 0 4.7 0 5.9 1.4.8.8 1 2 .7 3.7zm-1.5-12.6h-13.5c-.9 0-1.7.7-1.9 1.6L168.1 50c-.1.7.4 1.3 1.1 1.3h6.9c.6 0 1.2-.5 1.3-1.1l1.5-9.8c.1-.9.9-1.6 1.9-1.6h4.3c8.9 0 14-4.3 15.3-12.8.6-3.7 0-6.7-1.7-8.7-1.9-2.3-5.3-3.5-9.8-3.5z"></path><path fill="#27346A" d="M94.2 26.4c-.7 4.8-4.4 4.8-8 4.8h-2l1.4-9c.1-.5.6-.9 1.1-.9h.9c2.4 0 4.7 0 5.9 1.4.8.8 1 2 .7 3.7zm-1.5-12.6H79.2c-.9 0-1.7.7-1.9 1.6L71.9 50c-.1.7.4 1.3 1.1 1.3h6.4c.9 0 1.7-.7 1.9-1.6l1.5-9.3c.1-.9.9-1.6 1.9-1.6H89c8.9 0 14-4.3 15.3-12.8.6-3.7 0-6.7-1.7-8.7-2-2.3-5.4-3.5-9.9-3.5zm31.3 25c-.6 3.7-3.6 6.2-7.3 6.2-1.9 0-3.4-.6-4.3-1.7-1-1.1-1.3-2.7-1-4.5.6-3.7 3.6-6.2 7.2-6.2 1.8 0 3.3.6 4.3 1.8 1 1 1.4 2.7 1.1 4.4zm9-12.5h-6.5c-.6 0-1 .4-1.1.9l-.3 1.8-.5-.7c-1.4-2-4.5-2.7-7.6-2.7-7.1 0-13.2 5.4-14.4 13-.6 3.8.3 7.4 2.4 9.9 2 2.3 4.8 3.3 8.1 3.3 5.8 0 8.9-3.7 8.9-3.7l-.3 1.8c-.1.7.4 1.3 1.1 1.3h5.8c.9 0 1.7-.7 1.9-1.6l3.5-22.1c.2-.6-.3-1.2-1-1.2z"></path><path fill="#2790C3" d="M220.2 38.8c-.6 3.7-3.6 6.2-7.3 6.2-1.9 0-3.4-.6-4.3-1.7-1-1.1-1.3-2.7-1-4.5.6-3.7 3.6-6.2 7.2-6.2 1.8 0 3.3.6 4.3 1.8 1 1 1.4 2.7 1.1 4.4zm9-12.5h-6.5c-.6 0-1 .4-1.1.9l-.3 1.8-.5-.7c-1.4-2-4.5-2.7-7.6-2.7-7.1 0-13.2 5.4-14.4 13-.6 3.8.3 7.4 2.4 9.9 2 2.3 4.8 3.3 8.1 3.3 5.8 0 8.9-3.7 8.9-3.7L218 50c-.1.7.4 1.3 1.1 1.3h5.8c.9 0 1.7-.7 1.9-1.6l3.5-22.1c.1-.7-.4-1.3-1.1-1.3z"></path><path fill="#27346A" d="M167.4 26.3h-6.5c-.6 0-1.2.3-1.5.8l-9 13.2-3.8-12.7c-.2-.8-1-1.3-1.8-1.3h-6.4c-.8 0-1.3.8-1.1 1.5l7.1 21-6.7 9.5c-.5.7 0 1.8.9 1.8h6.5c.6 0 1.2-.3 1.5-.8L168.3 28c.5-.7 0-1.7-.9-1.7"></path><path fill="#2790C3" d="M236.8 14.8L231.2 50c-.1.7.4 1.3 1.1 1.3h5.6c.9 0 1.7-.7 1.9-1.6l5.5-34.6c.1-.7-.4-1.3-1.1-1.3H238c-.7 0-1.1.4-1.2 1"></path><path fill="#27346A" d="M25.5 57.5L27.3 46l.1-.6c.1-.6.4-1.1.8-1.4s1-.6 1.5-.6h1.4c2.4 0 4.6-.3 6.6-.8 2.1-.5 3.9-1.4 5.5-2.5 1.7-1.2 3.1-2.7 4.1-4.5 1.2-1.9 2-4.3 2.5-6.9.5-2.3.5-4.4.3-6.2-.3-1.9-1-3.5-2.2-4.8-.7-.8-1.6-1.5-2.6-2 .4-2.3.4-4.3 0-6C45 8 44.2 6.4 42.9 5 40.3 2 35.6.5 28.8.5H10.3c-.6 0-1.2.2-1.7.6-.5.4-.8 1-.9 1.6L.1 51.6c-.1.4 0 .9.3 1.2.3.3.7.5 1.2.5h11.5v.1l-.8 5c-.1.4.1.8.3 1.1.3.3.6.5 1 .5h9.6c.5 0 1.1-.2 1.5-.5.4-.4.7-.8.8-1.4v-.6"></path><path fill="#27346A" d="M19 15.7c.1-.8.6-1.4 1.3-1.7.3-.1.6-.2 1-.2h14.5c1.7 0 3.3.1 4.8.3.4.1.8.1 1.2.2l1.2.3c.2.1.4.1.5.2.7.2 1.4.5 2 .8.7-4.6 0-7.8-2.5-10.6C40.2 1.9 35.3.5 28.9.5H10.3c-1.3 0-2.4.9-2.6 2.2L0 51.6c-.2 1 .6 1.8 1.6 1.8H13l6-37.7"></path><path fill="#2790C3" d="M45.4 15.6c-.1.4-.1.7-.2 1.1-2.4 12.5-10.8 16.9-21.4 16.9h-5.4c-1.3 0-2.4.9-2.6 2.2l-3.6 22.6c-.1.8.5 1.6 1.4 1.6h9.6c1.1 0 2.1-.8 2.3-2l.1-.5L27.4 46l.1-.6c.2-1.1 1.1-2 2.3-2h1.4c9.3 0 16.6-3.8 18.8-14.7.9-4.6.4-8.4-1.9-11.1-.7-.8-1.6-1.4-2.7-2"></path><path fill="#1F264F" d="M42.9 14.6l-1.2-.3c-.4-.1-.8-.2-1.2-.2-1.5-.2-3.1-.3-4.8-.3H21.2c-.4 0-.7.1-1 .2-.7.3-1.2 1-1.3 1.7l-3.1 19.5-.1.6c.2-1.3 1.3-2.2 2.6-2.2h5.4c10.7 0 19-4.3 21.4-16.9.1-.4.1-.7.2-1.1-.6-.3-1.3-.6-2-.8 0-.1-.2-.1-.4-.2"></path></svg> </span></div><div className="m-2" data-ember-action="" data-ember-action-644="644"> <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 214.6 512 84.4" className="icon icon-landscape align-text-bottom cursor-pointer "><path fill="#231F20" d="M470.2 286.8h15.5v-42.4h16.8v-13.7h-49.2v13.6h16.8v42.5h.1zm-46.8 1c15.9 0 26.3-7.9 26.3-26v-31.1h-15.8v31.6c0 7.8-4.1 11.5-10.3 11.5-6.2 0-10.3-3.8-10.3-11.9v-31.2h-15.8v31.5c0 17.6 10 25.6 25.9 25.6m-61-13.9c-8.5 0-14.3-7.1-14.3-15.1v-.2c0-8.1 5.7-15 14.2-15 8.6 0 14.4 7 14.4 15.1v.2c0 8.1-5.7 15-14.3 15m-.1 14c17.3 0 30.3-13.1 30.3-29.1v-.2c0-16.1-12.8-29-30.1-29s-30.3 13.1-30.3 29.2v.2c-.1 16 12.8 28.9 30.1 28.9m-79.9-1.1h15.5v-14.5l5.7-6.3 14.1 20.8h18.7l-21.9-31.9 21.2-24.1h-18.4L298 253.5v-22.8h-15.5v56.1h-.1zm-29.1 1.1c12.4 0 19.5-5.4 24.8-12.7l-11.7-8.3c-3.4 4.1-6.8 6.8-12.6 6.8-7.8 0-13.4-6.6-13.4-15v-.1c0-8.2 5.5-14.8 13.4-14.8 5.4 0 9 2.6 12.3 6.6l11.7-9c-5-6.9-12.3-11.7-23.8-11.7-17 0-29.6 12.8-29.6 29.2v.2c0 16.6 12.9 28.8 28.9 28.8m-77.6-1.1h45.5v-13.2h-30.1v-8.9H218v-12.3h-26.9v-8.5h29.7v-13.2h-45.1v56.1zm-58.5 0h15.5v-21.3h19.9v21.3h15.5v-56.1h-15.5v21h-19.9v-21h-15.5v56.1zm-29.1 1.1c12.4 0 19.5-5.4 24.8-12.7l-11.7-8.3c-3.4 4.1-6.8 6.8-12.6 6.8-7.8 0-13.4-6.6-13.4-15v-.1c0-8.2 5.5-14.8 13.4-14.8 5.4 0 9 2.6 12.2 6.6l11.7-9c-5-6.9-12.3-11.7-23.8-11.7-17 0-29.6 12.8-29.6 29.2v.2c.1 16.6 13 28.8 29 28.8m-76.8-1.1h44.4v-12.7H32.5l9.6-6.7c8.3-6 13-10.7 13-19.6v-.2c0-10.6-8.4-17.9-20.7-17.9-10.9 0-16.8 4.2-22.8 12l10.5 8.7c4.4-5 7.4-7.2 11.1-7.2s6.2 2.2 6.2 5.7c0 3.4-2 6-7.2 10.1l-21 16v11.8h.1z"></path></svg> </span></div> </div> </div> </div> </span></div> </div> </p> <p> <!----> </p></div> */}
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <p>Preferences : </p>
          <p style={{ padding: "0 10px", color: " #879697" }}>
            Create Invoices as Drafts{" "}
          </p>
          <div style={{ cursor: "pointer" }}>
            <img
              src="/invoice3.svg"
              height="16px"
              width="16px"
              style={{ marginTop: "15px" }}
            ></img>
          </div>
        </div>
        <hr />
        {/* <div style={{ display: "flex", justifyContent: "space-around" }}> */}
        {/* <UploadSection/> */}
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ margin: "100px" }}>
                <h4>Terms & Conditions</h4>
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Enter the terms and conditions of your business to be displayed."
                  style={{ width: 500, height: 100 }}
                />
              </div> */}
        {/* <Stack direction="row" alignItems="center" spacing={2}>
                <label htmlFor="contained-button-file">
                  <p>Attach File(s) to Estimate</p>
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                  <p>You can upload a maximum of 5 files, 5MB each</p>
                </label>
              </Stack> */}
        {/* </div> */}
        {/* <div className="text-muted mb-7">
            {" "}
            <b>Additional Fields:</b>
            Start adding custom fields for your {props.additional} by going to{" "}
            <b>
              <i>Settings &gt; Preferences &gt; {props.additional}</i>
            </b>{" "}
          </div>{" "} */}
        <div className="txn-creation-column">
          <div className="btn-toolbar fixed-actions">
            {/* <button
                className="btn btn-secondary"
                data-ember-action=""
                data-ember-action-1448="1448"
              >
                Save as Draft
              </button> */}
            <button
              id="ember1447"
              className="btn btn-primary ember-view"
              type="submit"
            >
              {" "}
              <Link href="/pdfpage">
                <a onClick={customHandleClick}>Save</a>
              </Link>{" "}
            </button>
            &nbsp;
            <button
              className="btn btn-secondary"
              data-ember-action=""
              data-ember-action-1448="1448"
            >
              Cancel
            </button>
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}
