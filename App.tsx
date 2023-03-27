import {React} from './deps.ts';

function App() {

  const [colores, setColores] = React.useState([])
  const [color, setColor] = React.useState("")

  return (
    <>
      <form onSubmit={(e)=> {
        e.preventDefault()
        colores.push(color)
        setColor("")
      }}>
        <input type="text" placeholder="Ingresa un color en ingles" onChange={(e)=>{
          setColor(e.target.value)
        }} />
        <input type="submit" placeholder="Subir color"/>
      </form>
      <ul>
        {colores.map((c)=> {
          return(
            <li style={{color: c}} key={c}> {c} </li>
          )
        })}
      </ul>
    </>
  );
}

export default App;
