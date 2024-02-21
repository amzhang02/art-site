import Image from "next/image"

export default function Sculptures() {
    return (<>
        <div className='flex overflow-x-scroll overflow-y-hidden whitespace-nowrap gap-12'>
            <div className="flex-shrink-0">
                <Image src='armature2.jpeg' width={500} height={700} alt='Abstract steel form with cool blue neon LEDs.' />
                <p>
                    Armature 2
                    <br/>
                    Steel & Neon LEDs
                    <br/>
                    2ft x 3ft
                    <br/>
                    2023
                </p>
            </div>
            <div className="flex-shrink-0">
                <Image src='armature2_detail.jpg' width={700} height={700} alt='Details of steel coiling steel form with blue neon LEDs.' />
                <p>
                    Armature 2 (detail)
                    <br/>
                    2023
                </p>
            </div>
            <div className="flex-shrink-0">
                <Image src='armature2_detail2.jpg' width={500} height={700} alt='Close up details of steel form with cool blue neon LEDs.' />
                <p>
                    Armature 2 (detail)
                    <br/>
                    2023
                </p>
            </div>
            <div className="flex-shrink-0">
                <Image src='armature_1_2.JPG' width={700} height={700} alt='Close up details of abstract steel form with red LEDs.' />
                <p>
                    Armature 1
                    <br/>
                    Steel & LEDs
                    <br/>
                    2ft x 1.5ft
                    <br/>
                    2023
                </p>
            </div>
            <div className="flex-shrink-0">
                <Image src='armature_1.JPG' width={500} height={700} alt='Close up details of Armature 1.' />
                <p>
                    Armature 1 (detail)
                    <br/>
                    2023
                </p>
            </div>
        </div>
    </>)
}