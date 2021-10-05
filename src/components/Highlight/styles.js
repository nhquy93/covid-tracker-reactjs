import { makeStyles } from '@material-ui/core';

export default makeStyles(({
    wrapper: (props) => {
        if (props.type === 'confirmed') return {
            borderLeft: '5px solid #c9302c'
        };
        if (props.type === 'recovered') return {
            borderLeft: '5px solid #28a745'
        }; 
        else return { borderLeft: '5px solid gray'}
    },
    title: {
        fontSize: 18,
        marginBottom: 5
    },
    count: {
        fontWWeight: 'bold',
        fontSize: 18
    }
}));