const fruits = [
  { id: 'f1', name: 'Banana' },
  { id: 'f2', name: 'Cherry' },
  { id: 'f3', name: 'Orange' },
  { id: 'f4', name: 'Apple' }
];

function FruitList() {
  return (
    <ul>
     {fruits.map((fruit) => {
        console.log("Rendering", fruit.name);
        return <li key={fruit.id}>{fruit.name}</li>;
      })}
    </ul>
  );
}
export default FruitList;

