export type NavigationLink = {
	label: string;
	href: string;
};

export const navigationLinks: NavigationLink[] = [
	{
		label: 'Services',
		href: '/services'
	},
	{
		label: 'About',
		href: '/about'
	},
	{
		label: 'Contact',
		href: '/contact'
	}
];