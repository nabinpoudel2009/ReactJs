function Card() {

    return (
        <div className="m-5 rounded-lg ring-1 bg-gray-800 p-4">
            <div className="flex justify-between w-70 items-center">

                <div className="h-15 w-15 rounded-full object-cover overflow-hidden">
                    <img src="https://imgs.search.brave.com/rB8PLhzk820m1qDT7TVatfuULU7wydZsoSVkAHpY7kc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/MzU1Lzc4NC9zbWFs/bC9nb29nbGUtbG9n/by1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLWZyZWUtcG5n/LnBuZw" alt="" />
                </div>

                <div>
                    <h5 className="text-xs ring-1 rounded-xl px-2 py-0.5">Save <i class="ri-poker-hearts-fill text-white"></i></h5>
                </div>

            </div>

            <div className="mt-4">
                <h4 className="font-bold ml-2 font-mono">Google <span className="text-xs font-light ">6 Days Ago</span></h4>
                <h3 className="font-bold text-xl ml-2">Senior UI/UX Desginer</h3>
            </div>

            <div className="ml-5 mt-1">
                <button className="bg-gray-700 rounded-2xl px-2 py-0.5">Part Time</button>
                <button className="bg-gray-700 rounded-2xl px-2 py-0.5">Senior Level</button>
            </div>

            <hr className="opacity-30" />
            <div className="flex justify-between gap-x-5 mt-20 items-center mb-2">
                <h3 className="text-xl font-semibold">$120/hr</h3>
                <button className="bg-white text-black font-bold px-2 py-1 rounded-xl">View Details</button>
            </div>

        </div>
    ) 
}
export default Card