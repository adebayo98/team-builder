import React from 'react';

const PageHead = (props) => {
    return(
        <section className={'page-head-component'}>
            <div className={'container-dft'}>
                <h1 className={'title-1-dft'}>{props.title}</h1>
            </div>
        </section>
    );
}

export default PageHead;