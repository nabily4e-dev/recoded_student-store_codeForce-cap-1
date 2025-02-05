import Image from "next/image"
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs"

import styles from "./Signin.module.css"

import Button from "../button"
import Input from "../input"
function Signin() {
  return (
    <>
      <div className={`flex justify-center  md:flex-row  bg-[#f1f6fa] `}>
        <div className={` ${styles.handbox_background}   w-3/5 `}>
          <div className=' p-20 '>
            <Image
              src='/images/hands_box.png'
              alt='handbox'
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className='container m-auto flex w-5/6 flex-col items-center'>
          <h1 className='my-2 py-6 text-4xl font-semibold text-[#FF8A57] md:my-3 md:text-5xl'>
            Sign-in
          </h1>
          <form className='container m-auto mb-6 flex w-5/6 flex-col items-center'>
            <Input
              type='text'
              name='firstName'
              placeholder='Name'
              className='lg:w-96 md:w-72'
            />
            <Input
              type='text'
              name='surname'
              placeholder='Surname'
              className='lg:w-96 md:w-64'
            />
            <div className='my-4 gap-1 flex-row flex lg:justify-center'>
              <Button className='orangeSignIn' text='Sign in' />
              <Button className='forgotPassword' text='forgotPassword ' />
            </div>
          </form>
          <div className='flex items-center'>
            <div className='my-1 mr-2 h-px mt-[10px] w-[164px] bg-[#9dafbd]'></div>
            <p>Or</p>
            <div className='my-1 mr-2 h-px mt-[10px] w-[164px] bg-[#9dafbd]'></div>
          </div>
          <p className='text-md m-1 text-[#647581]'>Sign-up-with</p>
          <div className='m-1 mb-8 flex flex-row  '>
            <button className=' m-1 flex items-center rounded-3xl border border-[#F26F6F] p-1  text-[#F26F6F]'>
              <BsGoogle color='#F26F6F' size={24} style={{ padding: "1px" }} />
              <p className='mx-2 text-sm md:mx-3'>Google</p>
            </button>
            <button className='color-darkPurple m-1  flex items-center rounded-3xl border border-[#485DCF] p-1 text-[#485DCF]'>
              <BsFacebook
                color='#485DCF'
                size={24}
                style={{ padding: "1px" }}
              />
              <p className='mx-2 text-sm md:mx-3'>Facebook</p>
            </button>
            <button className=' m-1 flex justify-around rounded-3xl border border-[#28C7FA]  p-1 text-[#28C7FA] '>
              <BsTwitter color='#28C7FA' size={24} style={{ padding: "1px" }} />
              <p className='mx-2 text-sm md:mx-3'>Twitter</p>
            </button>
          </div>
          <div className='mb-4 text-xl text-[#647581]'>
            <p>Don’t have an account??</p>
          </div>
          <Button className='orangeSignIn ' text='Sign-up' />
        </div>
      </div>
    </>
  )
}

export default Signin
