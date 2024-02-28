import './PercentCard.css'
import '../Card/Card.css'

interface Prop {
    title: string,
    value: number,
    percent: number
}

export const PercentCard = ({ title, value, percent }: Prop) => {

    const Percent = percent >= 0 ? `+${percent}` : percent;

    return (
        <div className='percent-card_container'>
            <div>
                <h3>
                    {title}
                </h3>
                <span className="percent-card-value">
                    {value}
                </span>
            </div>
            <span className={percent >= 0 ? "card-percent green-percent" : "card-percent red-percent"}>
                {Percent}%
            </span>
        </div>
    )
}
