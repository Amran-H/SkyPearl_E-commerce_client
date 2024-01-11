import React, { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { IoIosCall } from 'react-icons/io'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { AiFillGithub, AiFillHeart, AiFillShopping, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn, FaList, FaLock, FaUser } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const Headers = () => {

    const { pathname } = useLocation();
    const [showSidebar, setShowSidebar] = useState(true);
    const [categoryShow, setCategoryShow] = useState(true);
    const user = true;
    const wishList = 4;
    const categories = [
        'Clothing',
        'Sports',
        'Phones',
        'Laptops',
        'Monitors',
        'Tablets',
        'Bags'
    ];
    const [searchValue, setSearchValue] = useState("");
    const [category, setCategory] = useState("");

    return (
        <div className='w-full bg-white'>

            {/* header very top */}
            <div className='bg-[#eeeeee] md-lg:hidden'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='flex w-full justify-between items-center h-[50px] text-slate-500'>
                        <ul className='flex justify-start items-center gap-8'>
                            <li className='flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px]'>
                                <span><GrMail /></span>
                                <span>amran.h.akash@gmail.com</span>
                            </li>
                            <span>SkyPearl E-commerce</span>
                        </ul>
                        <div>
                            <div className='flex justify-center items-center gap-10'>
                                <div className='flex justify-center items-center gap-4'>
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><AiOutlineTwitter /></a>
                                    <a href="#"><FaLinkedinIn /></a>
                                    <a href="#"><AiFillGithub /></a>
                                </div>
                                <div className='flex cursor-pointer group text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute  before:absolute before:h-[18px] before:w-[1px] before:bg-[#afafaf] before:-left-[20px]'>
                                    <img src="http://localhost:3000/images/language.png" alt="" />
                                    <span><MdOutlineKeyboardArrowDown /></span>
                                    <ul className='absolute invisible transition-all top-12 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:to-6 group-hover:bg-black'>
                                        <li>Bengali</li>
                                        <li>English</li>
                                    </ul>
                                </div>
                                {
                                    user
                                        ?
                                        <Link className='flex justify-center items-center gap-2 text-sm' to='/dashboard'>
                                            <span><FaUser /></span>
                                            <span>Amran Hossain</span>
                                        </Link>
                                        :
                                        <div className='flex justify-center items-center gap-2 text-sm'>
                                            <span><FaLock /></span>
                                            <span>Login</span>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* header very top end*/}

            <div className='bg-white'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='h-[80px] md-lg:h[100px] flex justify-between items-center flex-wrap'>
                        <div className='md-lg:w-full w-3/12 md-lg:pt-4'>
                            <div className=' flex justify-between items-center'>
                                <Link>
                                    <h1 className='text-4xl font-bold'>SkyPearl</h1>
                                </Link>
                                <div className=' justify-center items-center w-[30px] h-[30px] text-slate-600 bg-white border border-slate-600 rounded-sm cursor-pointer lg:hidden md-lg:flex xl-hidden hidden' onClick={() => setShowSidebar(false)}>
                                    <span><FaList /></span>
                                </div>
                            </div>
                        </div>

                        <div className='md-lg:w-full w-9/12'>
                            <div className='flex justify-between items-center md-lg:justify-center flex-wrap pl-8'>
                                <ul className='flex justify-start items-center gap-8 text-sm font-bold uppercase md-lg:hidden'>
                                    <li>
                                        <Link className={`p-2 block ${pathname === '/' ? 'text-[#3d3dd1]' : 'text-slate-600'}`}>Home</Link>
                                    </li>
                                    <li>
                                        <Link className={`p-2 block ${pathname === '/shop' ? 'text-[#3d3dd1]' : 'text-slate-600'}`}>Shop</Link>
                                    </li>
                                    <li>
                                        <Link className={`p-2 block ${pathname === '/blog' ? 'text-[#3d3dd1]' : 'text-slate-600'}`}>Blog</Link>
                                    </li>
                                    <li>
                                        <Link className={`p-2 block ${pathname === '/about' ? 'text-[#3d3dd1]' : 'text-slate-600'}`}>About</Link>
                                    </li>
                                    <li>
                                        <Link className={`p-2 block ${pathname === '/contact' ? 'text-[#3d3dd1]' : 'text-slate-600'}`}>Contact</Link>
                                    </li>
                                </ul>


                                <div className='flex md-lg:hidden justify-center items-center '>
                                    <div className='flex justify-center gap-5'>
                                        <div className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-blue-200'>
                                            <span className='text-2xl text-red-500'><AiFillHeart /></span>
                                            <div className='w-[16px] h-[16px] absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] text-sm'>
                                                {wishList}
                                            </div>
                                        </div>
                                        <div className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-blue-200'>
                                            <span className='text-2xl text-red-500'><AiFillShopping /></span>
                                            <div className='w-[16px] h-[16px] absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] text-sm'>
                                                {wishList}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden md-lg:block'>
                <div onClick={() => setShowSidebar(true)} className={`fixed duration-200 transition-all ${showSidebar ? 'invisible' : 'visible'} hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20`}>
                </div>
                <div className={`w-[300px] z-[9999] transition-all duration-200 fixed h-screen ${showSidebar ? '-left-[300px] top-0 ' : 'left-0 top-0'} overflow-y-auto bg-white py-6 px-8`}>
                    <div className='flex justify-start flex-col gap-6'>
                        <Link>
                            <h1 className='text-4xl font-bold'>SkyPearl</h1>
                        </Link>
                        <div className='flex justify-start items-center gap-10'>
                            <div className='flex cursor-pointer group text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute  '>
                                <img src="http://localhost:3000/images/language.png" alt="" />
                                <span><MdOutlineKeyboardArrowDown /></span>
                                <ul className='absolute invisible transition-all top-12 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:to-6 group-hover:bg-black'>
                                    <li>Bengali</li>
                                    <li>English</li>
                                </ul>
                            </div>
                            {
                                user
                                    ?
                                    <Link className='flex justify-center items-center gap-2 text-sm' to='/dashboard'>
                                        <span><FaUser /></span>
                                        <span>Amran Hossain</span>
                                    </Link>
                                    :
                                    <div className='flex justify-center items-center gap-2 text-sm'>
                                        <span><FaLock /></span>
                                        <span>Login</span>
                                    </div>
                            }
                        </div>
                        <ul className='flex flex-col justify-start  text-md font-semibold uppercase '>
                            <li>
                                <Link className={`py-2 block ${pathname === '/' ? 'text-[#3d3dd1]' : 'text-slate-600'}`}>Home</Link>
                            </li>
                            <li>
                                <Link className={`py-2 block ${pathname === '/shop' ? 'text-[#3d3dd1]' : 'text-slate-600'}`}>Shop</Link>
                            </li>
                            <li>
                                <Link className={`py-2 block ${pathname === '/blog' ? 'text-[#3d3dd1]' : 'text-slate-600'}`}>Blog</Link>
                            </li>
                            <li>
                                <Link className={`py-2 block ${pathname === '/about' ? 'text-[#3d3dd1]' : 'text-slate-600'}`}>About</Link>
                            </li>
                            <li>
                                <Link className={`py-2 block ${pathname === '/contact' ? 'text-[#3d3dd1]' : 'text-slate-600'}`}>Contact</Link>
                            </li>
                        </ul>
                        <div className='flex justify-start items-center gap-4'>
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><AiOutlineTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><AiFillGithub /></a>
                        </div>
                        <div className='w-full flex justify-end md-lg:justify-start gap-3 items-center'>
                            <div className='w-[38px] h-[38px] rounded-full flex justify-center items-center bg-[#f5f5f5]'>
                                <span><IoIosCall /></span>
                            </div>
                            <div className='flex justify-end flex-col gap-1 '>
                                <h2 className='text-sm font-medium'>+88 01824-516488</h2>
                                <span className='text-xs'>Support 24-7 day</span>
                            </div>
                        </div>
                        <div className='w-full flex justify-end md-lg:justify-start gap-3 items-center'>
                            <div className='w-[38px] h-[38px] rounded-full flex justify-center items-center bg-[#f5f5f5]'>
                                <span><GrMail /></span>
                            </div>
                            <div className='flex justify-end flex-col gap-1 '>
                                <span>amran.h.akash@gmail.com</span>
                            </div>
                        </div>
                        {/* <ul className='flex flex-col justify-start items-start gap-3'>
                            <li className='flex justify-start items-center gap-2 text-[#1c1c1c] text-sm'>
                                <span><GrMail /></span>
                                <span>amran.h.akash@gmail.com</span>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>

            <div className='w-[85%] lg:w-[90%] mx-auto'>
                <div className='flex w-full flex-wrap md-lg:gap-8'>
                    <div className='w-3/12 md-lg:w-full'>
                        <div className='bg-white relative '>
                            <div onClick={() => setCategoryShow(!categoryShow)} className='h-[50px] bg-violet-400 text-white flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer'>
                                <div className='flex justify-center items-center gap-3'>
                                    <span><FaList /></span>
                                    <span>All Categories</span>
                                </div>
                                <span className='pt-1'><MdOutlineKeyboardArrowDown /></span>
                            </div>

                            <div className={`${categoryShow ? 'h-0' : 'h-[400px]'} overflow-hidden transition-all md-lg:relative duration-500 absolute z-[999999] bg-white w-full border-x`}>
                                <ul className='py-2 text-black font-medium'>
                                    {
                                        categories.map((c, i) => {
                                            return (
                                                <li key={i} className='flex justify-start items-center gap-2 px-[24px] py-[6px]'>
                                                    <Link className='text-sm block'>{c}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='w-9/12 pl-8 md-lg:pl-0 md-lg:w-full '>
                        <div className='flex flex-wrap w-full justify-between items-center md-lg:gap-6'>
                            <div className='w-8/12 md-lg:w-full '>
                                <div className='flex border h-[50px] items-center relative gap-5'>
                                    <div className='relative after:absolute after:h-[25px] after:w-[1px] after:bg-[#afafaf] after:-right-[15px] md:hidden'>
                                        <select onChange={(e) => setCategory(e.target.value)} className='w-[150px] text-black font-semibold bg-transparent px-2 h-full outline-0 border-none' name="" id="">
                                            {
                                                categories.map((c, i) => <option value={c}>{c}</option>)
                                            }
                                        </select>
                                    </div>

                                    <input onChange={(e) => setSearchValue(e.target.value)}
                                        className='w-full relative bg-transparent text-black outline-0 px-3 h-full'
                                        type="text" placeholder='Khoj the search' />
                                    <button className='bg-violet-400 right-0 absolute px-8 h-full font-semibold uppercase text-white'>Search</button>
                                </div>
                            </div>

                            <div className='6/12 block md-lg:hidden pl-2 md-lg:w-full md-lg:pl-0'>
                                <div className='w-full flex justify-end md-lg:justify-start gap-3 items-center'>
                                    <div className='w-[38px] h-[38px] rounded-full flex justify-center items-center bg-[#f5f5f5]'>
                                        <span><IoIosCall /></span>
                                    </div>
                                    <div className='flex justify-end flex-col gap-1 '>
                                        <h2 className='text-md font-medium'>+88 01824-516488</h2>
                                        <span className='text-sm'>Support 24-7 day</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headers