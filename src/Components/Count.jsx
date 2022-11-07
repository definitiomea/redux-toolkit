import { useDispatch, useSelector } from "react-redux";

/* import................. */
import { increment, incrementByAmount } from "../modules/counter";

const Count = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {dispatch(increment())}}>+</button>

            {/* reducer에 state, action 파라미터를 갖게 했다면
            호출했을 때의 인수 값이 payload로 넘겨지게 된다. */}
            <button onClick={() => {dispatch(incrementByAmount(10))}}>+10</button>

            {/* <button onClick={() => {dispatch(incrementAsync(10))}}>1초 뒤 증가</button> */}
        </>
    );
}

export default Count;