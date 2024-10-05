import { FC } from "react";
import { Card } from "react-bootstrap";
interface ItemProduct{
    nombre:string,
    precio:number,
    imagen:string
}
//interfaz de nuestro componente
interface IPropsListProducts{
    arrItems:ItemProduct[]
}
export const ListProducts: FC<IPropsListProducts> = ({arrItems}) => {
  return (
    <div
    className="p-1 m-3 border rounded d-grid gap-2"
    style={{gridTemplateColumns:"repeat(2, 1fr)",
        justifyItems:"center",
        alignItems:"center"
    }}>
        {/* el--> elemento i-->indice */}
        {arrItems.map((el, i)=>
        //al primer div se le debe poner una palabra key
        //este key es lo que react utiliza para saber que elemento que esta renderizado es el que esta modificando
            <Card key={i} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={el.imagen} />
                <Card.Body>
                    <Card.Title>{el.nombre}</Card.Title>
                    <Card.Text>{el.precio}</Card.Text>

                </Card.Body>
          </Card>)
        }
    </div>
  )
}
