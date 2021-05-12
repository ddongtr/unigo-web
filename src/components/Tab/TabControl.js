import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ListNotification from "../List/listNotification";

// ------------StyledTabs-----------------
const StyledTabs = withStyles({
  root: {
    width: "100%",
  },
  indicator: {
    display: "none",
  },
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

//-----------StyledTab--------------------
const StyledTab = withStyles((theme) => ({
  //   -------------------Root Style------------------
  root: {
    textTransform: "none",
    color: "#000",
    overflow: "initial",
    transition: "0.25s",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(20),
    margin: "10px 25px 0px",
    backgroundColor: "#DBDEE2",
    borderRadius: 100,
    "&:focus": {
      opacity: 1.5,
    },
    "&:before": {
      transition: "0.2s",
    },
    "&:hover": {
      "&:not($selected)": {
        backgroundColor: "#015494",
      },
      "&::before": {
        opacity: 0,
      },
      "& + $root:before": {
        opacity: 0,
      },
    },
  },

  // -----------------Selected Item-----------------
  selected: ({
    selectedBgColor = "#015494",
  }: {
    selectedBgColor?: string,
  }) => ({
    backgroundColor: selectedBgColor,
    color: "#FFF",
    "& + $root": {
      zIndex: 1,
    },
    "& + $root:before": {
      opacity: 0,
    },
  }),
}))((props) => (
  <Tab
    disableRipple
    onClick={(event) => {
      event.preventDefault();
    }}
    {...props}
  />
));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
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
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabControl({ tab1, tab2, data1, data2 }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <StyledTabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
      >
        <StyledTab label={tab1} {...a11yProps(0)} />
        <StyledTab label={tab2} {...a11yProps(1)} />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <ListNotification datas={data1} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListNotification datas={data2} />
      </TabPanel>
    </div>
  );
}
