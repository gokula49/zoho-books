import SearchIcon from "@mui/icons-material/Search";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Link,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Select,
  Stack,
  Toolbar,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Estimates from "../services/Estimates";
import Invoices from "../services/Invoices";
import Sales from "../services/Sales";

const template = {
  name: "",
  quantity: 1,
  amount: 0,
  // discount: 0,
  // rate: 0,
};
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

export default function Form(props) {
  const [products, setProducts] = useState([template]);

  const [total, setTotal] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (props.title === "New Estimate" || props.title === "New Sales Order") {
      let data = {
        customer: e.target.elements.customer.value,
        reference: e.target.elements.reference.value,
        estimate_date: e.target.elements.estimate_date.value,
        expiry_date: e.target.elements.expiry_date.value,
        sales_person: e.target.elements.sales_person.value,
        project_name: e.target.elements.project_name.value,
        terms: e.target.elements.terms.value,
        customer_notes: e.target.elements.customer_notes.value,
        items: [...products],
        total: total,
      };
      if (props.title === "New Estimate") {
        await Estimates.addEstimate(data);
      } else if (props.title === "New Sales Order") {
        await Sales.addSales(data);
      }
    } else {
      let data = {
        customer: e.target.elements.customer.value,
        order_no: e.target.elements.order_no.value,
        invoice_date: e.target.elements.estimate_date.value,
        due_date: e.target.elements.expiry_date.value,
        sales_person: e.target.elements.sales_person.value,
        project_name: e.target.elements.project_name.value,
        terms: e.target.elements.terms.value,
        customer_notes: e.target.elements.customer_notes.value,
        items: [...products],
        total: total,
      };
      console.log(data);
      await Invoices.addInvoice(data);
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

  const handleChangeSelect = (e, index) => {
    let temp = products;
    temp[index]["name"] = props.items[e.target.value]["name"];
    temp[index]["amount"] = props.items[e.target.value]["selling_price"];
    temp[index]["quantity"] = 1;
    setProducts([...temp]);
    console.log(temp);
  };

  const handleChange = (e, index) => {
    if (e.target.name === "quantity" && e.target.value !== "") {
      let temp = products;
      temp[index]["amount"] =
        e.target.value *
        (temp[index]["amount"] / parseInt(temp[index]["quantity"]));
      temp[index][e.target.name] = e.target.value;

      setProducts([...temp]);
    }
    if (e.target.name !== "quantity") {
      let temp = products;
      temp[index]["amount"] =
        e.target.value *
        (temp[index]["amount"] / parseInt(temp[index]["quantity"]));
      temp[index][e.target.name] = e.target.value;
      setProducts([...temp]);
    }
    let tempTotal = 0;
    for (let i in products) {
      tempTotal += products[i].amount;
    }
    setTotal(tempTotal);
  };

  return (
    <div style={{ width: "10%" }}>
      <div className="column content-column">
        <h3 style={{ paddingTop: "20px" }}>{props.title} </h3>
        <div className="scroll-y noscroll-x fill body scrollbox">
          {/* <form className="item-creation" onSubmit={handleSubmit}> */}
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
                    {props.title === "New Estimate" ? (
                      <label className="col-lg-3 col-form-label required">
                        Estimate#
                      </label>
                    ) : props.title === "New Sales Order" ? (
                      <label className="col-lg-3 col-form-label required">
                        Sale Order#
                      </label>
                    ) : (
                      <label className="col-lg-3 col-form-label required">
                        Invoice#
                      </label>
                    )}

                    <div className="col-lg-8" style={{ display: "flex" }}>
                      <input
                        disabled
                        id="outlined-basic"
                        label="Estimate"
                        name="estimate"
                        value="AAA-0000 - Auto generated"
                        style={{ width: 500 }}
                      ></input>
                      <div></div>
                    </div>
                  </div>
                  {props.title === "New Estimate" ||
                  props.title === "New Sales Order" ? (
                    <div className="row form-group">
                      <label className="col-lg-3 col-form-label ">
                        Reference#
                      </label>
                      <div className="col-lg-8" style={{ display: "flex" }}>
                        <input
                          id="outlined-basic"
                          label="Reference#"
                          name="reference"
                          style={{ width: 500 }}
                        ></input>
                        <div></div>
                      </div>
                    </div>
                  ) : (
                    <div className="row form-group">
                      <label className="col-lg-3 col-form-label ">
                        Order Number
                      </label>
                      <div className="col-lg-8" style={{ display: "flex" }}>
                        <input
                          id="outlined-basic"
                          label="Order Number"
                          name="order_no"
                          style={{ width: 500 }}
                        ></input>
                      </div>
                    </div>
                  )}

                  <div style={{ display: "flex" }}>
                    <div className="row form-group">
                      {props.title === "New Estimate" ||
                      props.title === "New Sales Order" ? (
                        <label className="col-lg-3 col-form-label required">
                          Estimate Date
                        </label>
                      ) : (
                        <label className="col-lg-3 col-form-label required">
                          Invoice Date
                        </label>
                      )}
                      <div className="col-lg-8" style={{ display: "flex" }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <input
                            label="14 Oct 2021"
                            style={{ width: 500 }}
                            name="estimate_date"
                            type="date"
                          />
                        </LocalizationProvider>
                        <div></div>
                      </div>
                    </div>

                    <div className="row form-group">
                      {props.title === "New Estimate" ||
                      props.title === "New Sales Order" ? (
                        <label className="col-lg-3 col-form-label required">
                          Expiry Date
                        </label>
                      ) : (
                        <label className="col-lg-3 col-form-label required">
                          Due Date
                        </label>
                      )}
                      <div className="col-lg-8" style={{ display: "flex" }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <input
                            label="DD MMM YYYY"
                            name="expiry_date"
                            type="date"
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
                      <select
                        id="outlined-select-currency"
                        select
                        label="Select Salesperson"
                        name="sales_person"
                        style={{ width: 500 }}
                      >
                        {currencies.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            {option.label + " --dummy data"}
                          </option>
                        ))}
                      </select>
                      <div></div>
                    </div>
                  </div>

                  <div className="row form-group">
                    <label className="col-lg-3 col-form-label ">
                      Project Name
                    </label>
                    <div className="col-lg-8" style={{ display: "flex" }}>
                      <select
                        id="outlined-select-currency"
                        select
                        label="Select Project Name"
                        name="project_name"
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
                        {currencies.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            {option.label + " --dummy data"}
                          </option>
                        ))}
                      </select>
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
              <div className="col-lg-6"> </div>{" "}
              <div className="col-lg-6"> </div>{" "}
            </div>{" "}
          </div>{" "}
          <hr />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              // width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            {" "}
            <Toolbar />
            <div
            // className={classNamees.paper}
            >
              <h2>Price List</h2>
              <Grid container spacing={2}>
                {products.map((item, index) => {
                  return (
                    <>
                      <Grid item xs={3} sm={3}>
                        <FormControl
                          variant="outlined"
                          // className={classNamees.formControl}
                          fullWidth
                        >
                          <InputLabel>Item Details</InputLabel>
                          <Select
                            native
                            onChange={(e) => handleChangeSelect(e, index)}
                            label="Item Details"
                            name="itemId"
                            inputProps={{
                              name: "itemId",
                              id: "outlined-age-native-simple",
                            }}
                          >
                            <option value="select" defaultChecked>
                              Select
                            </option>
                            {props.items.map((val, index) => (
                              <option value={index}>{val.name}</option>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={2} sm={2}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          type="number"
                          id="quantity"
                          onChange={(e) => handleChange(e, index)}
                          label="Quantity"
                          name="quantity"
                        />
                      </Grid>

                      <Grid item xs={1} sm={1}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="rate"
                          // onChange={(e) => handleChange(e, index)}
                          label="Rate"
                          name="rate"
                        />
                      </Grid>

                      <Grid item xs={1} sm={1}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="discount"
                          // onChange={(e) => handleChange(e, index)}
                          label="Discount"
                          name="discount"
                        />
                      </Grid>

                      <Grid item xs={1} sm={1}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          id="tax"
                          // onChange={(e) => handleChange(e, index)}
                          label="Tax"
                          name="tax"
                        />
                      </Grid>

                      <Grid item xs={2} sm={2}>
                        <TextField
                          variant="outlined"
                          fullWidth
                          InputLabelProps={{ shrink: true }}
                          value={products[index].amount}
                          id="amount"
                          onChange={(e) => handleChange(e, index)}
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
              <Button
                variant="contained"
                color="secondary"
                onClick={addFields}
                //   className={classNamees.submit}
              >
                Add
              </Button>
              <hr />
            </div>
          </Box>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ margin: "100px" }}>
              <h4>Customer Notes</h4>
              <textarea
                aria-label="empty textarea"
                placeholder="Looking forward for your business."
                style={{ width: 500, height: 100 }}
                name="customer_notes"
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
                      <div className="total-amount"> {total} </div>
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
                        <span> {total} </span>
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
                        <div
                          className="total-amount"
                          style={{ lineHeight: "2" }}
                        >
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
                    <div className="total-amount "> {total} </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ margin: "100px" }}>
                <h4>Terms & Conditions</h4>
                <textarea
                  aria-label="empty textarea"
                  placeholder="Enter the terms and conditions of your business to be displayed."
                  style={{ width: 500, height: 100 }}
                  name="terms"
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
          <div className="text-muted mb-7">
            {" "}
            <b>Additional Fields:</b>
            Start adding custom fields for your estimates by going to{" "}
            <b>
              <i>Settings &gt; Preferences &gt; {props.additional}</i>
            </b>{" "}
          </div>{" "}
          <div className="txn-creation-column">
            <div className="btn-toolbar fixed-actions">
              {props.title === "New Estimate" ? (
                <Button
                  variant="contained"
                  color="success"
                  component={Link}
                  href="/estimate"
                >
                  Go back
                </Button>
              ) : props.title === "New Sales Order" ? (
                <Button
                  variant="contained"
                  color="success"
                  component={Link}
                  href="/sales"
                >
                  Go back
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="success"
                  component={Link}
                  href="/invoices"
                >
                  Go back
                </Button>
              )}
              &nbsp;
              <button
                id="ember1447"
                className="btn btn-primary ember-view"
                type="submit"
              >
                Save
              </button>
              &nbsp;
              <Link href="/pdf">
                <Button color="success" variant="contained">
                  Generate PDF
                </Button>
              </Link>
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
    </div>
  );
}
