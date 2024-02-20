import { useDispatch, useSelector } from "react-redux";
import { increment, decerement } from "./counterSlice";
import { update_heading } from "../Heading/headingSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const heading = useSelector((state) => state.heading.heading)
    const dispatch = useDispatch();

    return(
        <section>
            <p>{count}</p>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decerement())}>-</button>


            <button onClick={()=>dispatch(update_heading())}> update </button>

            <h5> {heading} </h5>
            

        </section>
    )
}

export default Counter;