import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from './ItemCard'
import { ErrorBoundary } from "react-error-boundary";

const Nine: FunctionComponent = () => {
  const [itemlist, setItemlist] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<Boolean>(true)
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if(isLoading){
      async function getItems(): Promise<any> {
        try {
          const res: Response = await fetch('https://random-data-api.com/api/users/random_user?size=10')

          if (res.ok) {
            const data: any = await res.json();
            setItemlist(data);
            setError(null);
            setIsLoading(false);
          } else {
            setError("Has a error to get data");
          }
        }catch (error) {
          setError('Has a problem to get data')
        }
      }
      getItems()
    }
  },[isLoading])

  const ItemsView: any /* ¿Que tipo de dato seria? */ = () => {
    if(error){
      throw error
    }else {
      return (
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
      )
    }
  }

  const ErrorFallback: FunctionComponent = () => {
    return (
      <div role="alert">
        <h2 style={{color: '#E0E1DD', width: '16em'}}>There was an error: {`${error}`}</h2>
      </div>
    )
  }

  function handleLoadingChange(): void{
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
          <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[error, isLoading]}>
            <ItemsView />
          </ErrorBoundary>
        </div>
      </div>
    </>
  )
}

export default Nine;