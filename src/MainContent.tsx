import * as React from 'react';
import Box from "@mui/material/Box";
import {MenuItem, Select, Tab, Tabs, TextField} from "@mui/material";
import Layout from "./Layout.tsx";
import layout from "./Layout.tsx";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{p: 3}}>{children}</Box>}
        </div>
    );
}

export default function MainContent() {
    const [value, setValue] = React.useState(0);
    const [layoutType, setLayoutType] = React.useState('oneColumn');

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Mobile*" />
                    <Tab label="Desktop(optional)" />
                    <Tab label="Tablet(optional)" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={layoutType}
                    label="Age"
                    onChange={(e)=>setLayoutType(e.target.value)}
                >
                    <MenuItem value='oneColumn'>One Column</MenuItem>
                    <MenuItem value={'multiColumn'}>Multi Column</MenuItem>
                </Select>
                <Layout type={layoutType} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Box>
    );
}