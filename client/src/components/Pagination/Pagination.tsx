import React, { useEffect, useState } from 'react';
import './Pagination.css';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { currentPageSelector, totalChannelsSelector } from '../../Redux/Catalog/catalogSelectors';
import { currentPageAction, totalChannelsAction } from '../../Redux/Catalog/catalogActions';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

const Pagination: React.FC = () => {

  const [isActive, setIsActive] = useState(false)
  const dispatch = useDispatch();
  
  const totalChannels = useSelector(totalChannelsSelector);
  const currentPage = useSelector(currentPageSelector);

  const onChangedPage = (p: number) => {
    setIsActive(true);
    dispatch(currentPageAction(p))
  }

  useEffect(() => {
    dispatch(totalChannelsAction(totalChannels))
  }, [totalChannels, currentPage])

  let totalItems = Math.ceil(totalChannels / 5)

  const pages: Array<number> = []
  for (let i = 1; i <= totalItems; i++) {
      pages.push(i);
    }

// логика стрелок
  const nextMove = () => {
    dispatch(currentPageAction(currentPage + 1));
  }

  const prevMove = () => {
    dispatch(currentPageAction(currentPage -1));
  }


  return (
    <div className='pagination_container'>
      {(currentPage > 1) && <div className='arrows prev' onClick={prevMove}><LiaAngleLeftSolid  size={25}/></div>}
      
      <div>
        {pages.map(p => (
          <span 
            className={cn('block-pagination', { 'block-pagination--active': currentPage == p })}
            key={p}
            onClick={() => onChangedPage(p)}
          >
            {p}
          </span>
        ))}
      </div >
      {(pages.length > currentPage) && <div className='arrows next' onClick={nextMove}>
          <LiaAngleRightSolid size={25} />
        </div>
      }
    </div>
  )
}

export default Pagination;





















// import React, { useState } from "react";
// import styles from './paginator.module.css';
// import cn from 'classnames';

// type PropsType = {
//   totalItemsCount: number
//   pageSize: number
//   currentPage: number
//   onPageChanged: (pageNumber: number) => void
//   portionSize?: number
// }

// let Paginator: React.FC<PropsType> = ({
//   totalItemsCount,
//   pageSize,
//   currentPage,
//   onPageChanged,
//   portionSize = 10
// }) => {

//   let pageCount = Math.ceil(totalItemsCount / pageSize); // всего страниц

//   let pages: Array<number> = [];

//   for (let i = 1; i <= pageCount; i++) {
//     pages.push(i);
//   }

//   let portionCount = Math.ceil(pageCount / portionSize); // 1-10
//   let [portionNumber, setPortionNumber] = useState < number > (1);

//   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; // 1 
//   let rightPortionPageNumber = portionNumber * portionSize; // 10

//   return (
//     <div className={styles.paginator}>
//       {(portionNumber > 1) &&
//         <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
//       {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
//         .map((p) => {
//           return (
//             <span className={cn({
//               [styles.selectedPage]: currentPage === p
//             }, styles.pageNumber)}
//               onClick={(e) => { onPageChanged(p) }}
//               key={p}>
//               {p}</span>)
//         })}
//       {(portionCount > portionNumber) &&
//         <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
//     </div>
//   );
// };

// export default Paginator;
