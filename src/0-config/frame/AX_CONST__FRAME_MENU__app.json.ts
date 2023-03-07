// ---------------------------------------------
// FRAME-MENU--APP
// ---------------------------------------------

import { AX_CONST__FRAME__frameDir } from './AX_CONST__FRAME';

/**
 * Utilise dans 2 cas:
 * - le drawer - app
 * - le header -- app
 *
 **/
export const AX_CONST__FRAME_MENU__app: I_ui__menu[] = [
	{
		url: '/acceuil',
		title: 'Acceuil',
		img: AX_CONST__FRAME__frameDir + 'icon/icon-menu-acceuil--creme.png'
	},
	{
		url: '/la-demarche',
		title: 'La démarche',
		img: AX_CONST__FRAME__frameDir + 'icon/icon-menu-la-demarche--creme.png'
	},
	{
		url: '/creations-realisations',
		title: 'Créations / Réalisations',
		img: AX_CONST__FRAME__frameDir + 'icon/icon-menu-realisation--creme.png'
	},
	{
		url: '/prochains-rendez-vous',
		title: 'Prochains rdv',
		img: AX_CONST__FRAME__frameDir + 'icon/icon-menu-prochains-rdv--creme.png'
	}
	// {
	// 	url: '/',
	// 	title: 'Newsletter',
	// 	img: AX_CONST__FRAME__frameDir + 'icon/icon-menu-newsletter--creme.png'
	// }
];
