// cela va creer un I_blogItem, mais ici, on laisse tableau de saisie user (ce qui est la cas dans add)
export const AX_CONST__CMS_addPost: I_UI__inputValue[] = [
	{
		id: '1',
		pos: 1,
		tag: 'text',
		label: "titre de l'article",
		value: ''
	},
	{
		id: '2',
		pos: 2,
		tag: 'text',
		label: "slug de la page de l'article",
		value: ''
	},
	{
		id: '3',
		pos: 3,
		tag: 'area',
		label: "corps de l'article",
		value: ''
	}
];
