import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core';
import { esES as coreesES } from '@material-ui/core/locale';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { esES } from '@material-ui/data-grid';
import React from 'react';
import { Routes } from './router';
import './scss/index.scss';

const theme = createTheme(
	{
		palette: {
			primary: {
				main: '#2f3775',
				contrastText: '#ffffff',
			},
			secondary: {
				main: '#dff2ff',
			},
			// error: {},
			// warning: {},
			// info:{},
			// success:{},
			// text: {},
		},
	},
	esES,
	coreesES
);

const useStyles = makeStyles((styles) => ({
	app: {
		// background: styles.palette.info.light,
	},
}));

function App() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<div className={classes.app}>
				<Routes />
			</div>
		</ThemeProvider>
	);
}

export default App;
