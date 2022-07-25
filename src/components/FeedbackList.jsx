import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedback,deleteFeedback,editFeedback}) {
    if(!feedback ||feedback.length === 0){
        return <p>No Feedback Yet</p>
    }
  return (
    <div >
      {feedback.map((item)=>(
        <FeedbackItem key={item.id} item={item} editFeedback={editFeedback} deleteFeedback={deleteFeedback} />
      ))}
    </div>
  )
}

FeedbackList.prototype = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            text:PropTypes.string.isRequired,
            rating:PropTypes.number.isRequired,

        })
    )
}
export default FeedbackList
