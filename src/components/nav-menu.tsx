'use client'
import '../app/global.css';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu";

  import { Button } from "@radix-ui/themes";

  import Link from "next/link";

export default function Nav_Menu() {
    return(
        <div className="my-4 mx-4">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul>
                                <li className="flex flex-col">
                                    <NavigationMenuLink asChild className="my-4 px-2">
                                        <a href="/">Articles</a>
                                    </NavigationMenuLink>

                                    <NavigationMenuLink asChild className="my-4 px-2">
                                        <a href="/" className="w-32">Calculator</a>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/">
                            <NavigationMenuLink>
                                Education
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/">
                            <NavigationMenuLink>
                                <Button>Link</Button>
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}