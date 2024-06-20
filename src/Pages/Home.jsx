import { Link } from 'react-router-dom';
import InputField from "../components/InputField"

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#f3e2cf]">
            <main className="flex-grow">
                <section className="lg:pt-0 pt-20">
                    <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="px-8 text-center md:text-left">
                            <h1 className="mb-6 text-5xl font-bold">
                                Welcome To Our Bakery Shop
                            </h1>
                            <p className="mb-8">
                                The bakery is an establishment that produces food baked in an
                                oven such as bread, cookies, cakes, pastries, and pies. Some
                                retail bakeries are also categorized as cafes, serving coffee
                                and tea to customers.
                            </p>
                            <Link to="/products">
                                <button className="bg-[#201203] text-white py-2 px-4 rounded hover:bg-[#D8AE7E] hover:text-black">
                                    ORDER NOW
                                </button>
                            </Link>
                        </div>
                        <div className="flex justify-end">
                            <img
                                src="./src/assets/img/paper-bag-with-variety-bread 1.png"
                                alt="Bakery items"
                            />
                        </div>
                    </div>
                </section>
                <section className="py-16 px-8">
                    <div className="flex flex-col items-center">
                        <h2 className="mb-6 text-3xl font-bold text-center">About Us</h2>
                        <p className="max-w-2xl mb-8 text-center">
                            At Bakeryou, we take pride in our rich tradition of baking and our
                            commitment to quality. Every morning, our skilled bakers craft a
                            diverse selection of bread and pastries, ensuring that our
                            customers always have a fresh and delicious experience. From our
                            classic sourdough loaves to our decadent specialty cakes, each
                            item is made with meticulous attention to detail and the finest
                            ingredients available. Our goal is not just to sell bread, but to
                            create moments of joy and satisfaction for our valued customers.
                            Come and experience the warmth and aroma of our bakery – where
                            every bite tells a story of craftsmanship and passion.
                        </p>
                        <Link to="/products">
                            <button className="bg-[#201203] text-white py-2 px-4 rounded hover:bg-[#D8AE7E] hover:text-black">
                                SEE OUR PRODUCTS
                            </button>
                        </Link>
                    </div>
                </section>
                <section className="py-16 bg-[#f3e2cf]">
                    <div className="grid gap-8 md:grid-cols-2">
                        <img
                            src="./src/assets/img/Milk Bread Croissants 1.png"
                            alt="Bakery"
                            className="h-[600px]"
                        />
                        <div className="px-8">
                            <h2 className="mb-4 text-3xl font-bold">Bakeryou</h2>
                            <p className="mb-4">
                                Enjoy freshly baked bread, hot rolls, wholesome pastries, and
                                delicious treats. Order delivery in a few steps and enjoy our
                                in-house baked treats.
                            </p>
                            <h3 className="text-xl font-semibold">Opening Hours :</h3>
                            <p>Monday - Friday: 09.00 - 16.00 WIB</p>
                            <p>Saturday - Sunday: 10.00 - 19.00 WIB</p>
                        </div>
                    </div>
                </section>
                <section className="py-16 bg-[#f3e2cf]">
                    <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="px-8">
                            <h2 className="mb-6 text-3xl font-bold text-center md:text-left">
                                Contact Us
                            </h2>
                            <form className="space-y-4">
                                <InputField
                                    label="Name"
                                    type="text"
                                    placeholder="Input your name here"
                                />
                                <InputField
                                    label="Email"
                                    type="email"
                                    placeholder="Input your email here"
                                />
                                <div className="flex flex-col gap-2 mt-2">
                                    <label className="font-medium text-primary">Message</label>
                                    <textarea
                                        placeholder="Input your message here"
                                        className="input"
                                        rows="4"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#201203] text-white py-2 px-4 rounded-md hover:bg-[#392613] transition duration-200 ease-in-out"
                                >
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="./src/assets/img/Bread Photography 2.png"
                                alt="Bakery items"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
}

export default HomePage
