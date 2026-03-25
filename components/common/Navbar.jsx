"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "@/styles/common/Navbar.module.scss";
import Link from "next/link";
import CartIcon from "@/public/assets/icons/cart.svg";
import SearchIcon from "@/public/assets/icons/search.svg";
import UserIcon from "@/public/assets/icons/user.svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchInputRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current.value.trim();
    if (searchTerm) {
      // Handle search functionality here
      console.log("Searching for:", searchTerm);
      // You can add navigation to search results page or filter products
    }
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target) &&
          !event.target.closest(`.${styles.searchIcon}`)) {
        setIsSearchVisible(false);
      }
    };

    if (isSearchVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchVisible]);

  // Focus input when search becomes visible
  useEffect(() => {
    if (isSearchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchVisible]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Link href="/">Dhana</Link>
      </div>
      <div>
        <Link
          href="/plants"
          className={pathname === "/plants" ? styles.active : ""}
        >
          PRODUCTS
        </Link>
        <Link
          href="/blog"
          className={pathname === "/blog" ? styles.active : ""}
        >
          BLOG
        </Link>
        <Link
          href="/gifting"
          className={pathname === "/gifting" ? styles.active : ""}
        >
          GIFTING
        </Link>
        <Link
          href="/offers"
          className={pathname === "/offers" ? styles.active : ""}
        >
          OFFERS
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? styles.active : ""}
        >
          ABOUT
        </Link>
      </div>
      <div className={styles.iconsDiv}>
        <div className={styles.searchContainer}>
          <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search products..."
              className={`${styles.searchInput} ${isSearchVisible ? styles.searchVisible : ''}`}
            />
          </form>
          <div className={styles.searchIcon} onClick={toggleSearch}>
            <SearchIcon width={30} />
          </div>
        </div>
        <CartIcon width={30} />
        <UserIcon width={30} />
      </div>
    </div>
  );
};

export default Navbar;
