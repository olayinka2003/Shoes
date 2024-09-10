import {Card} from './Card'
export const New = ({items, onClick}) => {
  return (
    <div className=" mt-20">
        <div className='flex-center'>
        <div className="dark:text-white text-4xl font-extrabold bg-[url('./assets/lines.png')] bg-center">NEW ARRIVALS</div>
        </div>
        <div className='mt-10 grid grid-cols-1 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)] gap-x-6 justify-between'>
        
            {items.map(item=> <Card key={item.id} item={item} onClick={onClick}/>)}
        </div>
    </div>
  )
}
