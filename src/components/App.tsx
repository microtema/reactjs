import * as React from "react";
import {connect} from "react-redux";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import {bindActionCreators} from "redux";
import {actionCreators} from "../actions/ActionCreators";

class App extends React.Component<any,any> {

    render() {

        console.log("increment", this.props.actions.increment());
        console.log("decrement", this.props.actions.decrement());

        return (<div>
            <h1>Hello {this.props.name}</h1>
            <DecrementButton />
            <span>{ " " + this.props.state + " "}</span>
            <IncrementButton />
        </div>)
    }
}

const mapStateToProps = (state: any) => {
    return {state: state}
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);