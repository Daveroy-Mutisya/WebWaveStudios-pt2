import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from './ui/button'
import Image from 'next/image'
import box from "../../public/box.png"
import facebook from "../../public/facebook.png"
import instagram from "../../public/instagram.png"
import gmail from "../../public/gmail.png"
import tel from "../../public/tel.png"
import arrow from "../../public/arrow.png"
import Link from "next/link";




const ContactDrawer = () => {
  return (
    <>
      <div>
        <Drawer>
          <DrawerTrigger>
            < Button >
            Contact Info
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>How to reach us</DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4">
                <DrawerDescription>
                  <p className="leading-7 [&:not(:first-child)]:mt-6 text-xl">
                    We operate from Golf Course Phase I, Off Mucai Drive, Suite No. 203.
                    The office is dedicated to support the work area, client contact work center and display samples of design concepts, products, and past work that facilitate green works.
                  </p>
                </DrawerDescription>
              </div>
              <div className="md:w-1/2 p-2">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Social Spaces
                </h3>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                  <li className="flex items-center text-xl">
                    <Image src={gmail} width={50} height={50} alt="Gmail" className="mr-2"/>
                    Gmail: info@jawabuinteriors.co.ke
                  </li>
                  <li className="flex items-center text-xl">
                    < Link href="">
                    <Image src={facebook} width={50} height={50} alt="Facebook" className="mr-2"/>
                    Facebook: Jawabu Interiors Ltd. 
                    </Link>
                  </li>
                  <li className="flex items-center text-xl">
                    <Link href="https://www.instagram.com/jawabuinteriorsltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <Image src={instagram} width={50} height={50} alt="Instagram" className="mr-2"/>
                    Instagram:jawabuinteriorsltd
                    </Link>
                  </li>
                  <li className="flex items-center text-xl">
                    <Image src={tel} width={50} height={50} alt="Telephone" className="mr-2"/>
                    Tel: 0114938574, 0791497172
                  </li>
                  <li className="flex items-center text-xl">
                    <Image src={box} width={50} height={50} alt="P.O. Box" className="mr-2"/>
                    P.O. BOX 100445 - 00101
                  </li>
                </ul>
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}

export default ContactDrawer