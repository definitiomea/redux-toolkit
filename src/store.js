import { configureStore } from '@reduxjs/toolkit';
/* 궁금한 점: 나는 분명 counterReducer라고 정의한 적이 없는데?

default가 붙은 건 {}를 빼고 부를 것 */
import counterReducer from './modules/counter'

/* redux에서 createStore와 동일한 역할
+ 모듈이 따로 있다면 combine을 통해 묶어줘야 하지만, 툴킷에서는 기능이 통합된다. */

export default configureStore({
    reducer: {
        counter: counterReducer,
    }
})