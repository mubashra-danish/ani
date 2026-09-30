
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


import React from 'react'

const Navbar = () => {
  return (
    <div><NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
           <NavigationMenuLink>Link2</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
      <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa nihil voluptatem quidem eaque? Vel dolores necessitatibus laborum veniam quisquam! Cumque similique tempora cum quaerat assumenda consequatur modi nihil quia aliquam!</NavigationMenuLink>
           <NavigationMenuLink>Link2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officia molestias quod natus excepturi consectetur expedita, accusantium similique mollitia, fugit nostrum dolor atque voluptatem! Quibusdam magnam architecto rerum blanditiis dolorem!</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
      <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
           <NavigationMenuLink>Link2</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
      <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptas, accusantium, laborum fuga dolorem explicabo, esse quis a illo voluptates vero veniam deleniti labore numquam. Porro facere ullam quod laborum.</NavigationMenuLink>
           <NavigationMenuLink>Link2 ghgf hgfh fgh Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit consequuntur doloremque magnam vitae, rerum repellendus quos, omnis placeat alias nostrum corrupti, aliquid quasi aut porro? Eligendi soluta vero voluptatibus dolorem.</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu></div>
  )
}

export default Navbar
