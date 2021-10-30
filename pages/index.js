import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React from 'react'

function index() {
  return (
    <body>
        <div className="bg-gray-100">
          <div className="bg-headerColor">
              <div className="flex ">
                  <div className="flex ml-32">
                      <img src="/logo.png" className=" w-8 ml-12 pt-10"/>
                      <p className="text-lg font-normal ml-4 pt-12 text-white"> CRAPPO </p>
                  </div>
                  <div className="flex pt-10 ml-96">
                      <p className="text-sm font-normal mt-3 ml-12 text-white"> Products </p>
                      <p className="text-sm font-normal mt-3 ml-7 text-white"> Features </p>
                      <p className="text-sm font-normal mt-3 ml-7 text-white "> About </p>
                      <p className="text-sm font-normal mt-3 ml-7 text-white "> Contact </p>
                      <p className="text-sm font-normal mt-3 ml-7 text-white "> Login </p>
                      <div className="w-0.5 h-7 bg-gray-400 mt-2 ml-4"></div>
                      <button className="w-24 bg-buttonColor md:text-sm text-xs text-white rounded-full h-8 ml-8 mt-1" >
                          Register
                      </button>
                  </div>
              </div>

              <div className="bg-hero_modal flex">
                  <div className='w-full absolute left-52 top-96'>
                      <img src="/lines.png" className="w-full"/>
                  </div>
                  <div  className="mt-40 ml-44 w-auto">
                      <div className="bg-white bg-opacity-25 max-w-sm h-10 rounded-full flex ">
                          <div className="bg-white mt-1 rounded-full w-32 h-8 ml-1">
                              <p className="pl-6 pt-1 font-bold">75% SAVE</p>
                          </div>
                          <p className="text-white font-normal ml-3 pt-2 pr-5">For the Black Friday weekend</p>
                      </div>
                      <div className="max-w-2xl mt-6">
                          <p className="text-white font-bold text-6xl">Fastest & secure</p>
                          <p className="text-white font-bold text-6xl mt-3">platform to invest in</p>
                          <p className="text-white font-bold text-6xl mt-3">crypto</p>
                      </div>
                      <div>
                          <p className="text-white font-light text-sm mt-7">Buy and sell cryptocurrencies, trusted by 10M wallets</p>
                          <p className="text-white font-light text-sm mt-2">with over $30 billion in transactions.</p>
                      </div>
                      <div className="mt-12">
                          <button className="flex w-44 bg-buttonColor md:text-sm text-2xl text-white font-bold rounded-full h-12 pt-4 pl-6" >
                              Try for FREE
                              <img src="/arrow_right.svg" className=" w-6 ml-5 "/>
                          </button>
                      </div>
                  </div>

                  <div className="mt-24">
                      <img src="/hero.png" className=" max-w-md "/>
                  </div>
              </div>

              <div className="flex ml-44 mt-60">
                  <div className="flex">
                      <div className="rounded-full">
                          <img src="/digital.svg" className=" w-12 "/>
                      </div>
                      <div className="ml-4">
                          <p className="text-white font-extrabold text-2xl">$30B</p>
                          <p className="text-white font-light text-sm">Digital Currency Exchanged</p>
                      </div>
                  </div>

                  <div className="flex ml-28">
                      <div className="rounded-full">
                          <img src="/investor.svg" className=" w-12 "/>
                      </div>
                      <div className="ml-4">
                          <p className="text-white font-extrabold text-2xl">$10M+</p>
                          <p className="text-white font-light text-sm">Trusted Wallets Investor</p>
                      </div>
                  </div>

                  <div className="flex ml-28">
                      <div className="rounded-full">
                          <img src="/countries.svg" className=" w-12 "/>
                      </div>
                      <div className="ml-4">
                          <p className="text-white font-extrabold text-2xl">$195</p>
                          <p className="text-white font-light text-sm">Countries Supported</p>
                      </div>
                  </div>
              </div>

              <div className=" flex ml-40">
                  <div>
                      <img src="/illustration2.png" className=" max-w-lg "/>
                  </div>

                  <div className="ml-28">
                      <img src="/top.svg" className=" max-w-lg "/>
                      <div className="">
                          <p className="text-white font-extrabold text-3xl">Why you should choose</p>
                          <p className="text-white font-extrabold text-3xl">US</p>
                          <div className="mt-5">
                              <p className="text-white font-light text-xs">Experience the next generation cryptocurrency </p>
                              <p className="text-white font-light text-xs mt-2">platform. No financial borders, extra fees, and fake </p>
                              <p className="text-white font-light text-xs mt-2">reviews.</p>
                          </div>
                          <button className="flex w-28 bg-buttonColor md:text-sm text-2xl text-white font-bold rounded-full h-10 pt-2 pl-4 mt-8" >
                              Learn More
                          </button>
                          
                      </div>
                      <img src="/bottom.svg" className=" max-w-lg "/>
                  </div> 
              </div>
              <div className=" flex w-full justify-center items-center pb-56">
                  <div>
                      <p className="text-white font-extrabold text-3xl">Check how much you can earn</p>
                      <p className="text-white font-light text-xs mt-8 ml-8">Let’s check your hash rate to see how much you will earn today, </p>
                      <p className="text-white font-light text-xs mt-2 ml-16">Exercitation veniam consequat sunt nostrud amet.</p>
                  </div>
              </div>
          </div>



          <div className="bg-gray-100 pt-20">
              <div className="bg-white ml-80 -mt-56 mr-80 rounded-xl flex">
                  <div>
                      <div className="ml-4 mt-4 flex">
                          <input
                              className=" bg-transparent mt-5 h-8 focus:outline-none focus:shadow-outline border-b border-gray-300 py-0 px-0 w-72 appearance-none leading-normal" type="email"
                              placeholder="Enter your hash rate"
                          />

                          <input
                              className=" bg-transparent ml-8 mt-5 h-8 focus:outline-none focus:shadow-outline border-b border-gray-300 py-0 px-0 w-36 appearance-none leading-normal" type="email"
                              placeholder="TH/s"
                          />

                          <button className="flex w-28 bg-buttonColor md:text-sm text-xl text-white font-normal rounded-full h-10 pt-3 pl-6 mt-2 ml-4 " >
                                  Calculate
                          </button>
                          
                      </div>

                      <div className="mt-24">
                          <p className="text-buttonColor font-bold text-sm mt-2 ml-4">ESTIMATED 24 HOUR REVENUE:</p>
                          <div className="flex">
                              <p className="text-black font-bold text-2xl mt-2 ml-4">0.055 130 59 ETH</p>
                              <p className="text-buttonColor font-bold text-2xl mt-2 ml-2">($1275)</p>
                          </div>
                          <p className="text-gray-300 font-light text-md mt-2 ml-4 mb-10">Revenue will change based on mining difficulty and Ethereum price.</p>
                          
                      </div>
                  </div>
                  

                  
              </div>

              <div className=" flex w-full justify-center items-center">
                  <div className="mt-28">
                      <p className="text-black font-extrabold text-3xl">Trade securely and market the high</p>
                      <p className="text-black font-extrabold text-3xl ml-16">growth cryptocurrencies.</p>
                  </div>
              </div>

              <div className="flex">
                  <div className="rounded-lg bg-bitCoin ml-44 mt-12">
                      <div className="">
                          <img src="/bitcoin.svg" className=" bg-yellow-300 max-w-lg ml-24 w-12 h-12 mt-3 mr-4 rounded-full"/>
                      </div>
                      <div className="flex ml-20 mt-5 mr-4">
                          <p className="text-white font-bold text-xl">Bitcoin</p>
                          <p className="text-gray-300 font-bold text-xs">BTC</p>
                      </div>
                      <p className="text-gray-300 font-normal text-xs ml-4 mr-8 mt-5">Digital currency in which a record of</p>
                      <p className="text-gray-300 font-normal text-xs ml-12 mr-8 ">transactions is maintained.</p>
                      <button className="flex w-36 bg-buttonColor md:text-sm text-xl text-white font-normal rounded-full h-11 ml-12 pt-3 pl-4 mt-8 mb-10" >
                          Start mining    
                          <img src="/arrow_right.svg" className=" w-6 ml-2 mr-4"/>
                          </button>
                  </div>

                  <div className="rounded-lg bg-white ml-12 mt-12">
                      <div className="mt-3 ml-6">
                          <img src="/ethereum.svg" className=" w-12 ml-20"/>
                      </div>
                      
                      <div className="flex ml-20 mt-6 mr-4">
                          <p className="text-black font-bold text-xl">Ethereum</p>
                          <p className="text-gray-300 font-bold text-xs">ETH</p>
                      </div>
                      <p className="text-gray-300 font-normal text-xs ml-4 mr-8 mt-5">Blockchain technology to create and run</p>
                      <p className="text-gray-300 font-normal text-xs mt-2 ml-12 mr-8">decentralized digital applications.</p>

                      <img src="/arrow_right.svg" className=" bg-gray-300 w-12 h-12 ml-24 mt-6 mr-4 rounded-full"/>
                  
                  </div>

                  <div className="rounded-lg bg-white ml-12 mt-12">
                      <div className="mt-3 ml-4">
                          <img src="/litecoin.svg" className=" w-12 ml-20"/>
                      </div>
                      
                      <div className="flex ml-20 mt-6 mr-4">
                          <p className="text-black font-bold text-xl">Litecoin</p>
                          <p className="text-gray-300 font-bold text-xs">LTC</p>
                      </div>
                      <p className="text-gray-300 font-normal text-xs ml-4 mr-8 mt-5">Cryptocurrency that enables instant</p>
                      <p className="text-gray-300 font-normal text-xs mt-2 ml-12 mr-8">payments to anyone in the world.</p>

                      <img src="/arrow_right.svg" className=" bg-gray-300 w-12 h-12 ml-24 mt-6 mr-4 rounded-full"/>
                  
                  </div>
              </div>

          </div>



          <div className="bg-bitCoin mt-12 pb-16">
              <div className="ml-96 pt-10">
                  <p className="text-white font-extrabold text-3xl">Market sentiments, portfolio, and run</p>
                  <p className="text-white font-extrabold text-3xl ml-8">the infrastructure of your choice</p>
              </div>

              <div className="flex">
                  <div className="mt-32 ml-40">
                      <p className="text-white font-extrabold text-2xl ml-4">Invest Smart</p>
                      <p className="text-gray-300 font-normal text-xs ml-4 mr-8 mt-5">Get full statistic information about the behaviour of </p>
                      <p className="text-gray-300 font-normal text-xs ml-4 mr-8 mt-1">buyers and sellers will help you to make the decision.</p>
                      <button className="flex w-28 bg-buttonColor md:text-sm text-2xl text-white font-bold rounded-full h-10 pt-2 pl-4 mt-8 ml-4" >
                          Learn More
                      </button>
                  </div>
                  <div className="mt-12 ml-20">
                      <img src="/invest_chart.png" className=" max-w-xl "/>
                  </div>
              </div>

              <div className="flex mt-20">
                  <div className="mt-12 ml-0">
                      <img src="/candle.png" className=" max-w-2xl "/>
                  </div>

                  <div className="mt-32 ml-20">
                      <p className="text-white font-extrabold text-2xl ml-4">Detailed Statistics</p>
                      <p className="text-gray-300 font-normal text-xs ml-4 mr-8 mt-5">View all mining related information in realtime, at any </p>
                      <p className="text-gray-300 font-normal text-xs ml-4 mr-8 mt-1">point at any location and decide which polls you want</p>
                      <p className="text-gray-300 font-normal text-xs ml-4 mr-8 mt-1">to mine in.</p>
                      <button className="flex w-28 bg-buttonColor md:text-sm text-2xl text-white font-bold rounded-full h-10 pt-2 pl-4 mt-8 ml-4" >
                          Learn More
                      </button>
                  </div>
              </div>

              <div className="flex">
                  <div className="mt-32 ml-40">
                      <p className="text-white font-extrabold text-2xl ml-4">Grow your profit and track </p>
                      <p className="text-white font-extrabold text-2xl ml-4">your investments </p>
                      <p className="text-gray-300 font-normal text-xs ml-4 mr-8 mt-5">Use advanced analytical tools. Clear TradingView</p>
                      <p className="text-gray-300 font-normal text-xs ml-4 mr-8 mt-1">charts let you track current and historical profit</p>
                      <p className="text-gray-300 font-normal text-xs ml-4 mr-8 mt-1">investments.</p>
                      <button className="flex w-28 bg-buttonColor md:text-sm text-2xl text-white font-bold rounded-full h-10 pt-2 pl-4 mt-8 ml-4" >
                          Learn More
                      </button>
                  </div>
                  <div className="mt-12 ml-20">
                      <img src="/track.png" className=" max-w-2xl "/>
                  </div>
              </div>

              <div className="bg-letterColor ml-40 mt-20 mr-12 rounded-xl flex">
              <div className="pt-4 pl-6 pb-8">
                  <p className="text-white font-extrabold text-2xl ml-4">Start mining now </p>
                  <p className="text-gray-300 font-normal text-xs ml-4 mt-3 mr-8">Join now with CRAPPO to get the latest news</p>
                  <p className="text-gray-300 font-normal text-xs ml-4 mr-8 mt-1">and start mining now</p>
              </div>

              <div className="ml-56 mt-4 flex">
                  <input
                      className=" bg-transparent mt-5 h-8 focus:outline-none focus:shadow-outline border-b border-gray-300 py-0 px-0 w-64 appearance-none leading-normal" type="email"
                      placeholder="Enter your email"
                  />

                  <button className="flex w-28 bg-white md:text-sm text-xl text-black font-bold rounded-full h-10 pt-2 pl-4 mt-6 ml-4 " >
                          Subscribe
                  </button>
              </div>
          </div>
          
          </div>
      
          <div className="bg-footerColor">
              <div className="flex">
                  <div className="flex mt-4">
                      <img src="/logo.png" className=" w-12 h-20 ml-12 pt-10"/>
                      <p className="text-lg font-normal ml-4 pt-12 text-white"> CRAPPO </p>
                  </div>

                  <div className="mt-16 ml-36">
                      <p className="text-white font-extrabold text-md ml-4">Quick Link </p>
                      <p className="text-gray-300 font-normal text-sm ml-4 mr-8 mt-1">Home</p>
                      <p className="text-gray-300 font-normal text-sm ml-4 mr-8 mt-1">Products</p>
                      <p className="text-gray-300 font-normal text-sm ml-4 mr-8 mt-1">About</p>
                      <p className="text-gray-300 font-normal text-sm ml-4 mr-8 mt-1">Features</p>
                      <p className="text-gray-300 font-normal text-sm ml-4 mr-8 mt-1">Contact</p>
                  </div>

                  <div className="mt-16 ml-36">
                      <p className="text-white font-extrabold text-md ml-4">Resources</p>
                      <p className="text-gray-300 font-normal text-sm ml-4 mr-8 mt-1">Download Whitepapper</p>
                      <p className="text-gray-300 font-normal text-sm ml-4 mr-8 mt-1">Smart Token</p>
                      <p className="text-gray-300 font-normal text-sm ml-4 mr-8 mt-1">Blockchain Explorer </p>
                      <p className="text-gray-300 font-normal text-sm ml-4 mr-8 mt-1">Crypto API</p>
                      <p className="text-gray-300 font-normal text-sm ml-4 mr-8 mt-1">Interest</p>
                  </div>

                  <div className="mt-16 ml-36">
                      <p className="text-white font-bold text-2xl ml-4">We accept following</p>
                      <p className="text-white font-bold text-2xl ml-4 mt-2">payment systems</p>
                      <div className="flex mt-12 ml-4">
                          <div className="bg-gray-100 bg-opacity-5 w-16 h-10 rounded">
                              <img src="/visa.png" className="pt-3 pl-2 w-12"/>
                          </div>
                          <div className="bg-gray-100 bg-opacity-5 w-16 h-10 ml-4 rounded">
                              <img src="/mastercard.png" className="pt-1 pl-2 w-12"/>
                          </div>
                          <div className="bg-gray-100 bg-opacity-5 w-16 h-10 ml-4 rounded">
                              <img src="/logos_bitcoin.png" className="pt-2 pl-3 h-8 w-10"/>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="flex ml-12 mt-36 pb-8">
                  <p className="text-gray-300 font-normal text-xs ml-4 mr-8 mt-2">©2021 CRAPPO. All rights reserved</p>
                  <div className="flex absolute right-24">
                      <img src="/facebook.svg" className="pt-2 pl-3 h-7 w-10 "/>
                      <img src="/instagram.svg" className="pt-2 pl-3 h-7 w-10"/>
                      <img src="/youtube.svg" className="pt-2 pl-3 h-7 w-10"/>
                      <img src="/twitter.svg" className="pt-2 pl-3 h-7 w-10"/>
                      <img src="/linkedin.svg" className="pt-2 pl-3 h-7 w-10"/>
                  </div>
                  
              </div>

          </div>
        </div>
    </body>
  )
}

export default index
