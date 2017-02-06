import {actionCreators} from "./../../src/actions/ActionCreators";

describe('actionCreators', () => {

    it('should create an action#increment', () => {
        expect(actionCreators.increment()).toEqual({"type": "increment"});
    });

    it('should create an action#decrement', () => {
        expect(actionCreators.decrement()).toEqual({"type": "decrement"});
    })
});

