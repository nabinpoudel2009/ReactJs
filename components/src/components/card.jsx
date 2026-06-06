function Card() {
    
    const user = "Nabin Poudel";

    return (
        <div className="bg-red-400 p-2">
            <h3 className="text-3xl font-bold">{user}</h3>
            <h3>I am years old....</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque odit, ipsa quasi maxime beatae impedit sequi fugiat velit veritatis repellat?</p>
        </div>
    ) 
}
export default Card