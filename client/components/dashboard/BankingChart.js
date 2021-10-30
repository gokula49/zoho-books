import React, { Component } from 'react';
// Import fusioncharts.js files from fusioncharts module
import FusionCharts from 'fusioncharts';
// Import the timeseries file from fusioncharts module
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
// Import ReactFusioncharts from react-fusioncharts module
// import ReactFC from 'react-fusioncharts';
import ReactFC from 'react-fusioncharts';

// Add core FusionCharts module and TimeSeries module as dependecies in react-fusioncharts
ReactFC.fcRoot(FusionCharts, TimeSeries);

const jsonify = res => res.json();
// This is the remote url to fetch the data.
const dataFetch = [
  [
    "2016-01-01",
    "5k"
  ],
  [
    "2016-01-02",
    "10k"
  ],
  [
    "2016-01-03",
    "19k"
  ],
  [
    "2016-01-04",
    74
  ],
  [
    "2016-01-05",
    81
  ],
  [
    "2016-01-06",
    48
  ],
  [
    "2016-01-07",
    60
  ],
  [
    "2016-01-08",
    18
  ],
  [
    "2016-01-09",
    36
  ],
  
]
// This is the remote url to fetch the schema.
const schemaFetch = [
  {
    "name": "Time",
    "type": "date",
    "format": "%Y-%m-%d"
  },
  {
    "name": "Cash in Hand",
    "type": "number",
    "numberSuffix": "K",

  }
]

class ColumnChartTimeAxis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Here timeseriesDs is the configuration object which we will pass as a prop to our ReactFC component.


   

      timeseriesDs: {
        type: 'timeseries',
        renderAt: 'container',
        width: '1000',
        height: '500',
        dataSource: {
          chart: {
            numberSuffix: "K",

            showLegend: 0
          },
          caption: {
            text: 'Hide Chart ⬇'
          },
          yAxis: [
            {
              plot: {
                value: 'Daily Visitors',
                type: 'column'
              },
              title: 'Daily Visitors (in thousand)'
            }
          ],
          // Initially data is set as null
          data: null
        }
      }
    };

    // In this method we will create our DataStore and using that we will create a custom DataTable which takes two
    // parameters, one is data another is schema. Check the method definition to get more info.
    this.createDataTable = this.createDataTable.bind(this);
  }

  createDataTable() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      // First we are creating a DataStore
      const fusionDataStore = new FusionCharts.DataStore();
      // After that we are creating a DataTable by passing our data and schema as arguments
      const fusionTable = fusionDataStore.createDataTable(data, schema);
      // Afet that we simply mutated our timeseries datasource by attaching the above
      // DataTable into its data property.
      const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
      timeseriesDs.dataSource.data = fusionTable;
      this.setState({
        timeseriesDs
      });
    });
  }

  // We are creating the DataTable immidietly after the component is mounted
  componentDidMount() {
    this.createDataTable();
  }

  render() {
    return (
      <div className="App">
        <ReactFC {...this.state.timeseriesDs} />
      </div>
    );
  }
}

export default ColumnChartTimeAxis;