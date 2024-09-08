import React, { useState } from 'react'
import axios from "axios";
import Loader from "../../components/Loader/Loader";

import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

import styles from "./Home.module.scss";
import { useQuery } from '@tanstack/react-query';
import { getBooks } from '../../services/bookService';
import { Link } from 'react-router-dom';



const Home = () => {
  const { data: bookList = [], error, isLoading } = useQuery({ queryKey: ['books'], queryFn: getBooks })

  return (
    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Book List</h1>

        <Link to="/books/create">
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          {bookList?.length > 0 ? (
            <div className="grid grid-cols-4 gap-8">
              {bookList.map((item, index) => (
                <div className='flex gap-4 flex-col' key={`book-${item.id}`}>
                  <div className=''>
                    <img className='w-full object-cover' src="https:picsum.photos/id/237/200/200" />
                  </div>
                  <div className="flex justify-between">
                    <div className='font-bold text-base flex-1'>
                      {item.name}
                    </div>
                    <div>
                      {item.publishYear}
                    </div>
                  </div>
                  <div className="">
                    <button type='button' className="border border-sky-500 border-black w-full py-3 pb-3 hover:bg-sky-500 ">$100</button>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </>
      )}
    </div >
  )
}

export default Home;


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
