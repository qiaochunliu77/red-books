/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import Macy from 'macy';
import styles from './style.module.scss';
 
// const masonryOptions = {
//     transitionDuration: 0,
// };
 
// const imagesLoadedOptions = { background: '.my-bg-image-el' };
 
// // class Gallery extends React.Component {
// //     render() {
// //         // const childElements = this.props.elements.map((element)=> {
// //         //    return (
// //         //         <li className="image-element-class">
// //         //             <img src={element.src} />
// //         //         </li>
// //         //     );
// //         // });
// //     console.log(this.props,'---');
// //         return (
// //             <Masonry
// //               className="my-gallery-class" // default ''
// //               elementType="ul" // default 'div'
// //               options={masonryOptions} // default {}
// //               disableImagesLoaded={false} // default false
// //               updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
// //             //   imagesLoadedOptions={imagesLoadedOptions} // default {}
// //             >
// //                 {/* {childElements} */}
// //             </Masonry>
// //         );
// //     }
// // }
 
// function Gallery(props: any):any {
//      const childElements = props.elements.map((element,index)=> {
//            return (
//                 <div key={index} className={styles.imgBox}>
//                     <img src={element.src} className={styles.img} />
//                 </div>
//             );
//         });
//     return (
//         <Masonry
//           className={styles.gallry} // default ''
//           elementType="div" // default 'div'
//           options={masonryOptions} // default {}
//           disableImagesLoaded={false} // default false
//           updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
//         //   imagesLoadedOptions={imagesLoadedOptions} // default {}
//         >
//             {childElements}
//         </Masonry>
//     );
// }

function Gallery(props: any):any {
    // const Wrap = ():any => {
    //     props.elements.map((element,index)=> {
    //         return (
    //                 <div key={index} className={styles.imgBox}>
    //                     <img src={element.src} className={styles.img} />
    //                 </div>
    //             );
    //         });
    // };
    React.useEffect(() => {

        let macy = Macy({
            container: '.macy-container',
            trueOrder: false,
            waitForImages: false,
            margin: 24,
            // columns: 6,
            // breakAt: {
            //     1200: 5,
            //     940: 3,
            //     520: 2,
            //     400: 1,
            // },
        });
        
        macy.reInit();
    },[]);
    return (
        // style={{ columnWidth:'auto',columnCount: 2, columnGap:'10px' }}
        <div className='.macy-container'>
            {
               props.elements.map((element,index)=> {
                return (
                        <div key={index} style={{ breakInside: 'avoid' }} className={styles.imgBox}>
                            <img src={element.src} className={styles.img} />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Gallery;

