import React from "react";
import "./FooterPag.css";
import { FaMapMarkedAlt, FaWhatsapp, FaMailBulk, FaFacebookF, FaLinkedinIn, FaBook } from "react-icons/fa";
import logo from "../img/logo-imcetron.png";

 export function FooterPag() {
  return (
    <div className="footerP">
      
        <div className="row1">        
            <ul className="list-unstyled">
              <li><img src={logo} alt='logo Imcetron' className="logo-footer"/></li>
            </ul>
          
        <div className="line2">
            <ul className="list-unstyled">
              <li>IMPORTADOS Y DISTRIBUCIÓN DE MATERIALES Y LIQUIDOS ELÉCTRICOS </li>
            </ul>
        </div>

        <div className="line3">
            <ul className="list-unstyled">
              <li><FaFacebookF className="face"/>&nbsp;<FaLinkedinIn className="linken"/></li>
            </ul>
        </div> 
        </div>

        <div className="row">
       
          <div className="col1">
            <ul className="list-unstyled">
              <li>IMCETRON &copy; {new Date().getFullYear()} | Todos los derechos </li>
            </ul>
          </div>
          
          <div className="col2">
            <ul >
              <l1 class='lista'><FaMapMarkedAlt /> Calle La nosequexd 123 ref. breña &nbsp;&nbsp;&nbsp;
              <FaWhatsapp /> 999-999-999 &nbsp;&nbsp;&nbsp;
              <FaMailBulk /> Correo prueba@uch.pe </l1>
            </ul>
          </div>
      
          <div className="col3">
            <ul className="list-unstyled">
              <li><FaBook/> Libro de Reclamaciones</li>
            </ul>
          </div>

        </div>
      
    </div>
  );
}