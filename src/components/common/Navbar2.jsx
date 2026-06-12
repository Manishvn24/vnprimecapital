"use client";

import Link from "next/link";
import { Book, Menu, Sunset, Trees, TrendingUp, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Header from "./Header";

const Navbar2 = ({
  logo = {
    url: "/",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "LinkFlow",
  },

  menu = [
    { title: "Home", url: "/" },

    {
      title: "Products",
      items: [
        {
          title: "Blog",
          description: "Latest industry news and updates",
          icon: <Book className="size-5 shrink-0" />,
          url: "/",
        },
        {
          title: "Company",
          description: "Learn more about our mission",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/",
        },
        {
          title: "Careers",
          description: "Join our growing team",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/",
        },
        {
          title: "Support",
          description: "Get help when you need it",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/",
        },
      ],
    },

    {
      title: "Resources",
      items: [
        {
          title: "Help Center",
          description: "Find answers quickly",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/",
        },
        {
          title: "Contact Us",
          description: "Reach out to our team",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/",
        },
        {
          title: "Status",
          description: "Check service availability",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/",
        },
        {
          title: "Terms",
          description: "Read our terms and policies",
          icon: <Book className="size-5 shrink-0" />,
          url: "/",
        },
      ],
    },
  ],

  auth = {
    login: {
      title: "Login",
      url: "/login",
    },

    signup: {
      title: "Sign Up",
      url: "/register",
    },
  },
}) => {
  return (
    <>
      <div className="fixed inset-x-0 z-50">
        <Header />
      </div>
      <header className="fixed top-10 left-0 z-50 w-full">
        <div className="border-b border-border bg-background/70 backdrop-blur-xl">
          <div className="container mx-auto px-4">
            {/* Desktop */}
            <nav className="hidden h-20 items-center justify-between lg:flex">
              <div className="flex items-center gap-8">
                <Link href="#home" className="group flex items-center gap-3">
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/40">
                    <TrendingUp
                      size={20}
                      className="text-primary-foreground"
                      strokeWidth={2.5}
                    />
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-primary opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60" />
                  </div>

                  <div className="leading-tight">
                    <div className="text-lg font-bold tracking-wide text-foreground">
                      VN Prime
                    </div>

                    <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                      Capital
                    </div>
                  </div>
                </Link>

                <NavigationMenu>
                  <NavigationMenuList>
                    {menu.map((item) => renderMenuItem(item))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              <div className="flex items-center gap-3">
                <Button variant="outline" asChild>
                  <Link href={auth.login.url}>{auth.login.title}</Link>
                </Button>

                <Button asChild>
                  <Link href={auth.signup.url}>{auth.signup.title}</Link>
                </Button>
              </div>
            </nav>

            {/* Mobile */}
            <div className="flex h-20 items-center justify-between lg:hidden">
              <Link href="#home" className="group flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/40">
                  <TrendingUp
                    size={20}
                    className="text-primary-foreground"
                    strokeWidth={2.5}
                  />

                  <div className="absolute inset-0 -z-10 rounded-2xl bg-primary opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60" />
                </div>

                <div className="leading-tight">
                  <div className="text-lg font-bold tracking-wide text-foreground">
                    VN Prime
                  </div>

                  <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                    Capital
                  </div>
                </div>
              </Link>

              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>

                <SheetContent className="bg-background">
                  <SheetHeader>
                    <SheetTitle>
                      <Link
                        href="#home"
                        className="group flex items-center gap-3"
                      >
                        <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary/40">
                          <TrendingUp
                            size={20}
                            className="text-primary-foreground"
                            strokeWidth={2.5}
                          />

                          <div className="absolute inset-0 -z-10 rounded-2xl bg-primary opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60" />
                        </div>

                        <div className="leading-tight">
                          <div className="text-lg font-bold tracking-wide text-foreground">
                            VN Prime
                          </div>

                          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                            Capital
                          </div>
                        </div>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="mt-8 flex flex-col gap-6">
                    <Accordion type="single" collapsible>
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>

                    <div className="flex flex-col gap-3">
                      <Button variant="outline" asChild>
                        <Link href={auth.login.url}>{auth.login.title}</Link>
                      </Button>

                      <Button asChild>
                        <Link href={auth.signup.url}>{auth.signup.title}</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

function renderMenuItem(item) {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>

        <NavigationMenuContent>
          <div className="w-[420px] p-2">
            {item.items.map((subItem) => (
              <NavigationMenuLink key={subItem.title} asChild>
                <SubMenuLink item={subItem} />
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild>
        <Link
          href={item.url}
          className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function renderMobileMenuItem(item) {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title}>
        <AccordionTrigger>{item.title}</AccordionTrigger>

        <AccordionContent>
          <div className="space-y-2 pt-2">
            {item.items.map((subItem) => (
              <SubMenuLink key={subItem.title} item={subItem} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="block py-2 font-medium text-foreground"
    >
      {item.title}
    </Link>
  );
}

function SubMenuLink({ item }) {
  return (
    <Link
      href={item.url}
      className="flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-muted"
    >
      <div className="text-primary">{item.icon}</div>

      <div>
        <div className="text-sm font-semibold text-foreground">
          {item.title}
        </div>

        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
      </div>
    </Link>
  );
}

export { Navbar2 };
