// src/firebase/imageServices.js

import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { storage, db } from "./firebase";

// ==========================================
// 1. UPLOAD IMAGE (Create)
// ==========================================
export const uploadImage = async (file, category = "general") => {
  try {
    // Create a unique file name to prevent overriding
    const imageRef = ref(storage, `gallery/${Date.now()}-${file.name}`);

    // Upload physical file to Storage
    const snapshot = await uploadBytes(imageRef, file);
    const url = await getDownloadURL(snapshot.ref);

    // Save URL and data to Firestore Database
    await addDoc(collection(db, "images"), {
      url,
      category,
      createdAt: Date.now(),
    });

    return url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

// ==========================================
// 2. FETCH IMAGES (Read)
// ==========================================
export const getImagesByCategory = async (category) => {
  try {
    // Only grab images that match the selected event dropdown
    const q = query(
      collection(db, "images"),
      where("category", "==", category)
    );
    const snapshot = await getDocs(q);

    // Return an array of objects with the document ID included
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

// ==========================================
// 3. DELETE IMAGE (Delete)
// ==========================================
export const deleteImage = async (docId, imageUrl) => {
  try {
    // 1. Delete the record from the Firestore Database
    await deleteDoc(doc(db, "images", docId));

    // 2. Delete the physical file from Firebase Storage to save space
    const imageRef = ref(storage, imageUrl);
    await deleteObject(imageRef);

    return true;
  } catch (error) {
    console.error("Error deleting image:", error);
    return false;
  }
};
