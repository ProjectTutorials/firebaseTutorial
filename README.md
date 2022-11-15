# Firebase Tutorial

This project was build to help you learn how to use Firebase in your React app.

Built with `TypeScript` and with basics of `React`

### Dependancies

1. react-router-dom

2. firebase 

3. react-firebase-hooks

```bash
npm i react-router-dom firebase react-firebase-hooks
```

### Structure

```
src

    components

        _Header
        
        Header

    config

        firebase

    pages

        Home

        Posts

        SignInPage

    routes

        AppRoutes

    security

        SignIn

        SignOut

    styles

        App.css

    utils

        create

            CreatePosts

        delete

            DeletePosts

        read

            ReadPosts

        update

            UpdatePosts

    App.tsx

    index.tsx
```


### TODO

1. file upload


### Functionalities

1. Create

2. Read

3. Update

4. Delete

5. Inputs

6. Sign In

7. Sign Out


#### CREATE

```js
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
```

#### READ

```js
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
```


#### UPDATE

```js
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../../config/Firebase"

export const updatePost = async (existingHeading, existingContent, id) => {
    const post = doc(db, 'posts', id);
    const newFields = { thisHeading: existingHeading, thisContent: existingContent };
    await updateDoc(post, newFields);
}
```


#### DELETE

```js
import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../../config/Firebase"

export const deletePost = async (id) => {
    const data = doc(db, 'posts', id)
    await deleteDoc(data)
}
```

#### INPUTS

```js
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
```

#### SIGN IN

```js
import { auth, provider } from "../config/Firebase"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom"

export const SignIn = () => {

    const navigate = useNavigate()

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider)
        navigate('/')
    }

    return (
        <div>
            <button className="btn-g" onClick={signInWithGoogle}>
                <img src="https://raw.githubusercontent.com/dependabot-pr/Static-Files/main/Assets/Logo/Google.svg" alt="google logo" />
                <p>Sign in with Google</p>
            </button>
        </div>
    )
}
```

#### SIGN OUT

```js
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../config/Firebase"

export const SignOut = () => {

    const navigate = useNavigate()

    const signOutWithGoogle = async () => {
        await signOut(auth)
        navigate('/')
    }

    return (
        <div>
            <button className="btn-accent btn-red" onClick={signOutWithGoogle}>
                Sign Out
            </button>
        </div>
    )
}
```

#### FIREBASE

```js
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app)

// DATABASE NAME
export const postsCollectionRef = collection(db, "posts")
```

