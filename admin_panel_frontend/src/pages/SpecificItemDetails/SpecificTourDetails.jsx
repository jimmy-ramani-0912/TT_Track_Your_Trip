import "./SpecificDetail.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { Rating } from "react-simple-star-rating";

// import Carousel from "react-bootstrap/Carousel";
// import Chart from "../../components/chart/Chart";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import { Card } from "@mui/material";
// import Captions from "yet-another-react-lightbox/plugins/captions";
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Video from "yet-another-react-lightbox/plugins/video";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/captions.css";
// import "yet-another-react-lightbox/plugins/thumbnails.css";
// import photo from "./photos.js";

//  export const slides = photo.map(({ src, key, width, height, images }) => ({
//   src,
//   key,
//   width,
//   height,
//   srcSet: images?.map((image) => ({
//     src: image.src,
//     width: image.width,
//     height: image.height,
//   })),
// }));

// const SpecificTourDetail = () => {
//   const [SpecificTourDetail, setSpecificTourDetail] = useState([]);
//   const [open, setOpen] = React.useState(false);

//   useEffect(() => {
//     axios
//       .get("/api/tourpackages/" + window.localStorage.getItem("tourSpecificId"))
//       .then((response) => {
//         console.log(response.data);
//         setSpecificTourDetail(response.data.data.GetSpecificTourPackage);
//       })
//       .catch((error) => {
//         console.error(`Error:${error}`);
//       });
//   }, [SpecificTourDetail]);

//   return (
//     <div className="single">
//       <Sidebar />
//       <div className="singleContainer">
//         <Navbar />
//         <div
//           className="carousel"
//           style={{
//             paddingLeft: "80px",
//             paddingRight: "80px",
//             paddingTop: "20px",
//             paddingBottom: "20px",
//           }}
//         >
//           <Card>
//             <Carousel variant="light">
//               <Carousel.Item onClick={() => setOpen(true)}>
//                 <img
//                   style={{
//                     height: "450px",
//                   }}
//                   className="d-block w-100"
//                   src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
//                   alt="First slide"
//                 />
//               </Carousel.Item>
//               <Carousel.Item onClick={() => setOpen(true)}>
//                 <img
//                   style={{
//                     height: "450px",
//                   }}
//                   className="d-block w-100"
//                   src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
//                   alt="Second slide"
//                 />
//               </Carousel.Item>
//               <Carousel.Item onClick={() => setOpen(true)}>
//                 <img
//                   style={{
//                     height: "450px",
//                   }}
//                   className="d-block w-100"
//                   src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
//                   alt="Third slide"
//                 />
//               </Carousel.Item>
//             </Carousel>
//           </Card>
//         </div>
//         <Lightbox
//           open={open}
//           close={() => setOpen(false)}
//           slides={[
//             {
//               ...slides[0],
//               title: "Puppy in sunglasses",
//               description: "Mollie Sivaram",
//             },
//             {
//               ...slides[1],
//               title: "Miami Beach",
//               description:
//                 "Clark Van Der Beken\n\nSouth Beach, Miami Beach, Florida, United States",
//             },
//             {
//               ...slides[2],
//               title: "Flamingo",
//               description: "Vicko Mozara\n\nVeliki zali, Dubravica, Croatia",
//             },
//             {
//               type: "video",
//               title: "Big Buck Bunny",
//               description:
//                 "The Peach Open Movie Project\n\nBlender Institute, Netherlands",
//               width: 1280,
//               height: 720,
//               poster:
//                 "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
//               sources: [
//                 {
//                   src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//                   type: "video/mp4",
//                 },
//               ],
//             },
//             {
//               ...slides[3],
//               title: "Starfish on a sand beach",
//               description: "Pedro Lastra\n\nKey West, Florida, United States",
//             },
//             {
//               ...slides[6],
//               title:
//                 "The last night of a two week stay on the North Shore of Oahu, Hawaii",
//               description:
//                 "Sean Oulashin\n\nNorth Shore, Waialua, Hawaii, United States",
//             },
//             {
//               ...slides[7],
//               title: "Sunset on Kauai",
//               description:
//                 "Cristofer Maximilian\n\nKauai, Hawaii, United States",
//             },
//             {
//               ...slides[9],
//               title: "RayBan sunglasses",
//               description:
//                 "Ethan Robertson\n\nSanta Monica, California, United States",
//             },
//             {
//               ...slides[11],
//               title: "Find the time",
//               description: "Alex Perez\n\nNaples, Florida, United States",
//             },
//           ]}
//           plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
//         />
//         <div className="details">
//           <h1 className="heading">TourPackage Name</h1>

//           <h6 className="subtitle">
//             smalll description
//           </h6>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpecificTourDetail;

import React, { Component } from "react";

export class DetailsThumb extends Component {
  render() {
    const { images, tab, myRef } = this.props;
    return (
      <div className="thumb" ref={myRef}>
        {images.map((img, index) => (
          <img src={img} alt="" key={index} onClick={() => tab(index)} />
        ))}
      </div>
    );
  }
}

class SpecificTourDetail extends React.Component {
  state = {
    tourdetails: [
      {
        title: JSON.parse(localStorage.getItem("SpecificTourDetails")).tourname,
        src: [
          "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",
          "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png",
          "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
          "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
        ],
        summary: JSON.parse(localStorage.getItem("SpecificTourDetails"))
          .summary,
        price: JSON.parse(localStorage.getItem("SpecificTourDetails")).price,
        discountedprice: JSON.parse(localStorage.getItem("SpecificTourDetails"))
          .priceDiscount,
        maxGroupSize: JSON.parse(localStorage.getItem("SpecificTourDetails"))
          .maxGroupSize,
        duration: JSON.parse(localStorage.getItem("SpecificTourDetails"))
          .duration,
        difficulty: JSON.parse(localStorage.getItem("SpecificTourDetails"))
          .difficulty,
        description: JSON.parse(localStorage.getItem("SpecificTourDetails"))
          .description,
        startDates: JSON.parse(localStorage.getItem("SpecificTourDetails"))
          .startDates.startDate,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
    axios
      .get("/api/tourpackages/" + window.localStorage.getItem("tourSpecificId"))
      .then((response) => {
        console.log(response.data);
        const tour = response.data.data.GetSpecificTourPackage;
        this.setState({ tour });
        localStorage.setItem("SpecificTourDetails", JSON.stringify(tour));
      })
      .catch((error) => {
        console.error(`Error:${error}`);
      });
  }

  render() {
    const { tourdetails, index } = this.state;
    return (
      <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div className="detailsdisplay">
            {tourdetails.map((item) => (
              <div className="details">
                <div className="big-img">
                  <img src={item.src[index]} alt="" />
                </div>

                <div className="box">
                  <div className="row">
                    <h2 style={{ fontWeight: "bold" }}>
                      {item.title.toUpperCase()}
                    </h2>
                    <p>{item.summary} !</p>
                  </div>

                  <h6>Max Group Size : {item.maxGroupSize}</h6>
                  <h6>Duration : {item.duration} Days</h6>
                  <h6>Difficulty : {item.difficulty}</h6>
                  <h6></h6>
                  <div className="tourprice">
                    <span>
                      <del>{item.price} ₹</del>
                    </span>
                    <span className="curr-price">{item.discountedprice} ₹</span>
                  </div>

                  <Rating ratingValue={4} />
                  <DetailsThumb
                    images={item.src}
                    tab={this.handleTab}
                    myRef={this.myRef}
                  />
                </div>
                <div className="subdescription">
                  <div className="description">
                    <h3>Description</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      
        </div>
      </div>
    );
  }
}

export default SpecificTourDetail;
