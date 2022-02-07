import { Typography, Grid, TextField, MenuItem, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
//import Buttons from '../components/Buttons';
import region from '../utils/region.json';
import circles from '../utils/circle.json';
import divisions from '../utils/divisions.json';
import subdivisions from '../utils/subDivisions.json';
import sections from '../utils/sections.json';
import ResponsiveAppBar from '../components/Header';

const AMComissioned = () => {//Asset Management Comissioned
	//useState() hook, it used to set and stores the starting date.
	const [ startDate, setStartDate ] = useState('');
	//useState() hook, it used to set and stores the ending date.
	const [ endDate, setEndDate ] = useState('');
	//useState() hook, setNewRegion stores the region name
	const [ newRegion, setNewRegion ] = useState('');
	//useState() hook, setCircle stores the filtered circle based on region name
	const [ circle, setCircle ] = useState([]);
	//setNewCircle stores the actual name 
	const [ newCircle, setNewCircle ] = useState([]);

		//setDivision stores the actual division name
	const [ division, setDivision ] = useState([]);	
	//setNewDivision stores the filtered divisions based on circle
	const [ newDivision, setNewDivision ] = useState([]);

	//subDivision stores the filtered sudivisions based on division
	const [ subDivision, setSubDivision ] = useState([]);
	//newSubdiv stores the actual subdivision name
	const [ newSubdiv, setNewSubdiv ] = useState([]);

	//section stores the filtered sections based on subdivision
	const [ section, setSection ] = useState([]);
	//newSection stores the actual section name
	const [ newSection, setNewSection ] = useState([]);
	
	// const [ data, setData ] = useState({
	// 	region: '',
	// 	circle: [],
	// 	division: [],
	// 	subDivision: [],
	// 	section: []
	// });
	//

	//onRegion sets the region value 
	const onRegion = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		const circ = circles.filter((cir) => {
			return cir.reg_name === e.target.value;
		});
		console.log(circ);
		setCircle(circ);
		setNewRegion(e.target.value);
	};

	//onCircle sets the circle value
	const onCircle = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		const divs = divisions.filter((div) => {
			return div.circle_name === e.target.value;
		});
		console.log(divs);
		setNewDivision(divs);
		setNewCircle(e.target.value);
	};

	//onDivision sets the division value
	const onDivision = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		const subdivs = subdivisions.filter((div) => {
			return div.div_name === e.target.value;
		});
		console.log(subdivs);
		setSubDivision(subdivs);
		setDivision(e.target.value);
	};

	//onSubdivision sets the subdivision value
	const onSubDivision = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		const sec = sections.filter((sec) => {
			return sec.subdiv_name === e.target.value;
		});
		console.log(sec);
		setSection(sec);
		setNewSubdiv(e.target.value);
	};

	//onSection sets thhe section value
	const onSection = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		setNewSection(e.target.value);
	};

	//fromDate sets the selected startDate
	const fromDate = (event) => {
		event.preventDefault();
		setStartDate(event.target.value);
		console.log(event.target.value);
	};

	//endDate sets theselected endDate
	const toDate = (event) => {
		event.preventDefault();
		setEndDate(event.target.value);
		console.log(event.target.value);
	};

	//submits the data and prints the data on concole
	const submitData = (event) => {
		event.preventDefault();

		console.log(newRegion);
		console.log(newCircle);
		console.log(division);
		console.log(newSubdiv);
		console.log(newSection);
		console.log(startDate);
		console.log(endDate);
	};
	return (
		
		<Box sx={{ width: '100%' }} component="form" onSubmit={submitData}>
			<ResponsiveAppBar/>
			<Box sx={{ width: '100%' }} component="form" onSubmit={submitData}>
			<Grid container direction={'row'}>
				<Grid item xl={6} md={3} xs={12} sm={6}>
					<Typography variant="overline">Discom :</Typography>
				</Grid>
				<Grid item xl={6} md={3} xs={12} sm={6}>
					<Typography style={{ fontSize: '15px' }} variant="overline">
						TSSPDCL
					</Typography>
				</Grid>
				<Grid item xl={6} md={3} xs={12} sm={6}>
					<Typography variant="overline">Region : </Typography>
				</Grid>
				<Grid item xl={6} md={3} xs={12} sm={6}>
					<TextField
						select
						fullWidth
						variant="standard"
						color="primary"
						label="select region"
						onChange={onRegion}
						value={newRegion}
						name="region"
					>
						{region.map((reg) => (
							<MenuItem value={reg.name} key={reg.reg_id}>
								{reg.name}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xl={6} md={3} xs={12} sm={6}>
					<Typography variant="overline">Circles : </Typography>
				</Grid>
				<Grid item xl={6} md={3} xs={12} sm={6}>
					<TextField
						select
						fullWidth
						variant="standard"
						color="primary"
						label="select circle"
						onChange={onCircle}
						value={newCircle}
						name="circle"
					>
						{circle.map((circ) => (
							<MenuItem value={circ.name} key={circ.circle_id}>
								{circ.name}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xl={6} md={3} xs={12} sm={6}>
					<Typography variant="overline">Division : </Typography>
				</Grid>
				<Grid item xl={6} md={3} xs={12} sm={6}>
					<TextField
						name="division"
						select
						fullWidth
						variant="standard"
						color="primary"
						label="select division"
						onChange={onDivision}
						value={division}
					>
						{newDivision.map((division) => (
							<MenuItem value={division.name} key={division.div_id}>
								{division.name}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xl={6} md={3} xs={12} sm={6}>
					<Typography variant="overline">Sub Division : </Typography>
				</Grid>
				<Grid item xl={6} md={3} xs={12} sm={6}>
					<TextField
						select
						fullWidth
						variant="standard"
						color="primary"
						label="select subdivision"
						onChange={onSubDivision}
						value={newSubdiv}
						name="subDivision"
					>
						{subDivision.map((subdiv) => (
							<MenuItem value={subdiv.name} key={subdiv.subdiv_id}>
								{subdiv.name}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xl={6} md={3} xs={12} sm={6}>
					<Typography variant="overline">Sections : </Typography>
				</Grid>
				<Grid item xl={6} md={3} xs={12} sm={6}>
					<TextField
						select
						fullWidth
						variant="standard"
						color="primary"
						label="select section"
						onChange={onSection}
						value={newSection}
						name="section"
					>
						{section.map((sec) => (
							<MenuItem value={sec.name} key={sec.section_id}>
								{sec.name}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xl={6} md={3} xs={6} sm={6}>
					<Typography variant="overline">From</Typography>
				</Grid>
				<Grid item xl={6} md={3} xs={6} sm={6}>
					<TextField
						name="fromDate"
						label="Enter Date"
						type="date"
						variant="standard"
						value={startDate}
						onChange={fromDate}
						sx={{ width: 220 }}
						InputLabelProps={{
							shrink: true
						}}
					/>
				</Grid>
				<Grid item xl={6} md={3} xs={6} sm={6}>
					<Typography variant="overline">To</Typography>
				</Grid>
				<Grid item xl={6} md={3} xs={6} sm={6}>
					<TextField
						name="toDate"
						label="Enter Date"
						type="date"
						variant="standard"
						value={endDate}
						onChange={toDate}
						sx={{ width: 220 }}
						InputLabelProps={{
							shrink: true
						}}
					/>
				</Grid>
			</Grid>
			<div style={{ minHeight: '40px' }} />
			<Grid container>
				<Grid item xs={6}>
					<Button
						type="submit"
						style={{ borderRadius: '20px', width: '90px', marginLeft: '50%' }}
						color="success"
						size="small"
						variant="contained"
					>
						Submit
					</Button>
				</Grid>
				<Grid item xs={6}>
					<Button
						type="reset"
						style={{ borderRadius: '20px', width: '90px', marginRight: '50%' }}
						size="small"
						color="error"
						variant="contained"
					>
						Clear
					</Button>
				</Grid>
			</Grid>
		</Box>
		</Box>
	);
};

export default AMComissioned;
