/**
 * utilise dans 2 cas:
 * - le drawer
 * - (pas dans le header, il n y en a pas ds le CMS)
 * - la page /cms/site: pour administrer tt les pages du site
 */
export const AX__HEADERMENU_CMS: I_ui__menu[] = [
	{
		url: '/acceuil',
		title: 'Acceuil'
	},
	{
		url: '/la-demarche',
		title: 'La démarche'
	},
	{
		url: '/blog',
		title: 'blog -- Création / Réalisation'
	},
	{
		url: '/event',
		title: 'event -- Prochains rdv'
	},
	{
		url: '/newsletter',
		title: 'Newsletter'
	}
];
