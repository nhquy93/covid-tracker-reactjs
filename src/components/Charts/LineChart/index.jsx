import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import { Button, ButtonGroup } from '@material-ui/core';

LineChart.propTypes = {
    data: PropTypes.array,
};

LineChart.defaultProps = {
    data: []
}

const generateOptions = (data) => {
    const categories = data.map((item) => moment(item.Date).format('DD/MM/YYYY'));

    return {
        chart: {
            height: 500,
        },
        title: {
            text: 'Total Infects',
        },
        xAxis: {
            categories: categories,
            crosshair: true,
        },
        colors: ['#F3585B'],
        yAxis: {
            min: 0,
            title: {
                text: null,
            },
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
                '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} cases</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },
        series: [
            {
                name: 'Total Infects',
                data: data.map((item) => item.Confirmed),
            },
        ],
    };
};

function LineChart(props) {
    const { data } = props;
    const [options, setOptions] = useState({});
    const [reportType, setReportType] = useState('');

    useEffect(() => {
        let sortByDateData = [];

        switch (reportType) {
            case 'all':
                sortByDateData = data;
                break;
            case '30':
                if (data.length >= 30)
                    sortByDateData = data.slice(data.length - 30);
                else sortByDateData = data;
                break;
            case '7':
                if (data.length >= 7)
                    sortByDateData = data.slice(data.length - 7);
                else sortByDateData = data;
                break;
            default:
                sortByDateData = data;
                break;
        }

        setOptions(generateOptions(sortByDateData));
    }, [data, reportType]);

    return (
        <div>
            <ButtonGroup
                size="small"
                style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
                <Button color={reportType === 'all' ? 'primary' : ''} onClick={() => setReportType('all')}>All</Button>
                <Button color={reportType === '30' ? 'primary' : ''} onClick={() => setReportType('30')}>30 days</Button>
                <Button color={reportType === '7' ? 'primary' : ''} onClick={() => setReportType('7')}>7 days</Button>
            </ButtonGroup>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}

export default LineChart;