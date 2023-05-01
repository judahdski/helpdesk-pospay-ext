import { Route, Routes } from 'react-router-dom';
import './App.css';
import logo from './assets/pospay.png';
import DetailTopic from './components/DetailTopic';
import Home from './components/Home';

const App = () => {
    return (
        <>
            <header className="w-full bg-[#F75E20]">
                <img src={logo} className="h-12" />
            </header>
            <div className="w-full py-4 px-2 flex flex-col items-center gap-4 bg-gradient-to-r from-[#F58158] to-[#F75E20]">
                <h3 className="text-base lg:text-xl text-white">Ada yang bisa dibantu?</h3>
                <div className="relative">
                    <input type="text" placeholder="Butuh bantuan?" className="w-full h-10 rounded-lg px-4 shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300 placeholder:text-base lg:text-lg" />
                    <i className="fa-solid fa-magnifying-glass text-slate-500 absolute right-4 top-1/2 -translate-y-1/2"></i>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail_topics/:idTopic" element={<DetailTopic />} />
            </Routes>
        </>
    );
};

export default App;
