export type Problem = {
	title: string;
	description: string;
};

export const businessProblems: Problem[] = [
	{
		title: 'Bugs found too late',
		description:
			'Software issues discovered after launch can damage trust, create support work, and cost more to fix.'
	},
	{
		title: 'Confusing user flows',
		description:
			'Forms, dashboards, portals, and workflows that are hard to use can frustrate users and reduce conversions.'
	},
	{
		title: 'Manual work everywhere',
		description:
			'Repetitive tasks, spreadsheets, disconnected tools, and unclear processes slow down execution.'
	},
	{
		title: 'Poor visibility',
		description:
			'When systems are not structured clearly, teams struggle to understand what is working and what needs attention.'
	}
];