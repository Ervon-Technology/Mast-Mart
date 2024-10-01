"use client";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const textRef = useRef(null);
  const contentRefs = useRef([]);
  const videoSectionRef = useRef(null); // Reference to the entire video section
  const [showSecondVideo, setShowSecondVideo] = useState(false);

  // Helper function to split text into individual letters
  const splitTextIntoLetters = (text) => {
    return text.split("").map((letter, index) => (
      <span key={index} className="inline-block">
        {letter}
      </span>
    ));
  };

  useEffect(() => {
    // Ensure horizontal overflow is hidden to prevent unwanted scrollbars
    document.body.style.overflowX = "hidden";

    // ScrollTrigger Animation for the entire video section
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoSectionRef.current, // Apply ScrollTrigger to the video section
          start: "top 80%", // Trigger when 80% of the section is in view
          end: "bottom 20%",
          toggleActions: "play none none reverse", // Play the animation when in view, reverse when out
        },
      }
    );

    // GSAP Animation for the text elements in the video section
    const lettersTitle = textRef.current.querySelectorAll("h1 span");
    const lettersSubtitle = textRef.current.querySelectorAll("p:nth-child(2) span");
    const lettersText = textRef.current.querySelectorAll("p:nth-child(3) span");

    const tl = gsap.timeline();
    tl.fromTo(
      lettersTitle,
      { opacity: 0, scale: 0.2, rotation: -90 },
      { opacity: 1, scale: 1, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.5)", stagger: 0.05 }
    )
      .fromTo(
        lettersSubtitle,
        { opacity: 0, x: -50, rotate: 45 },
        { opacity: 1, x: 0, rotate: 0, duration: 1.2, ease: "back.out(1.7)", stagger: 0.05 },
        "-=1"
      )
      .fromTo(
        lettersText,
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "bounce.out", stagger: 0.05 },
        "-=0.8"
      );

    // ScrollTrigger Animations for content sections
    contentRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Start animation when the section comes into view
            toggleActions: "play none none reverse", // Play animation on scroll, reverse when leaving view
          },
        }
      );
    });

    // Unique Hover animations for headings and paragraphs
    contentRefs.current.forEach((section) => {
      const heading = section.querySelector("h2");
      const paragraph = section.querySelector("p");

      // Hover effect for heading: 3D rotation with depth effect
      heading.addEventListener("mouseenter", () => {
        gsap.to(heading, {
          rotateX: 15, // Tilt the text for a 3D effect
          rotateY: 10,
          perspective: 1000,
          duration: 0.6,
          ease: "power2.out",
        });
      });
      heading.addEventListener("mouseleave", () => {
        gsap.to(heading, {
          rotateX: 0, // Reset to original position
          rotateY: 0,
          duration: 0.6,
          ease: "power2.out",
        });
      });

      // Hover effect for paragraph: Wave-like distortion effect
      paragraph.addEventListener("mouseenter", () => {
        gsap.to(paragraph, {
          x: 10, // Slight movement to the right
          skewX: 10, // Skew the text for a wave-like effect
          duration: 0.5,
          ease: "elastic.out(1, 0.75)",
        });
      });
      paragraph.addEventListener("mouseleave", () => {
        gsap.to(paragraph, {
          x: 0,
          skewX: 0, // Reset skew to 0
          duration: 0.5,
          ease: "elastic.out(1, 0.75)",
        });
      });
    });

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflowX = "auto";
      tl.kill(); // Kill the timeline when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all ScrollTrigger animations
    };
  }, []);

  // Handle alternating between the two videos in a loop
  const handleVideoEnd = () => {
    setShowSecondVideo((prev) => !prev);
    if (showSecondVideo && videoRef1.current) {
      videoRef1.current.play();
    } else if (!showSecondVideo && videoRef2.current) {
      videoRef2.current.play();
    }
  };

  return (
    <div className="flex flex-col">
      {/* Video Section */}
      <section ref={videoSectionRef} className="relativen h-screen flex items-center justify-center bg-black">
        {/* Background Video 1 */}
        {!showSecondVideo && (
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            <video
              ref={videoRef1}
              className="object-cover h-full w-full"
              src="/video/background2.mp4"
              autoPlay
              loop={false}
              muted
              onEnded={handleVideoEnd}
            />
          </div>
        )}

        {/* Background Video 2 */}
        {showSecondVideo && (
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
            <video
              ref={videoRef2}
              className="object-cover h-full w-full"
              src="/video/background1.mp4"
              autoPlay
              loop={false}
              muted
              onEnded={handleVideoEnd}
            />
          </div>
        )}

        {/* Black Overlay */}
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>

        {/* Text Overlay with GSAP */}
        <div ref={textRef} className="relative z-10 flex items-center justify-start h-full text-left">
          <div className="container text-white p-8">
            <h1 className="text-7xl font-bold">{splitTextIntoLetters("Mast Mart")}</h1>
            <p className="mt-4 text-4xl font-semibold">
              {splitTextIntoLetters("Connecting Farmers with Retailers Across India")}
            </p>
            <p className="mt-2 text-2xl">
              {splitTextIntoLetters("Delivering Fresh Products with No Middlemen")}
            </p>
          </div>
        </div>
      </section>

      {/* Additional Content Sections */}
      <section ref={(el) => (contentRefs.current[0] = el)} className="p-16 bg-white text-center">
        <h2 className="text-4xl font-bold">Citly Brochure</h2>
        <p className="mt-6 text-lg leading-relaxed">
          Connecting you with farmers across India. Agribusiness has a lot of challenges in its operation to develop
          an efficient and effective plan of procurement. Citly simplifies this...
        </p>
      </section>

      <section ref={(el) => (contentRefs.current[1] = el)} className="p-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold">How Citly Facilitates Procurement</h2>
        <p className="mt-6 text-lg leading-relaxed">
          Citly helps to procure the best quality products directly from farmers, cutting out middlemen and ensuring
          higher profits for both farmers and retailers...
        </p>
      </section>

      <section ref={(el) => (contentRefs.current[2] = el)} className="p-16 bg-white text-center">
        <h2 className="text-4xl font-bold">Pan India Procurement & Logistics</h2>
        <p className="mt-6 text-lg leading-relaxed">
          Citly offers a robust logistics system to deliver goods on time, reducing the risks of delays, rotting crops,
          and pest infestations...
        </p>
      </section>

      <section ref={(el) => (contentRefs.current[3] = el)} className="p-16 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold">Marketing & Brand Building for Millers</h2>
        <p className="mt-6 text-lg leading-relaxed">
          Citly helps millers to build their brand and market their products effectively, both online and offline, to
          increase sales and build a loyal customer base...
        </p>
      </section>

      <section ref={(el) => (contentRefs.current[4] = el)} className="p-16 bg-white text-center">
        <h2 className="text-4xl font-bold">Easy Credit & No Middlemen</h2>
        <p className="mt-6 text-lg leading-relaxed">
          Citly provides easy access to credit, reducing the need for working capital, while eliminating middlemen,
          ensuring more profits for farmers and retailers...
        </p>
      </section>
    </div>
  );
}
