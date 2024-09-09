import { formatQuantity } from '@/utils/format'

function PropertyDetails({ details: { bedrooms, baths, guests, beds } }) {
  return (
    <p className="text-md font-light ">
      <span>{formatQuantity(bedrooms, 'bedroom')} &middot; </span>
      <span>{formatQuantity(baths, 'bath')} &middot; </span>
      <span>{formatQuantity(guests, 'guest')} &middot; </span>
      <span>{formatQuantity(beds, 'bed')}</span>
    </p>
  )
}
export default PropertyDetails
