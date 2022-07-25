import Header from './components/Header';
import './App.css';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import { useState } from 'react';

function App() {
  const [feedback,setFeedback] = useState(FeedbackData) 
  const deleteFeedback = (id) => {
    console.log('Hamid '+id)
    setFeedback(feedback.filter((item)=> item.id !== id))
  } 
  const editFeedback = () => {
    
  }
  
  return (
    <div className="App">
      <Header/>
      <FeedbackList deleteFeedback={deleteFeedback} editFeedback={editFeedback} feedback={feedback}/>
    </div>
  );
}

export default App;
