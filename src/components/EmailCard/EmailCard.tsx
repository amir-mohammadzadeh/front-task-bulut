import './EmailCard.css'

interface Prop {
    name: string,
    subject: string,
    date: string,
    image: string
}

const EmailCard = ({ name, subject, date, image }: Prop) => {
    const Profile_Image = image ? image : '/public/NoPhoto.jpg';

    return (
        <div className="email-card_container">
            <div className="image-content">
                <img src={Profile_Image} alt={`${name.split(' ')[0]} Profile`} width='100%' height='100%' />
            </div>
            <div className="email-card-body">
                <span>
                    {name}
                </span>
                <span>
                    {subject}
                </span>
                <span>
                    {date}
                </span>
            </div>
        </div>
    )
}

export default EmailCard