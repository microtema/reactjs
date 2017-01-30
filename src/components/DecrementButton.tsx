import * as React from "react";
import {connect} from "react-redux";

class DecrementButton extends React.Component<any,any> {
    render() {
        return (
            <button onClick={() => { this.props.dispatch({type: "DEC", payload: 1}); }}>-</button>
        );
    }
}

export default connect()(DecrementButton);