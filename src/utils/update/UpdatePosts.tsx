import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../config/Firebase"

export const updatePost = async (existingHeading, existingContent, id) => {
    const post = doc(db, 'posts', id);
    const newFields = { thisHeading: existingHeading, thisContent: existingContent };
    await updateDoc(post, newFields);
}

