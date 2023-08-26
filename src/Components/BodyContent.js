import React, { useEffect, useState } from "react";
import styles from "./bodyContent.module.css";
import test from "../resources/banner/test.png";
import axios from "axios";

const BodyContent = () => {
  const [bookData, setBookData] = useState([]);
  //   const [SecondApi, setSecondApi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
        );
        const response2 = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes"
        );

        // Combine the items from both responses
        const combinedItems = [
          ...response1.data.items,
          ...response2.data.items,
        ];
        setBookData(combinedItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    console.log(bookData);
  }, []);

  return (
    <div className={styles.bodyContent}>
      <div className={styles.bookHeading}>More Books</div>
      <div className={styles.booksDiv}>
        {bookData.length > 0 &&
          bookData.map((val, i) => {
            return <img src={val.volumeInfo.imageLinks.thumbnail} />;
          })}
        {/* {bookData.length > 0 && <>{console.log(bookData)}</>} */}
      </div>
    </div>
  );
};

export default BodyContent;
