import React from 'react';
import Plot from 'react-plotly.js';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import CardHeaderRaw from "@material-ui/core/CardHeader";


const cardStyles = theme => ({
    root: { background: theme.palette.primary.main },
    title: { color: "white" }
});

const CardHeader = withStyles(cardStyles)(CardHeaderRaw);

const styles = { card: { margin: "5% 25%", float: "right", width: "50%" } };

const Chart = props => {
    const { classes } = props;
    const xData = props.drone_Data.data.map(data => moment(data.timestamp).format('kk:mm:ss'));
    const yData = props.drone_Data.data.map(data => data.metric);

    return (
        <Card className={classes.card}>
            <CardHeader title="Hey, Jesse - here are the metrics." />
            <CardContent>
                <Plot
                    data={[{
                        x: xData,
                        y: yData,
                        type: 'linear',
                        marker: { color: 'blue' }
                    }]}
                    layout={{
                        width: 690, height: 400,
                        title: 'Drone Position & Temperature Display',
                        xaxis: {
                            autotick: false,
                            dtick: 40
                        },
                        margin: { left: 12, right: 8, top: 85, bottom: 17 }
                    }}
                />
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(Chart);