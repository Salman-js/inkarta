import * as React from 'react';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { mapOptions } from '@/lib/map/constants';

export default function NewGameNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>New Game</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[350px] p-4 gap-3 md:w-[600px] md:grid-cols-2 lg:w-[700px] '>
              {mapOptions.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={`/map${component.route}`}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  const image = mapOptions.find((option) => option.title === title)?.image;
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex flex-row justify-start items-start space-x-3',
            className
          )}
          {...props}
        >
          <div className='w-fit border'>
            <img
              src={image}
              alt={title}
              width={100}
              height={100}
              className='rounded-md border'
            />
          </div>
          <div className='space-y-1 '>
            <div className='text-sm font-medium'>{title}</div>
            <p className='line-clamp-3 lg:text-sm text-xs leading-snug text-muted-foreground'>
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
