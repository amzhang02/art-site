import Image from "next/image"
export default function Drawings() {
    return (
        <>
            <div className='grid lg:grid-cols-2 gap-4 md:grid-cols-1'>
                <div> 
                    <Image src='/barn.JPG' width={400} height={700} alt='Drawing of the interior of a run-down barn.'/>
                    <p> 
                        Barn
                        <br/>
                        Charcoal on Arches Paper
                        <br/>
                        8in x 10in
                        <br/>
                        2023
                    </p>
                    <br/>
                    <Image src='/self_portrait_2.JPG' width={400} height={700} alt='Close-up self portrait.'/>
                    <p> 
                        Self Portrait 
                        <br/>
                        Graphite on Toned Paper
                        <br/>
                        5in x 8in
                        <br/>
                        2023
                    </p>
                </div>
                <div> 
                    <Image src='/fish_dish.JPG' width={350} height={200} alt='Drawing of kitchen shelf with fish plates and lamp.'/>
                    <p> 
                        Fish Dish
                        <br/>
                        Charcoal on Toned Paper
                        <br/>
                        5in x 8in
                        <br/>
                        2023
                    </p>
                    <br/>
                    <Image src='/tentacle.jpg' width={450} height={200} alt='Octopus tentacle suckers on streaky background.'/>
                    <p> 
                        Tentacle
                        <br/>
                        Charcoal on Paper
                        <br/>
                        8in x 11in
                        <br/>
                        2021
                    </p>
                    <br/>
                    <Image src='/the_deep.jpg' width={500} height={200} alt='Octopus wrapped in tentacles in circular formation.'/>
                    <p> 
                        The Deep
                        <br/>
                        Charcoal & Acrylic on Canvas
                        <br/>
                        3ft x 6ft
                        <br/>
                        2021
                    </p>
                </div>
            </div>
        </>
    )
}