// export const logStore = (str) => {};
export {};

export const axlog = (data, url: string, pagename: string, hiLevel = false) => {
	console.debug('🚔');

	console.dir(data);

	const axEnv = url.includes('/cms/') ? 'CMS' : 'APP';

	if (!hiLevel) {
		// LIGHT LOG
		// yellow - \x1B[103;30;4m ${axEnv} \x1B[m\x1B[107;93;4m
		// red
		console.debug(
			`🚔🏎️✅ MOUNT-ED \x1B[41;97;4m ${axEnv} \x1B[m\x1B[107;91;4m ${pagename} \x1B[m\n`
		);
	} else {
		// HEAVY LOG
		console.debug(
			`🚔🏎️✅ MOUNT-ED \x1B[103;30;4m ${axEnv} \x1B[m\x1B[107;93;4m ${pagename} \x1B[m
		\x1B[43;30;4m${JSON.stringify(data, null, 2)} \x1B[m\n`
		);
	}
	console.debug('🚔\n');
};
