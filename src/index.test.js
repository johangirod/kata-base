/* eslint-env jest */
import { getCellNextState, actionsDispatcher } from './index';

describe('getCellNextState', () => {
    it('should be killed if less than 2 neighboors', () => {
        expect(getCellNextState(true, 1)).toBe(false);
    });
    it('should stay dead if less than 2 neighboors', () => {
        expect(getCellNextState(false, 1)).toBe(false);
    });
    it('should stay alive if 2 neighboors', () => {
        expect(getCellNextState(true, 2)).toBe(true);
    });
    it('should stay dead if 2 neighboors', () => {
        expect(getCellNextState(false, 2)).toBe(false);
    });
    it('should born if 3 neighboors', () => {
        expect(getCellNextState(false, 3)).toBe(true);
    });
    it('should be killed if more than 3 neighboors', () => {
        expect(getCellNextState(true, 4)).toBe(false);
    });
});

describe('actionsDispatcher', () => {
    let store;
    beforeEach(() => {
        store = {
            add: jest.fn(),
            remove: jest.fn(),
        };
    });

    it('should not do any action if there is no state change', () => {
        actionsDispatcher(store, []);
        expect(store.add).not.toHaveBeenCalled();
        expect(store.remove).not.toHaveBeenCalled();
    });

    it('should add a cell if it pass from dead to living', () => {
        actionsDispatcher(store, [[[1, 1], [false, true]]]);
        expect(store.add).toHaveBeenCalledWith(1, 1);
    });
});
