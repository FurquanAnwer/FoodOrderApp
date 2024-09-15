import { Menu } from 'lucide-react'
import { Separator } from './ui/separator'
import { Sheet , SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './ui/sheet'
import React from 'react'
import { Button } from './ui/button'

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className = "text-orange-500"></Menu>
        </SheetTrigger>
        <SheetContent>
            <SheetTitle>
                <span>Welcome to Merneats.com!</span>
            </SheetTitle>
            <Separator/>
            <SheetDescription className='flex'>
                <Button className="flex-1 font-bold bg-orange-500">Log In</Button>

            </SheetDescription>
        </SheetContent>

    </Sheet>
  )

}

export default MobileNav
