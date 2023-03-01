export const axlog = (
	//
	data,
	url: string,
	pagename: string,
	hiLevel = false,
	verb = 'MOUNT',
	isOrange = false
) => {
	console.debug('🚔 🎤🎤 ');

	console.dir(data);

	const axEnv = url.includes('/cms/') ? 'CMS' : 'APP';

	if (hiLevel) {
		// LIGHT LOG
		// yellow - \x1B[103;30;4m ${axEnv} \x1B[m\x1B[107;93;4m
		// red
		console.debug(`🚔 🏎️✅ ${verb}-ED\x1B[41;97;4m${axEnv}\x1B[m\x1B[107;30;4m${pagename}\x1B[m`);
	} else {
		if (isOrange)
			// HEAVY LOG
			// BLUE - app -- \x1B[44;97;4m
			// RED - cms
			// yellow - wc
			console.debug(
				`🚔 🏎️✅ ${verb}-ED ${
					axEnv === 'APP' ? '\x1B[44;97;4m' : '\x1B[41;30;4m'
				}${axEnv}\x1B[m\x1B[43;30;4mW\x1B[m \x1B[107;34;4m${pagename}\x1B[m \x1B[43;30;4m${JSON.stringify(
					data,
					null,
					2
				)}\x1B[m`
			);
		// HEAVY LOG
		else
			console.debug(
				`🚔 🏎️✅ ${verb}-ED ${
					axEnv === 'APP' ? '\x1B[44;97;4m' : '\x1B[41;30;4m'
				}¨${axEnv}\x1B[m \x1B[107;31;4m${pagename}\x1B[m \x1B[43;30;4m${JSON.stringify(
					data,
					null,
					2
				)}\x1B[m`
			);
	}
	// console.debug('🚔 \n');
};
