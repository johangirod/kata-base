/* eslint-env jest */
import { createGrid, nextState } from './index';

describe('createGrid', () => {
    it('should initialized a nxn grid', () => {
        expect(createGrid(10)).toHaveLength(10);
        expect(createGrid(10)[0]).toHaveLength(10);
        expect(createGrid(10)[9]).toHaveLength(10);
    });
});

describe('nextState', () => {
    test('a single cell should die immediatly', () => {
        expect(nextState([[true]])).toEqual([[false]]);
    });

    test('a single dead cell should remain dead', () => {
        expect(nextState([[false]])).toEqual([[false]]);
    });

    test('a living cell arround 2 living cell in a row stay alive', () => {
        expect(nextState([[true, true, true]])[0][1]).toBe(true);
    });

    test('a living cell arround 2 living cell in a column stay alive', () => {
        expect(nextState([[true], [true], [true]])[1][0]).toBe(true);
    });
});
