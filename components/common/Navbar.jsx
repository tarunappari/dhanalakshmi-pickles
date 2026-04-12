"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "@/styles/common/Navbar.module.scss";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import logo from "@/public/assets/vv-logo.png";
import { IconGardenCart, IconSearch } from "@tabler/icons-react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { openCart, items } = useCartStore();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchInputRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current.value.trim();
    if (searchTerm) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
      setIsSearchVisible(false);
      searchInputRef.current.value = "";
    }
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        !event.target.closest(`.${styles.searchIcon}`)
      ) {
        setIsSearchVisible(false);
      }
    };

    if (isSearchVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
        <Link href="/">
          <Image src={logo} alt="logo" priority />
        </Link>
      </div>
      <div className={styles.linksContainer}>
        <Link
          href="/products"
          className={pathname === "/products" ? styles.active : "link"}
        >
          PRODUCTS
        </Link>
        <Link
          href="/blog"
          className={pathname === "/blog" ? styles.active : "link"}
        >
          BLOG
        </Link>
        {/* <Link
          href="/gifting"
          className={pathname === "/gifting" ? styles.active : ""}
        >
          GIFTING
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? styles.active : ""}
        >
          ABOUT
        </Link> */}
      </div>
      <div className={styles.iconsDiv}>
        <div className={styles.searchContainer}>
          <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search products..."
              className={`${styles.searchInput} ${isSearchVisible ? styles.searchVisible : ""}`}
            />
          </form>
          <div className={styles.searchIcon} onClick={toggleSearch}>
            <IconSearch stroke={2} />
          </div>
        </div>
        <div
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          className={styles.cartIcon}
          onClick={openCart}
        >
          <IconGardenCart stroke={2} />
          <span>{items.reduce((acc, item) => acc + item.quantity, 0)}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
