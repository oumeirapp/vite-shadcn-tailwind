import {
  BrainCircuit,
  ChevronDown,
  Menu,
} from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"

import { Button } from "@/components/ui/button"


import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



import { toast } from "sonner"

export default function Navbar() {
   return(
       <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg">
            <BrainCircuit className="h-5 w-5 text-violet-500" />
            NeuroAI
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a
              href="/"
              className="hover:text-foreground transition-colors"
            >
              Features
            </a>

            <a
              href="/#/pricing"
              className="hover:text-foreground transition-colors"
            >
              Pricing
            </a>

            <a
              href="/#/about"
              className="hover:text-foreground transition-colors"
            >
              About
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            {/* Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Resources
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  Documentation
                </DropdownMenuItem>

                <DropdownMenuItem>
                  API Access
                </DropdownMenuItem>

                <DropdownMenuItem>
                  Community
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              className="bg-violet-600 hover:bg-violet-700"
              onClick={() =>
                toast("Welcome to NeuroAI", {
                  description:
                    "Your AI workspace is ready.",
                })
              }
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />

            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="left">
                <div className="mt-10 flex flex-col gap-4">
                  <Button variant="ghost">
                    Features
                  </Button>

                  <Button variant="ghost">
                    Pricing
                  </Button>

                  <Button variant="ghost">
                    About
                  </Button>

                  <Button
                    className="mt-4 bg-violet-600 hover:bg-violet-700"
                  >
                    Launch App
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
   )
}