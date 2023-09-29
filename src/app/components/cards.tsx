"use client";
import Image from "next/image.js";
import React, { MouseEvent, useState } from "react";

export default function Cards() {
  const [card, setCard] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [drawer, setDrawer] = useState({address: false, region: false, state: false});
  const [form, setForm] = useState({contact: "", address: "", region: "", state: "", first: "", last: "", city: "", 
  zip: "", ship: "free", card: "", expiration: "", code: "", code1: "", name: "", payment: "card"})

  const [pay, setPay] = useState(false)
  const [loading, setLoading] = useState(false)

  const onLoad = () =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
      setPay(true)
    }, 1000)
  }
  

  return (
    <div className="body">
      <div className={(checkout ? "hidden" : "card-content")+" relative h-[80vh]"}>
        <div className="flex justify-between font-sans">
          <div>
            <span>Shop</span>
          </div>
          <div className="flex gap-8 font-[700]">
            <span>Shop</span>
            <span>About</span>
            <span>Contact</span>
            <span>Cart</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-12">
          <div className="w-full rounded-xl border">
            <Image
              src={"/images/mini-12_Feature_Selfie-Mode.png"}
              width={400}
              height={320}
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-2 relative p-2">
            <span className="text-2xl font-semibold">Polaroid Instax 12</span>
            <span className="text-[1.5rem]">Instax 12 - 2022</span>
            <div className="text-[0.7rem] pt-4 gap-1 flex flex-col">
              <span>Quantité</span>
              <div className="border max-w-max p-2 flex justify-around rounded-sm">
                <span className="">-</span>
                <span className="px-6">1</span>
                <span>+</span>
              </div>
            </div>
            <span className="text-[1rem] pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </span>
            <div
              onClick={() => setCard(true)}
              className="button-add absolute bottom-0 py-3 border-2 border-black rounded-full w-[94%] text-center font-semibold cursor-pointer"
            >
              Add to cart
            </div>
          </div>
        </div>
        <div
          className={
            (card ? "added-to-cart" : "hidden") +
            " flex-col gap-8 absolute w-1/2 bg-white"
          }
        >
          <div className="flex justify-between">
            <div className="flex gap-3 text-sm font-semibold">
              <span>
                <Image
                  src={"/images/check.svg"}
                  width={20}
                  height={20}
                  alt="check"
                />
              </span>
              <span>Added to cart</span>
            </div>
            <span onClick={()=>setCard(false)} className="cursor-pointer">
              <Image
                src={"/images/cancel.svg"}
                width={20}
                height={20}
                alt="cancel"
              />
            </span>
          </div>
          <div className="flex gap-4">
            <div className="rounded-xl border w-1/3 bg-[url('/images/mini-12_Feature_Selfie-Mode.png')] bg-no-repeat bg-center bg-cover"></div>
            <div className="flex flex-col w-2/3 p-3 pt-[0.25rem] gap-2">
              <span className="text-[1.5rem] font-semibold">
                Polaroid Instax 12
              </span>
              <span className="text-[0.9rem]">Instax 12 - 2022</span>
              <span className="text-[0.8rem] pt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </span>
            </div>
          </div>
          <div onClick={()=>{setCheckout(true); setCard(false)}} className="button-checkout py-3 border-2 border-black bg-black text-white rounded-full w-[95%] text-center font-semibold cursor-pointer">
            Checkout
          </div>
        </div>
      </div>

      {!loading &&<div className={(checkout ? "card-content-2" : "hidden")+" relative h-[80vh]"}>
        <div className={(checkout ? !pay ? "title-checkout" : "flex" : "hidden")+" justify-between font-sans p-[2rem]"}>
          <div>
            <span>Shop</span>
          </div>
          {!pay && <div className="flex gap-8 font-[700]">
            <span>Cart</span>
          </div>}
        </div>
        <div className={checkout ? !pay ?"content-checkout" : "flex" : "hidden"}>
            {!pay ? <div className="content-checkout-1 flex flex-col w-[60%] p-[2rem] text-[0.8rem] gap-3 scroll-m-0">
                <span className="flex self-center text-[#b2b2b2]">Express chackout</span>
                <div className="flex justify-between w-full gap-2">
                    <span className="bg-[#4628c2] rounded-md text-white text-[0.9rem] font-medium w-1/3 text-center flex items-center justify-center">shop 
                      <span className="bg-white text-[#4628c2] text-[0.6rem] py-[0.02rem] px-[0.1rem] rounded-sm">Pay</span> 
                    </span>
                    <span className="flex w-1/3 h-[2.5rem] bg-[#f4c557] rounded-md justify-center">
                        <Image
                            src={"/images/paypal-svgrepo-com.svg"}
                            width={15}
                            height={20}
                            alt="cancel"
                        />
                        <Image
                            src={"/images/paypal.svg"}
                            width={45}
                            height={50}
                            alt="cancel"
                        />
                    </span>
                    <span className="bg-black w-1/3 rounded-md flex justify-center">
                        <Image
                            src={"/images/apple-pay-svgrepo-com.svg"}
                            width={30}
                            height={20}
                            alt="cancel"
                        />
                    </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <span className="flex gap-2 text-[#216898]">Show more options 
                        <Image
                            src={"/images/down-chevron-svgrepo-com.svg"}
                            width={15}
                            height={20}
                            alt="cancel"
                        />
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <hr className="w-1/2"/> OR <hr className="w-1/2" />
                </div>
                <div className="flex flex-col gap-[0.35rem] pt-2">
                  <div className="flex justify-between">
                    <label htmlFor="contact" className="text-lg font-bold">Contact</label>
                    <span className="underline text-[#216898] text-[0.6rem]">Log in to your account</span>
                  </div> 
                  <div className="relative">
                    <input type="text" onChange={(e)=>setForm({...form, contact: e.target.value})} name="contact" className="relative border-2 focus:outline-none w-full p-3 pl-2 pt-[0.8rem] rounded"/>
                    <span className={form.contact ? "select-span-hover" : "select-span"} >Email address or phone number</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-[0.8rem]">
                    <input type="checkbox" defaultChecked/>
                    <span>Sign me up for news and offers</span>
                  </div>
                </div>
                <div className="pt-4 flex flex-col gap-2">
                  <span className="font-bold text-lg">Delivery</span>
                  <div className="relative">
                    <input value={form.region} className="focus:outline-none w-full border-2 p-3 pl-2 pt-[0.8rem] rounded" type="text" onChange={(e)=>setForm({...form, region: e.target.value})} onFocus={()=>{setDrawer({...drawer, region: true})}} /* onBlur={()=>{setDrawer({...drawer, region: false})}} */ />
                    <span className={form.region ? "select-span-hover" : "select-span"}>Country/Region</span>
                    <Image
                      onClick={() => setDrawer({...drawer, region: !drawer.region})}
                          className="absolute top-[1rem] right-3 cursor-pointer"
                          src={"/images/arrow-down.svg"}
                          width={10}
                          height={20}
                          alt="cancel"
                        />
                    {/* <select onChange={(e)=>setForm({...form, region: e.target.value})} name="country" id="" className="w-full border p-2 pt-[0.8rem] active:border-gray-100 focus:outline-none rounded-sm gap-2 pl-1">
                      <option value=""></option>
                      <option value="usa">United Stated</option>
                      <option value="usa"></option>
                    </select> */}
                    <div className={(drawer.region ? "drawer-anim-appear z-10" : "drawer-anim-disappear")+" gap-2 p-2 border text-[0.7rem] rounded absolute w-full bg-white top-[2.6rem]"}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[#b2b2b2] uppercase">Suggestions</span>
                        <Image
                          onClick={() => setDrawer({...drawer, region: false})}
                          className="cursor-pointer"
                          src={"/images/cancel.svg"}
                          width={15}
                          height={20}
                          alt="cancel"
                        />
                      </div>
                      <div onClick={()=>{setForm({...form, region: "United Stated"}); setDrawer({...drawer, region: false})}} className={(drawer.region ? "cursor-pointer" : "")+" hover:bg-gray-100 p-1"}>United Stated</div>
                      <div onClick={()=>{setForm({...form, region: "Cameroon"}); setDrawer({...drawer, region: false})}} className={(drawer.region ? "cursor-pointer" : "")+" hover:bg-gray-100 p-1"}>Cameroon</div>
                    </div>
                  </div>
                  
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col w-1/2 relative">
                    <input type="text" onChange={(e)=>setForm({...form, first: e.target.value})} className="relative focus:outline-none w-full border-2 p-3 pl-2 pt-[0.8rem] rounded"/>
                    <span className={form.first ? "select-span-hover" : "select-span"}>First name (optional)</span>
                  </div>
                  <div className="flex flex-col w-1/2 relative">
                    <input type="text" onChange={(e)=>setForm({...form, last: e.target.value})} className="relative focus:outline-none w-full border-2 p-3 pl-2 pt-[0.8rem] rounded"/>
                    <span className={form.last ? "select-span-hover" : "select-span"}>Last name</span>
                  </div>
                </div>
                <div className="flex gap-2 flex-col relative">
                  <input value={form.address} onChange={(e)=>setForm({...form, address: e.target.value})} onFocus={()=>{setDrawer({...drawer, address: true})}} /* onBlur={()=>{setDrawer({...drawer, address: false})}} */ type="text" className="relative focus:outline-none w-full border-2 p-3 pl-2 pt-[0.8rem] rounded"/>
                  <span className={form.address ? "select-span-hover" : "select-span"}>Address</span>
                  <div className={(drawer.address ? "drawer-anim-appear" : "drawer-anim-disappear")+" p-2 border text-[0.7rem] rounded absolute w-full bg-white top-[2.6rem] z-10"}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[#b2b2b2] uppercase">Suggestions</span>
                      <Image
                        className="cursor-pointer"
                        src={"/images/cancel.svg"}
                        onClick={()=>setDrawer({...drawer, address: false})}
                        width={15}
                        height={20}
                        alt="cancel"
                      />
                    </div>
                    <span className="hover:bg-gray-100 p-1 cursor-pointer" onClick={()=>{setForm({...form, address: 'Address 1'}); setDrawer({...drawer, address: false})}}>Address 1</span>
                    <span className="hover:bg-gray-100 p-1 cursor-pointer" onClick={()=>{setForm({...form, address: 'Address 2'}); setDrawer({...drawer, address: false})}}>Address 2</span>
                    <span className="hover:bg-gray-100 p-1 cursor-pointer" onClick={()=>{setForm({...form, address: 'Address 3'}); setDrawer({...drawer, address: false})}}>Address 3</span>
                    <span className="hover:bg-gray-100 p-1 cursor-pointer" onClick={()=>{setForm({...form, address: 'Address 4'}); setDrawer({...drawer, address: false})}}>Address 4</span>
                  </div>
                </div>
                <div className="flex text-[#216898] gap-2 text-[0.65rem]">
                  <span>+</span>
                  <span>Add apartment, suite, etc.</span>
                </div>
                <div className="flex gap-2 relative">
                  <input type="text" onChange={(e)=>setForm({...form, city: e.target.value})} className="focus:outline-none w-full border-2 p-3 pl-2 pt-[0.8rem] rounded"/>
                  <span className={form.city ? "select-span-hover" : "select-span"}>City</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-1/2 relative">
                    <input value={form.state} className="focus:outline-none w-full border-2 p-3 pl-2 pt-[0.8rem] rounded" type="text" onChange={(e)=>setForm({...form, state: e.target.value})} onFocus={()=>{setDrawer({...drawer, state: true})}} />
                    <span className={form.state ? "select-span-hover" : "select-span"}>State</span>
                    <Image
                      onClick={() => setDrawer({...drawer, state: !drawer.state})}
                          className="absolute top-[1rem] right-3 cursor-pointer"
                          src={"/images/arrow-down.svg"}
                          width={10}
                          height={20}
                          alt="cancel"
                        />
                    <div className={(drawer.state ? "drawer-anim-appear" : "drawer-anim-disappear")+" gap-2 p-2 border text-[0.7rem] rounded absolute w-full bg-white top-[2.6rem] z-10"}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[#b2b2b2] uppercase">Suggestions</span>
                        <Image
                          onClick={() => setDrawer({...drawer, state: false})}
                          className="cursor-pointer"
                          src={"/images/cancel.svg"}
                          width={15}
                          height={20}
                          alt="cancel"
                        />
                      </div>
                      <div onClick={()=>{setForm({...form, state: "United Stated"}); setDrawer({...drawer, state: false})}} className={drawer.state ? "hover:bg-gray-100 p-1 cursor-pointer" : ""}>United Stated</div>
                      <div onClick={()=>{setForm({...form, state: "Cameroon"}); setDrawer({...drawer, state: false})}} className={drawer.state ? "hover:bg-gray-100 p-1 cursor-pointer" : ""}>Cameroon</div>
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <input onChange={(e)=>setForm({...form, zip: e.target.value})} type="text" className="relative focus:outline-none w-full border-2 p-3 pl-2 pt-[0.8rem] rounded"/>
                    <span className={form.zip ? "select-span-hover" : "select-span"}>ZIP</span>
                  </div>
                </div>
                <span className="font-bold text-lg pt-4">Shipping method</span>
                <div className="rounded-md">
                  <div onClick={()=>setForm({...form, ship: "free"})} className={(form.ship === "free" ? "border-[#216898] bg-[#c9e3f7]" : "")+" cursor-pointer flex gap-2 text-[1rem] rounded-md border-gray-200 hover:border-[#216898] justify-between border-2 p-4"}>
                    <div className="flex gap-3 items-start">
                      <input type="radio" name="shipping" value="free" checked={form.ship === "free" ? true : false}/>
                      <div className="flex flex-col">
                        <span className="font-semibold">Standard</span>
                        <span className="font-light text-[0.8rem]">4 to 5 business days</span>
                      </div>
                    </div>
                    <span className="font-semibold">Free</span>
                  </div>
                  <div onClick={()=>setForm({...form, ship: "expeded"})} className={(form.ship === "expeded" ? "border-[#216898] bg-[#c9e3f7]" : "")+" cursor-pointer flex gap-2 text-[1rem] border-2 border-gray-200 hover:border-[#216898] hover:bg-[#c9e3f7] justify-between rounded-md p-4"}>
                    <div className="flex gap-3 items-start">
                      <input type="radio" name="shipping" value="expeded" checked={form.ship === "expeded" ? true : false}/>
                      <div className="flex flex-col">
                        <span className="font-semibold">Expeded</span>
                        <span className="font-light text-[0.8rem]">2 to 3 business days</span>
                      </div>
                    </div>
                    <span className="font-semibold">$10.00</span>
                  </div>
                </div>
                <span className="font-bold text-lg pt-4">Payment</span>
                <div className="bg-[#f3f4f6] rounded-md border">
                  <div onClick={()=>setForm({...form, payment: "card"})} className={(form.payment === "card" ? "border-[#216898] bg-[#c9e3f7]" : "")+" flex p-3 border-2 rounded justify-between items-center cursor-pointer"}>
                      <div className="flex gap-2 text-[1rem]">
                        <input name="credit-radio" className="cursor-pointer" type="radio" value={"card"} checked={form.payment === "card" ? true : false}/>
                        <span className="font-semibold">Credit or debit card</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="flex px-1 py-[0.06rem] rounded bg-white">
                          <Image
                              className="cursor-pointer"
                              src={"/images/visa-svgrepo-com.svg"}
                              width={30}
                              height={20}
                              alt="cancel"
                            />
                        </span>
                        <span className="flex px-[0.3rem] py-[0.06rem] rounded bg-white">
                          <Image
                              className="cursor-pointer"
                              src={"/images/mastercard-svgrepo-com.svg"}
                              width={30}
                              height={20}
                              alt="cancel"
                            />
                        </span>
                      </div>
                      
                  </div>
                  <div className={(form.payment === "card" ? "drawer-anim-appear p-3 gap-2" : "hidden")}>
                    <div className="flex flex-col relative">
                      <input type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" onChange={(e)=>setForm({...form, card: e.target.value})} className="relative bg-white focus:outline-none w-full border-2 p-3 pl-2 pt-[0.8rem] rounded"/>
                      <span className={form.card ? "select-span-hover" : "select-span"}>Card number</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex relative w-1/2">
                        <input type="tel" onChange={(e)=>setForm({...form, expiration: e.target.value})} className="relative bg-white focus:outline-none w-full border-2 p-3 pl-2 pt-[0.8rem] rounded"/>
                        <span className={form.expiration ? "select-span-hover" : "select-span"}>Expiration date (MM/YY)</span>
                      </div>
                      <div className="flex relative w-1/2">
                        <input type="number" inputMode="numeric" pattern="[0-9\s]{4}" onChange={(e)=>setForm({...form, code: e.target.value})} className="relative bg-white focus:outline-none w-full border-2 p-3 pl-2 pt-[0.8rem] rounded"/>
                        <span className={form.code ? "select-span-hover" : "select-span"}>Security code</span>
                      </div>
                    </div>
                    <div className="flex flex-col relative">
                      <input type="text" onChange={(e)=>setForm({...form, name: e.target.value})} className="relative bg-white focus:outline-none w-full border-2 p-3 pl-2 pt-[0.8rem] rounded"/>
                      <span className={form.name ? "select-span-hover" : "select-span"}>Name on card</span>
                    </div>
                    <div className="flex items-center gap-2 font-bold text-[0.8rem]">
                      <input type="checkbox" defaultChecked/>
                      <span>Use shipping address as billing address</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f3f4f6] rounded-md border -mt-3">
                  <div onClick={()=>setForm({...form, payment: "paypal"})} className={(form.payment === "paypal" ? "border-[#216898] bg-[#c9e3f7]" : "")+" flex px-3 border rounded justify-between items-center cursor-pointer"}>
                      <div className="flex gap-2 text-[1rem]">
                        <input name="credit-radio" type="radio" className="cursor-pointer" checked={form.payment === "paypal" ? true : false}/>
                        <span className="font-semibold">Paypal</span>
                      </div>
                      <div className="flex gap-1 items-center">
                      <Image
                              onClick={() => setDrawer({...drawer, state: false})}
                              className="cursor-pointer"
                              src={"/images/paypal-svgrepo-com.svg"}
                              width={20}
                              height={20}
                              alt="cancel"
                            />
                            <Image
                              onClick={() => setDrawer({...drawer, state: false})}
                              className="cursor-pointer"
                              src={"/images/paypal.svg"}
                              width={60}
                              height={20}
                              alt="cancel"
                            />
                      </div>
                      
                  </div>
                </div>
                <button onClick={onLoad} className="button-add my-4 w-full bg-[#115a89] font-semibold 
                text-white text-lg rounded p-2 border-2 border-[#062b44] font-sans">Pay now</button>
            </div> :
            <div className="content-checkout-1 flex flex-col w-[60%] p-[2rem] gap-3 scroll-m-0">
              <div className="flex gap-2">
                <span className="flex p-4 border-2 rounded-full">
                  <Image
                    src={"/images/check.svg"}
                    width={20}
                    height={20}
                    alt="check"
                  />
                </span>
                <div className="flex flex-col">
                  <span className="text-[0.9rem]">Confirmation #DOF02565GER</span>
                  <span className="font-bold text-[1.2rem]">Thank you, Helen!</span>
                </div>
              </div>
              <div>
              <iframe className="w-full h-[28vh] rounded-lg border-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.8706833898705!2d11.487598774802754!3d3.837924648533038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfd00385d753%3A0x214718a324cb4d64!2sNsimeyong!5e0!3m2!1sfr!2scm!4v1695907680649!5m2!1sfr!2scm" 
                 loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[1.2rem]">Your order is confirmed</span>
                <span className="text-[0.9rem]">You'll get a confirmation email with your order number soon. <br /> Track your order using the shop app. </span>
              </div>
              <button className="mt-2 w-1/2 border-2 p-2 font-bold text-[0.9rem] rounded-md text-[#115a89]">Download Shop to track package</button>
            </div>
            }
            <div className="rigth-side flex flex-col gap-5 w-[40%] bg-gray-100 p-[2rem] rounded-br-[1rem]">
                <div className="flex justify-between gap-3 items-center">
                    <div className="rounded-lg relative bg-white">
                        <Image
                            src={"/images/mini-12_Feature_Selfie-Mode.png"}
                            width={300}
                            height={300}
                            alt="image"
                        />
                        <span className="absolute -top-2 -right-[0.4rem] rounded-full bg-black w-4 h-4 flex items-center justify-center text-white text-[6px]">1</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[0.9rem] font-semibold">
                            Polaroid Instax 12
                        </span>
                        <span className="text-[0.68rem]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s.
                        </span>
                    </div>
                    
                    <span className="text-[0.7rem] font-semibold">$25.00</span>
                </div>
                <div className="flex gap-3 w-full">
                    <input className="text-[0.7rem] focus:outline-none p-2 border-2 rounded-[0.2rem] w-[85%]" type="text" placeholder="Discount code or gift card." />
                    <button className="py-2 px-3 text-white text-[0.7rem] bg-[#b2b2b2] rounded-[0.2rem]">Apply</button>
                </div>
                <div className="flex flex-col gap-2 text-[0.9rem] font-medium">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>$25.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="flex gap-1 items-center">Extimated taxes <span className="bg-black text-white rounded-full text-[0.5rem] flex items-center justify-center w-3 h-3 cursor-pointer">?</span></span>
                        <span>$2.40</span>
                    </div>
                    <div className="flex justify-between text-[0.9rem] font-bold">
                        <span>Total</span>
                        <span className="flex items-start gap-1">
                            <span className="text-[0.7rem] text-[#b2b2b2]">USD</span> $27.40</span>
                    </div>
                </div>
            </div>
        </div>
      </div>}

      {loading && <div className="relative card-content flex justify-center items-center h-[80vh] bg-white">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="loader w-[4rem] h-[4rem] border-4 border-[#115a89] rounded-full">
          </span>
          Your order's being processed.
        </div>
      </div>}
    </div>
  );
}
