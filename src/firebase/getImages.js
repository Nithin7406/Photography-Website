import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "./firebase";

export const uploadImage = async (file, category = "general") => {
  const imageRef = ref(storage, `gallery/${Date.now()}-${file.name}`);

  const snapshot = await uploadBytes(imageRef, file);

  const url = await getDownloadURL(snapshot.ref);

  await addDoc(collection(db, "images"), {
    url,
    category,
    createdAt: Date.now(),
  });

  return url;
};
