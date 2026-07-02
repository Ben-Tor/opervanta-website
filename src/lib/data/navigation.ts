export const navigationLinks = [
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
] as const;

export type NavigationLink = (typeof navigationLinks)[number];