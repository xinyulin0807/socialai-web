"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <header className="top-0 left-0 z-50 w-full py-5 text-white bg-black sticky transition-all duration-300">
      <div className="container mx-auto flex">
        <nav className="flex gap-4">
          <h1 className=""><a href="/">Social AI</a></h1>
          <DropdownMenu>
            <DropdownMenuTrigger>Research</DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black text-white">
              <DropdownMenuItem>Overview</DropdownMenuItem>
              <DropdownMenuItem>Index</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>API</DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black text-white">
              <DropdownMenuItem>API</DropdownMenuItem>
              <DropdownMenuItem>Data Privacy</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}
