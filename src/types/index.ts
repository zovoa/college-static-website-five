export interface InitiativeProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface CourseProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface EventProps {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

export type NavItem = {
  label: string;
  href: string;
};