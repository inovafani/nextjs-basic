export interface IPost {
    id: string;
    title: string;
    description: string;
}

export default async function PostPage(){

    const resp = await fetch("http://localhost:3002/posts")
    const posts: IPost[] = await resp.json()

    return (
        <div>
            <h1>PostPage</h1>

            <ul>
                {
                    posts.map(post => {
                        return (
                            <li key={post.id}>{post.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}