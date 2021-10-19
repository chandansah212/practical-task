import data from "./data"
import React, { useState } from 'react'

const Home = () => {
    let selectedProducts=[];
   let newarray=[]

    const handleChecked = (e) => {
        
        if (e.target.checked == true) {
        //     if(temptselectedProducts)
        //    { settempSelectedProducts([...temptselectedProducts, e.target.value])}
        //    else console.log(temptselectedProducts)
            console.log(e.target.value)
            console.log(e.target.id)
            newarray.push(e.target.value)
            console.log(newarray)
        }
       else{
           let index=newarray.indexOf(e.target.value)
        newarray.splice(index,1)
       console.log(newarray)
    }
    }

    const handleChange = (e) => {
        e.preventDefault()
        newarray.map((items)=>{selectedProducts.push(items)})
        newarray.splice(0)
        
     }
    return (
        <div>
            <table>
                <tr>
                    <td colSpan="2">
                        {/* <input >blue</input>
                        <input name="red" value="red" type="radio">red</input> */}
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="text" placeholder="enter product name here"></input>
                        <button>search</button>
                    </td>
                    <td>
                        <label>Cart</label>
                        <span></span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <ul> {data.map((items) => <li> <input type="checkbox" id={items.id} name="checkbox1" value={items.name} onChange={handleChecked} /> {items.name}</li>)}</ul>
                    </td>
                    <td>
                        <ul>{selectedProducts.map((item)=>{return <li>{item}</li>})}</ul>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onClick={handleChange}>add to cart</button>
                    </td>
                    <td>
                        <button>checkout</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Home
