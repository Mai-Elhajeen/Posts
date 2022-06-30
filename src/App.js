import Cards from './Cards';
import data from './data';


function App() {

  const cards = data.map(item => {
    return (
      <Cards 
        img = {item.img}
        title = {item.title}
        date = {item.date}
        view = {item.feedback.view}
        like = {item.feedback.like}
        comment = {item.feedback.comment}
      />
    )
  })
  
  return (
    <div className="container">
      {cards}
    </div>
  );
}

export default App;
