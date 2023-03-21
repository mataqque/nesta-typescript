import React, { Component } from 'react'

export class Backing extends Component {
    render() {
        return (
            <section className="section section-backing">
                <div className="scrollspy scrollspy-backing" id="respaldo" />
                <div className="p-relative">
                    <div className="contain">
                        <div className="contentImgTitle">
                            <div className="imgtitle text-center d-flex justify-content-center align-items-center text-white" title="Cosapi Inmobiliaria y Grupo Lar">
                                <div className="paloma-bird"/>
                                <h1 className="section-title geomanist-bold">Con el respaldo de 2<br/>grandes inmobiliarias</h1>
                                <h3 className="section-subtitle geomanist-regular">Experiencia internacional en el desarrollo de proyectos inmobiliarios y edificaciones</h3>
                            </div>
                        </div>
                        <div className="content">
                            <div className="map"></div>
                            <div className="partners"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
