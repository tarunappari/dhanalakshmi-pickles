"use client";
import React, { useState } from "react";
import styles from "@/styles/common/Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/vv-logo.png";
import { 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconBrandTwitter, 
  IconBrandYoutube,
  IconMapPin,
  IconPhone,
  IconMail
} from "@tabler/icons-react";

const Footer = () => {
  const [openSection, setOpenSection] = useState("");

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? "" : sectionName);
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerMain}>
        {/* Brand & About */}
        <div className={styles.footerBrand}>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="Dhanalakshmi Ruchulu Logo" />
          </div>
          <p className={styles.aboutText}>
            Delivering the authentic taste of Andhra directly to your home. Handcrafted with love, patience, and age-old traditional recipes.
          </p>
          <div className={styles.socialIcons}>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <IconBrandFacebook stroke={1.5} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IconBrandInstagram stroke={1.5} />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <IconBrandTwitter stroke={1.5} />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <IconBrandYoutube stroke={1.5} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerLinks}>
          <h3 onClick={() => toggleSection('links')} className={openSection === 'links' ? styles.active : ''}>
            <span>Quick Links</span>
            <span className={styles.toggleIcon}>{openSection === 'links' ? "−" : "+"}</span>
          </h3>
          <ul className={openSection === 'links' ? styles.open : ''}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Shop All</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/blog">Ammamma kathalu</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerContact}>
          <h3 onClick={() => toggleSection('contact')} className={openSection === 'contact' ? styles.active : ''}>
            <span>Get In Touch</span>
            <span className={styles.toggleIcon}>{openSection === 'contact' ? "−" : "+"}</span>
          </h3>
          <div className={`${styles.contactInfoWrapper} ${openSection === 'contact' ? styles.open : ''}`}>
            <div className={styles.contactItem}>
              <IconMapPin stroke={1.5} />
              <span>12/4 Heritage Street, Godavari District, Andhra Pradesh, India.</span>
            </div>
            <div className={styles.contactItem}>
              <IconPhone stroke={1.5} />
              <span>+91 98765 43210</span>
            </div>
            <div className={styles.contactItem}>
              <IconMail stroke={1.5} />
              <span>hello@dhanalakshmiruchulu.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Dhanalakshmi Ruchulu. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href='/refund-policy'>Refunds & Returns</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
