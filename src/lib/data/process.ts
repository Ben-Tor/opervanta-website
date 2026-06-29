export type ProcessStep = {
	step: string;
	title: string;
	description: string;
};

export const processSteps: ProcessStep[] = [
	{
		step: '01',
		title: 'Review',
		description:
			'Understand the software, workflow, business goal, and where quality or usability problems may exist.'
	},
	{
		step: '02',
		title: 'Test',
		description:
			'Check user flows, forms, pages, features, APIs, and business-critical paths for issues.'
	},
	{
		step: '03',
		title: 'Report',
		description:
			'Document bugs, usability problems, workflow friction, and improvement opportunities clearly.'
	},
	{
		step: '04',
		title: 'Improve',
		description:
			'Support practical next steps, software fixes, workflow improvements, and future automation opportunities.'
	}
];