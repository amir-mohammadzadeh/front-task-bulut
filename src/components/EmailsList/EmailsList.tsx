import EmailCard from '../EmailCard/EmailCard'
import './EmailsList.css'
import EmailsData from '../../assets/Data/Emails.json'

const EmailsList = () => {
  return (
    <div className='Emails-list_content'>
      {EmailsData.map(email =>
        <EmailCard key={email.id} {...email} />
      )}
    </div>
  )
}

export default EmailsList
