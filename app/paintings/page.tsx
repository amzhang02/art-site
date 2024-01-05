import Image from "next/image"
export default function Paintings() {
    return (
        <>
            <div className='grid grid-cols-2 gap-4'>
                <div> 
                    <Image src='/jimmy.JPG' width={450} height={700} alt='Painting of a man in a wetsuit holding out a sneaker towards the viewer.'/>
                    <p> 
                        Jimmy 
                        <br/>
                        Oil on Canvas
                        <br/>
                        24in x 36in
                        <br/>
                        2023
                    </p>
                    <br/>
                    <Image src='/self_portrait.JPG' width={450} height={700} alt='Self portrait with pink sunglasses and head resting on hand.'/>
                    <p> 
                        Self Portrait 
                        <br/>
                        Oil on Canvas
                        <br/>
                        24in x 24in
                        <br/>
                        2022
                    </p>
                </div>
                <div> 
                    <Image src='/glasses.JPG' width={504} height={200} alt='Close-cropped self portrait from high angle with pink sunglasses.'/>
                    <p> 
                        Self Portrait 3
                        <br/>
                        Oil on Canvas
                        <br/>
                        24in x 18in
                        <br/>
                        2023
                    </p>
                    <br/>
                    <Image src='/red_jacket.JPG' width={450} height={200} alt='Self portrait with red jacket.'/>
                    <p> 
                        Self Portrait 2
                        <br/>
                        Oil on Canvas
                        <br/>
                        16in x 18in
                        <br/>
                        2022
                    </p>
                </div>
            </div>
        </>
    )
}