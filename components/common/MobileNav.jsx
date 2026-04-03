"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import {
  IconHome,
  IconHomeFilled,
  IconCategory,
  IconCategoryFilled,
  IconBuildingStore,
  IconShoppingCart,
  IconShoppingCartFilled,
} from "@tabler/icons-react";

const MobileNav = () => {
  const pathname = usePathname();
  const { openCart, items } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getCartCount = () => {
    return (items || []).reduce((total, item) => total + item.quantity, 0);
  };

  const navItems = [
    {
      name: "Home",
      path: "/",
      IconOutline: IconHome,
      IconFilled: IconHomeFilled,
    },
    {
      name: "Categories",
      path: "/categories",
      IconOutline: IconCategory,
      IconFilled: IconCategoryFilled,
    },
    {
      name: "Shop",
      path: "/products",
      IconOutline: IconBuildingStore,
      IconFilled: IconBuildingStore, // Tabler icons may not have a filled variant for this by default globally, handled via stroke
    },
    {
      name: "Cart",
      action: openCart,
      IconOutline: IconShoppingCart,
      IconFilled: IconShoppingCartFilled,
      badge: getCartCount(),
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:hidden z-[100] pb-2 pt-2 flex justify-around items-center h-[70px] border-t border-gray-100 transition-all duration-300">
      {navItems.map((item, idx) => {
        // Active logic: exact match for Home, includes for others (e.g. Shop, Categories)
        let isActive = false;
        if (item.path === "/") {
          isActive = pathname === "/";
        } else if (item.path) {
          isActive = pathname.startsWith(item.path);
        }

        const Icon = isActive ? item.IconFilled : item.IconOutline;
        
        const Content = () => (
          <div className="flex flex-col items-center justify-center gap-[2px] relative w-16">
            <Icon 
              size={24} 
              stroke={isActive && item.IconFilled === item.IconOutline ? 2.5 : 1.5}
              className={`${isActive ? "text-[#D32F2F] shrink-0" : "text-gray-500 shrink-0"}`} 
            />
            {item.badge > 0 && (
              <span className="absolute -top-1.5 right-2 bg-[#D32F2F] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {item.badge > 99 ? '99+' : item.badge}
              </span>
            )}
            <span className={`text-[10px] font-medium leading-none ${isActive ? "text-[#D32F2F]" : "text-gray-500"}`}>
              {item.name}
            </span>
          </div>
        );

        if (item.action) {
          return (
            <button key={idx} onClick={item.action} className="flex justify-center focus:outline-none">
              <Content />
            </button>
          );
        }

        return (
          <Link key={idx} href={item.path} className="flex justify-center focus:outline-none">
            <Content />
          </Link>
        );
      })}
    </div>
  );
};

export default MobileNav;