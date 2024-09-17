import React from 'react'
import { Link } from 'react-router-dom'

/**
 * @description This component renders the header of the page.
 * It renders a header element with a container element inside.
 * The container element contains a logo, a navigation list, and a phone number.
 * The logo is an image element with a source path of /images/Logo.svg.
 * The navigation list is an unordered list with a single list item that links to the home page.
 * The phone number is an anchor element with a href attribute set to tel:19225.
 */
export default function Header() {
  return (
    <header className='py-2'>

      {/* A container element with a flexbox layout. */}
      <div className='container flex items-center justify-between'>

        {/* The logo of the application. */}
        <img
          src="/images/Logo.svg"
          className='w-fit'
          alt=""
        />

        {/* A navigation list with a single item. */}
        <ul className='hidden sm:block'>

          <li className='p-2 text-center font-medium sm:text-[20px]'>

            {/* A link to the home page. */}
            <Link to={'/'}>Todo List</Link>

          </li>

        </ul>

        {/* A phone number with a link to call it. */}
        <a href='tel:19225' className='flex items-center gap-1 font-medium text-primary'>

          {/* An icon of a phone. */}
          <img src="/images/phone.svg" className='w-[20px]' alt="" />

          {/* The phone number. */}
          <span>19225</span>

        </a>

      </div>

    </header>
  )
}

