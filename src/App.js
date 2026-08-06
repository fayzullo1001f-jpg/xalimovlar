import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

import musicFile from "./music/Davidzz17 - Time to say goodbye Instrumental.mp3";

import play from "./img/circle-play-regular-full.svg";
import pause from "./img/circle-pause-regular-full.svg";

import wed_lw from "./img/two.jpg";
import restaurant from "./img/L_height.webp";
import ring from "./img/fourjpg.jpg";

import bride from "./img/one.jpg";
import three from "./img/three.jpg"
import brides from "./img/five.jpg";


function App() {
  const [timeLeft, setTimeLeft] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const audioRef = useRef(null);



  const weddingDate = useMemo(
      () => new Date(2026, 7, 14, 18, 0, 0).getTime(),
      []
  );
  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);

    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
        setTimeLeft("Boshlanmoqda 🎉");
        clearInterval(interval);
      } else {
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const m = Math.floor((distance / (1000 * 60)) % 60);
        const s = Math.floor((distance / 1000) % 60);

        setTimeLeft(`${d} kun • ${h} soat • ${m} min • ${s} sek`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6
      }
    })
  };

  const imgVariant = {
    hidden: {
      opacity: 0,
      scale: 0.85
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
      <>
        <audio ref={audioRef} loop>
          <source src={musicFile} type="audio/mp3" />
        </audio>

        <AnimatePresence>
          {showIntro ? (
              <motion.div
                  className="intro"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
              >

                {/* Decorative Lights */}
                <div className="intro_blur blur1"></div>
                <div className="intro_blur blur2"></div>

                {/* Decorative Leaves */}
                <div className="leaf leaf_left">🌿</div>
                <div className="leaf leaf_right">🌿</div>

                <motion.div
                    className="intro_box"
                    initial={{
                      opacity: 0,
                      y: 80,
                      scale: .9
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1
                    }}
                    transition={{
                      duration: 1.4,
                      ease: "easeOut"
                    }}
                >

                  <motion.p
                      className="intro_top"
                      initial={{ opacity: 0, y: -15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: .2 }}
                  >
                   To'yga Taklifnoma
                  </motion.p>



                  <motion.h1
                      initial={{
                        opacity: 0,
                        letterSpacing: "20px"
                      }}
                      animate={{
                        opacity: 1,
                        letterSpacing: "4px"
                      }}
                      transition={{
                        duration: 1,
                        delay: .4
                      }}
                  >
                    Doniyor
                  </motion.h1>

                  <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: .9 }}
                  >
                    &
                  </motion.span>

                  <motion.h1
                      initial={{
                        opacity: 0,
                        letterSpacing: "20px"
                      }}
                      animate={{
                        opacity: 1,
                        letterSpacing: "4px"
                      }}
                      transition={{
                        duration: 1,
                        delay: .7
                      }}
                  >
                    Robiyaxon
                  </motion.h1>

                  <motion.div
                      className="intro_line"
                      initial={{ width: 0 }}
                      animate={{ width: "140px" }}
                      transition={{
                        delay: 1.2,
                        duration: 1
                      }}
                  />

                  <motion.p
                      className="intro_quote"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                  >
                    "La Vita è Bella"
                  </motion.p>

                  <motion.p
                      className="intro_bottom"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.9 }}
                  >
                    14 • August • 2026
                  </motion.p>

                </motion.div>

              </motion.div>
          ) : (
              <div className="app">
                <section className="hero">

                  <motion.p
                      className="hero_subtitle"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                  >
                    Benvenuti al Nostro Matrimonio
                  </motion.p>

                  <motion.div
                      className="hero_img_box"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.2 }}
                  >
                    <img
                        src={bride}
                        className="hero_img"
                        alt=""
                    />
                  </motion.div>



                  <motion.h1
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                  >
                    Doniyor
                  </motion.h1>

                  <motion.div
                      className="hero_and"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                  >
                    &
                  </motion.div>

                  <motion.h1
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                  >
                    Robiyaxon
                  </motion.h1>

                  <motion.div
                      className="hero_line"
                      initial={{ width: 0 }}
                      animate={{ width: 150 }}
                      transition={{ delay: 1.1, duration: 1 }}
                  />

                  <motion.p
                      className="hero_date"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                  >
                    14 • AUGUST • 2026
                  </motion.p>






                </section>

                <motion.section
                    className="section sed"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >

                  <motion.p
                      className="hero_subtitle lemon"
                      custom={0}
                      variants={textVariant}
                      initial="hidden"
                      whileInView="visible"
                  >
                    <span>🍋</span> Benvenuti al Nostro Matrimonio <span>🍋</span>
                  </motion.p>

                  <motion.h2
                      custom={1}
                      variants={textVariant}
                      initial="hidden"
                      whileInView="visible"
                  >
                    TO'Y TAKLIFNOMASI
                  </motion.h2>

                  <motion.p
                      custom={2}
                      variants={textVariant}
                      initial="hidden"
                      whileInView="visible"
                  >
                    Assalomu alaykum! <br/>
                    Hurmatli mehmonimiz! <br/>
                    Sizni nikoh to'yimiz munosabati bilan 14.08.2026-yil
                    bo'lib o'tadigan <br/> "Visol oqshomi"ga
                    taklif etamiz.
                  </motion.p>

                  <motion.div
                      className="border"
                      variants={imgVariant}
                      initial="hidden"
                      whileInView="visible"
                  >
                    <img
                        className="img_bor"
                        src={wed_lw}
                        alt=""
                    />
                  </motion.div>

                  <motion.div
                      className="timer"
                      initial={{ opacity: 0, scale: .8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .6 }}
                  >
                     {timeLeft}
                  </motion.div>



                </motion.section>
                <motion.section
                    className="section italian_calendar"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >



                  <p className="calendar_title">
                    Il Nostro Giorno
                  </p>

                  <h2>14 AUGUST 2026</h2>

                  <div className="calendar_card">

                    <div className="month">
                      AUGUST
                    </div>

                    <div className="calendar">

                      {["M","T","W","T","F","S","S"].map((d)=>(
                          <div className="day_name">{d}</div>
                      ))}

                      {Array.from({length:31},(_,i)=>{

                        const day=i+1;

                        return(
                            <div
                                key={day}
                                className={`day ${day===14 ? "active_day":""}`}
                            >
                              {day}
                            </div>
                        )

                      })}

                    </div>

                  </div>


            <div className="cal_lemon">
              <motion.img
                  src={three}
                  className="cal_lemon"
                  variants={imgVariant}
                  initial="hidden"
                  whileInView="visible"
              />
            </div>
                </motion.section>


                <motion.section
                    className="section lok"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                  <h2>LOKATSIYA</h2>

                  <motion.img
                      src={restaurant}
                      className="restaurant"
                      variants={imgVariant}
                      initial="hidden"
                      whileInView="visible"
                  />

                  <iframe
                      title="map"
                      src="https://www.google.com/maps?q=Versal%20to'yxonasi%20Toshkent&output=embed"
                      className="map"
                  />
                </motion.section>

                <motion.section
                    className="section das"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                  <h2>TO‘Y DASTURI</h2>

                  <div className="timeline">
                    {[
                      ["17:00", "Mehmonlar kelishi"],
                      ["18:00", "Boshlanish"],
                      ["19:00", "Nikoh marosimi"],
                      ["20:00", "Dastur davom etadi"],
                      ["22:00", "Tort kesish 🎂"]
                    ].map(([time, text], i) => (
                        <div
                            key={i}
                            className="timeline_item"
                        >
                          <b>{time}</b>
                          <span>{text}</span>
                        </div>
                    ))}
                  </div>

                  <motion.img
                      src={ring}
                      className="ring"
                      variants={imgVariant}
                      initial="hidden"
                      whileInView="visible"
                  />
                </motion.section>

                <section className="footer foot" >
                  <h1>Doniyor <br/> &  <br/> Robiyaxon</h1>

                  <img
                      src={brides}
                      className="footer_img"
                      alt=""
                  />

                  <p className="cl">Hurmat va ehtirom ila, <br/>
                    Xoshimovlar
                    oilasi. ❤️</p>
                  <p className="asa"><span className="man"> 📍 Manzil:</span> <span className="ver">"Versal" </span>Restorani </p>
                </section>
              </div>
          )}
        </AnimatePresence>
      </>
  );
}

export default App;