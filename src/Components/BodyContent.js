import React, { useEffect, useState } from 'react'
import styles from "./bodyContent.module.css"
import test from "../resources/banner/test.png"

const BodyContent = () => {

//   const [firstApi, setFirstApi] = useState([]);
//   const [SecondApi, setSecondApi] = useState([]);


//     useEffect(() => {
//         const getFirstApi = async() => {
//             const res = await 
//         }
//         getFirstApi();
//     }, [])


  return (
    <div className={styles.bodyContent}>
        <div className={styles.bookHeading}>More Books</div>
        <div className={styles.booksDiv}>
            <img src={test} />
            <img src={test} />
            <img src={test} />
            <img src={test} />
            <img src={test} />
            <img src={test} />
            <img src={test} />
            
        </div>
    </div>
  )
}

export default BodyContent