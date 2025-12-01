import React from "react";

// Footer
const Footer = () => {
    return (
        <footer className="bg-light text-dark mt-5">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Mi App</h5>
                        <p className="mb-0">
                            Una pequeña descripción o slogan de la aplicación. Añade aquí
                            información de contacto breve si quieres.
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h6 className="text-uppercase">Enlaces</h6>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-dark">Inicio</a></li>
                            <li><a href="#!" className="text-dark">Acerca</a></li>
                            <li><a href="#!" className="text-dark">Servicios</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h6 className="text-uppercase">Redes</h6>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-dark">Twitter</a></li>
                            <li><a href="#!" className="text-dark">Facebook</a></li>
                            <li><a href="#!" className="text-dark">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © {new Date().getFullYear()} Mi App —{" "}
                <a href="https://4geeksacademy.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                    4Geeks Academy
                </a>
            </div>
        </footer>
    );
}

export default Footer;