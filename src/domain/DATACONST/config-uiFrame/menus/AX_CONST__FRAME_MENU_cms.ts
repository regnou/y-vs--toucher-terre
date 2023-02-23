/**
 * utilise dans 2 cas:
 * - le drawer
 * - (pas dans le header, il n y en a pas ds le CMS)
 * - la page /cms/site: pour administrer tt les pages du site
 */
export const AX_CONST__FRAME_MENU_cms: I_ui__menu[] = [
	{
		url: '/acceuil',
		title: 'acceuil',
		img: '/media/icon/icon-menu-acceuil--creme.png'
	},
	{
		url: '/la-demarche',
		title: 'la démarche',
		img: '/media/icon/icon-menu-la-demarche--creme.png'
	},
	{
		url: '/blog',
		title: 'blog -- Création / Réalisation',
		img: '/media/icon/icon-menu-realisation--creme.png'
	},
	{
		url: '/event',
		title: 'event -- Prochains rdv',
		img: '/media/icon/icon-menu-prochains-rdv--creme.png'
	}
	// {
	// 	url: '/newsletter',
	// 	title: 'Newsletter'
	// }
];
