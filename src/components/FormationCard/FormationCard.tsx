import './FormationCard.css'

interface Prop {
    progress_value: number
}

const FormationCard = ({ progress_value }: Prop) => {
    return (
        <section className="formation_container">
            <header className="formation-headr">
                <h2>
                    Formation status
                </h2>
                <span>
                    In progress
                </span>
            </header>
            <div className="formation-body">
                <div className="formation-progressBar" style={{ '--progress-value': `${progress_value}%` } as React.CSSProperties}></div>
                <div className="formation-estimate">
                    <span className='estimate-title'>
                        Estimated processing
                    </span>
                    <span className='estimate-value'>
                        4-5 business days
                    </span>
                </div>
                <button className="btn btn-primary font-josefin">
                    View status
                </button>
            </div>
        </section>
    )
}

export default FormationCard