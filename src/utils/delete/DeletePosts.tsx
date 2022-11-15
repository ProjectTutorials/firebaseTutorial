import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../config/Firebase"

export const deletePost = async (id) => {
    const data = doc(db, 'posts', id)
    await deleteDoc(data)
}
