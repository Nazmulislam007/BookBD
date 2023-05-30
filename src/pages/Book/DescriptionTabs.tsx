import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Specification from "./Specification";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DescriptionTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} pb={4}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="inherit"
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Summary" {...a11yProps(0)} />
          <Tab label="Specification" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Bonus material: Interspersed throughout are three comic books that are
        featured in the story—all created by Tom Hanks himself—including the
        comic book that becomes the official tie-in to this novel’s "major
        motion picture masterpiece. Bonus material: Interspersed throughout are
        three comic books that are featured in the story—all created by Tom
        Hanks himself—including the comic book that becomes the official tie-in
        to this novel’s "major motion picture masterpiece.
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Specification />
      </TabPanel>
    </Box>
  );
}
