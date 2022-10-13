import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from './ItemCard'

const Nine = () => {

  const [itemlist, setItemlist] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null);

  useEffect(() => {
    if(isLoading){
      async function getItems() {
        try {
          const res = await fetch('https://random-data-api.com/api/users/random_user?size=10')

          if (res.ok) {
            const data = await res.json();
            setItemlist(data);
            setError(null);
            setIsLoading(false);
          } else {
            setError("Hubo un error al obtener los datos");
          }
        }catch (error) {
          setError('Hubo un problema al obtener los datos')
        }
      }
      getItems()
    }
  },[isLoading])

  function handleLoadingChange(){
    setIsLoading(true)
  }

  return (
    <>
      <div className="container">
        <Link to={'/'} className="return">Return to home</Link>
        <div className={"exercise-title exercise-nine"}>
          <h2>Exercise 9: Working with an API</h2>
        </div>
        <button className="reload-button" onClick={handleLoadingChange}> Reload Fetch Random</button>
        <div className="items-list-container">
          {
            itemlist.map(item => (
              <ItemCard 
              key={item.id} 
              username={item.username} 
              avatar={item.avatar} 
              title={item.employment.title}
              name={`${item.first_name} ${item.last_name}`}
              skill={item.employment.key_skill}
              email={item.email}
              phone={item.phone_number}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Nine;