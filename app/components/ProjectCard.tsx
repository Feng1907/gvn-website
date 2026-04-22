import Image from "next/image";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  image: string;
  title: string;
}

export default function ProjectCard({ image, title }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}