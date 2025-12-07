import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/landing-page.module.css';

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

function LandingPage() {
  return (
    <Layout
      title={bookTitle}
      description="A futuristic sci-fi landing page for the Physical AI and Humanoid Robotics Textbook."
    >
      <header className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h1 className={styles.bookTitle}>{bookTitle}</h1>
          <p className={styles.heroSubtitle}>Explore the cutting edge of physical AI and humanoid robotics.</p>
        </div>
        <img
          src="https://img.freepik.com/free-photo/view-futuristic-robot-standing-front-glowing-neon-light_23-2150828552.jpg?t=st=1701964259~exp=1701967859~hmac=50c9f13c6b2b7a97217311c195f24f4e7c164a6f20427c65306917c6693a7d25&w=1480"
          alt="Futuristic Robot"
          className={styles.heroImage}
        />
      </header>

      <main className={styles.mainContent}>
        <section className={styles.chaptersSection}>
          <h2>Chapters & Lessons</h2>
          <div className={styles.chapterGrid}>
            {chapters.map((chapter, chapterIndex) => (
              <div key={chapterIndex} className={styles.chapterCard}>
                <h3>{chapter.title}</h3>
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
        </section>
      </main>
    </Layout>
  );
}

export default LandingPage;