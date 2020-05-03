import * as reviewsActions from '../src/Redux/actions';
import * as reviewsActionsType from '../src/Redux/actionTypes';

describe('Reviews Actions', () => {
    it('# dataRequested', () => {
        const request = reviewsActions.dataRequested()
        expect(request).toEqual({ type: reviewsActionsType.FETCH_DATA_REQUESTED })
    });

    it('# reviewsLoaded', () => {
        let reviews = [{ body: 'Test 1', id: 1, rating: 4 }, { body: 'Test 2', id: 3, rating: 3 }];
        const request = reviewsActions.reviewsLoaded(reviews)
        expect(request).toEqual({ type: reviewsActionsType.GET_ALL_REVIEWS_SUCCEED, payload: reviews })
    });


});