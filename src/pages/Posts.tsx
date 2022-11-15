import { Inputs } from "../utils/input/Inputs"
import { ReadPosts } from "../utils/read/ReadPosts"

export const Posts = () => {
    return (
        <div>
            <Inputs existingHeading={''} existingContent={''} id={''} b={'false'} />
            <ReadPosts />
        </div>
    )
}