import { fetchProperties } from '@/utils/actions'
import PropertiesList from './PropertiesList'
import EmptyList from './EmptyList'

async function PropertiesContainer({ category, search }) {
  const properties = await fetchProperties({
    category,
    search
  })

  if (properties.length === 0) {
    return (
      <EmptyList
        heading="No results."
        message="Try changing or removing some of your filters."
        btnText="Clear Filters"
      />
    )
  }

  return <PropertiesList properties={properties} />
}
export default PropertiesContainer
