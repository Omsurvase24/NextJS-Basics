import PostUser from "@/components/postUser/postUser";
import styles from "./singlePost.module.css"
import Image from "next/image"
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA FROM API
// const getData = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//     if (!res.ok) {
//         throw new Error("Something went wrong");
//     }
//     return res.json();
// }

const SinglePostPage = async ({ params }) => {


    const { slug } = params;

    // FETCH DATA WITH AN API
    // const post = await getData(slug);

    // FETCH DATA WITHOUT AN API
    const post = await getPost(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/26078432/pexels-photo-26078432/free-photo-of-altes-land.jpeg" alt="" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src="https://images.pexels.com/photos/26078432/pexels-photo-26078432/free-photo-of-altes-land.jpeg" alt="" width={50} height={50} />
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <PostUser userId={post.userId} />
                        </Suspense>
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.body}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage