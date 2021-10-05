import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import LineChart from 'components/Charts/LineChart';
import HighMaps from 'components/Charts/HighMaps';
import { getMapDataByCountryId } from 'apis';

Summary.propTypes = {

};

function Summary(props) {
    const { report, countryId } = props;
    const [mapData, setMapData] = useState({});

    useEffect(() => {
        if (countryId) {
            getMapDataByCountryId(countryId)
                .then((res) => {
                    setMapData(res);
                })
                .catch((error) => console.log({ error }));
        }
    }, [countryId]);

    return (
        <Grid container spacing={3}>
            <Grid item sm={8} xs={12}>
                <LineChart data={report} />
            </Grid>
            <Grid item sm={4} xs={12}>
                <HighMaps mapData={mapData} />
            </Grid>
        </Grid>
    );
}

export default Summary;