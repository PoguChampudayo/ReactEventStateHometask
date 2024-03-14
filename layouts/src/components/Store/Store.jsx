import { useState } from "react";
import { CardsView } from '../CardsView/CardsView';
import { ListView } from "../ListView/ListView";
import 'material-icons/iconfont/material-icons.css';





export const Store = () => {

    const [cardView, setCardView] = useState(true);
    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
      }];

    const onSwitch = () => {
      setCardView(cardView => !cardView)
    }
  return (
    <div>
        <button onClick={onSwitch}><span className="material-icons">{cardView ? "view_list" : "view_module"}</span> 
        </button>
        <div>
         {cardView ? <CardsView cards={products}/> : <ListView items={products}/>}
        </div>
    </div>
  )
}
