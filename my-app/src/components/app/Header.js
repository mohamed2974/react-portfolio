import Uls from '../Uls-component'
import MobileNav from '../Mobile-navi'
import HeroSec from '../content/HeroSec';

import { NavLink } from 'react-router-dom';
import { Capacitor } from '@capacitor/core';
import Wave from 'react-wavify'
import Status from '../other/Status';



let hoverEffectNavList = 'relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300'

export default function Header(){
    const isMobileApp = Capacitor.isNativePlatform();

    let list = [
        <NavLink  to='/'>Startseite</NavLink>, 
        <NavLink  to='/service'>Leistungen</NavLink>, 
        <NavLink  to='/about'>Über mich</NavLink>, 
        <NavLink  to='/contact'>Kontaktieren</NavLink>
    ]
    
    //mobile ######################### HEROSECTION MOBILE ######################### //
    if (isMobileApp) {
        return(
            <div className='select-none px-7 py-4  flex flex-col h-screen relative overflow-hidden' style={{
                backgroundColor: '#282c34',
                color: 'rgb(255, 255, 255)',
            }}>
                <div className='flex flex-row justify-between font-medium items-center select-none absolute left-0 w-full px-7 pb-4 z-30'>
                    <h1 className='text-xl'>Logo</h1>
                    <MobileNav array={list}/>
                </div>
                <HeroSec />
                <Waves />
            </div>
        )
    }
    //* ######################### HEADER WEB ######################### //
    return(
        <header className='flex flex-row justify-between font-medium items-center select-none px-4 py-4 w-full md:w-11/12 fixed md:px-11 md:mt-3 md:left-1/2 md:transform md:-translate-x-1/2 md:rounded-full' style={{
            backgroundColor: '#282c34',
            boxShadow: 'rgba(97, 218, 251, 0.1) 0px 0px 20px 2px',
            color: 'rgb(255, 255, 255)',
            zIndex: 100
            }}>
            {/*######################### logo #########################*/}
            <div className='md:w-2/12'>
                <h1 className='text-xl md:text-2xl'>
                    <span>Mohamed</span>
                    <div className='w-2 h-2 rounded-full bg-sky-500 inline-block'></div>
                </h1>
            </div>
            {/*######################### navigation #########################*/}
            <Uls style={'hidden md:justify-between md:flex md:w-fit'} listItemStyle={`${hoverEffectNavList} p-1 md:mx-2`} array={list} row={true}/>
            <div className='w-1/5 flex justify-end md:w-fit '>
                {/*######################### login #########################*/}
                <Status className={'hidden md:flex'}>
                    <a href='/' className='hidden w-fit md:flex md:items-center md:justify-between '>
                        <span className='mx-2'>Einloggen</span> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </a>
                </Status>
                {/*######################### sidebar #########################*/}
                <div className='md:hidden'>
                    <MobileNav array={list}/>        
                </div>
            </div>
        </header>
    )
}


//supcom ######################### WAVES COMPONENT ######################### //
function Waves(){
    return(
        <div>
            <div className='absolute left-0 bottom-0 w-full opacity-70'>
                <Wave
                    fill="#1b3b5f"
                    paused={false}
                    style={{ display: 'flex'}}
                    options={{
                        height: 30, 
                        amplitude: 20, 
                        speed: 0.15,
                        points: 4,
                    }}
                />
            </div>
            <div className='absolute left-0 bottom-0 w-full opacity-30'>
                <Wave
                    style={{ display: 'flex'}}
                    fill="#345d7e"
                    paused={false}
                    options={{
                        height: 40,
                        amplitude: 20,
                        speed: 0.15,
                        points: 5,
                    }}
                />
            </div>
            <div className='absolute left-0 bottom-0 w-full opacity-20'>
                <Wave
                    style={{ display: 'flex'}}
                    fill="#567c9b"
                    paused={false}
                    options={{
                        height: 45,
                        amplitude: 30,
                        speed: 0.15,
                        points: 3,
                    }}
                />
            </div>
        </div>
    )
}