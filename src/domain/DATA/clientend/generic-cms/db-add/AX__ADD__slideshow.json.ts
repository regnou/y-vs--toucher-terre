export const AX__ADD__SLIDESHOW = [
	{
		id: '1',
		pos: 1,
		type: 'text',
		label: "seo de l'image/video",
		value: ''
	},
	{
		union: [
			{
				id: '1',
				pos: 1,
				type: 'text',
				format: 'video', // image | video =>  a constify
				label: 'video du slideshow',
				value: ''
			},
			{
				id: '2',
				pos: 2,
				type: 'file',
				format: 'image', // image | video =>  a constify
				label: 'image du slideshow',
				value: ''
			}
		]
	}
];
