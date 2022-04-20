import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { MdOutlineDeleteOutline, MdModeEdit } from "react-icons/md";
import { useRoot } from '../hooks/useRoot';

interface Props{
  id: string
  setReadOnly: (edit: boolean) => void
  focusInput: () => void
}

export default function Options({ id, setReadOnly, focusInput }: Props) {
  const {deleteTodo} = useRoot()
  return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="cursor-pointer outline-none rounded-lg bg-slate-100/80 text-slate-800 p-1 transition-all duration-300 hover:bg-slate-200">
            <HiOutlineDotsVertical/>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-40 mt-2 z-50 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item onClick={()=>{
                  setReadOnly(false)
                  focusInput()
              }}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <MdModeEdit
                        className="w-5 h-5 mr-4"
                      />
                    ) : (
                      <MdModeEdit
                        className="w-5 h-5 mr-4"
                      />
                    )}
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item onClick={()=>{
                  deleteTodo(id)
              }}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-red-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <MdOutlineDeleteOutline
                        className="w-5 h-5 mr-4"
                      />
                    ) : (
                      <MdOutlineDeleteOutline
                        className="w-5 h-5 mr-4"
                      />
                    )}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}
