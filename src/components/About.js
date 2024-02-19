import UserClass from "./UserClass";

const About=()=>{
    return(
        <div className="mt-20 bg-gray-100 w-[1000px] rounded-lg border border-gary-400 p-3 mx-auto">
            <h1 className="font-bold text-xl mb-1">Welcome to OrderIt!</h1>
            <h3 className="mb-3">Thank you for taking an interest in my project.</h3>
            <p>OrderIt is my personal project, built during my journey of learning React. It serves as a practical exercise, allowing me to apply my newfound skills in a real-world context.</p>
            {/* <UserClass/> */}
        </div>
    )
};

export default About;