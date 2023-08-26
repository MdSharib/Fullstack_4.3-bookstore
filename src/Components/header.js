import React from 'react'
import logo from "../resources/header/logo.png"
import styles from "./header.module.css"
import books from "../resources/header/KeazoNBOOKS.png"
import heart from "../resources/header/bx_bx-book-heart.png"
import bell from "../resources/header/Vector.png"
import diamond from "../resources/header/fluent_premium-person-20-regular.png"
import profile from "../resources/header/IMG20210528181544.png"

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.innerHeader}>
            <div className={styles.headerLogo}>
                <img src={logo} />
                <img src={books} />
            </div>
            <div className={styles.searchBar} >
                <input type='text' placeholder='search'/>
                <button>Search</button>
            </div>
            <div className={styles.rightIcons}>
                <img src={heart} />
                <img src={bell} />
                <img src={diamond} />
                <img src={profile} />
            </div>
        </div>
        
    </div>
  )
}

export default Header;