import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { storage, db } from "./firebase";

export const uploadImage = async (file, event = "general") => {
  if (!file) throw new Error("No file provided");

  // clean file name (avoids Firebase issues with spaces/special chars)
  const fileName = file.name.replace(/\s+/g, "_");

  // event-wise folder structure (IMPORTANT)
  const imageRef = ref(storage, `events/${event}/${Date.now()}-${fileName}`);

  const snapshot = await uploadBytes(imageRef, file);
  const url = await getDownloadURL(snapshot.ref);

  await addDoc(collection(db, "images"), {
    url,
    event,
    fileName,
    createdAt: serverTimestamp(),
  });

  return url;
};
