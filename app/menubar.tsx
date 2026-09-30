
"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowUpRight,
  BarChart3,
  CircleCheckIcon,
  CircleDashedIcon,
  Cloud,
  Code2,
  CreditCard,
  Layers3,
  LayoutDashboard,
  LifeBuoy,
  Menu,
  Rocket,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button"

const products = [
  {
    title: "Dashboard",
    description: "Monitor your business from one place.",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    description: "Understand your data and performance.",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Cloud Solutions",
    description: "Build scalable cloud infrastructure.",
    href: "/cloud",
    icon: Cloud,
  },
  {
    title: "Integrations",
    description: "Connect your favorite tools and services.",
    href: "/integrations",
    icon: Layers3,
  },
]

const resources = [
  {
    title: "Documentation",
    description: "Learn how to use our platform.",
    href: "/docs",
    icon: Code2,
  },
  {
    title: "Help Center",
    description: "Find answers and get support.",
    href: "/help",
    icon: LifeBuoy,
  },
  {
    title: "Security",
    description: "Learn how we protect your data.",
    href: "/security",
    icon: ShieldCheck,
  },
]

export function NavigationMenuDemo() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="size-5" />
          </div>

          <span className="hidden text-lg sm:inline-block">
            Acme
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>

            {/* Products */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Products
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <div className="grid w-[650px] grid-cols-[1fr_220px] gap-3 p-3">

                  {/* Product links */}
                  <div className="grid grid-cols-2 gap-1">
                    {products.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </div>

                  {/* Featured card */}
                  <div className="flex flex-col justify-between rounded-xl bg-muted p-5">
                    <div>
                      <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-background shadow-sm">
                        <Rocket className="size-5" />
                      </div>

                      <h3 className="font-semibold">
                        Build faster
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        Everything you need to launch your next project.
                      </p>
                    </div>

                    <Link
                      href="/get-started"
                      className="mt-5 inline-flex items-center text-sm font-medium hover:underline"
                    >
                      Get started
                      <ArrowUpRight className="ml-1 size-4" />
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Solutions */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Solutions
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <div className="w-[500px] p-3">
                  <div className="grid grid-cols-2 gap-2">

                    <ListItem
                      title="Teams"
                      href="/solutions/teams"
                      icon={Users}
                    >
                      Collaborate with your entire team.
                    </ListItem>

                    <ListItem
                      title="Developers"
                      href="/solutions/developers"
                      icon={Code2}
                    >
                      Powerful tools for modern developers.
                    </ListItem>

                    <ListItem
                      title="Payments"
                      href="/solutions/payments"
                      icon={CreditCard}
                    >
                      Simple and secure payment solutions.
                    </ListItem>

                    <ListItem
                      title="Enterprise"
                      href="/solutions/enterprise"
                      icon={ShieldCheck}
                    >
                      Enterprise-ready security and scale.
                    </ListItem>

                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Resources
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <div className="w-[500px] p-3">
                  <div className="grid grid-cols-2 gap-2">
                    {resources.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Status */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Status
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <div className="w-[260px] p-3">
                  <StatusItem
                    icon={<CircleDashedIcon />}
                    title="In Progress"
                  />

                  <StatusItem
                    icon={<CircleCheckIcon />}
                    title="Completed"
                  />

                  <StatusItem
                    icon={<Settings />}
                    title="System Updates"
                  />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Direct links */}
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href="/pricing">Pricing</Link>}
              />
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href="/docs">Docs</Link>}
              />
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/login">
              Log in
            </Link>
          </Button>

          <Button asChild>
            <Link href="/get-started">
              Get started
              <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="size-5" />
          <span className="sr-only">
            Open menu
          </span>
        </Button>
      </div>
    </header>
  )
}

function ListItem({
  title,
  children,
  href,
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string
  icon?: React.ElementType
}) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link
            href={href}
            className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
          >
            {Icon && (
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-background shadow-sm transition-colors group-hover:bg-accent">
                <Icon className="size-4" />
              </div>
            )}

            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium">
                {title}
              </div>

              <div className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  )
}

function StatusItem({
  icon,
  title,
}: {
  icon: React.ReactNode
  title: string
}) {
  return (
    <Link
      href="#"
      className="flex items-center gap-3 rounded-lg p-3 text-sm transition-colors hover:bg-muted"
    >
      <div className="flex size-8 items-center justify-center rounded-md bg-muted">
        {icon}
      </div>

      <span className="font-medium">
        {title}
      </span>
    </Link>
  )
}

