import { getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { postsCollectionRef } from "../../config/Firebase"
import { deletePost } from "../delete/DeletePosts"
import { Inputs } from "../input/Inputs"

export const ReadPosts = () => {
    const [posts, setPosts] = useState([])
    const [btn, setBtn] = useState(false);

    const readPost = async () => {
        const data = await getDocs(postsCollectionRef)
        setPosts(data.docs.map(
            (doc) => ({
                ...doc.data(), id: doc.id
            })
        ));
    }

    useEffect(() => {
        readPost()
    })

    return (
        <div className="mainSection">

            {/* SHOW LOADING */}
            {posts.length === 0 && <p>Loading...</p>}

            {/* SHOW POSTS  */}
            {posts.map((thisPost) => (
                <div key={thisPost.id} className='subSection text-center'>

                    <h3>{thisPost.thisHeading}</h3>
                    <h3>{thisPost.thisContent}</h3>

                    <button onClick={() => {
                        deletePost(thisPost.id)
                    }}
                        className='btn-accent red blk'>
                        Delete
                    </button>



                    <button onClick={() => {
                        setBtn(i => !i)
                    }} className='btn-accent blue blk'>
                        Update
                    </button>

                    {btn &&
                        <Inputs existingHeading={thisPost.thisHeading} existingContent={thisPost.thisContent} id={thisPost.id} b={btn} />
                    }

                </div>
            ))}

        </div>
    )
}