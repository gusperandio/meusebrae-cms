export interface UserNav {
  name: string;
  email: string;
  avatar: string;
  level: string; 
}

export interface NavItem {
  title: string;
  url: string;
  isActive: boolean;
}

export interface NavGroup {
  title: string;
  url: string;
  items: NavItem[];
  
}

export interface NavMain {
  user: UserNav;
    navMain: NavGroup[];
}

