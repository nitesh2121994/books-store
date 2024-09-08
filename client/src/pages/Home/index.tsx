import React, { useState } from 'react'
import axios from "axios";
import Loader from "../../components/Loader/Loader";

import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

import styles from "./Home.module.scss";
import { useQuery } from '@tanstack/react-query';
import { getBooks } from '../../services/bookService';



const Home = () => {
  const { data: bookList = [], error, isLoading } = useQuery({ queryKey: ['books'], queryFn: getBooks })


  return (
    <div className='p-4'>

    </div>
  )

  //   return (
  //     <div className={styles.home}>

  //       <div className={styles.bookListWrapper}>
  //         {bookList?.length > 0 ? (
  //           <>
  //             {bookList.map((item) => (
  //               <div className={styles.card}>
  //                 <div className={styles.image}>
  //                   <img src="https://picsum.photos/id/237/200/200" />
  //                 </div>
  //                 <div className={styles.title}>
  //                   <strong>Rich dad poor dad</strong>
  //                 </div>
  //                 <div className={styles.footer}>
  //                   <button type='button' className={styles.purchaseButton}>$100</button>
  //                 </div>
  //               </div>
  //             ))}
  //           </>
  //         ) : null}
  //       </div>
  //     </div>
  //   )
  // }

  export default Home