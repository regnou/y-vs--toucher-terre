import { base } from '$app/paths';

// {
//     id: '',
//     index: 1,
//     type: 'text',
//     label: '',
//     inputValue: ''
// },

export const DATAJSON__INJECT_CREATIONREALISATION = [
	{
		id: '1',
		index: 1,
		type: 'accordeon',
		posts: [
			{
				id: 1,
				page: 'Cuisinières en terre crue',
				url: '/cuisiniere-terre-crue',
				date_created: "12/12/12",
				date_modified: "10/10/10",
				form: [
					{
						id: '1',
						index: 1,
						type: 'text',
						label: 'titre 1',
						inputValue: 'Cuisinières en terre crue'
					},
					{
						id: '2',
						index: 2,
						type: 'area',
						label: 'content 1',
						inputValue:
							'Une cuisinière en terre crue permet une cuisine efficace sur feu de bois (fagots) dans un contexte convivial. Construction en matériaux locaux et/ou de récupération : terre argileuse, paille, pierre .... Construite en chantier collectif créatif pour tout public : liberté de forme possibles, simplicité de création, de fonctionnement, d’appropriation. Basée sur la technique de «Rocket Stove» de Ianto Evans.'
					}],
			},
			// ---------------------
			{
				id: 2,
				page: 'Charpentes réciproques',
				url: '/charpente-reciproques',
				date_created: "12/12/12",
				date_modified: "10/10/10",
				form: [
					{
						id: '',
						index: 3,
						type: 'text',
						label: 'titre 2',
						inputValue: 'Charpentes réciproques'
					},
					{
						id: '',
						index: 4,
						type: 'area',
						label: 'content 2',
						inputValue:
							'Structure de charpente autoportante le plus souvent en rond, qui ne nécessite aucun pilier central. Elle permet de créer des toits, des ponts et toutes sortes de structures'
					},
				],
			},
			// ---------------------
			{
				id: 3,
				page: 'Poêles de masse',
				url: '/poele-de-masse',
				date_created: "12/12/12",
				date_modified: "10/10/10",
				form: [
					{
						id: '',
						index: 5,
						type: 'text',
						label: 'titre 3',
						inputValue: 'Poêles de masse'
					},
					{
						id: '',
						index: 6,
						type: 'area',
						label: 'content 3',
						inputValue:
							'Économe en bois, ce type de poêle auto-construit est basé sur la technique du «Rocket Stove». La chaleur est accumulée dans la masse et ensuite diffusée par rayonnement. Ces poêles font partie des appareils de chauffage au bois les plus performants'
					},
				],
			},
			// ---------------------
			{
				id: 4,
				page: 'Habitats réversibles et cabanes',
				url: '/habitat-reversible-cabannes',
				date_created: "12/12/12",
				date_modified: "10/10/10",
				form: [
					{
						id: '',
						index: 7,
						type: 'text',
						label: 'titre 4',
						inputValue: 'Habitats réversibles et cabanes'
					},
					{
						id: '',
						index: 8,
						type: 'area',
						label: 'content 4',
						inputValue:
							'Biodégradable. Conçu à partir de matériaux naturels, à même de se décomposer naturellement une fois détruit (kerterre, love-shack, maison terre …). Tous ces habitats ont en commun le fait de permettre au terrain de revenir dans son état initial lorsqu’ils sont démontés ou compostés.'
					},
				],
			},
			// ---------------------
			{
				id: 5,
				page: 'Enduits et arts',
				url: '/enduit-arts',
				date_created: "12/12/12",
				date_modified: "10/10/10",
				form: [
					{
						id: '',
						index: 9,
						type: 'text',
						label: 'titre 5',
						inputValue: 'Enduits et arts'
					},
					{
						id: '',
						index: 10,
						type: 'area',
						label: 'content 5',
						inputValue:
							'Posés sur supports variés (paille, toile de jutte, pierres, parpaings ...); Fabriqués à partir de terre argileuse et au mieux, à partir de matériaux trouvés sur chantier ou alentour (paille, sciure, bouse, foin, tonte etc ...)'
					},
				],
			},
			// ---------------------
		]
	},
	{
		id: '2',
		index: 11,
		type: 'file',
		label: 'img 1',
		inputValue:
			'/media/gallery/realisations-creations/charpente-reciproque/toucher-terre-realisations-creations-charpente-reciproque-gallerie_01.jpg'
	},
	{
		id: '3',
		index: 12,
		type: 'file',
		label: 'img 2',
		inputValue:
			'/media/gallery/realisations-creations/cuisiniere-terre-crue/toucher-terre-realisations-creations-cuisiniere-terre-crue-rocketstove_01.JPG'
	},
	{
		id: '4',
		index: 13,
		type: 'file',
		label: 'img 3',
		inputValue:
			'/media/gallery/realisations-creations/enduits-arts/toucher-terre-realisations-creations-enduits-arts-gallerie_01.jpg'
	}
];
