// Higher Order Component

const HOC=(Rescard)=>{
return (props)=>{
    return(
        <div>
        <label className="relative bg-black text-white ">open</label>
        <Rescard {...props}/>
        </div>
    );
};
};

export default HOC;