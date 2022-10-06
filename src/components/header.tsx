import styles from './header.module.css'

type HeaderProps = {
  selected: 'home' | 'about' | 'projects'
}

const Header = ({ selected }: HeaderProps) => {
  return (
    <>
    <header className={styles.header}>
      <h1>Logan Viet Dang</h1>
    </header>
    <nav className={styles.header}>
        <ul className={styles.header}>
          <li className={selected === 'home' ? styles.selected : '' }>Home</li>
      <li className={selected === 'about' ? styles.selected : '' }>About</li>
      <li className={selected === 'projects' ? styles.selected : '' }>Projects</li>
    </ul>
  </nav>
    </>
  )
}

export default Header