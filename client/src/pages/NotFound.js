import React from 'react';

const NotFound = () => {
    return(
        <section className={'error-layout'}>
            <aside className={'logo-container'}></aside>
            <article className={'page-content-wrapper'}>
                <div className={'page-content'}>
                    <span className={'error-value'}>404</span>
                    <p className={'error-message'}>Quelque chose manque</p>
                    <p className={'error-description'}>Cette page est manquante ou vous avez mal assemblé le lien.</p>
                    <a className={'redirect-link'} href={'/'} title={'Accueil'}>Retour au site</a>
                </div>
            </article>
        </section>
    );
}

export default NotFound;