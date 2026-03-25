import React from 'react'
import styles from '@/styles/common/Footer.module.scss'
import Link from 'next/link';
import RightArrow from '@/public/assets/icons/rightArrow.svg'
import FacebookIcon from '@/public/assets/icons/facebook.svg'
import InstagramIcon from '@/public/assets/icons/instagram.svg'
import TwitterIcon from '@/public/assets/icons/twitter.svg'
import LinkedinIcon from '@/public/assets/icons/linkedin.svg'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLinksContainer}>
                <div>
                    <h2>Acount</h2>
                </div>
                <div>
                    <Link href="">Log In</Link>
                    <Link href="">Sign Up</Link>
                    <Link href="">Redeem a Gift Card</Link>
                </div>
            </div>
            <div className={styles.footerLinksContainer}>
                <div>
                    <h2>Company</h2>
                </div>
                <div>
                    <Link href="">About</Link>
                    <Link href="">Environmental Initiatives</Link>
                    <Link href="">Careers</Link>
                    <Link href="">International</Link>
                    <Link href="">Accessibility</Link>
                </div>
            </div>
            <div className={styles.footerLinksContainer}>
                <div>
                    <h2>Get Help</h2>
                </div>
                <div>
                    <Link href="">Help Center</Link>
                    <Link href="">Return Policy</Link>
                    <Link href="">Shipping Info</Link>
                    <Link href="">Corporate Orders</Link>
                </div>
            </div>
            <div className={styles.footerLinksContainer}>
                <div>
                    <h2>Connect</h2>
                </div>
                <div className={styles.socialIcons}>
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon width={28} height={28} />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon width={28} height={28} />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon width={28} height={28} />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon width={28} height={28} />
                    </Link>
                    <Link href="">Affiliates</Link>
                </div>
            </div>
            <div className={styles.footerInput}>
                <input type="text" placeholder='Email Address' />
                <button><RightArrow width={30} /></button>
            </div>
            <div className={styles.copyright}>
                <p>© {new Date().getFullYear()} Aranya. All rights reserved.</p>
            </div>
        </div >
    )
}

export default Footer;