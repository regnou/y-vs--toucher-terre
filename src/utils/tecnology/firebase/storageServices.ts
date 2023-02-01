import { getFirebase } from '@app/utils/tecnology/firebase/firebaseClient';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { TABLE_IMG } from '../../../entities/COLLECTIONS';
import { dao_add } from './services/firestoreServices';

async function upload(fileax) {
	// return new Promise(async function (resolve, reject) {
	const metadata = {
		contentType: ['image/jpeg', 'image/png']
	};
	const { STORAGE } = getFirebase();
	console.log('debug 0 - filename: ', fileax.name.trim());
	console.log('debug 1 - upload file: ', fileax);

	// 		 HERE, create a unique ID for the img, or it will be erased !!!
	const uid = await dao_add(TABLE_IMG, { filename: fileax.name.trim() });
	// 		 HERE, create a unique ID for the img, or it will be erased !!!
	const YOUR_STORAGE_PATH = '/media/' + uid;

	// Create a storage reference from our storage service
	const storageRef = ref(STORAGE, YOUR_STORAGE_PATH);

	// 'file' comes from the Blob or File API
	const snap = await uploadBytes(storageRef, fileax);
	const downloadURL = await getDownloadURL(snap.ref);
	console.log('mission finished: ', downloadURL);
	return downloadURL;

	// const uploadTask = uploadBytesResumable(storageRef, fileax, metadata);

	// // Listen for state changes, errors, and completion of the upload.
	// uploadTask.on('state_changed',
	// 	(snapshot) => {
	// 		// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
	// 		const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
	// 		console.log('Upload is ' + progress + '% done');
	// 		switch (snapshot.state) {
	// 			case 'paused':
	// 				console.log('Upload is paused');
	// 				break;
	// 			case 'running':
	// 				console.log('Upload is running');
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
	// 		console.log("UPLOAD completed");
	// 		// Upload completed successfully, now we can get the download URL
	// 		const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
	// 		// .then((downloadURL) => {
	// 		console.log('File available at', downloadURL);
	// 		// resolve(downloadURL);
	// 		// });
	// 		return downloadURL;
	// 	}
	// )

	// }) // promise END
}

async function download(storagePath) {
	// const storageRef = ref(STORAGE, file);
	const { STORAGE } = getFirebase();
	const storageRef = ref(STORAGE, storagePath);
	const value = await getDownloadURL(storageRef);
}

export { download, upload };
