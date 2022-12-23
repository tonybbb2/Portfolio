import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const Contact = () => {

    const { register, handleSubmit, errors, reset } = useForm();

    async function onSubmitForm(values) {
        console.log(values)
        let config = {
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: values,
        };

        try {
            const response = await axios(config)
            if (response.status === 200) {
                reset()
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
                <h2 className='py-4'>Entrer en contact</h2>
                <div className='grid md:grid-cols-5 gap-8'>
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full rounded-xl'>
                            <div>
                                <img className='rounded-xl hover-scale-105 ease-in duration-300' src='https://media.istockphoto.com/id/1323765737/photo/close-up-of-a-businessman-using-a-laptop-computer-and-a-mobile-phone.jpg?b=1&s=170667a&w=0&k=20&c=xhxUuce47qfFXME0SyZH1B4rYtxLU2f9GWY5Y46ABhA=' alt='/' />
                            </div>
                            <div>
                                <h2 className='py-2'> Tony Bui </h2>
                                <p>Futur développeur web</p>
                                <p className='py-4'> Je suis disponible pour un stage en informatique dès maintenant!</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Contacter moi</p>
                                <div className='flex items-center justify-between py-4'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
                                        <FaLinkedin />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
                                        <FaGithub />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
                                        <AiOutlineMail />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form onSubmit={handleSubmit(onSubmitForm)}>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2' for='name'>Nom</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' {...register('name', { required: { value: true, message: 'veuillez svp entrer votre nom' } })} />
                                        <span className='text-red-400 text-sm py-2'>{errors?.name?.message}</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2' for='telephone'>Numéro de téléphone</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='telephone' {...register('telephone', { required: { value: true, message: 'veuillez svp entrer votre numéro de téléphone' } })} />
                                        <span className='text-red-400 text-sm py-2'>{errors?.telephone?.message}</span>
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2' for='email'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='Email' name='email' {...register('email', { required: { value: true, message: 'veuillez svp entrer votre courriel' } })} />
                                    <span className='text-red-400 text-sm py-2'>{errors?.email?.message}</span>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2' for='sujet'>Sujet</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='sujet' {...register('sujet', { required: { value: true, message: 'veuillez svp entrer le sujet du message' } })} />
                                    <span className='text-red-400 text-sm py-2'>{errors?.sujet?.message}</span>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2' for='message'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300 ' rows='10' name='message' {...register('message', {
                                        required: { value: true, message: 'veuillez svp entrer un message' }, maxLength: {
                                            value: 500,
                                            message: 'veuillez svp entrer un message de moins de 500 caractères'
                                        }
                                    })}> </textarea>
                                    <span className='text-red-400 text-sm py-2'>{errors?.message?.message}</span>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>Envoyer un message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/#main'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-200'>
                            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    )
}
