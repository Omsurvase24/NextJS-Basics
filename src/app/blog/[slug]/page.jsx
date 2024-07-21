import styles from "./singlePost.module.css"
import Image from "next/image"

const SinglePostPage = ({ params }) => {

    console.log(params)
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/26078432/pexels-photo-26078432/free-photo-of-altes-land.jpeg" alt="" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src="https://images.pexels.com/photos/26078432/pexels-photo-26078432/free-photo-of-altes-land.jpeg" alt="" width={50} height={50} />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>John Doe</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit natus saepe quod, eaque quo. Quam, rerum odio consequatur animi vitae eos. Quasi quod obcaecati sint aliquid deleniti nobis consequuntur.
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage