import { NavLink } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdOutlineClose } from 'react-icons/md';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
let activeStyle = {
  backgroundColor: '#ddd'
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow relative sticky">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <MdOutlineClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                      <FiMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <NavLink to="/home" className="text-xl md:text-3xl"><span className="py-1 px-2 rounded uppercase text-white">L</span>CODE</NavLink>
                </div>
                {/*  Large screen Navigation */}
                <div className="hidden md:block sm:ml-6">
                <div className="flex space-x-1 items-center h-full">
                  {
                    navItems.map((item, index) => (
                      <div
                        className="px-3 py-2"
                        key={index}>
                        <NavLink
                          style={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                          className="inline-flex items-center px-1 text-sm font-medium"
                          to={item.path}>
                          {item.name}
                        </NavLink>
                      </div>
                    ))
                  }
                </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0">
          {/* Small screen Navigation */}
          <Disclosure.Panel static className="block md:hidden absolute top-0 left-0 w-full bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined}
                  className="bg-indigo-50 border-indigo-500 text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                  to={item.path}>
                  {item.name}
                </NavLink>
              ))}
              {/* <Disclosure.Button
              as="a"
              href="#"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Home
            </Disclosure.Button>
              */}
            </div>
          </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

const navItems = [
  { name: 'Home', path: '/home' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'About', path: '/about' },
  // { name: '', path:'/'},
]
