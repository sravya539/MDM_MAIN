import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Stack, Grid, TextField, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import IconButton from '@mui/material/IconButton';

import useStyles from './UseStyle';

function Type() {//one of the tab to take the type 
	const classes = useStyles();// custom styling hook assigned to classes variable
	// State to store value from the input field
	const [ inputFields, setInputFields ] = useState([ { id: uuidv4(), type: '' } ]);

	const handleSubmit = (e) => {//Submitting the input fields data to print it on console
		e.preventDefault();
		console.log('InputFields', inputFields);
	};

	const handleChangeInput = (index, event) => {//To enter the data in text fields
		const values = [ ...inputFields ];
		values[index][event.target.name] = event.target.value;
		setInputFields(values);
	};

	const handleAddFields = () => {//Funtion to add fields
		setInputFields([ ...inputFields, { id: uuidv4(), firstName: '' } ]);
	};

	const handleRemoveFields = (id) => {//Funtion to remove fields
		const values = [ ...inputFields ];
		values.splice(values.findIndex((value) => value.id === id), 1);
		setInputFields(values);
	};
	const clearField = () => {//funtion to display a pop-up, containing a "elements cleared" text
		alert('elements cleared');
	};
	return (
		<Grid container direction="column" alignItems="center" justify="center">
			<form className={classes.root} onSubmit={handleSubmit}>
				{inputFields.map((inputField, index) => (
					<div key={index}>
						<IconButton
							disabled={inputFields.length === 1}
							onClick={() => handleRemoveFields(inputField.id)}
						>
							<RemoveCircleIcon />
						</IconButton>
						<TextField
							name="type"
							label="Type"
							variant="standard"
							value={inputField.firstName}
							onChange={(event) => handleChangeInput(index, event)}
						/>

						<IconButton onClick={handleAddFields}>
							<AddCircleIcon />
						</IconButton>
					</div>
				))}
				<br />
				<Grid container direction="column" alignItems="center" justify="center">
					<Stack spacing={2} direction="row">
						<Button variant="outlined" color="error" onClick={clearField}>
							Clear
						</Button>

						<Button variant="contained" onClick={handleSubmit}>
							Submit
						</Button>
					</Stack>
				</Grid>
			</form>
		</Grid>
	);
}

export default Type;
