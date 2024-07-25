import { Link } from "react-router-dom";

function Menu(){

    return(
        <nav className="navbar navbar-expand-lg bg-dark rounded" aria-label="Thirteenth navbar example">
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon navbar-dark"></span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
            <img src="https://images-platform.99static.com//yotL_mQ2hgdsLcTkLbQ83Q2PvpQ=/231x234:731x734/fit-in/500x500/99designs-contests-attachments/59/59820/attachment_59820787" class="bi me-2" width="90" height="70" style={{"borderRadius":50}} alt=""/>
            <Link class="navbar-brand col-lg-2 me-5" to="/" style={{"fontWeight":600, "fontSize":25, "color":"white"}}>Question Management</Link>
            <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            <Link className="nav-link active" aria-current="page" to="/"><li className="nav-item" style={{"marginRight":30, "color":"white", "fontWeight":600}}>Home</li></Link>
            <Link className="nav-link active"  aria-current="page" to="/listquestions"><li className="nav-item" style={{"marginRight":30, "color":"white", "fontWeight":600}}>Questions</li></Link>
            <Link className="nav-link active" aria-current="page" to="/createquestion"><li className="nav-item" style={{"marginRight":30, "color":"white", "fontWeight":600}}>AddQuestion</li></Link>
            </ul>
        </div>
        </div>
        </nav>
    )

}
export default Menu;