import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/26078432/pexels-photo-26078432/free-photo-of-altes-land.jpeg" alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus dolores rerum ratione consequuntur quis, pariatur expedita nostrum harum hic non blanditiis repellat adipisci, reprehenderit maxime illum ipsum inventore sed ad.</p>
                <Link className={styles.link} href="/blog/post">READ ME</Link>
            </div>
        </div>
    )
}

export default PostCard