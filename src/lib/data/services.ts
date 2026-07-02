export type Service = {
	title: string;
	description: string;
};

export type ServiceDetail = {
	title: string;
	summary: string;
	points: string[];
};

export const coreServices: Service[] = [
	{
		title: 'Software QA and testing',
		description:
			'Find bugs, broken flows, usability issues, and software problems before they affect users or customers.'
	},
	{
		title: 'Software improvement',
		description:
			'Review existing digital systems, investigate technical friction, and support practical improvements.'
	},
	{
		title: 'Workflow automation',
		description:
			'Reduce repeated manual work by improving how tools, systems, and business processes connect.'
	}
];

export const serviceDetails: ServiceDetail[] = [
	{
		title: 'Software QA and testing',
		summary:
			'Review important user flows, business critical paths, forms, pages, dashboards, and system behaviour to identify issues before they create bigger business problems.',
		points: [
			'Manual testing of key user flows',
			'Bug identification and issue documentation',
			'Usability and clarity review',
			'Regression testing support after changes'
		]
	},
	{
		title: 'Software improvement',
		summary:
			'Assess existing digital systems to find friction, unclear steps, weak usability, and areas where software execution can be improved.',
		points: [
			'Workflow and usability review',
			'Process gap identification',
			'Improvement recommendations',
			'Support for clearer technical decisions'
		]
	},
	{
		title: 'Workflow automation',
		summary:
			'Identify repeated manual work, disconnected tools, spreadsheet dependency, and process steps that can be simplified or prepared for automation.',
		points: [
			'Manual workflow analysis',
			'Automation opportunity mapping',
			'Tool and process connection review',
			'Practical next step planning'
		]
	}
];

export const deliverables = [
	'Clear issue list',
	'Business impact notes',
	'Workflow friction findings',
	'Practical improvement recommendations',
	'Prioritized next steps'
];