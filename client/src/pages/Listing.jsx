import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore from 'swiper'
import {Navigation} from 'swiper/modules'
import 'swiper/css/bundle'
import Contact from '../components/Contact'


export default function Listing() {
    SwiperCore.use([Navigation])
    const [listing, setListing] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [contact, setContact] = useState(false)
    const params = useParams()
    const {currentUser} = useSelector((state) => state.user)
    useEffect(() => {
        const fetchListing = async () => {
            try {
                setLoading(true)
                const res = await fetch(`/api/listing/get/${params.listingId}`)
                const data = await res.json()
                if (data.success === false) {
                setError(true)
                setLoading(false)
                return
            }
            setListing(data)
            setLoading(false)
            setError(false)
            } catch (error) {
                setError(true)
                setLoading(false)
            }
            
        }
        fetchListing()
    }, [params.listingId])
  return (
    <main>{loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
    {error && <p className='text-center my-7 text-2xl'>Something went wrong...</p>}
    {listing && !loading && !error && <div>
    <Swiper navigation>
        {listing.imageUrls.map(url => <SwiperSlide key={url}><div className='h-[500px]' style={{background: `url(${url}) center no-repeat`, backgroundSize:'cover'}}></div></SwiperSlide>)
        }
    </Swiper>
    </div>}
    <div className='flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4'>
        {currentUser && !contact && (<button onClick={()=>setContact(true)} className='bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3'>Contact Landlord</button>)}
        {contact && <Contact listing={listing}/>}
    </div>
    </main>
  )
}
