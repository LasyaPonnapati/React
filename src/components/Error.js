import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div className="error">
            <h1>OOPS!!!</h1>
            <p>something went wrong!</p>
            <p>{err.status} : {err.statusText}</p>
        </div>
    )
};

export default Error;