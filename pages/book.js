import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Paypal from "../Components/Paypal";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import CustomDatePicker from "@/Components/CustomDatePicker";

export default function Book() {
  const today = new Date();
  const { data: session, status } = useSession();
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();
  const [nextSelected, setNextSelected] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    console.log(price);
    debugger;
  }, [price]);

  const handleClick = () => {
    //setNextSelected(true);
    //router.push('/Checkout')
    console.log('clicked')
    debugger;
  };

  const handleDateChange = (date) => {
    console.log("Selected date:", date);
  };

  const handleServiceChange = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
    setDesc(e.target.label);
  };

  if (authed) {
    return (
      <>
        <Header isBooking={true} />
        {/* <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
        Book
        </h1> */}
        {nextSelected && price ? (
          <div class="md:shadow-xl lg:pt-32 pt-32 pb-12 lg:p-80 md:p-10 md:pt-40 md:pb-20 w-50">
            <div>
              <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                  <div class="px-4 sm:px-0">
                    <h2 className="break-words text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
                      Book{" "}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">
                        Here
                      </span>
                    </h2>
                    {price ? (
                      <h2 className="text-1xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4">
                        Price: ${price}
                      </h2>
                    ) : null}
                    <p class="mt-1 text-sm text-gray-600">
                      Enter Some Details & Select a Service
                    </p>
                  </div>
                </div>
                <div class="mt-5 md:col-span-2 md:mt-0">
                  <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          {price ? (
                            <Paypal cost={price} />
                          ) : (
                            <Paypal disabled="true" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setNextSelected(false)}
                    type="button"
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div class="md:shadow-xl lg:pt-32 pt-32 pb-12 lg:p-80 md:p-10 md:pt-40 md:pb-20 w-50">
            <div>
              <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                  <div class="px-4 sm:px-0">
                    <h2 className="break-words text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
                      Book{" "}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-500">
                        Here
                      </span>
                    </h2>
                    {price ? (
                      <h2 className="text-1xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4">
                        Price: ${price}
                      </h2>
                    ) : null}
                    <p class="mt-1 text-sm text-gray-600">
                      Enter Some Details & Select a Service
                    </p>
                  </div>
                </div>
                <div class="mt-5 md:col-span-2 md:mt-0">
                  <form>
                    <div className="overflow-hidden shadow sm:rounded-md">
                      <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            {/* <label
                              htmlFor="first-name"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              First name */}
                            {/* </label>
                            <input
                              required
                              type="text"
                              name="first-name"
                              id="first-name"
                              autoComplete="given-name"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="last-name"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Last name
                            </label>
                            <input
                              required
                              type="text"
                              name="last-name"
                              id="last-name"
                              autoComplete="family-name"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>

                          <div className="col-span-6 sm:col-span-4">
                            <label
                              htmlFor="email-address"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Email address
                            </label>
                            <input
                              required
                              type="text"
                              name="email-address"
                              id="email-address"
                              readOnly={true}
                              value={session.user?.email}
                              autoComplete="email"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div> */}

                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="services"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Service
                              </label>
                              <select
                                required
                                onChange={handleServiceChange}
                                id="services"
                                name="services"
                                value={price}
                                autoComplete="services-name"
                                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              >
                                <option value=""></option>
                                <option value="15.00">
                                  Intoductory Session
                                </option>
                                <option value="111.00">
                                  1 Hour Distance Reiki Session
                                </option>
                                <option value="55.00">
                                  30 Minute Distance Reiki Session
                                </option>
                                <option value="33.00">
                                  30 Minute Tarot Reading
                                </option>
                                <option value="33.00">
                                  30 Minute Oracle Reading
                                </option>
                                <option value="22.00">
                                  15 Minute Oracle Reading
                                </option>
                              </select>
                            </div>

                            {/* <div className="col-span-6">
                            <label
                              htmlFor="street-address"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              Street address
                            </label>
                            <input
                              required
                              type="text"
                              name="street-address"
                              id="street-address"
                              autoComplete="street-address"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div> */}

                            {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              City
                            </label>
                            <input
                              required
                              type="text"
                              name="city"
                              id="city"
                              autoComplete="address-level2"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div> */}

                            {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="region"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              State / Province
                            </label>
                            <input
                              required
                              type="text"
                              name="region"
                              id="region"
                              autoComplete="address-level1"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div> */}

                            {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label
                              htmlFor="postal-code"
                              className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              ZIP / Postal code
                            </label>
                            <input
                              required
                              type="text"
                              name="postal-code"
                              id="postal-code"
                              autoComplete="postal-code"
                              className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div> */}
                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label className="block text-sm font-medium leading-6 text-gray-900">
                                Pick Date
                              </label>
                              <CustomDatePicker onChange={handleDateChange} />
                            </div>
                          </div>
                        </div>
                        <div onClick={handleClick} className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <Paypal buttonClicked={handleClick} isDisabled={true} />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </>
    );
  }

  if (status === "authenticated") {
    setTimeout(() => {
      setAuthed(true);
    }, 2000);
  }

  if (status === "unauthenticated") {
    router.push("/auth/Signin/");
  }

  return (
    <>
      <Header isBooking={true} />
      <div class="animate-pulse md:shadow-xl lg:pt-32 pt-32 pb-12 lg:p-80 md:p-10 md:pt-40 md:pb-20 w-50">
        <div>
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <div className="h-20 bg-slate-700 rounded break-words text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
                  {" "}
                  <span className="bg-slate-700 h-10 w-10"></span>
                </div>

                <p class="h-5 bg-slate-700 rounded mt-1 text-sm text-gray-600"></p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden sm:rounded-md">
                  <div className="bg-white px-4">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="h-10 bg-slate-700 rounded col-span-6 sm:col-span-3"></div>

                      <div className="h-10 bg-slate-700 rounded col-span-6 sm:col-span-3"></div>

                      <div className="h-10 bg-slate-700 rounded col-span-6 sm:col-span-4"></div>

                      <div className="bg-slate-700 rounded col-span-6 sm:col-span-3"></div>

                      <div className="h-10 bg-slate-700 rounded col-span-6 sm:col-span-3 lg:col-span-2"></div>
                      <div className="h-10 bg-slate-700 rounded col-span-6 sm:col-span-3 lg:col-span-2"></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <div className="h-10 mt-10 bg-slate-700 rounded col-span-6 sm:col-span-4"></div>
                    <div className="h-10 mt-10 bg-slate-700 rounded col-span-6 sm:col-span-4"></div>
                    <div className="h-10 mt-10 bg-slate-700 rounded col-span-6 sm:col-span-4"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
