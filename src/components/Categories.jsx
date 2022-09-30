import { useWatchCategory } from "../hooks/useWatchCategory";
import { ItemGifs } from "./ItemGifs";

export const Categories = ({ item }) => {

    const { datos, loading } = useWatchCategory(item)

    if (loading) {
        return <h2>Cargando.....</h2>
    }

    return (
        <div className="col-12 secundario text-white">
            <h2 className='p-2 text-uppercase m-0'>{item}</h2>
            <div className="row bg-white">

                {datos.map((item) => (
                    <ItemGifs key={item.id} item={item} />
                ))}



            </div>
        </div>
    )
}
