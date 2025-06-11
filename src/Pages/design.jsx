import React from 'react';

const Design = () => {

    const design1List = [
        { alt: 'outdoor', pic: 'https://cdn.dribbble.com/userupload/11243687/file/original-e238407a42bf9fff40388293f9840807.png?resize=2400x1585' },
        { alt: 'outdoor', pic: '' },
        { alt: 'outdoor', pic: '' },
    ]

    const design2List = []

    return (
        <div className='design-container'>
            <section className='design-content-container' id="design">
                <h2>DESIGN</h2>

                <div className='design-bento'>
                    <div className='bento-row'>
                        <div className='design1'><img src='https://cdn.dribbble.com/userupload/11243687/file/original-e238407a42bf9fff40388293f9840807.png?resize=2400x1585' /></div>
                        <div className='design2'><img src='https://cdn.dribbble.com/userupload/9408730/file/original-d03ea85a15da94c3b5685a0dc323f007.png?resize=2048x1401' /></div>
                    </div>
                    <div className='bento-row'>
                        <div className='design2'><img src='https://cdn.dribbble.com/userupload/9327013/file/original-efd255f169a45139f1454c2d70e1cab8.png?resize=1504x1127' /></div>
                        <div className='design1'><img src='https://cdn.dribbble.com/userupload/6368391/file/original-f3a11c0d831f40222b65edea506c1a9b.jpeg?resize=1504x1203' /></div>
                    </div>
                </div>

                <a href ='https://dribbble.com/jencao' target='blank' className='see-more'>See More →</a>
            </section>
        </div>
    );
}

export default Design;