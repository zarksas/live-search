import React from "react";
import { useState } from "react";
import style from "./Card.module.css"
import cards from "./cards"

const Products = () => {

    const [value, setValue] = useState('')

    const filtredValue = cards.filter(item => {
        return item.name.toLowerCase().includes(value)
    })

    return (
        <>
            <div className={style.search}>
                <input className={style.input} onChange={(event) => setValue(event.target.value)}/>
            </div>
            <div className={style.main}>
                <div className={style.block}>
                {
                    filtredValue.map((item) => {
                        return (
                            <div className={style.card}>
                            <img className={style.image} src={item.image} alt="no"/>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <button className={style.button}>{item.button}</button>
                            <p>{item.text}</p>
                            </div>
                        )           
                    })
                }
                </div>

            </div>
        </>

    )

}

export default Products;