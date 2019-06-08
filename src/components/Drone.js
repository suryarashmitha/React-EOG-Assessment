import * as actions from "../store/actions";
import Chart from "./Chart";
import React, { Component } from "react";
import { connect } from "react-redux";

class Drone extends Component {
    constructor(props) {
        super(props);
        props.fethingDrone();
        setInterval(props.fethingDrone, 4000);
    }

    render() {
        let showChart = null;
        if (this.props.drone_Data.length === 0) {
            showChart = <div>Wait,it is loading</div>
        } else {
            showChart = <Chart {...this.props} />
        }

        return (
            showChart
        )

    }
}

const mapStateToProps = state => {
    const { drone_Data } = state.drone;
    return { drone_Data }
}

const mapDispatchToProps = dispath => {
    return {
        fethingDrone: () => dispath({ type: actions.FETCH_DRONE })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Drone);