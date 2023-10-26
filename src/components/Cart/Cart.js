import React from 'react'
import Bag from '../Buttons/Bag'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';

function Cart() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('meals'));
            if (items) {
            setItems(items);
            }
        console.log(items , 'kart stvari')
        }, []);
    
    const [toggleCart, setToggleCart] = useState(false);

    function cartToggler() {
        console.log('toggle');
        setToggleCart(!toggleCart);
    }
    return (
        <div>
            {toggleCart && (
                <div className='fixed top-0 right-0 w-1/4 h-full bg-white z-50 shadow-lg py-4 px-4 overflow-scroll'>
                   <div className='flex w-full justify-between items-center'>  
                        <h2 className='text-2xl font-bold'>Your Cart</h2>
                        <Icon icon="material-symbols:close" onClick={cartToggler} width={32} height={32} className='cursor-pointer '/>
                    </div>
                    <div>
                    <ul className='flex flex-wrap gap-8 justify-between'>
                        {items.map((meal, index) => (
                        <li key={index} className='mt-4'>
                            <div className='flex justify-start items-center gap-4'>
                            <img className='rounded-lg max-w-1/4 ' src={meal.strMealThumb} alt={meal.strMeal} />
                            <h2 className=' text-blackTxt'>{meal.strMeal}</h2>
                            </div>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
            )}
            <Bag toggleCart={cartToggler}/>
        </div>
    );
}

export default Cart;
{/* <img src={items[0].strMealThumb}/>
<h4>{items[0].strMeal}</h4> */}