import { fromJS } from 'immutable';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
    it('should return the initial state', () => {
        const initialState = fromJS({
            courses: {},
            notifications: {},
            ui: {
                isNotificationDrawerVisible: false,
                isUserLoggedIn: false,
                user: {}
            }
        });
        const state = rootReducer(undefined, {});
        expect(state).toEqual(initialState);
    });
});
