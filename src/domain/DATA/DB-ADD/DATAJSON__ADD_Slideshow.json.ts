export const DATAJSON__ADD_SLIDESHOW = [
	{
		id: '1',
		index: 1,
		type: 'text',
		label: "seo de l'image/video",
		inputValue: ''
	},
	{
		union: [
			{
				id: '1',
				index: 1,
				type: 'text',
				format: 'video', // image | video =>  a constify
				label: 'video du slideshow',
				inputValue: ''
			},
			{
				id: '2',
				index: 2,
				type: 'file',
				format: 'image', // image | video =>  a constify
				label: 'image du slideshow',
				inputValue: ''
			}
		]
	}
];
