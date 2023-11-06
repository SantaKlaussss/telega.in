import { PiTrendUpDuotone } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { PlateType, SortsOrder } from '../../../Redux/Types';
import { valueSortAction } from '../../../Redux/Catalog/catalogActions';
import { valueSortSelector } from '../../../Redux/Catalog/catalogSelectors';

type propsPlateTypes = {
  plate: PlateType
}

export const Plate: React.FC<propsPlateTypes> = ({ plate }) => {

  const dispatch = useDispatch();
  const sorted = useSelector(valueSortSelector);
  const sortTypeRedux = sorted.type;
  const sortedOrderRedux = sorted.order;

  const isActive = sortTypeRedux === plate.value;
  console.log(isActive);
  
  const sortedChange: any = (e: any) => {
    console.log(plate.value)
    dispatch(valueSortAction(plate.value))
  }

  return (
    <div
      className="info_item info_item-rating"
      data-sorting={plate.value}
      style={{ backgroundColor: isActive ? '#fbb040' : '' }}
      onClick={sortedChange}
    >
      <span data-sorting={plate.value}>{plate.name}</span>
      {isActive && (
        <PiTrendUpDuotone
          data-sorting={plate.value}
          size={20}
          style={{
            marginRight: '10px',
            rotate: sortedOrderRedux === SortsOrder.ASC ? '180deg' : '',
            transition: sortedOrderRedux === SortsOrder.ASC ? '300ms' : '300ms'
          }}
        />
      )}
    </div>
  )
};
