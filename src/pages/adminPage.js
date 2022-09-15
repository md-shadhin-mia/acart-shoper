import { FaCog, FaDashcube, FaMap, FaTable } from "react-icons/fa"
export default function AdminPage(){
    return (
        <div>
            <div
                className="h-screen fixed top-0 md:left-0 -left-64 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300">
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative"><a
                        href="https://material-tailwind.com?ref=mtd" target="_blank" rel="noreferrer"
                        className="mt-2 text-center w-full inline-block">
                        <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">Material Tailwind
                        </h1>
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />
                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4"><a
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg bg-green-700 text-white shadow-md"
                                    href="#/" aria-current="page"><span><FaDashcube/></span>Dashboard</a>
                            </li>
                            <li className="rounded-lg mb-2"><a
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    href="#/settings"><span><FaCog/></span>Settings</a>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <a className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    href="#/tables">
                                        <span><FaTable/></span>Tables
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
}