const incrementResult = {type: 'increment'};
const decrementResult = {type: 'decrement'};

export const actionCreators = {
    increment: () => incrementResult,
    decrement: () => decrementResult
};