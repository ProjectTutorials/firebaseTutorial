import { addDoc } from "firebase/firestore";
import { postsCollectionRef } from "../../config/Firebase";

export const createPost = async (existingHeading, existingContent) => {
    await addDoc(postsCollectionRef, {
        thisHeading: existingHeading,
        thisContent: existingContent,
    })
    existingHeading("");
    existingContent("");
}
