import React from 'react';
import PageHead from "../components/PageHead";

const SingleUser = (props) => {
    return(
        <main className={'single-user-page'}>
            {/* Header */}
            <PageHead title={'My profile'} />

            {/* Content */}
            <section>
                <h2>Firstname Lastname</h2>

                {/* Personal informations */}
                <div></div>

                {/* Skills */}
                <div></div>
            </section>
        </main>
    );
}

export default SingleUser;