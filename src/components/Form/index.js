import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    buttons: {
        display:        'flex',
        justifyContent: 'flex-end',
    },
    button:  {
        marginTop:  theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const Form = ({handleSubmit}) => {

    const [formValues, setValues] = React.useState({
        secondName: '',
        firstName:  '',
        patronymic: '',
        phone:      ''
    })

    const classes = useStyles()

    const onChange = (e) =>
        setValues({...formValues, [e.target.name]: e.target.value})

    return (
        <form onSubmit={() => handleSubmit(formValues)}>
            <Typography variant="h6" gutterBottom>
                Добавить абонента
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="secondName"
                        name="secondName"
                        label="Фамилия"
                        fullWidth
                        onChange={(e) => onChange(e)}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Имя"
                        fullWidth
                        onChange={(e) => onChange(e)}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="patronymic"
                        name="patronymic"
                        label="Отчество"
                        fullWidth
                        onChange={(e) => onChange(e)}

                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="phone"
                        name="phone"
                        label="Телефон"
                        fullWidth
                        onChange={(e) => onChange(e)}

                    />
                </Grid>
                <div className={classes.buttons}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        Добавить
                    </Button>
                </div>
            </Grid>
        </form>
    );
}

export default Form