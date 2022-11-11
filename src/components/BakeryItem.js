// TODO: create a component that displays a single bakery item
export function BakeryItem(item, addCounter) {
    return (
        <div>
            <p>{item.name}</p>
            <button onClick={() => addCounter()}>Click me!</button>
        </div>
    )
}