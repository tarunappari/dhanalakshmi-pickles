"use client"
import React, { useState } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import cartImg from '@/public/assets/plant/plantAbout.jpg'
import Image from 'next/image'
import DltSvg from '@/public/assets/icons/dlt.svg'

const Cart = () => {

    const [isSheetOpen, setIsSheetOpen] = useState(false);

    return (
        <div >
            <Sheet>
                <SheetTrigger asChild>
                    <button className='blackBtn' style={{width:'100%'}} onClick={() => setIsSheetOpen(true)} variant="outline">ADD TO BAG</button>
                </SheetTrigger>
                <SheetContent className={'cartContainer animate-slide-in'}>
                    <SheetHeader>
                        <SheetTitle className={'title'}>Your Cart</SheetTitle>
                        <SheetDescription>

                        </SheetDescription>
                    </SheetHeader>
                    <div className='cartItems'>
                        <div>
                            <div className="imgContainer">
                                <Image src={cartImg} alt='img' layout='fill' objectFit='cover' objectPosition='center' />
                            </div>
                            <div className='info'>
                                <div>
                                    <div>
                                        <h3>Plant & Pot</h3>
                                        <span>Type | Colour</span>
                                    </div>
                                    <div><DltSvg /></div>
                                </div>
                                <div>
                                    <div>
                                        <div><span style={{ textDecoration: 'line-through' }}>Price</span><span style={{ color: 'black' }}>Price</span></div>
                                        <div><span>(30% Off)</span></div>
                                    </div>
                                    <div className='quantityContainer'>
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="imgContainer">
                                <Image src={cartImg} alt='img' layout='fill' objectFit='cover' objectPosition='center' />
                            </div>
                            <div className='info'>
                                <div>
                                    <div>
                                        <h3>Plant & Pot</h3>
                                        <span>Type | Colour</span>
                                    </div>
                                    <div><DltSvg /></div>
                                </div>
                                <div>
                                    <div>
                                        <div><span style={{ textDecoration: 'line-through' }}>Price</span><span style={{ color: 'black' }}>Price</span></div>
                                        <div><span>(30% Off)</span></div>
                                    </div>
                                    <div className='quantityContainer'>
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="imgContainer">
                                <Image src={cartImg} alt='img' layout='fill' objectFit='cover' objectPosition='center' />
                            </div>
                            <div className='info'>
                                <div>
                                    <div>
                                        <h3>Plant & Pot</h3>
                                        <span>Type | Colour</span>
                                    </div>
                                    <div><DltSvg /></div>
                                </div>
                                <div>
                                    <div>
                                        <div><span style={{ textDecoration: 'line-through' }}>Price</span><span style={{ color: 'black' }}>Price</span></div>
                                        <div><span>(30% Off)</span></div>
                                    </div>
                                    <div className='quantityContainer'>
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cartCheckOutContainer">
                        <div>
                            <p>Subtotal <span>(2 items)</span></p>
                            <p>Price</p>
                        </div>
                        <div>
                            <button className="blackBtn">CONTINUE TO CHECKOUT</button>
                        </div>
                        <span>Psst, get it now before it sells out.</span>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Cart;