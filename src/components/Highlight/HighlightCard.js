import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import useStyles from './styles';

HighlightCard.propTypes = {
    title: PropTypes.string,
    count: PropTypes.number,
    type: PropTypes.string,
};

HighlightCard.defaultProps = {
    title: '',
    count: 0,
    type: ''
};

function HighlightCard(props) {
    const { title, count, type } = props;
    const classes = useStyles(props);

    return (
        <Card className={classes.wrapper}>
            <CardContent>
                <Typography component="p" variant="body2" className={classes.title}>
                    {title}
                </Typography>
                <Typography component="span" variant="body2" className={classes.count}>
                    <CountUp end={count} separator=',' duration={2} />
                </Typography>
            </CardContent>
        </Card>
    );
}

export default HighlightCard;