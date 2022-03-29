import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" 
            src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg"
            alt="header"/>
        </div>
    )
}
