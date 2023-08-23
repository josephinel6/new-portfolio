import './accomplishments.css'

export default function AccomplishmentsPage() {

    const vrclogo = "https://media.team254.com/2023/03/8df7079a-VRC-Spin-Up-22-23.png";
    const aplogo = "data:image/png;base64,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"

    const awards = [
        { "img": vrclogo, "name": "VRC Judge's Award", "desc": "description" },
        { "img": vrclogo, "name": "VRC Inspire Award", "desc": "description" },
        { "img": aplogo, "name": "AP Calculus AB: 5", "desc": "description" },
        { "img": aplogo, "name": "AP Computer Science Principles: 5", "desc": "description" },
        // { "img": aplogo, "name": "test", "desc": "test" },
        // { "img": vrclogo, "name": "VRC Judge's Award", "desc": "description" },
        // { "img": vrclogo, "name": "VRC Inspire Award", "desc": "description" }
    ]

    return (
        <div className='page-block'>
            <div className='block-two'>

                {awards.length > 0 && awards.map(award => (
                    <div className="accomplishments-card">
                        <div className="card-inner">
                            <div className="card-front">
                                <img className="card-img" src={award.img} />
                            </div>
                            <div className="card-back">
                                <h3 className='card-header'> {award.name} </h3>
                                <p className='card-desc'> {award.desc} </p>
                            </div>
                        </div>
                    </div>
                ))}
                {/* <div className="accomplishments-card">
                <div className="card-inner">
                    <div className="card-front">
                        <img className="card-img" src="./src/assets/profile.jpg" />
                    </div>
                    <div className="card-back">
                        <h3> Name </h3>
                        <p> Description </p>
                    </div>
                </div>
            </div> */}
            </div>
        </div>

    )
}