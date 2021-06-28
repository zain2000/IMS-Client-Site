import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Discover Our Full Range!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='Finding difficulty in repairing things by yourself no worries, Call our Handyman anywhere anytime'
              label='Maintainence'
              path='/services'
            />
            <CardItem
              src='images/img-20.jpg'
              text='Just request for our Construction service and we will Quote you the details'
              label='Construction'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-18.jpg'
              text='Get the best appliances in town for maintainence work'
              label='Electrical'
              path='/products'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Unleash the physical Worker in you'
              label='Mechanical'
              path='/products'
            />
            <CardItem
              src='images/img-17.jpg'
              text='Discover the creative side of yours'
              label='Paint'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;