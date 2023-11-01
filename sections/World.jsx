'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { newFeatures } from '../constants';
import { staggerContainer, fadeIn } from '../utils/motion';
import {  TitleText, TypingText } from '../components';

const World = () => (
  <section>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Track friends around you and invite them to play together in the same world
          </>
        )}
        textStyles="text-center"
      />
      <motion.div
        variant={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        {/* <div className='absolute top-72 left-[18%] w-[100] h-[100px] p-[6px] rounded-[20px] bg-[#5d6680]'>
          <img
            src='/card-01.png'
            alt='card 1'
            className='w-full h-full'
          />
        </div>
        <div className='absolute top-72 left-[18%] w-[100] h-[100px] p-[6px]'>
          <img
            src='/card-01-light.png'
            alt='card 1 light'
            className='w-full h-full'
          />
        </div> */}
        {/* <div className='absolute bottom-72 right-[19%] w-[100] h-[100px] p-[6px] rounded-md bg-[#5d6680]'>
          <img
            src='/card-02.png'
            alt='card 2'
            className='w-full h-full'
          />
        </div> */}
      </motion.div>
    </motion.div>
  </section>
);

export default World;
