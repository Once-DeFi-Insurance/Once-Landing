// Import Swiper React components
import React from "react";
import Image from "next/image";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../styles/Swiper.module.scss";
import life from "../assets/imgs/life.png";

// Import Swiper styles
import "swiper/css";

function SwiperComponent() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      className={styles.swiper}
    >
      <SwiperSlide className={styles.slide}>
        <div className={styles.card}>
          <svg
            className={styles.token}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <g id="Layer_31" dataname="Layer 31">
              <circle cx="32" cy="5" r="2" style={{ fill: "#0a68c6" }} />
              <circle cx="49" cy="9" r="2" style={{ fill: "#0a68c6" }} />
              <circle cx="57" cy="19" r="2" style={{ fill: "#0a68c6" }} />
              <circle cx="32" cy="59" r="2" style={{ fill: "#0a68c6" }} />
              <circle cx="59" cy="32" r="2" style={{ fill: "#0a68c6" }} />
              <circle cx="5" cy="32" r="2" style={{ fill: "#0a68c6" }} />
              <circle cx="15" cy="9" r="2" style={{ fill: "#0a68c6" }} />
              <circle cx="7" cy="19" r="2" style={{ fill: "#0a68c6" }} />
              <circle cx="49" cy="55" r="2" style={{ fill: "#0a68c6" }} />
              <circle cx="57" cy="45" r="2" style={{ fill: "#0a68c6" }} />
              <circle cx="15" cy="55" r="2" style={{ fill: "#0a68c6" }} />
              <circle cx="7" cy="45" r="2" style={{ fill: "#0a68c6" }} />
              <circle cx="32" cy="32" r="19" style={{ fill: "#0a68c6" }} />
              <circle cx="32" cy="32" r="16" style={{ fill: "#62b5e8" }} />
              <polygon
                points="32 35 27 31 32 20 37 31 32 35"
                style={{ fill: "#fcbe42" }}
              />
              <polygon
                points="27 35 32 39 37 35 32 44 27 35"
                style={{ fill: "#fcbe42" }}
              />
              <path d="M32,15A17,17,0,1,0,49,32,17.019,17.019,0,0,0,32,15Zm0,32A15,15,0,1,1,47,32,15.017,15.017,0,0,1,32,47Z" />
              <path d="M32.91,19.586a1,1,0,0,0-1.82,0l-5,11a1,1,0,0,0,.285,1.2l5,4a1,1,0,0,0,1.25,0l5-4a1,1,0,0,0,.285-1.2ZM32,33.719l-3.768-3.014L32,22.417l3.768,8.288Z" />
              <path d="M36.375,34.219,32,37.719l-4.375-3.5a1,1,0,0,0-1.5,1.267l5,9a1,1,0,0,0,1.748,0l5-9a1,1,0,0,0-1.5-1.267ZM32,41.941l-1.66-2.988,1.035.828a1,1,0,0,0,1.25,0l1.035-.828Z" />
              <path d="M56.184,33a3,3,0,1,0,0-2H51.949a19.847,19.847,0,0,0-2.266-8.317l.024.024L52.414,20h1.77a3,3,0,1,0,0-2H52a1,1,0,0,0-.707.293l-2.645,2.645A20.164,20.164,0,0,0,43,15.314V10h3.184a3,3,0,1,0,0-2H42a1,1,0,0,0-1,1v5.164a19.816,19.816,0,0,0-8-2.113V7.816a3,3,0,1,0-2,0v4.235a19.816,19.816,0,0,0-8,2.113V9a1,1,0,0,0-1-1H17.816a3,3,0,1,0,0,2H21v5.314a20.164,20.164,0,0,0-5.648,5.624l-2.645-2.645A1,1,0,0,0,12,18H9.816a3,3,0,1,0,0,2h1.77l2.707,2.707.024-.024A19.847,19.847,0,0,0,12.051,31H7.816a3,3,0,1,0,0,2h4.235a19.847,19.847,0,0,0,2.266,8.317l-.024-.024L11.586,44H9.816a3,3,0,1,0,0,2H12a1,1,0,0,0,.707-.293l2.645-2.645A20.164,20.164,0,0,0,21,48.686V54H17.816a3,3,0,1,0,0,2H22a1,1,0,0,0,1-1V49.836a19.816,19.816,0,0,0,8,2.113v4.235a3,3,0,1,0,2,0V51.949a19.816,19.816,0,0,0,8-2.113V55a1,1,0,0,0,1,1h4.184a3,3,0,1,0,0-2H43V48.686a20.164,20.164,0,0,0,5.648-5.624l2.645,2.645A1,1,0,0,0,52,46h2.184a3,3,0,1,0,0-2h-1.77l-2.707-2.707-.024.024A19.847,19.847,0,0,0,51.949,33ZM57,18a1,1,0,1,1-1,1A1,1,0,0,1,57,18ZM49,8a1,1,0,1,1-1,1A1,1,0,0,1,49,8ZM15,10a1,1,0,1,1,1-1A1,1,0,0,1,15,10ZM7,20a1,1,0,1,1,1-1A1,1,0,0,1,7,20ZM7,46a1,1,0,1,1,1-1A1,1,0,0,1,7,46Zm8,10a1,1,0,1,1,1-1A1,1,0,0,1,15,56Zm34-2a1,1,0,1,1-1,1A1,1,0,0,1,49,54Zm8-10a1,1,0,1,1-1,1A1,1,0,0,1,57,44Zm2-13a1,1,0,1,1-1,1A1,1,0,0,1,59,31ZM32,4a1,1,0,1,1-1,1A1,1,0,0,1,32,4ZM5,33a1,1,0,1,1,1-1A1,1,0,0,1,5,33ZM32,60a1,1,0,1,1,1-1A1,1,0,0,1,32,60Zm0-10A18,18,0,1,1,50,32,18.021,18.021,0,0,1,32,50Z" />
            </g>
          </svg>
          <div>
            <h1 className={styles.title}>Anima</h1>
            <h2 className={styles.texto}>
              Once’s utility coin needed to interact with the dapp. Needed to
              determine the premium, assured sum and to guarantee liquidity.
            </h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <div className={styles.card}>
          <svg
            className={styles.nft}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <g id="Layer_31" data-name="Layer 31">
              <circle cx="32" cy="5" r="2" style={{ fill: "#2678db" }} />
              <circle cx="49" cy="11" r="2" style={{ fill: "#2678db" }} />
              <circle cx="57" cy="19" r="2" style={{ fill: "#2678db" }} />
              <circle cx="5" cy="32" r="2" style={{ fill: "#2678db" }} />
              <circle cx="15" cy="11" r="2" style={{ fill: "#2678db" }} />
              <circle cx="7" cy="19" r="2" style={{ fill: "#2678db" }} />
              <circle cx="15" cy="53" r="2" style={{ fill: "#2678db" }} />
              <circle cx="7" cy="45" r="2" style={{ fill: "#2678db" }} />
              <polygon
                points="49 42 32 51 15 42 15 22 32 13 49 22 49 42"
                style={{ fill: "#2678db" }}
              />
              <polygon
                points="18 40 18 24 32 17 46 24 46 40 32 47 18 40"
                style={{ fill: "#62b5e8" }}
              />
              <path
                d="M33,49h4a0,0,0,0,1,0,0V59a2,2,0,0,1-2,2h0a2,2,0,0,1-2-2V49A0,0,0,0,1,33,49Z"
                style={{ fill: "#f7b237" }}
              />
              <polygon
                points="33 51 51 57 51 37 33 43 33 51"
                style={{ fill: "#fcbe42" }}
              />
              <path
                d="M31,43h2a0,0,0,0,1,0,0v8a0,0,0,0,1,0,0H31a4,4,0,0,1-4-4v0A4,4,0,0,1,31,43Z"
                style={{ fill: "#f7b237" }}
              />
              <rect
                x="51"
                y="35"
                width="4"
                height="24"
                rx="2"
                style={{ fill: "#f7b237" }}
              />
              <path d="M25,31.764,22.9,27.553A1,1,0,0,0,21,28v9h2V32.236l2.105,4.211A1,1,0,0,0,26,37a1.067,1.067,0,0,0,.23-.026A1,1,0,0,0,27,36V27H25Z" />
              <path d="M31,33h3V31H31V29h4V27H30a1,1,0,0,0-1,1v9h2Z" />
              <polygon points="39 37 41 37 41 29 43 29 43 27 37 27 37 29 39 29 39 37" />
              <path d="M53,34a3,3,0,0,0-2.891,2.243L50,36.28V22.414L52.414,20h1.77a3,3,0,1,0,0-2H52a1,1,0,0,0-.707.293l-2.478,2.478L43,17.692V12h3.184a3,3,0,1,0,0-2H42a1,1,0,0,0-1,1v5.633L33,12.4V7.816a3,3,0,1,0-2,0V12.4l-8,4.235V11a1,1,0,0,0-1-1H17.816a3,3,0,1,0,0,2H21v5.692l-5.815,3.079-2.478-2.478A1,1,0,0,0,12,18H9.816a3,3,0,1,0,0,2h1.77L14,22.414V31H7.816a3,3,0,1,0,0,2H14v8.586L11.586,44H9.816a3,3,0,1,0,0,2H12a1,1,0,0,0,.707-.293l2.478-2.478L21,46.308V52H17.816a3,3,0,1,0,0,2H22a1,1,0,0,0,1-1V47.366l3.532,1.87.01-.018A4.99,4.99,0,0,0,31,52h1v7a3,3,0,0,0,6,0V53.72l12.109,4.037A2.993,2.993,0,0,0,56,57V37A3,3,0,0,0,53,34Zm4-16a1,1,0,1,1-1,1A1,1,0,0,1,57,18Zm-8-8a1,1,0,1,1-1,1A1,1,0,0,1,49,10ZM15,12a1,1,0,1,1,1-1A1,1,0,0,1,15,12ZM7,20a1,1,0,1,1,1-1A1,1,0,0,1,7,20ZM5,33a1,1,0,1,1,1-1A1,1,0,0,1,5,33ZM7,46a1,1,0,1,1,1-1A1,1,0,0,1,7,46Zm8,8a1,1,0,1,1,1-1A1,1,0,0,1,15,54ZM27.379,43.571,19,39.382V24.618l13-6.5,13,6.5V37.946L32.839,42H31A4.978,4.978,0,0,0,27.379,43.571Zm6.621.15,16-5.333V55.612L34,50.279ZM32,4a1,1,0,1,1-1,1A1,1,0,0,1,32,4ZM16,22.6l16-8.471L48,22.6V36.946l-1,.334V24a1,1,0,0,0-.553-.895l-14-7a1,1,0,0,0-.894,0l-14,7A1,1,0,0,0,17,24V40a1,1,0,0,0,.553.9l8.771,4.385a4.938,4.938,0,0,0-.294,1.427L16,41.4ZM28,47a3,3,0,0,1,3-3h1v6H31A3,3,0,0,1,28,47Zm8,12a1,1,0,0,1-2,0V52.387l2,.667Zm18-2a1,1,0,0,1-2,0V37a1,1,0,0,1,2,0Z" />
              <rect x="58" y="46" width="4" height="2" />
              <rect
                x="56.975"
                y="38.186"
                width="4"
                height="1.999"
                transform="translate(-9.846 22.535) rotate(-20.001)"
              />
              <rect
                x="57.975"
                y="52.814"
                width="1.999"
                height="4"
                transform="translate(-12.705 91.483) rotate(-69.999)"
              />
            </g>
          </svg>
          <div>
            <h1 className={styles.title}>Extra Life</h1>
            <h2 className={styles.texto}>
              NFT that holds the value of a persons life, Releases funds in the
              desired coin when the assured person dies
            </h2>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.slide}>
        <div className={styles.card}>
          <Image
            src={life}
            width={450}
            height={450}
            layout="intrinsic"
            alt="dao icon"
          />
          <div>
            <h1 className={styles.title}>DAO GOVERNANCE</h1>
            <h2 className={styles.texto}>
              Depending on the amount of active assured sum, it’s the size of
              your voice in the organization.
            </h2>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperComponent;
