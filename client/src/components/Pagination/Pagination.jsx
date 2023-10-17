import { useEffect, useState } from 'react';
import './Pagination.css';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { currentPageSelector } from '../../Redux/Catalog/catalogSelectors';

const Pagination = () => {

  const [isActive, setIsActive] = useState(false)
  
  const onChangedPage = (p) => {
    setIsActive(true);
  }

  let currentPage = useSelector(currentPageSelector)

  const pageSize = 10;
  const totalGamePages = 50;
  const portionSize = 3;

  let pageCount = Math.ceil(totalGamePages / pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

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
