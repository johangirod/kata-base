import {xprod, range} from "ramda";

export const createGrid = n => {
    const grid = new Array(n);
    grid.fill(new Array(n));
    return grid;
};

export const nextState = grid => {
    const coordinates = xprod(range(0, grid.length), range(0, grid.length));
    coordinates.forEach(([x, y]) => {
        grid[x][y] =
        (grid[x][y] && grid[x][y-1] && grid[x][y+1] && grid[x][y-1] && grid[x][y+1])||
        (grid[x][y] && grid[x-1][y] && grid[x+1][y] && grid[x-1][y] && grid[x+1][y]);

    });

    return grid;
};