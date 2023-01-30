// @@@ FIREBASE-CONFIG
import { config } from './firebase.config';
// @@@ FIREBASE CLIENT
import { getApps, initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { connectFirestoreEmulator, getFirestore, initializeFirestore } from 'firebase/firestore';
// !!!
// !!! GET FIREBASE
// !!!
// @@@ INIT ALL TYPES below, mandatory to use the DAO
// getFirebase(); //todo ?
// @@@
export function getFirebase() {
	// ---
	console.log('🔥');
	const services = initializeServices();
	if (!services.isConfigured) {
		console.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉');
		console.log('🔥🎉 Initializing FIREBASE <-- [1st time] ');
		console.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉');
		// initAllCol(services.FIRESTORE); // todo

		//////////////////////////////////
		connectToEmulators(services); // actuellement en local
		//////////////////////////////////

		// enableMultiTabIndexedDbPersistence(services.firestore)
	}
	return services;
	// ---
	// ---
	// ---
	function initializeServices() {
		// ---
		const isConfigured = getApps().length > 0;
		const app = initializeApp(config.firebase);

		// const FIRESTORE = getFirestore(app);
		const FIRESTORE = initializeFirestore(app, {
			experimentalForceLongPolling: true
		});

		const STORAGE = getStorage(app);

		const AUTH = getAuth(app);
		const GOOGLE_AUTH__PROVIDER = new GoogleAuthProvider();
		// ---
		AUTH.languageCode = 'it'; // --- lang
		// To apply the default browser preference instead of explicitly setting it.
		AUTH.useDeviceLanguage();
		// setPersistence(auth, inMemoryPersistence) // ?
		GOOGLE_AUTH__PROVIDER.addScope('profile');
		GOOGLE_AUTH__PROVIDER.addScope('email');

		// TODO - if contacts
		// GOOGLE_AUTH__PROVIDER.addScope('https://www.googleapis.com/auth/contacts.readonly');
		GOOGLE_AUTH__PROVIDER.setCustomParameters({
			// --- option
			login_hint: 'user@example.com'
		});
		// Scopes - https://developers.google.com/identity/protocols/oauth2/scopes#people
		// https://www.googleapis.com/auth/contacts	See, edit, download, and permanently delete your contacts
		// https://www.googleapis.com/auth/contacts.other.readonly	See and download contact info automatically saved in your "Other contacts"
		// https://www.googleapis.com/auth/contacts.readonly	See and download your contacts
		// https://www.googleapis.com/auth/directory.readonly	See and download your organization's GSuite directory
		// https://www.googleapis.com/auth/user.addresses.read	View your street addresses
		// https://www.googleapis.com/auth/user.birthday.read	See and download your exact date of birth
		// https://www.googleapis.com/auth/user.emails.read	View your email addresses
		// https://www.googleapis.com/auth/user.gender.read	See your gender
		// https://www.googleapis.com/auth/user.organization.read	See your education, work history and org info
		// https://www.googleapis.com/auth/user.phonenumbers.read	See and download your personal phone numbers
		// https://www.googleapis.com/auth/userinfo.email	View your email address
		// https://www.googleapis.com/auth/userinfo.profile	See your personal info, including any personal info you've made publicly available
		// ---
		return {
			firebaseApp: app,
			FIRESTORE,
			STORAGE,
			AUTH,
			GOOGLE_AUTH__PROVIDER,
			isConfigured
		};
	}
	function connectToEmulators({ FIRESTORE }: any) {
		//i f (location.hostname === 'localhost') {
		console.log('🟡 oooooooooo USING LOCAL EMULATOR oooooooooo 🟡');
		// --- DEBUG local
		connectFirestoreEmulator(FIRESTORE, 'localhost', 8080);
		// --- todo
		// connectAuthEmulator(AUTH, 'http://localhost:9099');
		// } e lse { console.log('🟥🟥 oooooooooo USING PRODUCTION oooooooooo 🟥🟥');
	}
}
// @@@
// @@@ GET AUTH (bidel) -- useless
// @@@
// export function onAuth(callback: any) {
// 	const { AUTH } = getFirebase();
// 	return onAuthStateChanged(AUTH, (user) => {
// 		console.log(user);
// 		callback(user);
// 	});
// }
// @@@
// @@@
// @@@
