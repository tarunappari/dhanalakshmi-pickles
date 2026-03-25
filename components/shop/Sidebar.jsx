import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import styles from '@/styles/shop/Sidebar.module.scss'

const Sidebar = () => {
    return (
        <div className={styles.sidebarContainer}>
            <div className="title">
                <h2>Total Products// Products</h2>
            </div>
            <div className={styles.line}></div>
            <Accordion type="single" collapsible className={`w-full ${styles.accordianContainer}`}>
                <AccordionItem value="item-1" className={styles.accordianItem} >
                    <AccordionTrigger className={styles.accordianTrigger}>Category</AccordionTrigger>
                    <AccordionContent className={styles.accordionContentInSidebar}>
                        <div>
                            <input type='checkbox' />
                            <p>Category 1</p>
                        </div>
                        <div>
                            <input type='checkbox' />
                            <p>Category 2</p>
                        </div>
                        <div>
                            <input type='checkbox' />
                            <p>Category 3</p>
                        </div>
                        <div>
                            <input type='checkbox' />
                            <p>Category 4</p>
                        </div>
                        <div>
                            <input type='checkbox' />
                            <p>Category 5</p>
                        </div>
                        <div>
                            <input type='checkbox' />
                            <p>Category 6</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <div className={styles.line}></div>
                <AccordionItem value="item-2" className={styles.accordianItem} >
                    <AccordionTrigger className={styles.accordianTrigger}>Color</AccordionTrigger>
                    <AccordionContent className={styles.accordionContentInSidebar}>
                        <div className={styles.colorsContainer}>
                            <div>
                                <span style={{ backgroundColor: 'rgba(26, 26, 26, 1)' }}></span>
                                <p>Black</p>
                            </div>
                            <div>
                                <span style={{ backgroundColor: 'rgba(33, 85, 141, 1)' }}></span>
                                <p>Blue</p>
                            </div>
                            <div>
                                <span style={{ backgroundColor: 'rgba(146, 92, 55, 1)' }}></span>
                                <p>Brown</p>
                            </div>
                            <div>
                                <span style={{ backgroundColor: 'rgba(88, 91, 69, 1)' }}></span>
                                <p>Green</p>
                            </div>
                            <div>
                                <span style={{ backgroundColor: 'rgba(225, 225, 227, 1)' }}></span>
                                <p>Grey</p>
                            </div>
                            <div>
                                <span style={{ backgroundColor: 'rgba(211, 134, 50, 1)' }}></span>
                                <p>Orange</p>
                            </div>
                            <div>
                                <span style={{ backgroundColor: 'rgba(239, 206, 201, 1)' }}></span>
                                <p>Pink</p>
                            </div>
                            <div>
                                <span style={{ backgroundColor: 'rgba(189, 40, 48, 1)' }}></span>
                                <p>Red</p>
                            </div>
                            <div>
                                <span style={{ backgroundColor: 'rgba(179, 166, 149, 1)' }}></span>
                                <p>Tan</p>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Sidebar;