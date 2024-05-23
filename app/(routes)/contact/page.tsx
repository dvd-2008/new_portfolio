"use client";

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataTestimonials } from '@/data';
import CircleImage from '@/components/circle-image';
import AvatarPortfolio from '@/components/avatar-portfolio';

const Contactpage = () => {
    const email = "dhuaman.2008@gmail.com";
    const phone = "970429472";

    return (
        <ContainerPage>
            <TransitionPage />
            <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4 justify-center">
                <div className="col-span-4 text-center">
                   
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Contacta <span className="font-bold text-secondary">conmigo :</span></h1>
                    <p className="mb-4 text-lg">Correo: <a href={`mailto:${email}`} className="text-blue-500 underline">{email}</a></p>
                    <p className="mb-6 text-lg">Teléfono: <a href={`tel:${phone}`} className="text-blue-500 underline">{phone}</a></p>
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                     
                        className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                           
                    
                        Envíame un mensaje
                    </a>
                </div>
            </div>
        </ContainerPage>
    );
};

export default Contactpage;
