import styles from "./Book.module.css"

export default function Book() {
  return (
    <div className={styles.book}>
        <div className={styles.book_title}>
            How to lie with statistics
        </div>
        <div className={styles.book_author}>
            Darrell Huff
        </div>
        <div className={styles.book_price}>
            $8.89
        </div>
    </div>
  )
}