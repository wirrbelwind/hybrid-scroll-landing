'use client';
import Link from 'next/link'
import styles from './Navbar.module.scss'
import { usePageNavigation } from '../hooks/usePageNavigation';

export const Navbar = () => {
	const linkList = [
		['About', '#about'],
		['Team', '#team'],
		['Projects', '#projects'],
		['Contact', '#contact'],
	]

	const pageNav = usePageNavigation()

	return (
		<nav className={styles.wrapper}>
			<ul className={styles.navList}>
				{
					linkList.map(([linkName, linkHref]) => (
						<li className={styles.navItem} key={linkHref}>
							<Link
								href={linkHref}
								className={styles.link}
								onClick={pageNav.handler}
							>
								{linkName}
							</Link>
						</li>
					))
				}
			</ul>
		</nav>
	)
}
