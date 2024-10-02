import { ItemInterface } from '../interface/ItemInterface.ts';
import Item from './Item';

interface ListingProps {
  items: ItemInterface[];
}

const Listing: React.FC<ListingProps> = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <Item item={item} key={item.listing_id} />
      ))}
    </div>
  );
};

export default Listing;
