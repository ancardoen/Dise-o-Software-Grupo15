import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { GoChevronDown } from "react-icons/go";
export default function Home() {
    return (
        <div>
            <main className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                    <form className="grid grid-cols-2 gap-4">
                        <div>
                            <Link href="#">
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                    Buscar Alimento
                                </button>
                            </Link>
                            <Link href="/ingresar">
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                    Ingresar Alimento
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link href="#">
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                        Crear Lista
                                    </button>
                            </Link>
                            <Link href="#">
                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white  px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                            Abrir Lista
                                            <GoChevronDown />
                                        </MenuButton>
                                        <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            <MenuItem>
                                                <a href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none" 
                                                >
                                                    Alimento 1
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none" 
                                                >
                                                    Alimento 2
                                                </a>
                                            </MenuItem>
                                            <MenuItem>
                                                <a href="#"
                                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none" 
                                                >
                                                    Alimento 3
                                                </a>
                                            </MenuItem>
                                        </MenuItems>
                                    </div>
                                    
                                </Menu>
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
            <footer className="bg-red-500 text-center">
                <p className="py-2">&copy; 2024 Test</p>
            </footer>
        </div>
    );
}