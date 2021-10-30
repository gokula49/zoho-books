import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

import { useState } from "react";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import { InputLabel, Select } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

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

export default function AddInvoice(props) {
  const customHandleClick = () => {};

  const [currency, setCurrency] = React.useState("Select Cusomer");
  const [fruit, setFruit] = React.useState("Apple");
  const [value, setValue] = React.useState(null);
  const [age, setAge] = React.useState("");

  const handleChanged = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
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
        <h3 className="float-left">
          <img
            src="file-invoice-solid.svg"
            style={{ width: "20px", margin: "0px 8px" }}
          />
          New Invoice{" "}
        </h3>
        <span
          className="close-details close-details-header float-right"
          data-ember-action=""
          data-ember-action-1427="1427"
        >
          <CloseIcon sx={{ fontSize: 30 }} />
        </span>
      </div>
      <div className="scroll-y noscroll-x fill body scrollbox">
        {/* <form className="item-creation" autocomplete="off"> */}
        <div
          tabIndex="-1"
          id="ember1428"
          className="no-outline ember-view"
        ></div>
        <div className="primary-info grey-bg">
          <div className="item-new">
            <div className="row">
              <div className="col-lg-16">
                <div className="row form-group">
                  <label className="col-lg-3 col-form-label required">
                    Customer Name
                  </label>
                  <div className="col-lg-8" style={{ display: "flex" }}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Select Customer"
                      value={currency}
                      onChange={handleChange}
                      helperText="Select Customer"
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
                    Invoice#
                  </label>
                  <div className="col-lg-8" style={{ display: "flex" }}>
                    <TextField
                      id="outlined-basic"
                      label="Estimate"
                      value="EST-0000"
                      style={{ width: 500 }}
                    ></TextField>
                    <div></div>
                  </div>
                </div>

                <div className="row form-group">
                  <label className="col-lg-3 col-form-label ">
                    Order Number
                  </label>
                  <div className="col-lg-8" style={{ display: "flex" }}>
                    <TextField
                      id="outlined-basic"
                      label="Reference#"
                      value=""
                      style={{ width: 500 }}
                    ></TextField>
                    <div></div>
                  </div>
                </div>

                <div style={{ display: "flex" }}>
                  <div className="row form-group">
                    <label className="col-lg-3 col-form-label required">
                      Invoice Date
                    </label>
                    <div className="col-lg-8" style={{ display: "flex" }}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="14 Oct 2021"
                          value={value}
                          style={{ width: 700 }}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                      <div></div>
                    </div>
                  </div>

                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Terms"
                    placeholder="Due on Receipt"
                    value={currency}
                    onChange={handleChange}
                    // helperText="Due on Receipt"
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

                  <div
                    className="row form-group"
                    style={{ margin: "0px 20px" }}
                  >
                    <label className="col-lg-3 col-form-label">Due Date</label>
                    <div className="col-lg-8" style={{ display: "flex" }}>
                      <LocalizationProvider
                        helperText="Due Date"
                        dateAdapter={AdapterDateFns}
                      >
                        <DatePicker
                          label="DD MMM YYYY"
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
                    Salesperson
                  </label>
                  <div className="col-lg-8" style={{ display: "flex" }}>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Select Salesperson"
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
                    <div></div>
                  </div>
                </div>

                <div className="row form-group">
                  <label className="col-lg-3 col-form-label ">Subject</label>
                  <div className="col-lg-8" style={{ display: "flex" }}>
                    <TextareaAutosize
                      id="outlined-select-currency"
                      select
                      label="Let your customer know what invoice is for"
                      value={currency}
                      onChange={handleChange}
                      variant="outlined"
                      style={{ width: 500 }}
                    ></TextareaAutosize>
                    <div></div>
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
                        <button
                          style={{ marginTop: "1px" }}
                          variant="contained"
                          color="error"
                          onClick={() => deleteFields(index)}
                        >
                          Delete
                        </button>
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
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ margin: "100px" }}>
            <h4>Customer Notes</h4>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder=" Thanks for your business."
              style={{ width: 500, height: 100 }}
            />
          </div>

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
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {/* <UploadSection/> */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ margin: "100px" }}>
              <h4>Terms & Conditions</h4>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Enter the terms and conditions of your business to be displayed."
                style={{ width: 500, height: 100 }}
              />
            </div>
            <Stack direction="row" alignItems="center" spacing={2}>
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
            </Stack>
          </div>
        </div>
        <div>
          Want to get paid faster?{" "}
          <img
            style={{ width: "50px" }}
            src="https://i.pinimg.com/originals/54/e3/0e/54e30edf9d8e3f86b1935d5d3d1317d8.png"
          />
        </div>
        <p>
          Configure payment gateways and receive payments online. Set up Payment
          Gateway
        </p>
        <div className="text-muted mb-7">
          {" "}
          <b>Additional Fields:</b>
          Start adding custom fields for your Invoices by going to{" "}
          <b>
            <i>Settings &gt; Preferences &gt; Invoices</i>
          </b>{" "}
        </div>{" "}
        <div className="txn-creation-column">
          <div className="btn-toolbar fixed-actions">
            <button
              className="btn btn-secondary"
              data-ember-action=""
              data-ember-action-1448="1448"
            >
              Save as Draft
            </button>
            <button
              id="ember1447"
              className="btn btn-primary ember-view"
              type="submit"
            >
              {" "}
              <Link href="/pdfpage">
                <a onClick={customHandleClick}>Save and Send </a>
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
            <Link href="/invoices">
                <button
                  id="ember1447"
                  className="btn btn-primary ember-view"
                  type="submit"
                >
               
                    <a >Go back </a>
                  
                  
                </button>
                </Link>
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}
