// ---------------------------------------------
// FRAME-MENU--CMS
// ---------------------------------------------

import { AX_CONST__FRAME__frameDir } from './AX_CONST__FRAME';

/**
 * utilise dans 2 cas:
 * - le drawer
 * - (pas dans le header, il n y en a pas ds le CMS)
 * - la page /cms/dyn: pour administrer tt les pages du site
 */
export const AX_CONST__FRAME_MENU__cms: I_ui__menu[] = [
	{
		url: '/acceuil',
		title: 'acceuil',
		img: AX_CONST__FRAME__frameDir + 'icon/icon-menu-acceuil--creme.png'
	},
	{
		url: '/la-demarche',
		title: 'la démarche',
		img: AX_CONST__FRAME__frameDir + 'icon/icon-menu-la-demarche--creme.png'
	},
	{
		url: '/creations-realisations',
		title: 'Création / Réalisation',
		img: AX_CONST__FRAME__frameDir + 'icon/icon-menu-realisation--creme.png'
	},
	{
		url: '/prochains-rendez-vous',
		title: 'Prochains rdv',
		img: AX_CONST__FRAME__frameDir + 'icon/icon-menu-prochains-rdv--creme.png'
	}
	// {
	// 	url: '/newsletter',
	// 	title: 'Newsletter'
	// }
];
