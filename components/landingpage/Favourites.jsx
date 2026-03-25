import React from "react";
import styles from "@/styles/landingpage/Favourites.module.scss";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlantCard } from "../common/PlantCard";

const Favourites = () => {
  return (
    <div className={styles.favouritesContainer}>
      <div className={styles.title}>
        <h1>Aranya Favorites</h1>
        <p>Beautifully Functional. Consciously Crafted.</p>
      </div>
      <div className={styles.carouselContainer}>
        <Carousel className={styles.carousel}>
          <CarouselContent className="-ml-1">
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-3 md:basis-1/3 lg:basis-1/4"
              >
                <div className={styles.cardContainer}>
                  {/* <div className={styles.favCard}>
                                            <div className={styles.imgContainer}>
                                                <Image src={favImg} alt='plant' />
                                            </div>
                                            <div className={styles.favInfo}>
                                                <div style={{ paddingTop: '0.5rem' }}>
                                                    <p>Plant & Pot</p>
                                                    <p>$60</p>
                                                </div>
                                                <div className={styles.color}>Colour</div>
                                            </div>
                                        </div> */}
                  <PlantCard />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={"carouselbtn"} />
          <CarouselNext className={"carouselbtn"} />
        </Carousel>
      </div>
      <div>
        <button className='viewBtn'>VIEW ALL</button>
      </div>
    </div>
  );
};

export default Favourites;
