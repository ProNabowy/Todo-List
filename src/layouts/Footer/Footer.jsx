import React from 'react'

/**
 * This component renders the footer of the page.
 * It renders a paragraph with the copyright information and a link to the
 * Biddex website.
 *
 * @returns {JSX.Element} The JSX element for the footer.
 */
export default function Footer() {

    return (
        <footer className='container py-5 text-center'>
            <p className='text-[14px] sm:text-base'>
                {/* The copyright information. */}
                &copy; 2024 biddex. all rights reserved.
                {/* A link to the Biddex website. */}
                The Trademark <a className='font-medium underline text-primary' target='_blank' href="https://biddex.com/en">BIDDEX</a> is owned by Euro Tech.
            </p>
        </footer>
    )
}

