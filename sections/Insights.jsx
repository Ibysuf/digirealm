'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import { insights } from '../constants';

const Insights = () => (
  <section>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText
        title="| Insight"
        textStyles="text-center"
      />
      <TitleText
        title="Insight about the Digirealm"
        textStyles="text-center"
      />
    </motion.div>
    <div
      className="mt-[50px] flex flex-col gap-[30px]"
    >
      {insights.map((insight, index) => (
        <InsightCard
          key={`insight-${index}`}
          {...insight}
          index={index + 1}
        />
      ))}
    </div>
  </section>
);

export default Insights;
