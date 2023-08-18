/* IMORTING COMPONENTS */
import Aside from "./components/aside/Aside";
import Navbar from "./components/navbar/Navbar";
import MainWidget from "./components/widgetSection/MainWidget";
import Claims from "./components/claimsSection/Claims";
import BillerQ from "./components/billerQSection/BillerQ";
import Subscribation from "./components/subscribSection/Subscribation";
import Health from "./components/healthSection/Health";
/* IMPORTING LIBS */
import { Link, Route, Routes } from "react-router-dom";
import { pages } from "./data/data";

function App() {
    return (
        <>
            <main className="grid grid-cols-12 w-full overflow-x-hidden">
                <Aside />
                <div className="md:col-span-10 col-span-12 md:bg-[#5041BC] bg-transparent">
                    <div className="relative w-full h-screen bg-white md:rounded-l-3xl rounded-none">
                        <Navbar />
                        <Routes>
                            <Route index path={pages.home} element={<MainWidget />} />
                            <Route path={pages.claims} element={<Claims />} />
                            <Route path={pages.biller} element={<BillerQ />} />
                            <Route path={pages.subscribe} element={<Subscribation />} />
                            <Route path={pages.health} element={<Health />} />
                        </Routes>
                    </div>
                </div>
            </main>
        </>
    );
};

export default App;