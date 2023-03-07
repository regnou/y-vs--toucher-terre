// ----------------------------------------------------------------------------
// upload
// ----------------------------------------------------------------------------
async function upload(fileax) {
	// return new Promise(async function (resolve, reject) {
	// const metadata = {
	// 	contentType: ['image/jpeg', 'image/png']
	// };

	// DEBUG: UPLOAD:FIREBASE
	const { STORAGE } = getFirebase();
	console.debug('🚔debug 0 - filename: ', fileax.name.trim());
	console.debug('🚔debug 1 - upload file: ', fileax);

	// 1
	// 		 HERE, create a unique ID for the img, or it will be erased !!!
	console.debug('🚔 🐶🔥 ...');
	const uid = await crud__addNew(AX_CONST__DB_COLLECTION__img, {
		filename: fileax.name.trim()
	});
	// 		 HERE, create a unique ID for the img, or it will be erased !!!

	// 2
	const YOUR_STORAGE_PATH = '/media/' + uid.data;
	// Create a storage reference from our storage service
	const storageRef = ref(STORAGE, YOUR_STORAGE_PATH);
	// 'file' comes from the Blob or File API
	console.debug('🚔 🐶🔥 ...');
	const snap = await uploadBytes(storageRef, fileax);
	const downloadURL = await getDownloadURL(snap.ref);

	//
	console.debug('-----------------------------------------');
	console.debug('🚔  Upload finished: downloadURL/urlStorage: ', downloadURL, 'fileax', fileax);
	console.debug('-----------------------------------------');
	return downloadURL;

	// const uploadTask = uploadBytesResumable(storageRef, fileax, metadata);

	// // Listen for state changes, errors, and completion of the upload.
	// uploadTask.on('state_changed',
	// 	(snapshot) => {
	// 		// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
	// 		const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
	// 		console.debug('🚔Upload is ' + progress + '% done');
	// 		switch (snapshot.state) {
	// 			case 'paused':
	// 				console.debug('🚔Upload is paused');
	// 				break;
	// 			case 'running':
	// 				console.debug('🚔Upload is running');
	// 				break;
	// 		}
	// 	},
	// 	(error) => {
	// 		// A full list of error codes is available at
	// 		// https://firebase.google.com/docs/storage/web/handle-errors
	// 		switch (error.code) {
	// 			case 'storage/unauthorized':
	// 				// User doesn't have permission to access the object
	// 				break;
	// 			case 'storage/canceled':
	// 				// User canceled the upload
	// 				break;

	// 			// ...

	// 			case 'storage/unknown':
	// 				// Unknown error occurred, inspect error.serverResponse
	// 				break;
	// 		}
	// 	},
	// 	async () => {
	// 		console.debug("UPLOAD completed");
	// 		// Upload completed ok, now we can get the download URL
	// 		const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
	// 		// .then((downloadURL) => {
	// 		console.debug('🚔File available at', downloadURL);
	// 		// resolve(downloadURL);
	// 		// });
	// 		return downloadURL;
	// 	}
	// )

	// }) // promise END
}
// ----------------------------------------------------------------------------
// download
// ----------------------------------------------------------------------------
async function download(storagePath) {
	// const storageRef = ref(STORAGE, file);
	const { STORAGE } = getFirebase();
	const storageRef = ref(STORAGE, storagePath);
	console.debug('🚔 🐶🔥...');
	await getDownloadURL(storageRef);
}

export { download, upload };

import { AX_CONST__DB_COLLECTION__img } from 'app/0-config/db/firebase/AX_CONST__dbColletions';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { crud__addNew } from '../../stores/AX_BASE4__STORE_CRUD';
import { getFirebase } from './AX_API__firebaseClient';
