import React, {useState} from 'react'
import Board from './components/Board/Board'
import backImg from './assets/images/acb.png'
import angular from './assets/images/NGUYENNK.jpg'
import css from './assets/images/NAMVD.jpg'
import go from './assets/images/TUANDH.jpg'
import html from './assets/images/MYBPH.jpg'
import rail from './assets/images/ANDH.jpg'
import react from './assets/images/DATLA.jpg'
import scala from './assets/images/THAOVN.jpg'
import vue from './assets/images/HAOLNH.jpg'

function App() {
  const cards = buildCards()
  return (
    <div className="App">
      <Board cards={cards} />
    </div>
  )
}

export default App

function buildCards() {
  let id = 0
  const images = {angular, css, go, html, rail, react, scala, vue}
  const cards = Object.keys(images).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      backImg,
      frontImg: images[item],
      flipped: false,
    })
    return [...result, getCard(), getCard()]
  }, [])
  return suffle(cards)
}

function suffle(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len)
    let copyCurrent = {...arr[i]}
    let copyRandom = {...arr[randomIdx]}
    arr[i] = copyRandom
    arr[randomIdx] = copyCurrent
  }
  return arr
}
