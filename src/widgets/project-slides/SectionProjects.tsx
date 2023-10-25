'use client';

import { useRef } from "react"
import styles from './SectionProjects.module.scss'
import { useHorizontalScroll } from "@/widgets/project-slides/hooks/useHorizontalScroll";

export const SectionProjects = () => {
	const projects = useRef<HTMLDivElement>(null)
	const projectsWrapper = useRef<HTMLDivElement>(null)

	useHorizontalScroll(projects, projectsWrapper)

	return (
		<section className={styles.projectsContainer} id='projects'>
			<div className={styles.projectsWrapper} ref={projectsWrapper}>
				<div className={styles.projects} ref={projects}>

					<div className={styles.projectItem}>
						<h1>Projects 1</h1>
					</div>
					<div className={styles.projectItem}>
						<h1>Projects 2</h1>
					</div>
					<div className={styles.projectItem}>
						<h1>Projects 3</h1>
					</div>
				</div>
			</div>
		</section>
	)
}