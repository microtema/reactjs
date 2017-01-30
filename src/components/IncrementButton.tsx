import * as React from "react";
import {connect} from "react-redux";

class IncrementButton extends React.Component<any,any> {
    render() {
        return (
            <button onClick={() => { this.props.dispatch({type: "INC", payload: 1}); }}>+</button>
        );
    }
}

export default connect()(IncrementButton);