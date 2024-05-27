export default function Info() {
    return (
        <>
            <div className="info">
                <img className="profile-pic" src="/profile-pic.jpeg"/>
                <div className="info--details">
                    <h1>Dimitri Chupryna</h1>
                    <p>Entrepreneur</p>
                    {/* <a href="algozeus.com" target="_blank">algozeus.com</a> */}
                </div>
                
                <div className="info--social">
                    <a href="https://t.me/dimitrichupryna" target="_blank">
                        <div className="button">
                            <img className="social-icon" src="/telegram-icon.png" />
                            <p>Telegram</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/dchupryna/" target="_blank">
                        <div className="button">
                            <img className="social-icon" src="/linkedin-icon.png" />
                            <p>LinkedIn</p>
                        </div>
                    </a>
                    <a href="https://cal.com/dimitri-c/30min" target="_blank">
                        <div className="button">
                            <img className="social-icon" src="call-icon.png" />
                            <p>Call</p>
                        </div>
                    </a>
                    
                </div>
            </div>
        </>
    )
}

// export default Info