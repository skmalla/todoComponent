import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import "./Todo.css";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Collapsible from "./Collapsible/Collapsible";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: 0,
    padding: "10px",
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    button: {
      textTransform: "none",
      border: 0,
    },
  },
});

const Todo = (props) => {
  const [processArr, setProcessArr] = useState([]);

  const processes = [
    { processName: "Regulator", processForm: "Regulator Process Form" },
    {
      processName: "Financial Institution",
      processForm: "Financial Institution Process Form",
    },
    {
      processName: "Document Listing",
      processForm: "Document Listing Process Form",
    },
    {
      processName: "Internal Process",
      processForm: "Internal Process Process Form",
    },
    {
      processName: "Outsourced Process",
      processForm: "Outsourced Process Process Form",
    },
    { processName: "Products", processForm: "Products Process Form" },
    {
      processName: "Business Units",
      processForm: "Business Units Process Form",
    },
  ];

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function getHCComponents() {
    return (
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='scrollable'
            scrollButtons='off'
            aria-label='scrollable auto tabs example'
            TabIndicatorProps={{
              style: {
                background: "#30c7ed",
              },
            }}
          >
            {processes.map((row, index) => (
              <Tab
                label={row.processName}
                key={row.processName}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
          {processes.map((row, index) => (
            <TabPanel value={value} index={index} key={row.processName}>
              {/* Tab Data comes over here {props.header} and {row.processName} */}
              <form
                method='post'
                name='userRegistrationForm'
                //onSubmit={this.submituserRegistrationForm}
              >
                <div className='row1'>
                  <div className='form'>
                    <div className='form-group'>
                      <label>
                        Code <b>*</b>
                      </label>
                      <input type='text' className='form-control mandatory' />
                    </div>
                    <div className='m-2'>
                      <label>View/Upload Documents</label>
                      <input type='file' className='custom_file_type' />
                    </div>
                    <div className='form-group'>
                      <label>Textarea</label>
                      <textarea rows='5' className='form-control'></textarea>
                    </div>
                    <div className='form-group'>
                      <label>Custom Checkboxes</label>
                      <label className='checkbox_container'>
                        One
                        <input type='checkbox' />
                        <span className='checkmark'></span>
                      </label>
                      <label className='checkbox_container'>
                        Two
                        <input type='checkbox' />
                        <span className='checkmark'></span>
                      </label>
                      <label className='checkbox_container'>
                        Three
                        <input type='checkbox' />
                        <span className='checkmark'></span>
                      </label>
                      <label className='checkbox_container'>
                        Four
                        <input type='checkbox' />
                        <span className='checkmark'></span>
                      </label>
                    </div>
                    <div className='form-group'>
                      <label>Months</label>
                      <select>
                        <option value='1'>January</option>
                        <option value='2'>February</option>
                        <option value='3'>March</option>
                        <option value='4'>April</option>
                        <option value='5'>May</option>
                        <option value='6'>June</option>
                        <option value='7'>July</option>
                        <option value='8'>August</option>
                        <option value='9'>September</option>
                        <option value='10'>October</option>
                        <option value='11'>November</option>
                        <option value='12'>December</option>
                      </select>
                    </div>
                    <div className='form-group'>
                      <label>Custom Radio Buttons</label>
                      <label className='radio_container'>
                        One
                        <input type='radio' name='radio' />
                        <span className='radio_checkmark'></span>
                      </label>
                      <label className='radio_container'>
                        Two
                        <input type='radio' name='radio' />
                        <span className='radio_checkmark'></span>
                      </label>
                      <label className='radio_container'>
                        Three
                        <input type='radio' name='radio' />
                        <span className='radio_checkmark'></span>
                      </label>
                      <label className='radio_container'>
                        Four
                        <input type='radio' name='radio' />
                        <span className='radio_checkmark'></span>
                      </label>
                    </div>
                    <div className='form-group'>
                      <label>Datepicker</label>
                      <input
                        type='date'
                        type='text'
                        class='form-control datepicker'
                        placeholder='Pick the date'
                      />
                    </div>
                    <div className='mt-4'>
                      <div className='flip-card'>
                        <div className='flip-card-inner'>
                          <div className='flip-card-front'>
                            <h3>CARD ONE</h3>
                            <b>Person's Image</b>
                          </div>
                          <div className='flip-card-back'>
                            <h1>Person's Name</h1>
                            <p>Occupation</p>
                            <p>Designation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Collapsible />
                    </div>
                    <button className='m-2'>Submit</button>
                  </div>
                </div>
              </form>
            </TabPanel>
          ))}
        </ThemeProvider>
      </div>
    );
  }

  return (
    <div className='outer-tabs'>
      <span className='panel-heading'>{props.header}</span>
      <div className='tabs-page'>
        <div>{getHCComponents()}</div>
      </div>
    </div>
  );
};

export default Todo;
