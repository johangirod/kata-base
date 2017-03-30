export const getCellNextState = (currentState, numNeighbours) => {
    return (currentState && numNeighbours === 2) || numNeighbours === 3;
};


export const actionsDispatcher = (store, stateChanges) => {
    stateChanges.forEach(([[x, y], [oldState, newState]]) => {
        if (!oldState && newState) {
            store.add(x, y);
        }
    });
};
