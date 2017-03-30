const { xprod, repeat } = require('ramda');

const createGrid = (n) => {
    const grid = repeat(false, n);
    return grid.map(() => repeat(false, n));
};

const populate = arr => arr.map(line => line.map(() => !!Math.round(Math.random())));

const computeNeighboursNumber = (state, i, j) => {
    const neighboursCoordinate = xprod([j - 1, j, j + 1], [i - 1, i, i + 1])
        .filter(([x, y]) => x > 0 && y > 0 && x < state.length && y < state.length)
        .filter(([x, y]) => !(x === i && j === i));
    return neighboursCoordinate.reduce((sum, [x, y]) => state[x][y] + sum, 0);
};

const computeNextState = (state) => {
    const nextState = createGrid(state.length);
    for (let i = 0; i < state.length; i++) {
        for (let j = 0; j < state.length; j++) {
            const neighbourNumber = computeNeighboursNumber(state, i, j);
            nextState[i][j] =
                neighbourNumber === 3 ||
                (nextState[i][j] === 1 && neighbourNumber === 2);
        }
    }
    return nextState;
};

const loop = n => {
    let currentState = populate(createGrid(10));
    for (let i = 0; i < n; i++) {
        currentState = computeNextState(currentState);
        console.log(currentState);
        console.log('===\n');
    }
    return currentState;
};


loop(12);