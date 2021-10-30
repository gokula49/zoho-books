import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Items from "../services/Items";
import "bootstrap/dist/css/bootstrap.min.css";
export default function AddItem() {
  const customHandleClick = async (e) => {
    e.preventDefault();
    // const data = new FormData(event.currentTarget);
    let data = {
      unit: e.target.elements.unit.value,
      name: e.target.elements.name.value,
      type: e.target.elements.productType.value,
      selling_price: e.target.elements.selling_price.value,
      selling_description: e.target.elements.selling_description.value,
      purchase_price: e.target.elements.purchase_price.value,
      purchase_description: e.target.elements.purchase_description.value,
    };
    console.log(data);
    let res = await Items.addItem(data);
    console.log(res);

    // if (res.data.success) {
    //   window.location.replace("/items");
    // }
  };

  return (
    <div>
      <div className="column content-column">
        <div className="fill header">
          <h3 className="float-left">New Item. </h3>
        </div>
        <div className="scroll-y noscroll-x fill body scrollbox">
          <form className="item-creation" onSubmit={customHandleClick}>
            <div
              tabIndex="-1"
              id="ember1428"
              className="no-outline ember-view"
            ></div>
            <div className="primary-info grey-bg">
              <div className="item-new">
                <div className="row">
                  <div className="col-lg-8">
                    <fieldset className="form-group">
                      <div className="row">
                        <legend className="col-lg-3 pt-0 col-form-label">
                          Type
                          <i
                            id="ember1429"
                            className="tooltip-container ember-view"
                          >
                            <HelpOutlineOutlinedIcon sx={{ fontSize: 15 }} />
                          </i>
                        </legend>
                        <div className="col-lg-8">
                          <div className="form-check form-check-inline">
                            <input
                              name="productType"
                              id="acd24c0f6"
                              className="ember-view form-check-input"
                              type="radio"
                              value="goods"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="acd24c0f6"
                            >
                              Goods
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              name="productType"
                              id="a7da477be"
                              className="ember-view form-check-input"
                              type="radio"
                              value="service"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="a7da477be"
                            >
                              Service
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div className="row form-group">
                      <label className="col-lg-3 col-form-label required">
                        Name
                      </label>
                      <div className="col-lg-8">
                        <input
                          name="name"
                          id="ember1430"
                          className="ember-text-field ember-view form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="row form-group">
                      <label className="col-lg-3 col-form-label">
                        <span>Unit</span>
                        <i
                          id="ember1431"
                          className="tooltip-container ember-view"
                        >
                          <HelpOutlineOutlinedIcon sx={{ fontSize: 15 }} />
                        </i>
                      </label>
                      <div className="col-lg-8">
                        <div id="ember1432" className="type-ahead ember-view">
                          <div
                            id="ember1433"
                            className="dropdown show ac-dropdown ember-view"
                          >
                            {" "}
                            <div
                              className="auto-select ac-selected"
                              tabIndex="-1"
                            >
                              <div
                                className="ember-text-field form-control ac-search-txt ember-view"
                                placeholder="Select or Type to add"
                              >
                                <select
                                  className="value"
                                  name="unit"
                                  style={{
                                    width: "350px",
                                    padding: "1px 12px",
                                    margin: "0px 0px 2px",
                                  }}
                                >
                                  <option value="" disabled>
                                    Select or Type to add
                                  </option>
                                  <option value="Box">Box</option>
                                  <option value="cm">cm</option>
                                  <option value="ft">ft</option>
                                  <option value="ib">ib</option>
                                  <option value="ft">ft</option>
                                  <option value="kg">kg</option>
                                  <option value="cm">cm</option>
                                  <option value="sales">sales</option>
                                </select>
                              </div>

                              <i className="zf-ac-toggler"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="zb-txn-form item-new">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group d-flex">
                    <div className=" form-check form-check-inline font-large">
                      <input
                        id="a5b22756b"
                        className="ember-checkbox ember-view form-check-input"
                        type="checkbox"
                      />
                      <label className="form-check-label" htmlFor="a5b22756b">
                        Sales Information
                      </label>
                    </div>
                  </div>
                  <div className="row form-group">
                    <label className="col-form-label col-lg-4">
                      <span
                        id="ember1435"
                        className="tooltip-container text-dashed-underline ember-view"
                      >
                        <span className="required">Selling Price</span>
                      </span>
                    </label>
                    <div className="col-lg-8">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">INR</span>
                        </div>
                        <input
                          id="ember1436"
                          className="ember-text-field text-left ember-view form-control"
                          type="text"
                          name="selling_price"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <label className="col-form-label required col-lg-4">
                      <span
                        id="ember1437"
                        className="tooltip-container text-dashed-underline ember-view"
                      >
                        Account
                      </span>
                    </label>
                    <div className="col-lg-8">
                      <div
                        id="ember1438"
                        className="accounts-select ember-view"
                      >
                        <div id="ember1439" className="ember-view">
                          <div className="ac-box ">
                            <span
                              className="ac-selected form-control "
                              tabIndex="0"
                            >
                              <span data-integrity-label="">
                                {" "}
                                <select
                                  className="value"
                                  name="sale_account"
                                  style={{
                                    width: "200px",
                                    padding: "1px 12px",
                                    margin: "0px 0px 2px",
                                  }}
                                >
                                  <option
                                    value=""
                                    disabled
                                    style={{ width: "250px" }}
                                  >
                                    Select or Type to add
                                  </option>
                                  <option value="Discount">Discount</option>
                                  <option value="General Income">
                                    General Income
                                  </option>
                                  <option value="Interest Income">
                                    Interest Income
                                  </option>
                                  <option value="Late Fee Income">
                                    Late Fee Income
                                  </option>
                                  <option value="Other Charges">
                                    Other Charges
                                  </option>
                                  <option value="Sales">Sales</option>
                                  <option value="Shipping Charges">
                                    Shipping Charges
                                  </option>
                                </select>
                              </span>
                              <div>
                                <i className="zf-ac-toggler"></i>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <label className="col-form-label col-lg-4">
                      {" "}
                      Description{" "}
                    </label>{" "}
                    <div className="col-lg-8">
                      <textarea
                        id="ember1440"
                        className="ember-text-area ember-view form-control"
                        name="selling_description"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group d-flex">
                    <div className=" form-check form-check-inline font-large">
                      <input
                        id="a6174bb90"
                        className="ember-checkbox ember-view form-check-input"
                        type="checkbox"
                      />
                      <label className="form-check-label" htmlFor="a6174bb90">
                        Purchase Information
                      </label>
                    </div>
                  </div>
                  <div className="row form-group">
                    <label className="col-form-label col-lg-4 required">
                      <span
                        id="ember1441"
                        className="tooltip-container text-dashed-underline ember-view"
                      >
                        Cost Price
                      </span>
                    </label>
                    <div className="col-lg-8">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">INR</span>
                        </div>
                        <input
                          id="ember1442"
                          className="ember-text-field text-left ember-view form-control"
                          type="text"
                          name="purchase_price"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <label className="col-form-label col-lg-4 required">
                      <span
                        id="ember1443"
                        className="tooltip-container text-dashed-underline ember-view"
                      >
                        Account
                      </span>
                    </label>
                    <div className="col-lg-8">
                      <div
                        id="ember1444"
                        className="accounts-select ember-view"
                      >
                        <div id="ember1445" className="ember-view">
                          <div className="ac-box ">
                            <span
                              className="ac-selected form-control "
                              tabIndex="0"
                            >
                              <span data-integrity-label="">
                                <select
                                  className="value "
                                  name="purchase_account"
                                  style={{
                                    width: "200px",
                                    padding: "1px 12px",
                                    margin: "0px 0px 2px",
                                    // padding:"9px 10px 0px 20px",
                                    //  marginRight:"7px",
                                    // // marginTop:"-10px"
                                  }}
                                >
                                  <option
                                    value=""
                                    disabled
                                    // style={{ width: "200px" }}
                                  >
                                    Select or Type to add
                                  </option>
                                  <option value="Cost of Goods Sold">
                                    Cost of Goods Sold
                                  </option>
                                  <option value="Advertising and Marketing">
                                    Advertising and Marketing
                                  </option>
                                  <option value="Automobile Expense">
                                    Automobile Expense
                                  </option>
                                  <option value="Bad Debt">Bad Debt</option>
                                  <option value="Bank Fees and Charges">
                                    Bank Fees and Charges
                                  </option>
                                  <option value="Consultant Expenses">
                                    Consultant Expenses
                                  </option>
                                  <option value="Contract Assests">
                                    Contract Assests
                                  </option>
                                  <option value="Credit Card Charges">
                                    Credit Card Charges
                                  </option>
                                  <option value="Depreciation and Amortisation">
                                    Depreciation and Amortisation
                                  </option>
                                  <option value="Depreciation Expense">
                                    Depreciation Expense
                                  </option>
                                  <option value="IT and Internet Expense">
                                    IT and Internet Expense
                                  </option>
                                  <option value="Janitorial Expenses">
                                    Janitorial Expenses
                                  </option>
                                  <option value="Lodging">Lodging</option>
                                  <option value="Meals and Entertainment">
                                    Meals and Entertainment
                                  </option>
                                  <option value="Office Supplies">
                                    Office Supplies
                                  </option>
                                  <option value="Other Expenses">
                                    Other Expenses
                                  </option>
                                  <option value="Postage">Postage</option>
                                  <option value="Printing and Stationery">
                                    Printing and Stationery
                                  </option>
                                  <option value="Purchase Discounts">
                                    Purchase Discounts
                                  </option>
                                  <option value="Raw materials and Consumables">
                                    Raw materials and Consumables
                                  </option>
                                  <option value="Rent Expenses">
                                    Rent Expenses
                                  </option>
                                  <option value="Repair and Maintanence">
                                    Repair and Maintanence
                                  </option>
                                  <option value="Salaries and Employee Wages">
                                    Salaries and Employee Wages
                                  </option>
                                  <option value="Telephone Expenses">
                                    Telephone Expenses
                                  </option>
                                  <option value="Transporation Expenses">
                                    Transporation Expenses
                                  </option>
                                  <option value="Travel Expenses">
                                    Travel Expenses
                                  </option>
                                  <option value="Job Costing">
                                    Job Costing
                                  </option>
                                  <option value="Labor">Labor</option>
                                  <option value="Materials">Materials</option>
                                  <option value="Subcontractor">
                                    Subcontractor
                                  </option>
                                </select>
                              </span>
                              <div>
                                <i className="zf-ac-toggler"></i>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row form-group">
                    <label className="col-form-label col-lg-4">
                      Description
                    </label>{" "}
                    <div className="col-lg-8">
                      <textarea
                        id="ember1446"
                        className="ember-text-area ember-view form-control"
                        name="purchase_description"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="text-muted mb-7">
              Do you want to keep track of this item? <b>Enable Inventory</b>
              to view its stock based on the sales and purchase transactions you
              record for it. Go to
              <b>
                <i>Settings &gt; Preferences &gt; Items</i>
              </b>
              and enable inventory.
            </div>

            
            <div className="txn-creation-column">
              <div className="btn-toolbar fixed-actions">
                <button
                  id="ember1447"
                  className="btn btn-primary ember-view"
                  type="submit"
                >
                  {/* 
                  <Link href="/addItem">
                    <a onClick={customHandleClick}>Save </a>
                  </Link> */}
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
                <div  className="goback">
                <Link href="/items">
                  
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
