export interface IPost {
    id: string;
    title: string;
    description: string;
}

export default async function PostPage(){

    const resp = await fetch("http://localhost:3002/posts")
    return (
        <div>
            <h1>PostPage</h1>
        </div>
    )
}