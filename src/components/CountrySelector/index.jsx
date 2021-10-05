import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';

CountrySelector.propTypes = {
    countries: PropTypes.array,
    handleOnChange: PropTypes.func,
    value: PropTypes.string,
};

CountrySelector.defaultProps = {
    countries: [],
    handleOnChange: null,
    value: ''
}

function CountrySelector(props) {
    const { value, handleOnChange, countries } = props;
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="country-selector" shrink>Country</InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    name: 'country',
                    id: 'country-selector'
                }}
            >
                {countries.map(({Country, ISO2}) => {
                    return (
                        <option key={ISO2} value={ISO2.toLowerCase()}>
                            {Country}
                        </option>
                    )
                })}
            </NativeSelect>
            <FormHelperText>Select country...</FormHelperText>
        </FormControl>
    );
}

export default CountrySelector;