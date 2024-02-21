'use client'
// import Counter from "./features/counter/Counter";
import { gsap, CSSPlugin, Expo } from "gsap";
import { useEffect, useState } from "react";
gsap.registerPlugin(CSSPlugin);

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [loadTime, setLoadTime] = useState(null);

  useEffect(() => {

    // this function calculate the load time of website
    const start = performance.now();
    setTimeout(() => {
      const end = performance.now();
      const time = end - start;
      setLoadTime(time);
    }, 1000);
    // ////////////////////////////////////////////////

    const count = setInterval(() => {
      setCounter(
        (counter) => (
          counter < 100 ? counter + 1 : (clearInterval(count), setCounter(100), reveal())
        )
      )
      document.querySelector('.app_container').style.overflow = 'hidden';
    }, loadTime)
  }, [])

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed")
        document.querySelector('.app_container').style.overflowY = 'scroll';
      }
    })

    t1.to('.follow', {
      width: '100%',
      duration: 1.2,
      delay: 0.7,
      ease: Expo.easeInOut,
    })
      .to('.hide', {
        opacity: 0,
        duration: 0.3,
      })
      .to('.hide', {
        display: 'none',
        duration: 0.3,
      })
      .to('.follow', {
        height: '100%',
        duration: 0.7,
        delay: 0.5,
        ease: Expo.easeInOut,
      })
      .to('.content', {
        width: '100%',
        duration: 0.7,
        ease: Expo.easeInOut,
      })
      .to('.title-line', {
        display: 'block',
        duration: 0.1,
      })
      .to('.title-line', {
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: Expo.easeInOut,
      })
  }

  return (
    <div className="app_container">

      <div className="loading">
        <div className="follow">
          <div className="progresbar hide" style={{ width: counter + "%" }}></div>
        </div>
        <div className="count">{counter}%</div>
      </div>

      <div className="content">
        <p className="title-line"> The greatest glory in living lies  </p>
        <p className="title-line"> not in never falling, </p>
        <p className="title-line"> but in rising every time we fall. </p>
        <p className="title-line"> -Nelson Mandela </p>
      </div>

      <div className="supportive-div border--2 border-red--900 w-screen h-screen z-50 relative"></div>

      <div className="bg-slate-700 border-2 border-red-900 w-screen h-screen z-50 relative">

      </div>

    </div>
  );
}
