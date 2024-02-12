// Higher Order Component

const HOC=(Rescard)=>{
return (props)=>{
    return(
        <div>
        <label className="relative text-white font-bold pl-5 pr-2 py-1 rounded-e-lg top-12 bg-red-500 z-10">OPEN</label>
        <Rescard {...props}/>
        </div>
    );
};
};

export default HOC;