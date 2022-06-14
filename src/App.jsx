import React from "react";
import TaskList from "./components/TaskList";
import TaskBar from "./components/TaskBar";
import { login, reset } from "./redux/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

function App() {
  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [isError]);

  console.log(user);

  const handleClick = () => {
    dispatch(login())
  }



  return (
    <>
      {user ? (
        <>
          <TaskList />
          <TaskBar />
        </>
      ) : (
        <button disabled={ user } onClick={handleClick}>
          login
        </button>
      )}
    </>
  );
}

export default App;
