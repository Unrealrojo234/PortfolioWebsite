import { Component } from "react";

class Footer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container-fluid">
                <p>&#169;2024 Rojo's Ltd | All Rights Reserved</p>
            </div>
        )
    }
}

export default Footer