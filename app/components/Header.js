import styles from "../page.module.css";

export default function Header() {
    return (
    <header className={styles.header}>
        <nav>
        <ul>
        <li><a href="/city/Seoul">Seoul</a></li>
        <li><a href="/city/London">London</a></li>
        <li><a href="/city/Mumbai">Mumbai</a></li>
        <li><a href="/city/Cairo">Cairo</a></li>
        
        </ul></nav>
        </header>
        )
    }
