"use client"
import React from "react";

export default function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [flyer, setFlyer] = React.useState(false);
    const [flyerTwo, setFlyerTwo] = React.useState(false);

    return (
        <header className="sticky top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://flowbite.com" className="flex items-center">
                        <img
                            src="/images/logo.png"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />

                    </a>
                    <div className="flex items-center lg:order-2">
                        <a
                            href="#"
                            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                        >
                            Log in
                        </a>
                        <a
                            href="#"
                            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                        >
                            Get started
                        </a>
                        <button
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"

                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                                    aria-current="page"
                                >
                                    스튜디오
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    워크센터
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    손비서
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    메타휴먼
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    영상제작소
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    공지사항
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    제휴문의
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        // <header class="fixed top-0 w-full clearNav z-50">
        //     <div class="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        //         <div className="flex flex-row items-center justify-between p-3 md:p-1">
        //             <a
        //                 href="/"
        //                 class="flex text-3xl text-white font-medium mb-4 md:mb-0"
        //             >
        //                 <img src="/images/logo.png" width={170} height={28} class="mr-3" alt="Flowbite Logo" />

        //             </a>
        //             <button
        //                 className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
        //                 type="button"
        //                 aria-label="button"
        //                 onClick={() => setNavbarOpen(!navbarOpen)}
        //             >
        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     width="24"
        //                     height="24"
        //                     viewBox="0 0 24 24"
        //                     fill="none"
        //                     stroke="white"
        //                     strokeWidth="2"
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     className="feather feather-menu"
        //                 >
        //                     <line x1="3" y1="12" x2="21" y2="12"></line>
        //                     <line x1="3" y1="6" x2="21" y2="6"></line>
        //                     <line x1="3" y1="18" x2="21" y2="18"></line>
        //                 </svg>
        //             </button>
        //         </div>
        //         <div
        //             className={
        //                 "md:flex flex-grow items-center" +
        //                 (navbarOpen ? " flex" : " hidden")
        //             }
        //         >
        //             <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
        //                 <a className="mr-8 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
        //                     스튜디오
        //                 </a>
        //                 <a className="mr-8 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
        //                     워크센터
        //                 </a>
        //                 <a className="mr-8 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
        //                     손비서
        //                 </a>
        //                 <a className="mr-8 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
        //                     메타휴먼
        //                 </a>

        //                 <a className="mr-8  ml-0 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
        //                     영상제작소
        //                 </a>
        //                 <a className="mr-8 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
        //                     공지사항
        //                 </a>
        //                 <a className="cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
        //                     제휴문의
        //                 </a>
        //             </div>
        //             <a
        //                 href="https://twitter.com/"
        //                 rel="noopener noreferrer"
        //                 target="_blank"
        //                 className="pl-7 invisible md:visible"
        //             >
        //                 <svg
        //                     title="Twitter"
        //                     width="30"
        //                     height="17"
        //                     viewBox="0 0 50 40"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     fill="none"
        //                 >
        //                     <path
        //                         data-v-54e46119=""
        //                         d="M15.4528 40C34.0158 40 44.1732 24.6063 44.1732 11.2796C44.1732 10.8465 44.1732 10.4134 44.1536 9.98031C46.122 8.56299 47.8347 6.77166 49.1929 4.74409C47.3819 5.55118 45.4331 6.08268 43.3858 6.33858C45.4724 5.09842 47.0669 3.11023 47.8347 0.74803C45.8858 1.90944 43.7204 2.73622 41.4173 3.18898C39.5669 1.22047 36.9488 0 34.0551 0C28.4842 0 23.9567 4.52756 23.9567 10.0984C23.9567 10.8858 24.0551 11.6536 24.2126 12.4016C15.8268 11.9882 8.38582 7.95276 3.40551 1.85039C2.53937 3.34646 2.04724 5.07874 2.04724 6.92913C2.04724 10.4331 3.83859 13.5237 6.53543 15.3347C4.88189 15.2756 3.32677 14.8228 1.9685 14.0748C1.9685 14.1142 1.9685 14.1536 1.9685 14.2126C1.9685 19.0944 5.45276 23.189 10.0591 24.1142C9.2126 24.3504 8.32677 24.4686 7.40158 24.4686C6.75197 24.4686 6.12204 24.4094 5.51181 24.2913C6.79133 28.3071 10.5315 31.2204 14.9409 31.2992C11.4763 34.0158 7.12599 35.6299 2.40158 35.6299C1.59449 35.6299 0.787401 35.5906 0 35.4921C4.44882 38.3268 9.76378 40 15.4528 40Z"
        //                         fill="white"
        //                     ></path>
        //                 </svg>
        //             </a>
        //             <a
        //                 data-v-54e46119=""
        //                 href="https://github.com/"
        //                 rel="noopener noreferrer"
        //                 target="_blank"
        //                 className="pl-7 invisible md:visible"
        //             >
        //                 <svg
        //                     data-v-54e46119=""
        //                     width="30"
        //                     height="20"
        //                     viewBox="0 0 25 24"
        //                     fill="none"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     title="GitHub logo"
        //                     class="github-link--logo"
        //                 >
        //                     <path
        //                         data-v-54e46119=""
        //                         fill-rule="evenodd"
        //                         clip-rule="evenodd"
        //                         d="M12.3019 0C5.50526 0 0 5.50526 0 12.3019C0 17.7392 3.52669 22.3458 8.4127 23.977C9.0244 24.0902 9.25095 23.7126 9.25095 23.3804C9.25095 23.0858 9.2434 22.3156 9.23585 21.2885C5.81488 22.0286 5.08991 19.6422 5.08991 19.6422C4.53108 18.2225 3.72304 17.8373 3.72304 17.8373C2.60537 17.0746 3.80611 17.0897 3.80611 17.0897C5.03705 17.1803 5.69405 18.3584 5.69405 18.3584C6.78906 20.2388 8.57129 19.6951 9.27361 19.3779C9.38688 18.585 9.70406 18.0412 10.0514 17.7316C7.32524 17.4295 4.45556 16.3723 4.45556 11.66C4.45556 10.3158 4.93132 9.22074 5.72426 8.35984C5.59588 8.04266 5.17298 6.79662 5.83754 5.10501C5.83754 5.10501 6.87213 4.77274 9.22074 6.36616C10.2025 6.0943 11.2522 5.95837 12.3019 5.95082C13.344 5.95837 14.4013 6.0943 15.383 6.36616C17.7316 4.77274 18.7662 5.10501 18.7662 5.10501C19.4383 6.79662 19.0154 8.05021 18.887 8.35984C19.6724 9.22074 20.1482 10.3158 20.1482 11.66C20.1482 16.3874 17.271 17.422 14.5297 17.7316C14.9677 18.1092 15.3679 18.8644 15.3679 20.0123C15.3679 21.6586 15.3528 22.9801 15.3528 23.3879C15.3528 23.7202 15.5718 24.0978 16.1986 23.977C21.0846 22.3458 24.6038 17.7392 24.6038 12.3094C24.6038 5.50526 19.0985 0 12.3019 0Z"
        //                         fill="white"
        //                     ></path>
        //                 </svg>
        //             </a>
        //         </div>
        //     </div>
        // </header>
    );
}
