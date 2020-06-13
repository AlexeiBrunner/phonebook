import React from 'react';

import {AppBar, Toolbar, Typography} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from "./components/Table";
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    layout: {
        width:                                              'auto',
        marginLeft:                                         theme.spacing(2),
        marginRight:                                        theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width:       '90%',
            marginLeft:  'auto',
            marginRight: 'auto',
        },
    },
    paper:  {
        marginTop:                                          theme.spacing(3),
        marginBottom:                                       theme.spacing(3),
        padding:                                            theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop:    theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding:      theme.spacing(3),
        },
    }
}));

const App = () => {
    const [dataStorage, setValueStorage, updateStorage, deleteOnStorage] = useLocalStorage('phonebook', [])

    const classes = useStyles();

    return (
        <>
            <CssBaseline/>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                        Phonebook
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.layout}>
                <div className={classes.paper}>
                    <Table dataStorage={dataStorage}
                                 setDataStorage={setValueStorage}
                                 updateStorage={updateStorage}
                                 deleteOnStorage={deleteOnStorage}/>
                </div>
            </main>
        </>
    );
}

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = React.useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        const valueToStore = [...storedValue, value];
        setStoredValue(valueToStore);
        localStorage.setItem(key, JSON.stringify(valueToStore));
    };
    const updateValue = (value, id) => {
        let data = [...storedValue]
        data[id] = {...value}
        setStoredValue(data);
        localStorage.setItem(key, JSON.stringify(data));
    }
    const deleteValue = id => {
        const data = [...storedValue];
        data.splice(data[id], 1);
        setStoredValue(data);
        localStorage.setItem(key, JSON.stringify(data));
    }
    return [storedValue, setValue, updateValue, deleteValue];
}

export default App;
