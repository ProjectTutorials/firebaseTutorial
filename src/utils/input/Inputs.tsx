import { useState } from "react"
import { createPost } from "../create/CreatePosts"
import { updatePost } from "../update/UpdatePosts"

export const Inputs = ({ existingHeading, existingContent, id, b }) => {

    const [heading, setHeading] = useState(existingHeading)
    const [content, setContent] = useState(existingContent)

    function createTHEPost() {
        createPost(heading, content)
        setHeading('')
        setContent('')
    }

    function updateTHEPost() {
        updatePost(heading, content, id)
        setHeading(heading)
        setContent(content)
    }

    return (
        <>
            {b === 'false' ? <div className="anchor"></div> : <> </>}
            <div className="contactForm mainSection mt-5 pt-5">
                <input type={'text'} placeholder={'Heading...'}
                    onChange={(event) => {
                        setHeading(event.target.value);
                    }}
                    value={heading} />
                <textarea placeholder={'Content...'}
                    onChange={(event) => {
                        setContent(event.target.value)
                    }}
                    value={content} />


                {b === 'false' ?
                    <button onClick={createTHEPost}>Create</button>
                    :
                    <button onClick={updateTHEPost}>Update</button>
                }
            </div>
        </>
    )
}