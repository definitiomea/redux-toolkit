/* toolkit에는 thunk가 내장되있기 때문에 설치하지 않고 사용가능하다
thunk 사용하는 방식과 동일하게 사용, 함수형으로 작성한다.
tnunk로 작성한 함수는 액션 함수를 사용하는 것과 동일하게 사용한다.

export const incrementAsync = () => (dispatch) => {
    setTimeout(() => {dispatch(increment()), 1000})
}
*/

import { createSlice } from "@reduxjs/toolkit";

/* createSlice API 안에는 초기 값과 reducer 값을 넣는다. */
export const counter = createSlice({
    /* 식별자 */
    name: 'counter',
    /* 초기 값 */
    initialState: {
        value: 0,
    },
    /* 실행할 리듀서들은 객체 형태로 작성해준다. */
    reducers: {
        /* 식별자: (조작할 state) => {
            (state 중 내가 다룰 값)...
        } */

        /* 툴킷을 이용하면 state가 보존되기 때문에 값에 바로 접근해서 수정할 수 있다. */
        increment: (state) => {
        state.value += 1
        },
        /* decrement: (state) => {
            state.value -= 1
        }, */

        /* 외부에서 값을 들고 오고 싶을 때 파라미터를 더 두고, payload를 적용 가능 */
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

/* 각각의 경우에 따라 액션 타입을 함수로 만들어서 내보냈다. */
export const { increment, incrementByAmount } = counter.actions;

/* reducer를 통째로 내보내기 */
export default counter.reducer;