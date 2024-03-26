
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const itemsCollection = collection(db, `users/${userId}/items`);
    const itemsSnapshot = await getDocs(itemsCollection);
    const itemsList = itemsSnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
    }));
    return itemsList;
}

export async function addItem(userId, item) {
    const itemsCollection = collection(db, `users/${userId}/items`);
    const itemRef = await addDoc(itemsCollection, item);
    return itemRef.id;
}