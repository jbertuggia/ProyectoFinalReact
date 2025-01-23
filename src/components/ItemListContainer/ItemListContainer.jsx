import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import Loading from "../../UI/Loading.jsx"
import db from "../../db/db.js"
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { idCategory } = useParams()
    const collectionName = collection(db, "products")

    //Unifique getProducts y getProductsByCategory con un if dentro del try and catch
    const getProducts = async () => {
        setLoading(true)
        //async & await
        let dataDb

        try {
            if (idCategory) {
                const q = query(collectionName, where("category", "==", idCategory))
                dataDb = await getDocs(q)
            } else {
                dataDb = await getDocs(collectionName)
            }

            const data = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data() }
            })
            setProducts(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        getProducts()
    }, [idCategory])

    return (
        <div>
            <h2 className="fs-4 text-start text-dark">{greeting}</h2>
            {
                loading === true ? (<Loading />) : (<ItemList products={products} />)
            }
        </div>
    )
}

export default ItemListContainer;