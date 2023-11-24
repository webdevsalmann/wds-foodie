import useData from "@/context/DataContext"

const ItemCard = ({ item }) => {
  return (
    <div className="px-4 py-2 set-bg flex-between rounded" >
      <div className="">{item.name}</div>
      <div className="font-bold text-red-500">${item.price}</div>
    </div>
  )
}

export default function Content() {
  const { items } = useData();

  return (
    <div id="content" className="p-4 flex-1 set-bg-light rounded-lg">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {items && items.map(item => {
          return <ItemCard key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}
