import './contact.css'

export default function ContactPage () {

    function setUpEmail() {
        location.href = 'mailto:mailjosephinel@gmail.com?subject=Resume Request from Portfolio';
    }

    return (
        <div className="page-block" id="contact-page">
        </div>
    )
}