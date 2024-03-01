import EmailCard from '../EmailCard/EmailCard'
import './EmailsList.css'
import EmailsData from '../../assets/Data/Emails.json'

const EmailsList = () => {
  return (
    <div className='Emails-list_content'>
      {EmailsData.map(email=>
        <EmailCard key={email.id} name={email.name} subject={email.subject} date={email.date} image={email.image} />
      )}
    </div>
  )
}

export default EmailsList
