import { useEffect, useState } from 'react';
import './Pagination.css';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { currentPageSelector } from '../../Redux/Catalog/catalogSelectors';
import { currentPageAction } from '../../Redux/Catalog/catalogActions';

const Pagination = () => {

  const [isActive, setIsActive] = useState(false)
  const dispatch = useDispatch();
  let currentPage = useSelector(currentPageSelector);
  
  const onChangedPage = (p) => {
    setIsActive(true);
    dispatch(currentPageAction(p))
  }

  console.log(currentPage);

  const pages = [1,2]
  return (
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
    </div>
  )
}

export default Pagination;
