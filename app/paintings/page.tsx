import Image from "next/image"
export default function Paintings() {
    return (
        <>
            <div className='grid lg:grid-cols-2 gap-4 md:grid-cols-1'>
                <div> 
                    <Image src='jimmy.JPG' width={450} height={700} alt='Painting of a man in a wetsuit holding out a sneaker towards the viewer.'/>
                    <p> 
                        Jimmy 
                        <br/>
                        Oil on Canvas
                        <br/>
                        28 x 22 inches
                        <br/>
                        2023
                    </p>
                    <br/>
                    <Image src='selfportrait1.jpg' width={450} height={700} alt='Self portrait with pink sunglasses and head resting on hand.'/>
                    <p> 
                        Self Portrait 1
                        <br/>
                        Oil on Canvas
                        <br/>
                        22 x 22 inches
                        <br/>
                        2022
                    </p>
                </div>
                <div> 
                    <Image src='selfportrait3.jpg' width={504} height={200} alt='Close-cropped self portrait from high angle with pink sunglasses.'/>
                    <p> 
                        Self Portrait 3
                        <br/>
                        Oil on Canvas
                        <br/>
                        14 x 22 inches
                        <br/>
                        2023
                    </p>
                    <br/>
                    <Image src='miranda.jpg' width={450} height={200} alt='Painting of a friend named Miranda in Italy.'/>
                    <p> 
                        Miranda
                        <br/>
                        Oil on Canvas
                        <br/>
                        14 x 12 inches
                        <br/>
                        2023
                    </p>
                    <br/>
                    <Image src='selfportrait2.jpg' width={450} height={200} alt='Self portrait with red jacket.'/>
                    <p> 
                        Self Portrait 2
                        <br/>
                        Oil on Canvas
                        <br/>
                        16 x 14 inches
                        <br/>
                        2022
                    </p>
                </div>
            </div>
        </>
    )
}