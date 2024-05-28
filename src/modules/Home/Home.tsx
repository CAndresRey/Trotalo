import { useSelector, useDispatch } from "react-redux";
import { increment } from "./slices/counter.slice";

import { RootState } from "../../store";

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
      </div>
    </>
  );
};

export default Home;
