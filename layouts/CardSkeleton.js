export default  function CardSkeleton(){
    return (
        <div className="sm:w-[300px] rounded-lg px-6 py-10 bg-white">
            <div className="flex flex-col gap-y-2 animate-pulse h-full">
                <div className="flex items-center gap-2">
                    <div className="w-8 bg-gray-300 h-8 rounded-full" />
                    <div className="w-40 bg-gray-300 h-6 rounded-md " />
                </div>
                <div className="w-28 bg-gray-300 h-6 rounded-md " />
                <div className="w-60 bg-gray-300 h-6 rounded-md " />
            </div>
        </div>
    )
}