import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import HighlightCard from './HighlightCard';

Highlight.propTypes = {
    summary: PropTypes.array,
};

Highlight.defaultProps = {
    summary: []
}

function Highlight(props) {
    const { summary } = props;

    return (
        <Grid container spacing={3}>
            {
                summary.map((data) => (
                    <Grid item sm={4} xs={12}>
                        <HighlightCard
                            title={data.title}
                            count={data.count}
                            type={data.type}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default Highlight;