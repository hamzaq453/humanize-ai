'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Link from 'next/link' // Import Link from next for navigation

export function Navbar() {
  const { data: session } = useSession()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [remainingWords, setRemainingWords] = useState(200); // Default for logged-in users

  const MAX_WORDS_LOGGED_IN = 500;

  useEffect(() => {
    if (session) {
      const wordUsage = parseInt(localStorage.getItem("wordUsage") || "0", 10);
      setRemainingWords(MAX_WORDS_LOGGED_IN - wordUsage);
    }
  }, [session]);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev)
  }

  const closeDropdown = () => {
    setDropdownOpen(false)
  }

  return (
    <nav className="w-full bg-[#161b22] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Humanize AI Text</h1>
        <div className="flex items-center space-x-8">
          {/* Pricing Button */}
          <Link href="/pricing">
            <Button className="bg-transparent border  rounded-full hover:bg-gray-800 text-white px-4 py-1 ">
              Pricing
            </Button>
          </Link>

          {session ? (
            <div className="relative">
              <div className="flex items-center space-x-4">
                {session.user?.image && (
                  <Image
                    src={session.user.image}
                    alt={`${session.user?.name}'s profile picture`}
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer"
                    onClick={toggleDropdown} // Toggle dropdown on click
                  />
                )}
              </div>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-white rounded-lg shadow-lg p-4">
                  <p className="text-gray-700 mb-2">Remaining words: {remainingWords}</p>
                  <Button
                    onClick={() => {
                      signOut()
                      closeDropdown()
                    }}
                    className="w-full bg-blue-950 hover:bg-red-700 text-left px-4 py-2"
                  >
                    Logout
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <Button onClick={() => signIn('google')} className="bg-blue-600 hover:bg-blue-700">Login</Button>
          )}
        </div>
      </div>
    </nav>
  )
}
