export function BakeryItem(props) {
    return (
        <div>
            <p>{props.item.name}</p>
            <img src={props.item.image} alt="bakery item"/>
            <p>{props.item.description}</p>
            <p>{props.item.price}</p>
            <button onClick={() => props.addCounter()}>Add to cart</button>
        </div>
    )
}