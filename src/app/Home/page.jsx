"use client";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import Lenis from "@studio-freight/lenis";
import "aos/dist/aos.css";
<<<<<<< HEAD
import { TypeAnimation } from 'react-type-animation';
=======
import { TypeAnimation } from "react-type-animation";
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/all";
import gsap from "gsap";
import styles from "./home.module.css";
import { Typewriter } from "react-simple-typewriter";
<<<<<<< HEAD
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
=======
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
import Burgers from "../../asserts/Burgers.png";
import sandwich from "../../asserts/sandwich.png";
import french from "../../asserts/french.png";
import nugget from "../../asserts/nugget.png";
import momos from "../../asserts/momos.png";
import pizzas from "../../asserts/pizzas.png";
import wraps from "../../asserts/wraps.png";
import waffles from "../../asserts/waffles.png";
import salads from "../../asserts/salads.png";
import crushes from "../../asserts/crushes.png";
import milkShakes from "../../asserts/milkshake.png";
<<<<<<< HEAD
import iceCream from "../../asserts/iceCream.png";
import CrispyCombo from "../../asserts/CrispyCombo.png";
import coffe from "../../asserts/coffe.png";
=======
import iceCream from "../../asserts/icecream.png";
import CrispyCombo from "../../asserts/crispycombo9.png";

>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
import Image from "next/image";
import { Carousel, Col, Modal, Row, Button, Container } from "react-bootstrap";
import Slider from "react-slick";
import BurgersSlider from "../../asserts/Burgers-slider.png";
import WafflesSlider from "../../asserts/waffles-slider.png";
import MilkSlider from "../../asserts/Milk-shake.png";
<<<<<<< HEAD
import logo from "../../asserts/cafe2.png"
import data from "./data";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "@/compoents/Footer";
=======
import logo from "../../asserts/cafe2.png";
import data from "./data";
import Head from "next/head";
import { useRouter } from "next/router";
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
// import audiofr from "../../music/music.mp3"
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);
const Homepage = () => {
<<<<<<< HEAD
  const [show, setShow] = useState(false); 
  const buttonRef = useRef(null);
  const [store,setstore] = useState({})

  var storedata = {} ;

const [value,setvalue]=useState(false)
  // lenis start **************************************


=======
  const [show, setShow] = useState(false);
  const buttonRef = useRef(null);
  const [store, setstore] = useState({});

  var storedata = {};

  const [value, setvalue] = useState(false);
  // lenis start **************************************

>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
  // useEffect(() => {
  //   // Initialize Lenis instance
  //   const lenis = new Lenis();

  //   // Event handler for scroll event
  //   lenis.on("scroll", (e) => {

  //   });

  //   // RequestAnimationFrame loop
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   // Start requestAnimationFrame loop
  //   requestAnimationFrame(raf);

  //   // Cleanup function to destroy Lenis instance
  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

<<<<<<< HEAD
    // useEffect(()=>{
    //   const lenis = new Lenis();
      
    //   function raf(time) {
    //     lenis.raf(time);
    //     requestAnimationFrame(raf);
    //   }
    
    //   raf()
    
    //   return () => {
    //     lenis.destroy()
    //   }
    // }, [])

    // const lenisRef = useRef()

    // useEffect(() => {
    //   function update(time) {
    //     lenisRef.current?.lenis?.raf(time * 1000)
    //   }
    
    //   gsap.ticker.add(update)
    
    //   return () => {
    //     gsap.ticker.remove(update)
    //   }
    // })
    





  // lenis ends  *************************************



  // react slick carosual ****************************


=======
  // useEffect(()=>{
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   raf()

  //   return () => {
  //     lenis.destroy()
  //   }
  // }, [])

  // const lenisRef = useRef()

  // useEffect(() => {
  //   function update(time) {
  //     lenisRef.current?.lenis?.raf(time * 1000)
  //   }

  //   gsap.ticker.add(update)

  //   return () => {
  //     gsap.ticker.remove(update)
  //   }
  // })

  // lenis ends  *************************************

  // react slick carosual ****************************

>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay: true,
    autoplaySpeed: 1700,
  };

<<<<<<< HEAD



=======
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
  // react slick carosual end ************************

  // const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShow(false);
  useEffect(() => {
<<<<<<< HEAD
    AOS.init({
      
    });
  }, []);

  useEffect(()=>{
    // console.log(store[0] && store[0].heading)
  },[storedata])

  const handleButtonClick = (event, id) => {
  // console.log(event)
  const buttonRect = event.target.getBoundingClientRect();
    const buttonLocation = {
      x: buttonRect.left + window.scrollX,
      y: buttonRect.top + window.scrollY
    };
    // console.log('Button clicked at coordinates (X: ' + buttonLocation.x + ', Y: ' + buttonLocation.y + ')');

setShow(true)
    const value = event.currentTarget.getAttribute("data-value");
   

    const filteredData = data.filter(item => item.id === value);
        
     storedata = filteredData;
    
     setstore(filteredData)
    gsap.to("#rect", {
      duration: 1,
      rotation: 360, 
      ease: "none", 

    });

=======
    AOS.init({});
  }, []);

  useEffect(() => {
    console.log(store[0] && store[0].heading);
  }, [storedata]);

  const handleButtonClick = (event, id) => {
    console.log(event);
    const buttonRect = event.target.getBoundingClientRect();
    const buttonLocation = {
      x: buttonRect.left + window.scrollX,
      y: buttonRect.top + window.scrollY,
    };
    console.log(
      "Button clicked at coordinates (X: " +
        buttonLocation.x +
        ", Y: " +
        buttonLocation.y +
        ")"
    );

    setShow(true);
    const value = event.currentTarget.getAttribute("data-value");

    const filteredData = data.filter((item) => item.id === value);

    storedata = filteredData;

    setstore(filteredData);
    gsap.to("#rect", {
      duration: 1,
      rotation: 360,
      ease: "none",
    });
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
  };

  useEffect(() => {
    gsap.to("#rect", {
      scrollTrigger: {
        trigger: "#path",
<<<<<<< HEAD
        start: "top 70%",
        end: "bottom center",
        scrub:1.3,
        // markers:true,
        toggleActions: "play reverse none none",
        onLeave: () => {
        //  console.log("scroll on revers")
      }
      
=======
        start: "top 10%",
        end: "bottom center",
        scrub: 1.3,
        toggleActions: "play reverse none none",
        onLeave: () => {
          console.log("scroll on revers");
        },
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
      },
      ease: "none",
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
<<<<<<< HEAD
        start: 0.000,
        alignOrigin: [0.5, 0.5],
      },
    });
    

  },[]);
=======
        start: 0.05,

        alignOrigin: [0.5, 0.5],
      },
    });
  }, []);
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
  useEffect(() => {
    // Create a GSAP timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".box-contain",
        start: "70% 78%",
        end: "bottom bottom",
<<<<<<< HEAD
        scrub:2,
        onEnterBack: handleScrollStart, // call handleScrollStart when scrolling back
        onEnter: handleScrollEnd, // call handleScrollEnd when scrolling forward
      }
    });

    // Add animations to the timeline
    timeline.to("#cap", { y:200, opacity:1 });
    timeline.to("#light", {opacity:0 });
=======
        scrub: 2,

        onEnterBack: handleScrollStart, // call handleScrollStart when scrolling back
        onEnter: handleScrollEnd, // call handleScrollEnd when scrolling forward
      },
    });

    // Add animations to the timeline
    timeline.to("#cap", { y: 200, opacity: 1 });
    timeline.to("#light", { opacity: 0 });
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a

    // Clean up function
    return () => {
      // Ensure to kill the ScrollTrigger when the component is unmounted
      timeline.kill();
    };
  }, []);

  // Define handleScrollEnd function
  const handleScrollEnd = () => {
<<<<<<< HEAD
    var a =  document.querySelector("#OBJECTS");
=======
    var a = document.querySelector("#OBJECTS");
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
    // Perform actions on completion of the animation
    // For example, add a class to the selected element
    if (a) {
      a.classList.add("rotate-data");
      // console.log("namaste india")
    }
  };

  // Define handleScrollStart function
  const handleScrollStart = () => {
<<<<<<< HEAD
    var a =  document.querySelector("#OBJECTS");
    // Remove the added class to return to initial position
    if (a) {
      a.classList.remove("rotate-data");
         
=======
    var a = document.querySelector("#OBJECTS");
    // Remove the added class to return to initial position
    if (a) {
      a.classList.remove("rotate-data");
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
    }
  };

  const [reverseScrollCount, setReverseScrollCount] = useState(0);

<<<<<<< HEAD
  // console.log(reverseScrollCount)

// test testimonial start *********************************
// useEffect(() => {
//   let lastScrollTop = 0;

//   // const handleScroll = () => {
//   //   const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

//   //   if (currentScrollTop > lastScrollTop) {
//   //     console.log("scroll down");
//   //   } else {
//   //     gsap.to("#rect", {
//   //       duration: 1,
//   //       // rotation: "-90",
//   //       ease: "none",
//   //       // alignOrigin: [0.5, 0.5],
//   //       path: "#path",
//   //       align: "#path",
//   //       autoRotate: true,
//   //     });
//   //   }

//   //   lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
//   // };

//   // window.addEventListener('wheel', handleScroll);

//   return () => {
//     window.removeEventListener('wheel', handleScroll);
//   };
// }, []);

// test testimonial end ************************************




const audioRef = useRef(null);

useEffect(()=>{
  setvalue(true)
  // console.log(value)
})

// auto play code

useEffect(() => {
  // Function to be called when the page loads
  const onPageLoad = () => {
    // console.log("page load succsucc");
  };

  // Call onPageLoad when the component mounts
  onPageLoad();

  // Add click event listener to the audio element
  const handleAudioClick = () => {
    // console.log("Audio clicked");
  };

  if (audioRef.current) {
    audioRef.current.addEventListener('click', handleAudioClick);
  }

  // Cleanup
  return () => {
    if (audioRef.current) {
      audioRef.current.removeEventListener('click', handleAudioClick);
    }
  };
}, []);


// autoplay codeend



// useEffect(() => {
//   const handleScrollStart = () => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//     console.log("Scrolling started");
//   };

//   const handleScrollStop = () => {
//     console.log("Scrolling stopped");
//   };

//   gsap.to(audioRef.current, {
//     scrollTrigger: {
//       trigger: audioRef.current,
//       start: '20% 15%', // Adjust as needed
//       end: 'bottom 15%', // Adjust as needed
//       onUpdate: (self) => {
//         if (self.isDragging || self.isScrolling) {
//           // Scroll is in progress
//           handleScrollStart();
//         } else {
//           // Scroll has stopped
//           handleScrollStop();
//         }
//       }
//     }
//   });
// }, []);

useEffect(() => {
  let timeout;

  const handleScrollStart = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleScrollStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
     
    }
    // console.log("Scrolling stopped");
  
  };
  const handleScroll = () => {
    clearTimeout(timeout);
    handleScrollStart();

    timeout = setTimeout(() => {
      handleScrollStop();
    },420); // Adjust the timeout duration as needed
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
  
    <div className="rel">
      	<Head>
			<link rel='icon' href="/favicon.ico" />
		</Head>
   
    {/* <audio ref={audioRef} loop controls={true} className="audiodata" autoPlay >
  <source src="music.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio> */}

     <Modal
=======
  console.log(reverseScrollCount);

  // test testimonial start *********************************
  // useEffect(() => {
  //   let lastScrollTop = 0;

  //   // const handleScroll = () => {
  //   //   const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //   //   if (currentScrollTop > lastScrollTop) {
  //   //     console.log("scroll down");
  //   //   } else {
  //   //     gsap.to("#rect", {
  //   //       duration: 1,
  //   //       // rotation: "-90",
  //   //       ease: "none",
  //   //       // alignOrigin: [0.5, 0.5],
  //   //       path: "#path",
  //   //       align: "#path",
  //   //       autoRotate: true,
  //   //     });
  //   //   }

  //   //   lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  //   // };

  //   // window.addEventListener('wheel', handleScroll);

  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, []);

  // test testimonial end ************************************

  const audioRef = useRef(null);

  useEffect(() => {
    setvalue(true);
    console.log(value);
  });

  // auto play code

  useEffect(() => {
    // Function to be called when the page loads
    const onPageLoad = () => {
      console.log("page load succsucc");
    };

    // Call onPageLoad when the component mounts
    onPageLoad();

    // Add click event listener to the audio element
    const handleAudioClick = () => {
      console.log("Audio clicked");
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("click", handleAudioClick);
    }

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("click", handleAudioClick);
      }
    };
  }, []);

  // autoplay codeend

  // useEffect(() => {
  //   const handleScrollStart = () => {
  //     if (audioRef.current) {
  //       audioRef.current.play();
  //     }
  //     console.log("Scrolling started");
  //   };

  //   const handleScrollStop = () => {
  //     console.log("Scrolling stopped");
  //   };

  //   gsap.to(audioRef.current, {
  //     scrollTrigger: {
  //       trigger: audioRef.current,
  //       start: '20% 15%', // Adjust as needed
  //       end: 'bottom 15%', // Adjust as needed
  //       onUpdate: (self) => {
  //         if (self.isDragging || self.isScrolling) {
  //           // Scroll is in progress
  //           handleScrollStart();
  //         } else {
  //           // Scroll has stopped
  //           handleScrollStop();
  //         }
  //       }
  //     }
  //   });
  // }, []);

  useEffect(() => {
    let timeout;

    const handleScrollStart = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    const handleScrollStop = () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      // console.log("Scrolling stopped");
    };
    const handleScroll = () => {
      clearTimeout(timeout);
      handleScrollStart();

      timeout = setTimeout(() => {
        handleScrollStop();
      }, 420); // Adjust the timeout duration as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="rel">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <audio ref={audioRef} loop controls={true} className="audiodata" autoPlay>
        <source src="music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <Modal
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
<<<<<<< HEAD
          <Modal.Title> <h4>{store[0] && store[0].heading}</h4></Modal.Title>
        </Modal.Header>
        <Modal.Body>
     <div className="d-flex">
      <div>
           <img src="https://img.freepik.com/free-vector/chef-character-design_1322-128.jpg?w=826&t=st=1707728072~exp=1707728672~hmac=48021a7818180ab20e03773d9120caedfe5fdbab81711ef71893f7ccff6539dd" alt="" className="w-75"/>
      </div>
      <div>
        <p>{store[0] && store[0].Description}</p>
        <h5>{store[0] && store[0].Conclusiondata}</h5>
      </div>
     </div>
=======
          <Modal.Title>
            {" "}
            <h4>{store[0] && store[0].heading}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <div>
              <img
                src="https://img.freepik.com/free-vector/chef-character-design_1322-128.jpg?w=826&t=st=1707728072~exp=1707728672~hmac=48021a7818180ab20e03773d9120caedfe5fdbab81711ef71893f7ccff6539dd"
                alt=""
                className="w-75"
              />
            </div>
            <div>
              <p>{store[0] && store[0].Description}</p>
              <h5>{store[0] && store[0].Conclusiondata}</h5>
            </div>
          </div>
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="hero-banner">
<<<<<<< HEAD
      <Col md={6}>
      <div className="hero-content ms-5">
        <h1 id="heading">
          The taste of <span className="spandata">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                1300,
                ' Burger', // initially rendered starting point
                1300,
                'Pizza',
                1300,
                'Waffle',
                1400,
                'Drink',
                1300,
              ]}
              speed={60}
              style={{ fontSize: "77px",color:"orange" }}
              repeat={Infinity}
            />
          </span>
        </h1>
        <h1>that will give you</h1>
        <h2 className="unforgot">
          <span className="tasty">
          Unforgettable </span><span className="f"> feels</span>
        </h2>
      </div>
    </Col>
   <Col md={6} >
      <Slider {...settings}>
        <div>
          <Image src={WafflesSlider} alt="" className={styles.slider} />
        </div>
        <div>
          <Image src={MilkSlider} alt="" className={styles.slider} />
        </div>
        <div>
          <Image src={BurgersSlider} alt="" className={styles.slider} />
        </div>
        <div>
          <Image src={MilkSlider} alt="" className={styles.slider} />
        </div>
      </Slider>
    </Col>
      </Row>


<div className="allproduct">
  <h1 className="text-center">All Products</h1>
</div>
      
=======
        <Col md={6}>
          <div className="hero-content ms-5">
            <h1 id="heading">
              The taste of{" "}
              <span>
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    1300,
                    " Burger", // initially rendered starting point
                    1300,
                    "Pizza",
                    1300,
                    "Waffle",
                    1400,
                    "Drink",
                    1300,
                  ]}
                  speed={60}
                  style={{ fontSize: "77px" }}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <h1>that will give you</h1>
            <h2>
              Unforgettable<span> feels</span>
            </h2>
          </div>
        </Col>
        <Col md={6}>
          <Slider {...settings}>
            <div>
              <Image src={WafflesSlider} alt="" className={styles.slider} />
            </div>
            <div>
              <Image src={MilkSlider} alt="" className={styles.slider} />
            </div>
            <div>
              <Image src={BurgersSlider} alt="" className={styles.slider} />
            </div>
            <div>
              <Image src={MilkSlider} alt="" className={styles.slider} />
            </div>
          </Slider>
        </Col>
      </Row>

      <div className="allproduct">
        <h1 className="text-center">All Products</h1>
      </div>

>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
      <div className="main_background">
        <div className="justify-content-center align-items-center">
          <center>
            <svg
              style={{ marginTop: "200px" }}
              width="50%"
              viewBox="0 0 1075 12000"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="svg"
            >
              <path
                id="path"
                d="M-114.931 5C-60.7796 65.4209 526.033 425.845 526.033 425.845C1248.35 824.999 578.262 1339.85 578.262 1339.85C-95.382 1857.02 578.262 2255.46 578.262 2255.46C1220.19 2691.25 625.241 3239.63 625.241 3239.63C-15.0716 3787.49 625.241 4114.21 625.241 4114.21C1394.46 4606.22 625.241 5205.96 625.241 5205.96C-55.1457 5799.87 603.105 6209.84 603.105 6209.84C1182.53 6656.74 603.105 7202.41 603.105 7202.41C-87.2411 7849.35 603.105 8141.03 603.105 8141.03C1322.42 8481.46 603.105 9161.65 603.105 9161.65C41.8878 9753.08 587.403 10108.8 587.403 10108.8C1159.59 10533.9 581.947 11062.5 581.947 11062.5C54.4797 11690.9 627.575 12216.5 627.575 12216.5"
                stroke="#500F17"
                strokeWidth="15"
              />

              <g id="rect" transform="scale(2)">
                <g id="Layer 1">
                  <path
                    id="Vector"
                    d="M143.568 34.8525L145.096 41.9145L104.438 50.6995L103.536 43.0215L143.568 34.8525Z"
                    fill="#1C75BC"
                  />
                  <path
                    id="Vector_2"
                    d="M142.196 39.2415C140.949 36.6805 141.631 33.7845 143.715 32.7715C145.799 31.7585 148.497 33.0105 149.746 35.5715C150.995 38.1325 150.31 41.0295 148.225 42.0435C146.14 43.0575 143.436 41.8025 142.196 39.2415Z"
                    fill="#FED9AE"
                  />
                  <path
                    id="Vector_3"
                    d="M111.344 53.8265C111.344 53.8265 105.109 49.7895 99.438 55.7265C95.038 60.3265 99.232 45.2325 99.232 45.2325L104.721 46.0835L111.344 53.8265Z"
                    fill="#FED9AE"
                  />
                  <path
                    id="Vector_4"
                    d="M21.7791 54.9805L27.0811 51.0355L45.6641 67.8405L39.3651 74.4685L21.7791 54.9805Z"
                    fill="#1C75BC"
                  />
                  <path
                    id="Vector_5"
                    d="M27.158 51.1265L23.036 46.0845L10.559 57.8195L22.002 55.2315L27.158 51.1265Z"
                    fill="#DC4614"
                  />
                  <path
                    id="Vector_6"
                    d="M123.536 44.1185C122.188 50.6115 117.646 55.1635 111.922 53.9755C106.198 52.7875 102.65 46.5675 103.993 40.0755C105.336 33.5835 111.068 29.2755 116.793 30.4605C122.518 31.6455 124.874 37.6255 123.536 44.1185Z"
                    fill="#FED9AE"
                  />
                  <path
                    id="Vector_7"
                    d="M119.069 36.0795C118.198 35.8475 117.342 35.5275 116.51 35.2175C114.678 34.5275 112.417 33.7755 110.71 35.1745C107.903 37.4845 108.433 42.1565 107.321 45.3385C106.838 46.7185 106.268 48.3385 104.577 48.5285C101.025 48.9175 99.677 43.5835 99.287 41.0405C98.432 35.5475 102.436 29.2745 107.787 27.7905C113.752 26.1355 119.024 28.9375 124.218 31.4825C124.566 31.6535 129.091 33.3235 129.135 32.7215C128.835 36.8595 123.119 36.7665 120.155 36.3095C119.796 36.2495 119.436 36.1715 119.069 36.0795Z"
                    fill="#8B5E3C"
                  />
                  <path
                    id="Vector_8"
                    d="M108.999 42.6105C108.929 44.9855 107.716 46.8755 106.287 46.8355C104.858 46.7955 103.761 44.8355 103.831 42.4575C103.901 40.0795 105.115 38.1905 106.542 38.2325C107.969 38.2745 109.069 40.2345 108.999 42.6105Z"
                    fill="#FED9AE"
                  />
                  <path
                    id="Vector_9"
                    d="M66.504 64.3965L39.365 74.4685L33.976 66.0405L61.453 50.5785L66.504 64.3965Z"
                    fill="#1C75BC"
                  />
                  <path
                    id="Vector_10"
                    d="M116.471 41.7685C116.306 42.5685 115.685 43.1135 115.083 42.9895C114.481 42.8655 114.132 42.1175 114.296 41.3195C114.46 40.5215 115.082 39.9765 115.682 40.0995C116.282 40.2225 116.636 40.9725 116.471 41.7685Z"
                    fill="#726658"
                  />
                  <path
                    id="Vector_11"
                    d="M15.943 57.2525L9.538 56.0695L6 75.2365L14.191 66.1235L15.943 57.2525Z"
                    fill="#F15A29"
                  />
                  <path
                    id="Vector_12"
                    d="M14.191 66.1235L13.834 56.8505L61.453 50.5785L63.529 65.5275L14.191 66.1235Z"
                    fill="#126BB2"
                  />
                  <path
                    id="Vector_13"
                    d="M122.491 43.0155C122.323 43.8155 121.814 44.3835 121.353 44.2885C120.892 44.1935 120.653 43.4675 120.818 42.6705C120.983 41.8735 121.491 41.3035 121.952 41.3995C122.413 41.4955 122.652 42.2175 122.491 43.0155Z"
                    fill="#726658"
                  />
                  <path
                    id="Vector_14"
                    d="M63.167 65.5545L61.454 50.5765L94.734 44.3255C95.7046 44.1432 96.706 44.2174 97.6392 44.5406C98.5723 44.8638 99.4051 45.4249 100.055 46.1685C100.901 47.1361 101.441 48.3323 101.609 49.6065L101.636 49.8065C101.752 50.6918 101.685 51.5915 101.438 52.4498C101.192 53.308 100.772 54.1064 100.204 54.7955L98.961 56.3045C96.9658 58.7267 94.1628 60.3468 91.068 60.8665L63.167 65.5545Z"
                    fill="#126BB2"
                  />
                  <path
                    id="Vector_15"
                    d="M92.047 47.7055C92.8928 47.5698 93.758 47.7728 94.4552 48.2705C95.1525 48.7682 95.6255 49.5205 95.772 50.3645L95.9 51.1055C96.0471 51.9566 95.8501 52.8312 95.3524 53.5371C94.8547 54.2429 94.097 54.7222 93.246 54.8695L55.468 61.3965L54.887 53.6865L92.047 47.7055Z"
                    fill="#1C75BC"
                  />
                  <path
                    id="Vector_16"
                    d="M33.1761 41.3206L41.2912 33.0845L93.7486 39.2996C93.7486 39.2996 101.84 42.4068 102.408 48.0205C102.764 51.5585 101.52 52.2121 101.52 52.2121C101.52 52.2121 98.5051 46.1498 89.6945 45.3573C85.2193 44.9488 60.4369 43.0362 60.4369 43.0362L33.1761 41.3206Z"
                    fill="#F15A29"
                  />
                  <path
                    id="Vector_17"
                    d="M51.771 60.6615C49.398 59.0895 48.514 56.2475 49.797 54.3155C51.08 52.3835 54.04 52.0925 56.412 53.6665C58.784 55.2405 59.672 58.0795 58.389 60.0115C57.106 61.9435 54.145 62.2345 51.771 60.6615Z"
                    fill="#FED9AE"
                  />
                  <path
                    id="Vector_18"
                    d="M124.754 32.6059L124.173 32.5109L124.118 32.5019L124.105 32.4997L124.105 32.4996C123.465 32.3769 122.818 32.2668 122.174 32.1665C119.171 31.7033 116.136 31.4713 113.097 31.4725H113.097C110.81 31.4713 108.526 31.6037 106.255 31.8691L106.254 31.8692C104.842 32.0311 103.436 32.245 102.034 32.5107L101.441 32.6232V32.0195V23.8688C101.436 23.861 101.428 23.8501 101.416 23.8362C101.382 23.794 101.335 23.7459 101.281 23.6973C101.26 23.6781 101.239 23.6598 101.219 23.6429L100.672 23.6943L100.648 23.6965H100.625C95.6947 23.6965 91.8727 19.2299 92.807 14.3682L124.754 32.6059ZM124.754 32.6059V32.0175V24.2069M124.754 32.6059V24.2069M124.754 24.2069C125.492 24.1223 126.212 23.9193 126.887 23.6048C129.732 22.3454 132.618 19.3649 133.923 15.9947C134.58 14.3002 134.847 12.48 134.485 10.7125C134.121 8.93675 133.128 7.25207 131.331 5.83127C122.965 -0.790984 114.926 1.4149 110.939 4.36032C107.007 7.26487 102.772 8.33143 97.5689 9.6418C97.1733 9.74144 96.7721 9.8425 96.3649 9.94587L96.3649 9.94589C94.4312 10.4371 93.2059 12.2915 92.807 14.3681L124.754 24.2069ZM101.483 23.964C101.483 23.9648 101.483 23.9645 101.483 23.9638L101.483 23.964Z"
                    fill="white"
                    stroke="#7C3821"
                  />
                  <path
                    id="Vector_19"
                    d="M126.68 23.1495C125.799 23.5415 124.923 23.7495 124.11 23.7495C124.11 23.7495 124.11 23.7495 124.103 23.7495C125.114 23.2965 128.403 21.9375 129.494 17.2275C129.494 17.2275 125.444 20.5075 123.533 20.1035C123.533 20.1035 125.389 18.3345 126.961 12.7035C126.837 12.9035 122.892 19.2775 117.844 19.6715C117.844 19.6715 122.806 16.0845 121.129 8.80749C121.129 8.80749 114.929 22.1195 112.915 17.5605C111.436 14.2105 111.215 14.1395 111.205 14.1395C111.195 14.1395 111.805 20.4765 109.898 18.8675C108.619 17.7701 107.409 16.5945 106.276 15.3475C106.276 15.3475 105.706 17.6285 107.817 19.9065C107.817 19.9065 99.77 20.5785 97.489 15.4465C97.489 15.4465 97.189 20.6795 103.225 21.3465C103.225 21.3465 100.408 22.2185 99.132 21.1465C99.132 21.1465 99.301 22.3175 101.372 23.1225L100.627 23.1925C98.9812 23.1957 97.381 22.6526 96.077 21.6485C93.957 20.0275 92.752 17.3125 93.3 14.4585C93.679 12.4855 94.817 10.8515 96.49 10.4265C102.22 8.97149 106.911 7.95449 111.238 4.75849C112.912 3.52249 115.338 2.41249 118.22 2.09249C121.94 1.67949 126.42 2.57949 131.02 6.21949C137.865 11.6345 132.12 20.7455 126.68 23.1495Z"
                    fill="white"
                  />
                  <path
                    id="Vector_20"
                    d="M118.22 2.0925C117.443 3.1925 116.291 4.9455 109.614 8.4385C102.629 12.0925 92.353 9.4145 96.077 21.6485C93.957 20.0275 92.752 17.3125 93.3 14.4585C93.679 12.4855 94.817 10.8515 96.49 10.4265C102.22 8.9715 106.911 7.9545 111.238 4.7585C112.912 3.5225 115.336 2.4125 118.22 2.0925Z"
                    fill="#E1E2E4"
                  />
                  <path
                    id="Vector_21"
                    d="M123.536 20.0985C123.536 20.0985 125.392 18.3295 126.964 12.6985C126.84 12.8985 122.895 19.2725 117.847 19.6665C117.847 19.6665 122.809 16.0795 121.132 8.80249C121.132 8.80249 114.932 22.1145 112.918 17.5555C111.439 14.2055 111.218 14.1345 111.208 14.1345C111.198 14.1345 111.808 20.4715 109.901 18.8625C108.622 17.7651 107.412 16.5895 106.279 15.3425C106.279 15.3425 105.709 17.6235 107.82 19.9015C107.82 19.9015 99.773 20.5735 97.492 15.4415C97.492 15.4415 97.192 20.6745 103.228 21.3415C103.228 21.3415 100.411 22.2135 99.135 21.1415C99.135 21.1415 99.304 22.3125 101.375 23.1175C101.375 23.1175 101.85 23.4565 101.93 23.7175C101.93 23.7325 101.943 23.7475 101.946 23.7635V32.0115C103.357 31.7448 104.776 31.5292 106.202 31.3645C106.381 29.2245 106.902 26.9105 108.076 25.6375C110.542 22.9685 117.116 22.0685 120.93 23.9175L120.946 23.9255C121.424 24.1532 121.828 24.5123 122.109 24.9609C122.391 25.4094 122.539 25.9289 122.536 26.4585C122.526 28.0655 122.463 30.0825 122.251 31.6755C122.901 31.7755 123.551 31.8875 124.199 32.0115L124.254 32.0205V23.7445C124.28 23.746 124.306 23.746 124.332 23.7445C125.41 23.2575 128.432 21.8305 129.494 17.2255C129.494 17.2225 125.444 20.5025 123.536 20.0985Z"
                    fill="#E1E2E4"
                  />
                  <path
                    id="Vector 2"
                    d="M115.021 22.0717C108.692 22.6297 105 25.9778 105 31C105 30.1072 116.603 30.256 122.404 30.442C122.404 30.442 126.113 21.0937 115.021 22.0717Z"
                    fill="white"
                  />
                  <path
                    id="Vector_22"
                    d="M124.254 31.0345V32.0175L124.199 32.0085C123.552 31.8845 122.899 31.7735 122.251 31.6725C119.222 31.2053 116.162 30.9713 113.097 30.9725C110.791 30.9712 108.487 31.1048 106.197 31.3725C104.773 31.5358 103.354 31.7515 101.941 32.0195V31.0115C106.329 30.0565 117.378 28.1215 124.254 31.0345Z"
                    fill="#E1E2E4"
                  />
                </g>
              </g>
            </svg>
          </center>
          <center>
<<<<<<< HEAD
  <div className="box-contain">
  <svg width="45%" height="auto" viewBox="0 0 733 658" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop:"-430px"}}>
<g id="OBJECTS">
<g id="bottom">
<path id="Vector" d="M343.241 364.934L160.988 399.07V623.845L343.241 589.709V364.934Z" fill="#B0B0B0"/>
<path id="Vector_2" d="M524.992 399.07L342.739 364.934V589.709L524.992 623.845V399.07Z" fill="#B7B7B7"/>
<path id="Vector_3" d="M342.99 658.002L160.737 623.866V399.112L342.99 433.227V658.002Z" fill="#F9F9F9"/>
<path id="Vector_4" d="M524.741 623.866L342.489 658.002V433.227L524.741 399.112V623.866Z" fill="#CECECE"/>
<path id="Vector_5" d="M267.499 643.847L217.805 634.556V409.78L267.499 419.092V643.847Z" fill="#DE4F68"/>
<path id="Vector_6" d="M464.227 635.182L414.533 644.536V419.739L464.227 410.427V635.182Z" fill="#9E2B46"/>
</g>
<g id="light">
<path id="Vector_7" d="M160.194 401.006L0 50H733L524.198 401.006L341.945 435.121L160.194 401.006Z" fill="url(#paint0_linear_266_38)"/>
<path id="Vector_8" d="M192.237 407.248L61.3914 120.569H660.099L489.565 407.248L340.692 435.121L192.237 407.248Z" fill="url(#paint1_linear_266_38)"/>
<path id="Vector_9" d="M235.393 415.224L141.979 210.533H569.443L447.683 415.224L341.402 435.121L235.393 415.224Z" fill="url(#paint2_linear_266_38)"/>
</g>
<g id="cap">
<path id="Vector_10" d="M153.017 166.254L148.84 219.878L345.332 259.928L343.404 200.825L153.017 166.254Z" fill="#FCFCFC"/>
<path id="Vector_11" d="M536.851 160.281L539.146 214.814L345.333 259.928L343.404 200.825L536.851 160.281Z" fill="#DDDDDD"/>
<path id="Vector_12" d="M153.017 166.254L343.404 200.825L536.851 160.281L340.485 130.265L153.017 166.254Z" fill="#E5E5E5"/>
<path id="Vector_13" d="M220.014 178.539L418.765 141.196L465.635 149.398L281.202 189.651L220.014 178.539Z" fill="#B2354E"/>
<path id="Vector_14" d="M220.014 178.539L213.243 233.003L273.473 245.272L281.202 189.651" fill="#DE4F68"/>
<path id="Vector_15" d="M274.53 143.214L224.192 152.584L399.708 188.357L463.535 175.662L274.53 143.214Z" fill="#B2354E"/>
<path id="Vector_16" d="M538.224 110.725C523.556 126.611 446.377 183.725 366.728 172.649C366.728 172.649 485.909 77.2413 537.095 104.194C537.654 104.502 538.135 104.931 538.504 105.449C538.873 105.967 539.121 106.56 539.229 107.187C539.338 107.813 539.303 108.456 539.13 109.068C538.956 109.68 538.646 110.246 538.224 110.725Z" fill="#9E2B46"/>
<path id="Vector_17" d="M348.623 127.584L341.693 168.453L366.728 172.649C366.728 172.649 493.928 77.6318 538.303 105.241L479.657 26.0231C477.968 23.7966 475.635 22.1378 472.968 21.2684C470.301 20.3991 467.429 20.3606 464.734 21.158C442.647 27.7707 386.887 49.5896 355.495 107.878C352.16 114.042 349.839 120.695 348.623 127.584Z" fill="#E55A77"/>
<path id="Vector_18" d="M150.802 79.9101C162.631 97.9743 232.908 166.846 313.352 168.855C313.352 168.855 207.948 55.3673 152.914 73.6456C152.32 73.8706 151.783 74.2241 151.342 74.6805C150.901 75.1368 150.568 75.6846 150.365 76.2842C150.163 76.8838 150.097 77.5202 150.173 78.1473C150.248 78.7744 150.463 79.3765 150.802 79.9101Z" fill="#9E2B46"/>
<path id="Vector_19" d="M335.089 127.132L335.16 168.815L313.352 168.855C313.352 168.855 200.001 54.4951 151.656 74.4191L222.651 5.74468C224.696 3.82266 227.281 2.56736 230.06 2.14752C232.839 1.72768 235.677 2.16344 238.194 3.39622C259.201 13.6577 311.891 45.0376 332.569 109.557C334.311 115.249 335.16 121.177 335.089 127.132Z" fill="#E55A77"/>
<path id="Vector_20" d="M479.676 25.8419C479.676 25.8419 437.96 120.126 366.728 172.649L343.94 160.347L471.798 20.7877C471.798 20.7877 475.565 20.2761 479.676 25.8419Z" fill="#DE4F68"/>
<path id="Vector_21" d="M221.622 6.63363C221.622 6.63363 250.374 105.367 313.972 166.422L338.22 157.079L230.107 2.58299C230.107 2.58299 226.442 1.63577 221.622 6.63363Z" fill="#DE4F68"/>
<path id="Vector_22" d="M399.708 188.357L402.499 246.615L466.249 231.781L463.535 175.662L399.708 188.357Z" fill="#9E2B46"/>
<path id="Vector_23" d="M482.944 10.6143C467.388 41.6709 399.787 145.731 355.208 156.42C355.208 156.42 424.07 26.3613 480.179 5.02292C483.578 3.70543 484.978 6.48534 482.944 10.6143Z" fill="#9E2B46"/>
<path id="Vector_24" d="M349.22 127.492L345.235 158.286L355.125 156.441C355.125 156.441 430.659 20.5874 481.767 4.82317L415.924 -7.04019C413.253 -7.41328 409.243 -4.21578 405.77 0.932277C392.924 20.0152 366.046 63.0103 352.349 111.992C350.937 117.08 349.891 122.259 349.22 127.492Z" fill="#DE4F68"/>
<path id="Vector_25" d="M362.629 118.416C366.104 105.314 376.478 81.9949 376.478 81.9949C371.352 87.0956 359.49 113.254 359.49 113.254C355.906 98.7811 367.954 69.0488 367.954 69.0488C357.566 90.8077 349.276 122.256 349.276 122.256L358.143 124.846L361.601 125.848L365.511 126.884C364.552 121.41 375.594 97.5173 375.594 97.5173C375.594 97.5173 368.117 103.703 362.629 118.416Z" fill="url(#paint3_linear_266_38)"/>
<path id="Vector_26" d="M227.393 -5.3347C237.604 27.741 287.14 141.091 329.476 158.643C329.476 158.643 282.982 19.4846 231.131 -10.3989C227.891 -12.2518 226.062 -9.69703 227.393 -5.3347Z" fill="#9E2B46"/>
<path id="Vector_27" d="M340.057 130.995L338.909 162.03L329.476 158.643C329.476 158.643 277.355 12.7117 229.499 -10.8704L296.45 -12.2537C299.122 -12.2114 302.567 -8.40811 305.14 -2.78806C314.669 18.0654 334.082 64.7231 339.494 115.282C340.06 120.498 340.249 125.749 340.057 130.995Z" fill="#DE4F68"/>
<path id="Vector_28" d="M323.106 127.767C323.106 127.767 306.407 71.7561 297.595 55.5378C297.595 55.5378 320.245 92.6375 327.409 113.94L321.063 89.359C321.063 89.359 339.226 113.767 336.238 121.585C333.25 129.402 323.106 127.767 323.106 127.767Z" fill="url(#paint4_linear_266_38)"/>
<path id="Vector_29" d="M315.293 169.906L307.851 150.99C306.721 148.104 306.347 144.978 306.763 141.905C307.18 138.831 308.374 135.91 310.233 133.415C312.092 130.921 314.555 128.934 317.393 127.641C320.231 126.348 323.35 125.791 326.458 126.022L361.177 128.603C364.302 128.838 367.312 129.862 369.924 131.578C372.535 133.294 374.661 135.645 376.1 138.409C377.539 141.174 378.244 144.26 378.149 147.376C378.053 150.491 377.16 153.534 375.553 156.216L365.674 172.685L315.293 169.906Z" fill="#B2354E"/>
<path id="Vector_30" d="M327.182 170.595C327.182 170.595 312.421 161.898 311.755 147.138C311.755 147.138 323.76 170.398 335.66 171.04C335.66 171.04 321.643 150.823 328.215 140.295C328.215 140.295 335.982 162.033 340.662 165.642C340.662 165.642 349.975 162.959 353.736 156.39C353.736 156.39 356.012 162.397 351.936 165.678C351.936 165.678 365.032 165.982 370.944 150.694C370.944 150.694 371.774 163.053 354.113 172.152L327.182 170.595Z" fill="#9E2B46"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_266_38" x1="366.49" y1="467.023" x2="366.49" y2="81.902" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFF9DE" stopOpacity="0.6"/>
<stop offset="0.96" stopColor="#FFF9DE" stopOpacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_266_38" x1="360.745" y1="461.177" x2="360.745" y2="146.604" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFF9DE" stopOpacity="0.6"/>
<stop offset="0.96" stopColor="#FFF9DE" stopOpacity="0"/>
</linearGradient>
<linearGradient id="paint2_linear_266_38" x1="355.711" y1="453.723" x2="355.711" y2="229.136" gradientUnits="userSpaceOnUse">
<stop stopColor="#FFF9DE" stopOpacity="0.6"/>
<stop offset="0.96" stopColor="#FFF9DE" stopOpacity="0"/>
</linearGradient>
<linearGradient id="paint3_linear_266_38" x1="375.788" y1="65.837" x2="357.127" y2="127.94" gradientUnits="userSpaceOnUse">
<stop offset="0.09" stopColor="#B2354E" stopOpacity="0.86"/>
<stop offset="1" stopColor="#B2354E" stopOpacity="0"/>
</linearGradient>
<linearGradient id="paint4_linear_266_38" x1="300.5" y1="49.2044" x2="328.518" y2="119.352" gradientUnits="userSpaceOnUse">
<stop offset="0.09" stopColor="#B2354E" stopOpacity="0.86"/>
<stop offset="1" stopColor="#B2354E" stopOpacity="0"/>
</linearGradient>
</defs>
</svg>

  </div>
          </center>

       
          <div className="footer">
    <Container>
    <Row>
     <Col md={4}>
        <div>
         <div>
           <div>
             <h4>DONT BE SHY, SAY HI !</h4>
               <p>4th Floor, Magna Parkview, Sri Shyam Nagar,<br></br> Telecom Nagar, Gachibowli, Hyderabad, Telangana 500032.</p>
            
           </div>
         
         </div>
        </div>
     </Col>
     <Col md={4} className="d-flex justify-content-center">
       <div >
         <div >
           <h4 >TIMMINGS</h4>
         </div>
         <div className="weeks">
           <span className="week" >monday</span>
           <span>10am - 7pm</span>
         </div>
         <div>
           <span className="week">tuesday</span>
           <span>10am - 7pm</span>
         </div>
         <div>
           <span className="week">Wednesday</span>
           <span>10am - 7pm</span>
         </div>
         <div>
           <span className="week">thursday</span>
           <span>10am - 7pm</span>
         </div>
         <div>
           <span className="week">Friday</span>
           <span>10am - 7pm</span>
         </div>
         <div>
           <span className="week">Saturday</span>
           <span>10am - 7pm</span>
         </div>
         <div>
           <span className="week">Sunday</span>
           <span>10am - 7pm</span>
         </div>
         <div>

         </div>
       </div>
     </Col>
     <Col md={4} className="d-flex justify-content-center ">
       <div>
       <div>
         <h4 >LOCATION</h4>

       </div>
       <div className="map">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.51534884543!2d78.36351517594053!3d17.43503120142943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918b8329738f%3A0xfbf7bd3bf9e6e099!2sCode%20Connex%20Pvt.Ltd%20-%20Best%20Software%20Company%20in%20Hyderabad%20%7C%20Digital%20Marketing%20%7C%20Web%20Design%20%26%20Development%20%7C%20App%20Development!5e0!3m2!1sen!2sin!4v1708066169236!5m2!1sen!2sin" width="300" height="200"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       </div>
       </div>
     </Col>
   </Row>
    </Container>
</div>
     
             
=======
            <div className="box-contain">
              <svg
                width="45%"
                height="auto"
                viewBox="0 0 733 658"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginTop: "-430px" }}
              >
                <g id="OBJECTS">
                  <g id="bottom">
                    <path
                      id="Vector"
                      d="M343.241 364.934L160.988 399.07V623.845L343.241 589.709V364.934Z"
                      fill="#B0B0B0"
                    />
                    <path
                      id="Vector_2"
                      d="M524.992 399.07L342.739 364.934V589.709L524.992 623.845V399.07Z"
                      fill="#B7B7B7"
                    />
                    <path
                      id="Vector_3"
                      d="M342.99 658.002L160.737 623.866V399.112L342.99 433.227V658.002Z"
                      fill="#F9F9F9"
                    />
                    <path
                      id="Vector_4"
                      d="M524.741 623.866L342.489 658.002V433.227L524.741 399.112V623.866Z"
                      fill="#CECECE"
                    />
                    <path
                      id="Vector_5"
                      d="M267.499 643.847L217.805 634.556V409.78L267.499 419.092V643.847Z"
                      fill="#DE4F68"
                    />
                    <path
                      id="Vector_6"
                      d="M464.227 635.182L414.533 644.536V419.739L464.227 410.427V635.182Z"
                      fill="#9E2B46"
                    />
                  </g>
                  <g id="light">
                    <path
                      id="Vector_7"
                      d="M160.194 401.006L0 50H733L524.198 401.006L341.945 435.121L160.194 401.006Z"
                      fill="url(#paint0_linear_266_38)"
                    />
                    <path
                      id="Vector_8"
                      d="M192.237 407.248L61.3914 120.569H660.099L489.565 407.248L340.692 435.121L192.237 407.248Z"
                      fill="url(#paint1_linear_266_38)"
                    />
                    <path
                      id="Vector_9"
                      d="M235.393 415.224L141.979 210.533H569.443L447.683 415.224L341.402 435.121L235.393 415.224Z"
                      fill="url(#paint2_linear_266_38)"
                    />
                  </g>
                  <g id="cap">
                    <path
                      id="Vector_10"
                      d="M153.017 166.254L148.84 219.878L345.332 259.928L343.404 200.825L153.017 166.254Z"
                      fill="#FCFCFC"
                    />
                    <path
                      id="Vector_11"
                      d="M536.851 160.281L539.146 214.814L345.333 259.928L343.404 200.825L536.851 160.281Z"
                      fill="#DDDDDD"
                    />
                    <path
                      id="Vector_12"
                      d="M153.017 166.254L343.404 200.825L536.851 160.281L340.485 130.265L153.017 166.254Z"
                      fill="#E5E5E5"
                    />
                    <path
                      id="Vector_13"
                      d="M220.014 178.539L418.765 141.196L465.635 149.398L281.202 189.651L220.014 178.539Z"
                      fill="#B2354E"
                    />
                    <path
                      id="Vector_14"
                      d="M220.014 178.539L213.243 233.003L273.473 245.272L281.202 189.651"
                      fill="#DE4F68"
                    />
                    <path
                      id="Vector_15"
                      d="M274.53 143.214L224.192 152.584L399.708 188.357L463.535 175.662L274.53 143.214Z"
                      fill="#B2354E"
                    />
                    <path
                      id="Vector_16"
                      d="M538.224 110.725C523.556 126.611 446.377 183.725 366.728 172.649C366.728 172.649 485.909 77.2413 537.095 104.194C537.654 104.502 538.135 104.931 538.504 105.449C538.873 105.967 539.121 106.56 539.229 107.187C539.338 107.813 539.303 108.456 539.13 109.068C538.956 109.68 538.646 110.246 538.224 110.725Z"
                      fill="#9E2B46"
                    />
                    <path
                      id="Vector_17"
                      d="M348.623 127.584L341.693 168.453L366.728 172.649C366.728 172.649 493.928 77.6318 538.303 105.241L479.657 26.0231C477.968 23.7966 475.635 22.1378 472.968 21.2684C470.301 20.3991 467.429 20.3606 464.734 21.158C442.647 27.7707 386.887 49.5896 355.495 107.878C352.16 114.042 349.839 120.695 348.623 127.584Z"
                      fill="#E55A77"
                    />
                    <path
                      id="Vector_18"
                      d="M150.802 79.9101C162.631 97.9743 232.908 166.846 313.352 168.855C313.352 168.855 207.948 55.3673 152.914 73.6456C152.32 73.8706 151.783 74.2241 151.342 74.6805C150.901 75.1368 150.568 75.6846 150.365 76.2842C150.163 76.8838 150.097 77.5202 150.173 78.1473C150.248 78.7744 150.463 79.3765 150.802 79.9101Z"
                      fill="#9E2B46"
                    />
                    <path
                      id="Vector_19"
                      d="M335.089 127.132L335.16 168.815L313.352 168.855C313.352 168.855 200.001 54.4951 151.656 74.4191L222.651 5.74468C224.696 3.82266 227.281 2.56736 230.06 2.14752C232.839 1.72768 235.677 2.16344 238.194 3.39622C259.201 13.6577 311.891 45.0376 332.569 109.557C334.311 115.249 335.16 121.177 335.089 127.132Z"
                      fill="#E55A77"
                    />
                    <path
                      id="Vector_20"
                      d="M479.676 25.8419C479.676 25.8419 437.96 120.126 366.728 172.649L343.94 160.347L471.798 20.7877C471.798 20.7877 475.565 20.2761 479.676 25.8419Z"
                      fill="#DE4F68"
                    />
                    <path
                      id="Vector_21"
                      d="M221.622 6.63363C221.622 6.63363 250.374 105.367 313.972 166.422L338.22 157.079L230.107 2.58299C230.107 2.58299 226.442 1.63577 221.622 6.63363Z"
                      fill="#DE4F68"
                    />
                    <path
                      id="Vector_22"
                      d="M399.708 188.357L402.499 246.615L466.249 231.781L463.535 175.662L399.708 188.357Z"
                      fill="#9E2B46"
                    />
                    <path
                      id="Vector_23"
                      d="M482.944 10.6143C467.388 41.6709 399.787 145.731 355.208 156.42C355.208 156.42 424.07 26.3613 480.179 5.02292C483.578 3.70543 484.978 6.48534 482.944 10.6143Z"
                      fill="#9E2B46"
                    />
                    <path
                      id="Vector_24"
                      d="M349.22 127.492L345.235 158.286L355.125 156.441C355.125 156.441 430.659 20.5874 481.767 4.82317L415.924 -7.04019C413.253 -7.41328 409.243 -4.21578 405.77 0.932277C392.924 20.0152 366.046 63.0103 352.349 111.992C350.937 117.08 349.891 122.259 349.22 127.492Z"
                      fill="#DE4F68"
                    />
                    <path
                      id="Vector_25"
                      d="M362.629 118.416C366.104 105.314 376.478 81.9949 376.478 81.9949C371.352 87.0956 359.49 113.254 359.49 113.254C355.906 98.7811 367.954 69.0488 367.954 69.0488C357.566 90.8077 349.276 122.256 349.276 122.256L358.143 124.846L361.601 125.848L365.511 126.884C364.552 121.41 375.594 97.5173 375.594 97.5173C375.594 97.5173 368.117 103.703 362.629 118.416Z"
                      fill="url(#paint3_linear_266_38)"
                    />
                    <path
                      id="Vector_26"
                      d="M227.393 -5.3347C237.604 27.741 287.14 141.091 329.476 158.643C329.476 158.643 282.982 19.4846 231.131 -10.3989C227.891 -12.2518 226.062 -9.69703 227.393 -5.3347Z"
                      fill="#9E2B46"
                    />
                    <path
                      id="Vector_27"
                      d="M340.057 130.995L338.909 162.03L329.476 158.643C329.476 158.643 277.355 12.7117 229.499 -10.8704L296.45 -12.2537C299.122 -12.2114 302.567 -8.40811 305.14 -2.78806C314.669 18.0654 334.082 64.7231 339.494 115.282C340.06 120.498 340.249 125.749 340.057 130.995Z"
                      fill="#DE4F68"
                    />
                    <path
                      id="Vector_28"
                      d="M323.106 127.767C323.106 127.767 306.407 71.7561 297.595 55.5378C297.595 55.5378 320.245 92.6375 327.409 113.94L321.063 89.359C321.063 89.359 339.226 113.767 336.238 121.585C333.25 129.402 323.106 127.767 323.106 127.767Z"
                      fill="url(#paint4_linear_266_38)"
                    />
                    <path
                      id="Vector_29"
                      d="M315.293 169.906L307.851 150.99C306.721 148.104 306.347 144.978 306.763 141.905C307.18 138.831 308.374 135.91 310.233 133.415C312.092 130.921 314.555 128.934 317.393 127.641C320.231 126.348 323.35 125.791 326.458 126.022L361.177 128.603C364.302 128.838 367.312 129.862 369.924 131.578C372.535 133.294 374.661 135.645 376.1 138.409C377.539 141.174 378.244 144.26 378.149 147.376C378.053 150.491 377.16 153.534 375.553 156.216L365.674 172.685L315.293 169.906Z"
                      fill="#B2354E"
                    />
                    <path
                      id="Vector_30"
                      d="M327.182 170.595C327.182 170.595 312.421 161.898 311.755 147.138C311.755 147.138 323.76 170.398 335.66 171.04C335.66 171.04 321.643 150.823 328.215 140.295C328.215 140.295 335.982 162.033 340.662 165.642C340.662 165.642 349.975 162.959 353.736 156.39C353.736 156.39 356.012 162.397 351.936 165.678C351.936 165.678 365.032 165.982 370.944 150.694C370.944 150.694 371.774 163.053 354.113 172.152L327.182 170.595Z"
                      fill="#9E2B46"
                    />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_266_38"
                    x1="366.49"
                    y1="467.023"
                    x2="366.49"
                    y2="81.902"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFF9DE" stopOpacity="0.6" />
                    <stop offset="0.96" stopColor="#FFF9DE" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_266_38"
                    x1="360.745"
                    y1="461.177"
                    x2="360.745"
                    y2="146.604"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFF9DE" stopOpacity="0.6" />
                    <stop offset="0.96" stopColor="#FFF9DE" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_266_38"
                    x1="355.711"
                    y1="453.723"
                    x2="355.711"
                    y2="229.136"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFF9DE" stopOpacity="0.6" />
                    <stop offset="0.96" stopColor="#FFF9DE" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_266_38"
                    x1="375.788"
                    y1="65.837"
                    x2="357.127"
                    y2="127.94"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.09"
                      stopColor="#B2354E"
                      stopOpacity="0.86"
                    />
                    <stop offset="1" stopColor="#B2354E" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_266_38"
                    x1="300.5"
                    y1="49.2044"
                    x2="328.518"
                    y2="119.352"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.09"
                      stopColor="#B2354E"
                      stopOpacity="0.86"
                    />
                    <stop offset="1" stopColor="#B2354E" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </center>
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
        </div>
        <div className="positions">
          {/* Bugres */}
          <div className="row99">
            <div className="col99">
              <div>
                <Image src={Burgers} alt="" className={styles.Burgers} />
              </div>
            </div>
            <div className="col99 d-flex justify-content-center align-items-center">
              <div className="text-center">
<<<<<<< HEAD
                <h1>Burgers</h1>
=======
                <h1>{`Burgers`}</h1>
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
                <p>
                  Indulge in the juicy symphony of flavours Bite into Burger
                  Bliss
                </p>
<<<<<<< HEAD
                <button ref={buttonRef} data-value="1" onClick={(event) => handleButtonClick(event, "1")} className={styles.linebutton} id="moveButton">
                  &nbsp;View&nbsp;
=======
                <button
                  ref={buttonRef}
                  data-value="1"
                  onClick={(event) => handleButtonClick(event, "1")}
                  className={styles.linebutton}
                  id="moveButton"
                >
                  View
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
                </button>
              </div>
            </div>
          </div>
          {/* sandwich */}
<<<<<<< HEAD
          <div className="row99" style={{overflowX:"hidden"}}>
=======
          <div className="row99" style={{ overflowX: "hidden" }}>
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
            <div className="col99 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h1>Grilled Sandwich</h1>
                <p>
                  Savor Grilled Perfection: Where Crisp Meets Melt in Every Bite
                </p>
<<<<<<< HEAD
                <button ref={buttonRef} data-value="2" onClick={handleButtonClick} className={styles.linebutton}>&nbsp;View&nbsp;</button>
              </div>
            </div>
            <div className="col99" data-aos="fade-left" data-aos-delay="500" data-aos-easing="linear">
              <div className="d-flex justify-content-end align-items-end" >
                <Image src={sandwich} alt="" className={styles.sandwich}  />
=======
                <button
                  ref={buttonRef}
                  data-value="2"
                  onClick={handleButtonClick}
                  className={styles.linebutton}
                >
                  View
                </button>
              </div>
            </div>
            <div
              className="col99"
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-easing="linear"
            >
              <div className="d-flex justify-content-end align-items-end">
                <Image src={sandwich} alt="" className={styles.sandwich} />
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              </div>
            </div>
          </div>
          {/* Frenchfrys */}
<<<<<<< HEAD
          <div className="row99" style={{overflowX:"hidden"}}>
            <div className="col99" data-aos="fade-right" data-aos-delay="700" data-aos-easing="linear">
=======
          <div className="row99" style={{ overflowX: "hidden" }}>
            <div
              className="col99"
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-easing="linear"
            >
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              <div>
                <Image src={french} alt="" className={styles.Burgers} />
              </div>
            </div>
            <div className="col99 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h1>French Fries</h1>
                <p>
                  Crispy, Golden Delights: French Fries - The Irresistible
                  BiteSized Pleasure
                </p>
<<<<<<< HEAD
                <button data-value="3" ref={buttonRef} onClick={handleButtonClick} className={styles.linebutton}>
                  &nbsp;View&nbsp;
=======
                <button
                  data-value="3"
                  ref={buttonRef}
                  onClick={handleButtonClick}
                  className={styles.linebutton}
                >
                  View
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
                </button>
              </div>
            </div>
          </div>
          {/* Nuggets */}
          <div className="row99">
            <div className="col99 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h1>Nuggets</h1>
                <p>
                  Cruncy on the Oustide, Tender on the inside:Nuggets-Bites of
                  Pure Joy
                </p>

<<<<<<< HEAD
                <button ref={buttonRef} data-value="4" onClick={handleButtonClick} className={styles.linebutton}>&nbsp;View&nbsp;</button>
              </div>
            </div>
            <div className="col99" >
              <div className="d-flex justify-content-end align-items-end" data-aos="fade-up"    data-aos-delay="300" data-aos-easing="linear">
=======
                <button
                  ref={buttonRef}
                  data-value="4"
                  onClick={handleButtonClick}
                  className={styles.linebutton}
                >
                  View
                </button>
              </div>
            </div>
            <div className="col99">
              <div
                className="d-flex justify-content-end align-items-end"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-easing="linear"
              >
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
                <Image src={nugget} alt="" className={styles.sandwich} />
              </div>
            </div>
          </div>
          {/* Moms */}
<<<<<<< HEAD
          <div className="row99" style={{overflowX:"hidden"}}>
            <div className="col99" data-aos="fade-right" data-aos-delay="400" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
=======
          <div className="row99" style={{ overflowX: "hidden" }}>
            <div
              className="col99"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              <div>
                <Image src={momos} alt="" className={styles.Burgers} />
              </div>
            </div>
            <div className="col99 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h1>Momo's</h1>
                <p>
                  teamed to perfection, Eqach Bite a Burst of Flavour Momos, the
                  Delightful Dumplings
                </p>
<<<<<<< HEAD
                <button ref={buttonRef} data-value="5" onClick={handleButtonClick} className={styles.linebutton}>&nbsp;View&nbsp;</button>
=======
                <button
                  ref={buttonRef}
                  data-value="5"
                  onClick={handleButtonClick}
                  className={styles.linebutton}
                >
                  View
                </button>
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              </div>
            </div>
          </div>
          {/* pizza */}
<<<<<<< HEAD
          <div className="row99" style={{overflowX:"hidden"}}>
=======
          <div className="row99" style={{ overflowX: "hidden" }}>
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
            <div className="col99 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h1>Pizza's</h1>
                <p>
                  Every Slice Tells a story: Pizza, Where Cheesy Goodness Meets
                  Crispy Crust Perfection
                </p>

<<<<<<< HEAD
                <button ref={buttonRef} data-value="6" onClick={handleButtonClick} className={styles.linebutton}>&nbsp;View&nbsp;</button>
              </div>
            </div>
            <div className="col99" data-aos="fade-left" data-aos-delay="400" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
=======
                <button
                  ref={buttonRef}
                  data-value="6"
                  onClick={handleButtonClick}
                  className={styles.linebutton}
                >
                  View
                </button>
              </div>
            </div>
            <div
              className="col99"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              <div className="d-flex justify-content-end align-items-end">
                <Image src={pizzas} alt="" className={styles.sandwich} />
              </div>
            </div>
          </div>
          {/* Wrap's */}
<<<<<<< HEAD
          <div className="row99" style={{overflowX:"hidden"}}>
            <div className="col99" data-aos="fade-right" data-aos-delay="400" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
=======
          <div className="row99" style={{ overflowX: "hidden" }}>
            <div
              className="col99"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              <div>
                <Image src={wraps} alt="" className={styles.Burgers} />
              </div>
            </div>
            <div className="col99 d-flex justify-content-center align-items-center">
              <div className="text-center">
<<<<<<< HEAD
                <h1>Wraps</h1>
=======
                <h1>Wrap's</h1>
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
                <p>
                  Wrapped With Love, Unveiling Layers of Flavour Wraps, the
                  Portable Pleasure for Every Plate
                </p>
<<<<<<< HEAD
                <button ref={buttonRef} data-value="7" onClick={handleButtonClick} className={styles.linebutton}>&nbsp;View&nbsp;</button>
=======
                <button
                  ref={buttonRef}
                  data-value="7"
                  onClick={handleButtonClick}
                  className={styles.linebutton}
                >
                  View
                </button>
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              </div>
            </div>
          </div>

          {/* Waffle's */}

<<<<<<< HEAD
          <div className="row99" style={{overflowX:"hidden"}}>
            <div className="col99 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h1>Waffles</h1>
=======
          <div className="row99" style={{ overflowX: "hidden" }}>
            <div className="col99 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h1>Waffle's</h1>
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
                <p className="waffle-content">
                  Golden Grids Of Sweet Satisfaction Waffles, the Crispy Crowned
                  Treats of Delight
                </p>

<<<<<<< HEAD
                <button ref={buttonRef} data-value="8" onClick={handleButtonClick} className={styles.linebutton}>&nbsp;View&nbsp;</button>
              </div>
            </div>
            <div className="col99" data-aos="fade-left" data-aos-delay="400" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
=======
                <button
                  ref={buttonRef}
                  data-value="8"
                  onClick={handleButtonClick}
                  className={styles.linebutton}
                >
                  View
                </button>
              </div>
            </div>
            <div
              className="col99"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              <div className="d-flex justify-content-end align-items-end">
                <Image src={waffles} alt="" className={styles.sandwich} />
              </div>
            </div>
          </div>

          {/* Salads */}
<<<<<<< HEAD
          <div className="row99" style={{overflowX:"hidden"}}>
            <div className="col99" data-aos="fade-right" data-aos-delay="400" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
=======
          <div className="row99" style={{ overflowX: "hidden" }}>
            <div
              className="col99"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              <div>
                <Image src={salads} alt="" className={styles.Burgers} />
              </div>
            </div>
            <div className="col99 d-flex justify-content-end align-items-center">
              <div className="text-center">
                <h1>Salads</h1>
                <p className="salad me-5">
<<<<<<< HEAD
                  Golden Grids of Sweet Satisfaction Waffles, the Crispy Crowned <br />
                  Treats of Delight
                </p>
                <button ref={buttonRef} data-value="9" onClick={handleButtonClick} className={styles.linebutton}>&nbsp;View&nbsp;</button>
=======
                  Golden Grids of Sweet Satisfaction Waffles, the Crispy Crowned{" "}
                  <br />
                  Treats of Delight
                </p>
                <button
                  ref={buttonRef}
                  data-value="9"
                  onClick={handleButtonClick}
                  className={styles.linebutton}
                >
                  View
                </button>
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              </div>
            </div>
          </div>

          {/* crushes */}
<<<<<<< HEAD
          <div className="row99" style={{overflowX:"hidden"}}>
=======
          <div className="row99" style={{ overflowX: "hidden" }}>
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
            <div className="col99 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h1>Crushes & Mojitos</h1>
                <p>
<<<<<<< HEAD
                  Sip, Savor, and Refresh: Crushes& Mojitos, the Cool Quenchers<br></br>
                  for Any Occasin
                </p>

                <button ref={buttonRef} data-value="10" onClick={handleButtonClick} className={styles.linebutton}>&nbsp;View&nbsp;</button>
              </div>
            </div>
            <div className="col99" data-aos="fade-left" data-aos-delay="400" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
=======
                  Sip, Savor, and Refresh: Crushes& Mojitos, the Cool Quenchers
                  <br></br>
                  for Any Occasin
                </p>

                <button
                  ref={buttonRef}
                  data-value="10"
                  onClick={handleButtonClick}
                  className={styles.linebutton}
                >
                  View
                </button>
              </div>
            </div>
            <div
              className="col99"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              <div className="d-flex justify-content-end align-items-end">
                <Image src={crushes} alt="" className={styles.sandwich} />
              </div>
            </div>
          </div>

          {/* milkShakes */}

<<<<<<< HEAD
          <div className="row99" style={{overflowX:"hidden"}}>
            <div className="col99" data-aos="fade-right" data-aos-delay="400" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
=======
          <div className="row99" style={{ overflowX: "hidden" }}>
            <div
              className="col99"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              <div>
                <Image src={milkShakes} alt="" className={styles.Burgers} />
              </div>
            </div>
            <div className="col99 d-flex justify-content-end align-items-center">
              <div className="text-center">
                <h1>Milk Shakes</h1>
                <p className="me-5">
<<<<<<< HEAD
                &nbsp;&nbsp;&nbsp;&nbsp; Sip, Savor, and Refresh: Crushes& Mojitos, the Cool Quenchers <br />
                  for Any Occasin
                </p>
                <button data-value="11" onClick={handleButtonClick} className={styles.linebutton}>&nbsp;View&nbsp;</button>
=======
                  Sip, Savor, and Refresh: Crushes & Mojitos, the Cool Quenchers{" "}
                  <br />
                  for Any Occasin
                </p>
                <button
                  data-value="11"
                  onClick={handleButtonClick}
                  className={styles.linebutton}
                >
                  View
                </button>
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              </div>
            </div>
          </div>

          {/* iceCream */}
<<<<<<< HEAD
          <div className="row99" style={{overflowX:"hidden"}}>
=======
          <div className="row99" style={{ overflowX: "hidden" }}>
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
            <div className="col99 d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h1>Ice Creams</h1>
                <p>
<<<<<<< HEAD
                  Scoops of Happiness in Every Bite: Ice Creams, the Chilled <br></br>
                  Delights That Melt Hearts
                </p>

                <button data-value="12" onClick={handleButtonClick} className={styles.linebutton}>&nbsp;View&nbsp;</button>
              </div>
            </div>
            <div className="col99" data-aos="fade-left" data-aos-delay="400" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
=======
                  Scoops of Happiness in Every Bite: Ice Creams, the Chilled{" "}
                  <br></br>
                  Delights That Melt Hearts
                </p>

                <button
                  data-value="12"
                  onClick={handleButtonClick}
                  className={styles.linebutton}
                >
                  View
                </button>
              </div>
            </div>
            <div
              className="col99"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              <div className="d-flex justify-content-end align-items-end">
                <Image src={iceCream} alt="" className={styles.sandwich} />
              </div>
            </div>
          </div>

          {/* CrispyCombo */}

<<<<<<< HEAD
          <div className="row99" style={{overflowX:"hidden"}}>
            <div className="col99" data-aos="fade-right" data-aos-delay="400" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
=======
          <div className="row99" style={{ overflowX: "hidden" }}>
            <div
              className="col99"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              <div>
                <Image src={CrispyCombo} alt="" className={styles.Burgers} />
              </div>
            </div>
            <div className="col99 d-flex justify-content-end align-items-center">
              <div className="text-center">
                <h1>Crispy Combo</h1>
                <p className="me-5">
<<<<<<< HEAD
                  Crunchy Harmony in Every Bite The Crispy Combo, Where Flavour <br></br>
                  and Texture Unite!
                </p>
                <button data-value="13" onClick={handleButtonClick} className={styles.linebutton}>&nbsp;View&nbsp;</button>
=======
                  Crunchy Harmony in Every Bite The Crispy Combo, Where Flavour{" "}
                  <br></br>
                  and Texture Unite!
                </p>
                <button
                  data-value="13"
                  onClick={handleButtonClick}
                  className={styles.linebutton}
                >
                  View
                </button>
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
              </div>
            </div>
          </div>

<<<<<<< HEAD
{/* 
=======
          {/* 
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
          <Modal show={showModal} onHide={handleCloseModal} animation={false} >
       {data.map((post) => (
        <div>
        <Modal.Header closeButton>
          <Modal.Title >{post.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row99">
            <div className="col99">
            <svg width="100%" viewBox="0 0 106 152" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 24">
<g id="Asset 1 1 1" clip-path="url(#clip0_238_136)">
<g id="Clip path group">
<mask id="mask0_238_136" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="0" y="32" width="97" height="120">
<g id="clip0_55_2">
<path id="Vector" d="M96.03 32H0V151.067H96.03V32Z" fill="white"/>
</g>
</mask>
<g mask="url(#mask0_238_136)">
<g id="Asset 1 1">
<g id="Layer 1">
<g id="Group">
<path id="Vector_2" d="M47.2236 55.1997C47.3768 55.1997 47.5402 55.1792 47.6933 55.1484C47.4687 55.1792 47.4483 55.1997 47.2236 55.1997Z" fill="white"/>
<path id="Vector_2_2" d="M47.9385 55.1285C48.1733 55.0669 48.4184 54.9849 48.6532 54.8516C48.4184 54.9746 48.1733 55.0669 47.9385 55.1285Z" fill="white"/>
<path id="Vector_3" d="M45.2224 54.4512C45.3449 54.5435 45.4777 54.6255 45.6002 54.6973C45.4675 54.6255 45.3449 54.5435 45.2224 54.4512Z" fill="white"/>
<path id="Vector_4" d="M46.5396 55.1074C46.6825 55.1484 46.8357 55.169 46.9888 55.1792C46.8357 55.1587 46.6927 55.1484 46.5396 55.1074Z" fill="white"/>
<path id="Vector_5" d="M43.3539 52.4824C43.4866 52.667 43.6194 52.8619 43.7521 53.0363C43.6091 52.8619 43.4764 52.6773 43.3539 52.4824Z" fill="white"/>
<path id="Vector_6" d="M40.7705 44.8408C40.7705 45.1075 40.7907 45.3844 40.8109 45.6613C40.7806 45.3742 40.7705 45.0972 40.7705 44.8408Z" fill="white"/>
<path id="Vector_7" d="M41.0055 46.8926C41.0463 47.0772 41.0872 47.2618 41.128 47.4464C41.077 47.2618 41.0463 47.0772 41.0055 46.8926Z" fill="white"/>
<path id="Vector_8" d="M41.8632 49.7031C41.9448 49.8877 42.0265 50.0826 42.1082 50.2672C42.0265 50.0826 41.9346 49.898 41.8632 49.7031Z" fill="white"/>
<path id="Vector_9" d="M60.8751 57.8364C60.8751 57.8364 60.7934 60.8108 61.8247 62.1339C62.856 63.4467 50.0724 62.1339 50.0724 62.1339C50.0724 62.1339 52.0941 60.2569 52.5331 57.5082C52.9722 54.7595 60.8751 57.8364 60.8751 57.8364Z" fill="#FED9AE"/>
<path id="Vector_10" d="M8.08262e-05 80.0206C8.08262e-05 80.0206 12.0281 79.1693 17.4295 75.2924C22.8308 71.4154 38.7184 59.7949 43.6501 59.7949C48.5818 59.7949 56.6991 62.1231 56.6991 62.1231L45.5084 106.236C45.5084 106.236 25.6081 115.887 12.4978 103.651C-0.612551 91.4154 8.08262e-05 80.0206 8.08262e-05 80.0206Z" fill="#F15A29"/>
<path id="Vector_11" d="M17.4294 78.6053C12.5386 82.113 2.20556 83.1489 0.306396 83.3028C1.06198 87.5592 3.66566 95.4053 12.4977 103.641C25.608 115.877 45.5083 106.226 45.5083 106.226L55.9232 65.2105C53.7688 64.6361 47.673 63.0977 43.6602 63.0977C38.7286 63.0977 22.841 74.7182 17.4396 78.5951H17.4294V78.6053Z" fill="#DC4614"/>
<path id="Vector_12" d="M65.5617 62.1338H45.5082V97.9287H65.5617V62.1338Z" fill="#1C75BC"/>
<path id="Vector_13" d="M33.6436 85.621L28.4056 81.1799L45.5083 62.1338L49.6742 67.2415L33.6436 85.621Z" fill="#1C75BC"/>
<path id="Vector_14" d="M32.1492 77.6514L28.4059 81.2284L43.7335 97.4133L47.4769 93.8363L32.1492 77.6514Z" fill="#1C75BC"/>
<path id="Vector_15" d="M54.2994 144.872H45.5082V97.918H55.5349L54.2994 144.872Z" fill="#1C75BC"/>
<path id="Vector_16" d="M45.5082 97.9179V144.872H47.9791L47.8974 96.0615L45.5082 97.9179Z" fill="#126BB2"/>
<path id="Vector_17" d="M64.3263 143.221H56.7705L55.535 96.2773H65.5618L64.3263 143.221Z" fill="#1C75BC"/>
<path id="Vector_18" d="M55.535 96.2773L56.7705 143.221H59.2312L58.006 96.2773H55.535Z" fill="#126BB2"/>
<path id="Vector_19" d="M47.9791 71.8877H45.5082V97.9185H47.9791V71.8877Z" fill="#126BB2"/>
<path id="Vector_20" d="M55.5758 97.9185L45.5082 93.0262V89.8672L65.5617 90.2262V92.5544L55.5758 97.9185Z" fill="#F15A29"/>
<path id="Vector_21" d="M66.2562 46.6876C66.2562 53.4773 62.6621 58.9747 56.7093 58.9747C50.7566 58.9747 45.927 53.4671 45.927 46.6876C45.927 39.9081 50.7566 34.4004 56.7093 34.4004C62.6621 34.4004 66.2562 39.9081 66.2562 46.6876Z" fill="#FED9AE"/>
<path id="Vector_22" d="M47.6423 94.1949C48.3366 96.8102 47.5095 99.3128 45.784 99.7743C44.0584 100.236 42.0877 98.4923 41.3934 95.8769C40.6991 93.2615 41.5262 90.759 43.262 90.2974C44.9875 89.8256 46.9582 91.5795 47.6525 94.1949H47.6423Z" fill="#FED9AE"/>
<path id="Vector_23" d="M60.14 39.5488C59.221 39.4975 58.3021 39.3539 57.4036 39.2206C55.4329 38.9129 53.0232 38.6257 51.6142 40.3795C49.2862 43.2821 50.7871 47.8462 50.3277 51.2719C50.1337 52.7488 49.8988 54.4924 48.2447 55.036C44.7834 56.1642 42.343 51.0975 41.4241 48.6257C39.433 43.3026 42.1388 36.1847 47.1726 33.5795C52.7884 30.677 58.6186 32.4001 64.3365 33.877C64.4182 34.4924 64.7245 33.9795 64.3365 33.877C64.8879 38.0821 64.3365 39.3949 61.2836 39.5488C60.9058 39.5693 60.528 39.5693 60.1502 39.5488H60.14Z" fill="#8B5E3C"/>
<path id="Vector_24" d="M51.4406 48.1853C51.8593 50.5853 51.0424 52.7289 49.6129 52.9853C48.1835 53.2417 46.6723 51.4981 46.2537 49.1084C45.835 46.7084 46.6519 44.5648 48.0814 44.3084C49.5108 44.0519 51.022 45.7853 51.4406 48.1853Z" fill="#FED9AE"/>
<path id="Vector_25" d="M58.7207 45.7948C58.7207 46.6256 58.2102 47.3025 57.5873 47.3025C56.9645 47.3025 56.454 46.6256 56.454 45.7948C56.454 44.964 56.9645 44.2871 57.5873 44.2871C58.2102 44.2871 58.7207 44.964 58.7207 45.7948Z" fill="#726658"/>
<path id="Vector_26" d="M64.9899 45.7948C64.9899 46.6256 64.6018 47.3025 64.1219 47.3025C63.642 47.3025 63.2542 46.6256 63.2542 45.7948C63.2542 44.964 63.642 44.2871 64.1219 44.2871C64.6018 44.2871 64.9899 44.964 64.9899 45.7948Z" fill="#726658"/>
<path id="Vector_27" d="M56.6991 62.1337L61.11 60.3594L65.5618 62.1337H56.6991Z" fill="#F15A29"/>
<path id="Vector_28" d="M63.2236 74.5642C63.2236 78.3283 60.5893 81.3744 57.3321 81.3744C54.075 81.3744 51.4407 78.3283 51.4407 74.5642C51.4407 70.8001 54.075 67.7539 57.3321 67.7539C60.5893 67.7539 63.2236 70.8001 63.2236 74.5642Z" fill="#F15A29"/>
<path id="Vector_29" d="M57.3321 69.293L58.3633 72.934H61.6818L58.9964 75.1904L60.0174 78.8417L57.3321 76.5853L54.6569 78.8417L55.678 75.1904L53.0028 72.934H56.311L57.3321 69.293Z" fill="#FFDE17"/>
<path id="Vector_30" d="M56.6991 143.221V148.677H70.7386L64.4285 143.221H56.6991Z" fill="#DC4614"/>
<path id="Vector_31" d="M45.5082 144.872V151.067H61.4672L54.2994 144.872H45.5082Z" fill="#F15A29"/>
<g id="Group_2">
<path id="Vector_32" d="M84.972 77.4359L87.3 70.9641L64.2344 61.8975L61.886 69.5282L84.972 77.4359Z" fill="#1C75BC"/>
<path id="Vector_33" d="M88.1188 54.5762L80.2544 75.4711L85.0871 77.3064L92.9515 56.4115L88.1188 54.5762Z" fill="#1C75BC"/>
<path id="Vector_34" d="M95.55 55.1285C96.6119 52.6362 95.8257 49.9183 93.804 49.0465C91.7823 48.185 89.2909 49.508 88.229 51.9901C87.1671 54.4824 87.9533 57.2106 89.975 58.0721C91.9967 58.9337 94.4881 57.6209 95.55 55.1183V55.1285Z" fill="#FED9AE"/>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
<g id="plate 1" clip-path="url(#clip1_238_136)">
<path id="Vector_35" d="M105.987 56.9995C106.005 56.9552 106.012 56.9069 106.006 56.859C106.001 56.8112 105.984 56.7656 105.957 56.7266C105.93 56.6875 105.893 56.6564 105.851 56.6362C105.808 56.616 105.762 56.6074 105.715 56.6112C105.308 56.5797 104.898 56.5552 104.487 56.5342C104.677 56.4363 104.741 56.0899 104.531 56.006C104.531 53.7354 104.674 51.8322 104.005 49.6281C103.378 47.5378 102.17 45.6829 100.531 44.2928C98.9058 42.9459 96.7785 41.9943 94.8345 41.2911C93.5232 40.8122 92.1521 40.5294 90.7631 40.4514C90.8306 40.1674 90.8043 39.8682 90.6885 39.6013C90.4272 39.0065 89.7792 38.9016 89.2194 39.0765C88.7733 39.2272 88.3709 39.4906 88.0489 39.8427C87.954 39.9376 87.888 40.059 87.8591 40.192C87.8301 40.325 87.8395 40.4638 87.886 40.5914C84.3609 41.1127 80.7849 42.8654 78.3862 45.5698C77.0698 47.0567 76.3132 48.9739 75.8043 50.8876C75.3496 52.5704 74.8475 54.9389 75.923 56.4538C75.9428 56.4822 75.9718 56.5024 76.0048 56.5107C76.0377 56.5191 76.0725 56.515 76.1028 56.4993C76.1531 56.4816 76.1954 56.4455 76.2216 56.3978C76.761 56.4853 77.3073 56.5412 77.8603 56.5797C76.9476 56.6462 76.0384 56.7337 75.1461 56.8596C75.1125 56.8671 75.0816 56.8842 75.057 56.909C75.0324 56.9337 75.0151 56.9651 75.007 56.9995H105.987Z" fill="black"/>
<path id="Vector_36" d="M88.5508 40.1934C88.7197 40.0527 88.9056 39.9352 89.1038 39.8436C89.5415 39.6302 90.1793 39.7106 90.142 40.2809L90.0708 40.3229C90.0337 40.3466 90.0015 40.3775 89.9758 40.4138C89.4759 40.4169 88.9765 40.4461 88.4795 40.5013C88.3879 40.3719 88.3879 40.3264 88.5508 40.1934Z" fill="white"/>
<path id="Vector_37" d="M82.8543 55.9224C80.6761 55.9224 78.3927 55.821 76.2281 56.1568C76.2136 56.1424 76.196 56.1316 76.1768 56.1253C76.1575 56.1189 76.1371 56.1172 76.1172 56.1203C76.0972 56.1233 76.0782 56.131 76.0615 56.1428C76.0449 56.1546 76.0311 56.1702 76.0212 56.1883C76.0755 56.1044 75.9262 54.7084 75.933 54.3901C75.9578 53.8554 76.0133 53.3227 76.0992 52.7947C76.2458 51.8545 76.4613 50.927 76.7438 50.0204C77.3292 48.0655 78.4228 46.3135 79.9059 44.9545C82.4743 42.5965 86.2674 41.295 89.667 41.1551C93.3346 41.0046 97.6638 42.642 100.524 45.0035C102.105 46.3014 103.089 48.3586 103.676 50.3073C104.263 52.256 104.08 54.0157 104.076 55.9679C99.4586 55.5656 94.6951 55.8979 90.0674 55.9049C87.672 55.8909 85.2632 55.9119 82.8543 55.9224Z" fill="#CACBCD"/>
<path id="Vector_38" d="M81.6024 53.823C81.6363 53.4906 81.677 53.1548 81.7245 52.8259C80.4236 52.8678 79.1214 52.8222 77.8262 52.6895C77.7414 53.1303 77.6668 53.5711 77.6193 54.0119C78.9492 53.9524 80.2894 54.0504 81.6024 53.823Z" fill="white"/>
<path id="Vector_39" d="M84.4863 42.2291C83.3726 43.1115 82.3494 44.1091 81.4328 45.2064C79.8925 47.0466 78.6677 49.1073 78.0909 51.4793C78.0196 51.7766 77.9484 52.074 77.8873 52.3714C79.1778 52.5072 80.4756 52.5539 81.7721 52.5113C81.7992 52.3329 81.8332 52.1615 81.8671 51.9796C82.226 49.7927 82.948 47.686 84.0012 45.7522C85.0398 44.0009 86.4177 42.4894 88.0488 41.3125C86.8335 41.4891 85.6396 41.7964 84.4863 42.2291Z" fill="white"/>
<path id="Vector_40" d="M103.69 50.2899C103.103 48.3412 102.119 46.2841 100.538 44.9861C97.7759 42.726 93.657 41.1377 90.0742 41.1377C91.1645 41.6792 92.0576 42.567 92.6222 43.6706C93.4697 45.3086 93.9672 47.1147 94.0811 48.9674C94.1795 50.4753 94.166 52.34 93.1787 53.5645C92.3372 54.6141 90.8037 54.7575 89.5959 54.74C87.7773 54.712 86.0097 54.5861 84.1674 54.6596C82.7526 54.712 81.3378 54.761 79.923 54.831C78.9051 54.8835 77.6905 55.1494 76.6761 54.9674C76.4028 54.9242 76.1447 54.8098 75.9263 54.6351C75.9795 55.1463 76.0056 55.6602 76.0043 56.1744C76.0142 56.1563 76.028 56.1407 76.0446 56.1289C76.0613 56.1171 76.0803 56.1094 76.1003 56.1064C76.1203 56.1033 76.1407 56.105 76.1599 56.1114C76.1791 56.1177 76.1967 56.1285 76.2113 56.1429C78.3759 55.7931 80.6592 55.9225 82.8374 55.9085C85.2463 55.9085 87.6552 55.8771 90.0641 55.8736C94.6918 55.8736 99.4553 55.5237 104.073 55.9365C104.093 53.9983 104.27 52.2001 103.69 50.2899Z" fill="#ABADAF"/>
<path id="Vector_41" d="M103.69 50.2896C103.103 48.3409 102.119 46.2838 100.538 44.9858C98.3624 43.2634 95.8392 42.0676 93.1549 41.4873C93.9266 41.7338 94.6786 42.0414 95.4043 42.4074C97.4119 43.4319 99.0784 45.0492 100.192 47.0535C101.688 49.7439 102.268 52.7701 102.285 55.8243C102.889 55.8523 103.489 55.8908 104.09 55.9433C104.093 53.9981 104.27 52.1998 103.69 50.2896Z" fill="#717376"/>
</g>
<g id="Group 23">
<path id="Vector_42" d="M69.748 28.9235C68.8821 29.4625 67.9267 29.8172 66.9328 29.9686L66.8362 29.9773L67.8283 40.9689L67.7626 40.9748C66.9516 40.8797 66.1348 40.8062 65.323 40.7448C58.6918 40.2386 52.0398 40.6975 45.5466 42.1092C43.8161 42.4841 42.0919 42.93 40.3892 43.4413L39.4012 32.4956C39.4012 32.4956 39.3975 32.4539 39.3763 32.4348C39.248 32.093 38.624 31.6949 38.624 31.6949L37.7131 31.8739C32.026 32.3872 27.1265 27.2132 27.6559 21.0821C27.8869 18.4193 29.0896 16.1231 31.098 15.3739C37.9668 12.8061 43.6169 10.9331 48.5554 6.22569C52.9338 2.04424 62.2511 -1.70376 73.0707 5.96918C82.1255 12.3879 76.1515 25.1273 69.748 28.9235Z" fill="white"/>
<path id="Vector_43" d="M69.7482 28.9222C68.8034 29.5131 67.7508 29.8805 66.6594 30.0003C67.8492 29.2871 71.7312 27.1151 72.5072 20.7388C72.5072 20.7388 67.9204 25.5449 65.5116 25.2238C65.5116 25.2238 67.5786 22.6645 68.8397 15.016C68.7089 15.2929 64.6054 24.2034 58.4709 25.283C58.4709 25.283 64.1412 19.9668 61.2058 10.4885C61.2058 10.4885 55.1712 28.858 52.1559 23.0259C49.9347 18.7417 49.6594 18.6698 49.6401 18.6716C49.6208 18.6733 51.1455 27.0211 48.5979 25.0761C46.8938 23.7606 45.2652 22.334 43.7214 20.8044C43.7214 20.8044 43.2955 23.8971 46.1649 26.6882C46.1649 26.6882 36.3472 28.4746 32.9268 21.9092C32.9268 21.9092 33.168 28.8962 40.6893 29.1134C40.6893 29.1134 37.3169 30.5873 35.6426 29.2997C35.6426 29.2997 35.9918 30.8374 38.6381 31.6755L37.7273 31.8545C35.7038 32.0402 33.6711 31.4957 31.9476 30.3063C30.5083 29.3405 29.3433 27.9627 28.5845 26.3291C27.8257 24.6955 27.5035 22.8715 27.6546 21.0641C27.8856 18.4012 29.0883 16.1051 31.0967 15.3558C37.9655 12.788 43.6156 10.915 48.5541 6.20763C50.9055 4.0145 53.7537 2.52659 56.819 1.88993C61.3441 0.930384 66.965 1.62623 73.0616 5.95181C82.1257 12.3865 76.1516 25.1259 69.7482 28.9222Z" fill="white"/>
<path id="Vector_44" d="M56.819 1.89033C55.9965 3.437 54.7888 5.89349 46.9977 11.2749C38.8433 16.9036 25.8886 14.4885 31.9336 30.3248C30.4942 29.3557 29.3301 27.9741 28.5737 26.3371C27.8173 24.7001 27.4988 22.8733 27.6546 21.0645C27.8855 18.4016 29.0883 16.1055 31.0967 15.3562C37.9655 12.7885 43.6155 10.9154 48.554 6.20803C50.9055 4.0149 53.7536 2.52699 56.819 1.89033Z" fill="#E2E3E5"/>
<path id="Vector_45" d="M65.515 25.2203C65.515 25.2203 67.582 22.661 68.8431 15.0125C68.7123 15.2894 64.6088 24.1999 58.4743 25.2795C58.4743 25.2795 64.1446 19.9633 61.2092 10.4849C61.2092 10.4849 55.1746 28.8545 52.1593 23.0224C49.9381 18.7382 49.6628 18.6663 49.6435 18.6681C49.6242 18.6698 51.1489 27.0176 48.6013 25.0726C46.8972 23.7571 45.2686 22.3305 43.7248 20.8009C43.7248 20.8009 43.2989 23.8936 46.1683 26.6847C46.1683 26.6847 36.3506 28.4711 32.9302 21.9057C32.9302 21.9057 33.1714 28.8927 40.6927 29.1099C40.6927 29.1099 37.3203 30.5838 35.646 29.2962C35.646 29.2962 35.9952 30.8338 38.6415 31.672C38.6415 31.672 39.2656 32.07 39.3938 32.4118C39.3938 32.4118 39.3976 32.4535 39.4188 32.4727L40.4075 43.4267C42.1102 42.9154 43.8266 42.4702 45.565 42.0945C45.5291 39.237 45.8967 36.1033 47.1968 34.2822C49.9095 30.4614 57.8878 28.5339 62.7999 30.5684C63.4129 30.814 63.9509 31.2416 64.3511 31.8014C64.7513 32.3613 64.9972 33.0301 65.06 33.73C65.2777 36.0451 65.3692 38.3701 65.3341 40.693C66.1459 40.7544 66.9627 40.8279 67.7736 40.923L67.8393 40.917L66.8521 29.9797L66.9487 29.971C68.2155 29.2046 71.7419 26.9763 72.5149 20.7391C72.4991 20.7364 67.9122 25.5424 65.515 25.2203Z" fill="#E2E3E5"/>
<path id="Vector_46" d="M67.711 39.6716L67.8285 40.9736L67.7628 40.9795C66.9519 40.8844 66.1351 40.8109 65.3233 40.7495C58.692 40.2433 52.04 40.7022 45.5469 42.1139C43.8163 42.4888 42.0921 42.9347 40.3894 43.446L40.2689 42.1106C45.5482 40.3594 58.9038 36.5583 67.711 39.6716Z" fill="#E2E3E5"/>
</g>
</g>
<defs>
<clipPath id="clip0_238_136">
<rect width="97" height="120" fill="white" transform="translate(0 32)"/>
</clipPath>
<clipPath id="clip1_238_136">
<rect width="31" height="18" fill="white" transform="translate(75 39)"/>
</clipPath>
</defs>
</svg>
            </div>
            <div className="col99 d-flex justify-content-center align-items-center">

                 <div className="justify-content-center align-items-center">
               <span className={styles.smallheadmodel}>{post.introduction}</span> 
                 <br/>
                 <span className={styles.smallheaddesign}>
              {post.Description}
                 </span>

<br/>
<span className={styles.smallheadprice}>{post.Conclusiondata}</span>
 
                 </div>
                

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
               
        </div>

       ))}

</Modal>  */}
<<<<<<< HEAD



        </div>
  
      </div>




    

    </div>
  
=======
        </div>
        <div className="footer">
          <Container>
            <Row>
              <Col md={4}>
                <div>
                  <div>
                    <div>
                      <h4>DONT BE SHY, SAY HI ! </h4>
                      <p>
                        4th Floor, Magna Parkview, Sri Shyam Nagar,<br></br>{" "}
                        Telecom Nagar, Gachibowli, Hyderabad, Telangana 500032.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4} className="d-flex justify-content-center">
                <div>
                  <div>
                    <h4>TIMMINGS</h4>
                  </div>
                  <div className="weeks">
                    <span className="week">monday</span>
                    <span>10am - 7pm</span>
                  </div>
                  <div>
                    <span className="week">tuesday</span>
                    <span>10am - 7pm</span>
                  </div>
                  <div>
                    <span className="week">Wednesday</span>
                    <span>10am - 7pm</span>
                  </div>
                  <div>
                    <span className="week">thursday</span>
                    <span>10am - 7pm</span>
                  </div>
                  <div>
                    <span className="week">Friday</span>
                    <span>10am - 7pm</span>
                  </div>
                  <div>
                    <span className="week">Saturday</span>
                    <span>10am - 7pm</span>
                  </div>
                  <div>
                    <span className="week">Sunday</span>
                    <span>10am - 7pm</span>
                  </div>
                  <div></div>
                </div>
              </Col>
              <Col md={4} className="d-flex justify-content-center ">
                <div>
                  <div>
                    <h4>LOCATION</h4>
                  </div>
                  <div className="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.51534884543!2d78.36351517594053!3d17.43503120142943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918b8329738f%3A0xfbf7bd3bf9e6e099!2sCode%20Connex%20Pvt.Ltd%20-%20Best%20Software%20Company%20in%20Hyderabad%20%7C%20Digital%20Marketing%20%7C%20Web%20Design%20%26%20Development%20%7C%20App%20Development!5e0!3m2!1sen!2sin!4v1708066169236!5m2!1sen!2sin"
                      width="300"
                      height="200"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
>>>>>>> 2a68ca256f405cde451095103dfeb3ac86eb523a
  );
};

export default Homepage;
