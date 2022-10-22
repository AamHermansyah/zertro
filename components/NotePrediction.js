export default function NotePrediction({title, children}){
    return (
        <>
            <h1 className="text-2xl sm:text-3xl font-bold mt-8 mx-4 mb-4 text-gray-800">{title}</h1>
            <div className="flex flex-col gap-2 bg-white text-gray-700 rounded-lg p-4 sm:p-8 shadow text-sm mx-4">
                <span className="flex items-center justify-center w-max  text-white bg-gray-700 rounded-full h-6 px-3 uppercase">
                    Note
                </span>
                <span className="text-justify font-bold">{children}</span>
                <div className="flex items-center mt-4">
                    <div className="h-3 w-6 bg-green-500 rounded-sm" />
                    <span className="ml-2 text-sm sm:text-md">Waktu yang pas untuk membeli atau menjual.</span>
                </div>
                <div className="flex items-center">
                    <div className="h-3 w-6 bg-red-500 rounded-sm" />
                    <span className="ml-2 text-sm sm:text-md">Dianjurkan untuk menahan terlebih dahulu.</span>
                </div>
            </div>
        </>
    )
}