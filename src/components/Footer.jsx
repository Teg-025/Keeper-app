import React from "react";
import "../styles.css";

export default function Footer(){
    return (
        <div className="footer">
            Copyright &copy; {new Date().getFullYear()}
        </div>
    )
}