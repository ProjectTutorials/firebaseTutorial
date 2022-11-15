import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../components/Header"
import { Home } from "../pages/Home"
import { SignInPage } from "../pages/SignInPage"
import { Posts } from "../pages/Posts"
import { Inputs } from "../utils/input/Inputs"
import { ReadPosts } from "../utils/read/ReadPosts"

export const AppRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/signinpage" element={<SignInPage />} />

                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/create" element={<Inputs existingHeading={''} existingContent={''} id={''} b={'false'} />} />
                    <Route path="/posts/read" element={<ReadPosts />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}