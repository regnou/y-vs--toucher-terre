// cela va creer un I_blogItem, mais ici, on laisse tableau de saisie user (ce qui est la cas dans add)
export const AX_CONST__CMS_addPost: I_DTO__uiinputValue[] = [
	{
		pos: 1,
		tag: 'text',
		label: "titre de l'article",
		value: ''
	},
	{
		pos: 2,
		tag: 'text',
		label: "slug de la page de l'article",
		value: ''
	},
	{
		pos: 3,
		tag: 'area',
		label: "corps de l'article",
		value: ''
	}
];
