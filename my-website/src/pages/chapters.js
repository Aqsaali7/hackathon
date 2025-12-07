import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/chapters-page.module.css';

const bookTitle = "Physical AI and Humanoid Robotics Textbook";
const chapters = [
  {
    title: "Chapter 1: Foundations of Physical AI",
    lessons: [
      "History and Evolution of Robotics and AI",
      "Core Concepts of Embodied Intelligence",
      "Sensors and Perception in Physical Systems",
      "Actuators and Manipulation",
      "Introduction to Control Theory",
    ],
    path: "/docs/physical-ai-and-humanoid-robotics-textbook/chapter-1",
  },
  {
    title: "Chapter 2: Humanoid Robotics",
    lessons: [
      "Biomechanics and Humanoid Design",
      "Bipedal Locomotion and Stability",
      "Human-Robot Interaction and Social Robotics",
      "Grasping and Dexterous Manipulation",
      "Case Studies of Famous Humanoid Robots",
    ],
    path: "/docs/physical-ai-and-humanoid-robotics-textbook/chapter-2",
  },
  {
    title: "Chapter 3: Machine Learning for Physical AI",
    lessons: [
      "Reinforcement Learning for Control",
      "Imitation Learning and Learning from Demonstration",
      "Computer Vision for Object Recognition and Tracking",
      "Force and Tactile Sensing with Machine Learning",
      "Sim-to-Real Transfer and Domain Adaptation",
    ],
    path: "/docs/physical-ai-and-humanoid-robotics-textbook/chapter-3",
  },
  {
    title: "Chapter 4: Advanced Topics in Humanoid AI",
    lessons: [
      "Natural Language Processing for Verbal Communication",
      "Cognitive Architectures for Humanoids",
      "Long-term Autonomy and Lifelong Learning",
      "Soft Robotics and Bio-inspired Design",
      "Swarm Robotics and Multi-Agent Systems",
    ],
    path: "/docs/physical-ai-and-humanoid-robotics-textbook/chapter-4",
  },
  {
    title: "Chapter 5: Ethics and Future of Physical AI",
    lessons: [
      "Ethical Implications of Humanoid Robots",
      "The Future of Work and Automation",
      "AI Safety and Alignment in Physical Systems",
      "The Role of Humanoids in Society",
      "The Path to Artificial General Intelligence in Humanoid Form",
    ],
    path: "/docs/physical-ai-and-humanoid-robotics-textbook/chapter-5",
  },
];

function ChaptersPage() {
  return (
    <Layout
      title={`Chapters - ${bookTitle}`}
      description="A list of all chapters and lessons in the Physical AI and Humanoid Robotics Textbook."
    >
      <header className={styles.pageHeader}>
        <h1>{bookTitle} Chapters</h1>
      </header>
      <main className={styles.mainContent}>
        <div className={styles.chapterList}>
          {chapters.map((chapter, chapterIndex) => (
            <div key={chapterIndex} className={styles.chapterBlock}>
              <h2>{chapter.title}</h2>
              <ul className={styles.lessonList}>
                {chapter.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className={styles.lessonItem}>
                    <Link to={chapter.path} className={styles.lessonLink}>
                      {`Lesson ${chapterIndex + 1}.${lessonIndex + 1}: ${lesson}`}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default ChaptersPage;
