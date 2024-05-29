export default function Home() {
    return (
        <main
            className="bg-gray-100 sm:bg-red-100
         md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100
          2xl:bg-purple-100 h-screen flex items-center justify-center p-5 dark:bg-gray-700">
            <div
                className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm dark:bg-gray-600
            flex flex-col gap-3 ">
                {['hyeppy', 'Me', 'You', 'Yourself'].map((person, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-5  p-2.5 rounded-xl  border-b-2 pb-5 last:border-0 last:pb-0">
                        <div className="size-10 bg-blue-400 rounded-full" />
                        <span className="text-lg font-medium">{person}</span>
                        <div className="size-6  bg-red-500 text-white flex items-center justify-center rounded-full relative">
                            <span>{index}</span>
                            <div className="bg-red-500 size-6 rounded-full absolute animate-ping" />
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
