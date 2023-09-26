"use client";
import Image from "next/image.js";
import { useState } from "react";

export default function Cards() {
  const [card, setCard] = useState(false);
  return (
    <div className="body">
      {/* <div className="card-content relative h-[60vh]">
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
              width={320}
              height={320}
              alt="image"
            />
          </div>
          <div className="flex flex-col gap-2 relative p-2">
            <span className="text-2xl font-semibold">Polaroid Instax 12</span>
            <span className="text-md">Instax 12 - 2022</span>
            <div className="text-[0.55rem] pt-4 gap-1 flex flex-col">
              <span>Quantité</span>
              <div className="border max-w-max p-2 flex justify-around rounded-sm">
                <span className="">-</span>
                <span className="px-6">1</span>
                <span>+</span>
              </div>
            </div>
            <span className="text-sm pt-2">
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
            " flex-col gap-6 absolute w-1/2 bg-white"
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
            <span>
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
            <div className="flex flex-col w-2/3 p-2 pt-[0.25rem]">
              <span className="text-[0.9rem] font-semibold">
                Polaroid Instax 12
              </span>
              <span className="text-[0.7rem]">Instax 12 - 2022</span>
              <span className="text-[0.6rem] pt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </span>
            </div>
          </div>
          <div className="button-checkout py-3 border-2 border-black bg-black text-white rounded-full w-[95%] text-center font-semibold cursor-pointer">
            Checkout
          </div>
        </div>
      </div> */}

      <div className="card-content-2 relative h-[60vh]">
        <div className="flex justify-between font-sans p-[2rem]">
          <div>
            <span>Shop</span>
          </div>
          <div className="flex gap-8 font-[700]">
            <span>Cart</span>
          </div>
        </div>
        <div className="flex">
            <div className="flex flex-col w-[60%] p-[2rem] text-[0.7rem] gap-2">
                <span className="flex self-center text-[#b2b2b2]">Express chackout</span>
                <div className="flex justify-between w-full gap-2">
                    <span className="bg-[#4628c2] rounded-sm text-white font-medium w-1/3 text-center flex items-center justify-center">shop 
                    <span className="bg-white text-[#4628c2] text-[0.5rem] py-[0.02rem] px-[0.1rem] rounded-sm">Pay</span> </span>
                    <span className="flex w-1/3 h-[2rem] bg-[#f4c557] rounded-sm justify-center">
                        <Image
                            src={"/images/paypal-svgrepo-com.svg"}
                            width={10}
                            height={20}
                            alt="cancel"
                        />
                        <Image
                            src={"/images/paypal.svg"}
                            width={40}
                            height={50}
                            alt="cancel"
                        />
                    </span>
                    <span className="bg-black w-1/3 rounded-sm flex justify-center">
                        <Image
                            src={"/images/apple-pay-svgrepo-com.svg"}
                            width={20}
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
                <div className="flex items-center gap-2">
                    <hr className="w-1/2"/> OR <hr className="w-1/2" />
                </div>
            </div>
            <div className="rigth-side flex flex-col gap-5 w-[40%] bg-gray-100 p-[2rem] rounded-br-[1rem]">
                <div className="flex justify-between gap-3 items-center">
                    <div className="rounded-lg relative bg-white">
                        <Image
                            src={"/images/mini-12_Feature_Selfie-Mode.png"}
                            width={250}
                            height={250}
                            alt="image"
                        />
                        <span className="absolute -top-2 -right-[0.4rem] rounded-full bg-black w-3 h-3 flex items-center justify-center text-white text-[6px]">1</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[0.6rem] font-semibold">
                            Polaroid Instax 12
                        </span>
                        <span className="text-[0.5rem]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s.
                        </span>
                    </div>
                    
                    <span className="text-[0.6rem] font-semibold">$25.00</span>
                </div>
                <div className="flex gap-3 w-full">
                    <input className="text-[0.6rem] p-2 border-2 rounded-[0.2rem] w-[80%]" type="text" placeholder="Discount code or gift card." />
                    <button className="py-2 px-3 text-white text-[0.65rem] bg-[#b2b2b2] rounded-[0.2rem]">Apply</button>
                </div>
                <div className="flex flex-col gap-2 text-[0.6rem] font-medium">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>$25.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="flex gap-1 items-center">Extimated taxes <span className="bg-black text-white rounded-full text-[0.4rem] flex items-center justify-center w-2 h-2">?</span></span>
                        <span>$2.40</span>
                    </div>
                    <div className="flex justify-between text-[0.7rem] font-bold">
                        <span>Total</span>
                        <span className="flex items-start gap-1">
                            <span className="text-[0.5rem] text-[#b2b2b2]">USD</span> $27.40</span>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}
