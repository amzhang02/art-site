export default function Bio() {
    return (<>
        <h2 className="text-black text-2xl font-bold">About the Artist</h2>
        <p className="mr-[100px]">
            Alyssa Zhang (b. 2002) is originally from Portland, OR and is in her final semester at Swarthmore College where she
            is pursuing a B.A. in Art (Painting) and Computer Science. At Swarthmore, she is an active member of Kitao 
            (Swarthmore's student-run gallery), Swarthmore College Computer Society, and the Women's Track & Field team. Alyssa also
            has experience in full-stack web developement and has contributed to an award-winning generative art research project.
        </p>
        <br/>
        <h2 className="text-black text-2xl font-bold">CV</h2>
        <h3 className="font-bold">Education</h3>
        <div className="grid grid-cols-9 gap-3">
            <div>
                2020 - 2024
            </div>
            <div className="col-span-4">
                B.A. Art (Painting Concentration) & Computer Science, Swarthmore College
            </div>
        </div>
        <br/>
        <h3 className="font-bold"> Awards </h3>
        <div className="grid grid-cols-9 gap-3">
            <div>
                2022
                <br/>
                2022
                <br/>
                2022
                <br/>
                2021
            </div>
            <div className="col-span-4">
                Sigma Xi Virtual STEM Art and Film Festival Honorable Mention
                <br/>
                CCSC Eastern Conference 2022 Best Faculty Poster Award
                <br/>
                Deborah A. DeMott '70 Student Research & Internship Award
                <br/>
                Robbins Chang Big Data/Social Change Internship Award
            </div>
        </div>
        <br/>
        <h2 className="text-black text-2xl font-bold"> Resume </h2>
        <p className="mr-[100px]">
            <u><a href="/Alyssa_Zhang_Resume_202324A.pdf"> Click here</a></u> to download a PDF version of my resume.
        </p>
        
        

    </>)
}