import "./page.css"
export const AboutUs = () => {
    return (
        <section className="w-[100%] h-[100%] flex justify-center marginPaddingTop bg-black">

            <div className="text-white w-[70%]   gap-5 about">
                <div className="">
                    <h1 className="text-2xl font-bold">
                        What Makes us Different from Others?
                    </h1>
                    <p className="text-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste, aspernatur impedit inventore error et omnis suscipit adipisci animi beatae ipsa quisquam, quidem cumque commodi. Quo sequi sit atque illum, possimus quam quis ad mollitia suscipit obcaecati deserunt quidem consectetur hic facilis voluptate, maiores aut ab ea modi explicabo repudiandae?
                    </p>
                </div>
                <div className="">
                    <img src="src\assets\groupimg.jpg"  alt="" />
                </div>

            </div>
        </section>
    )
}