import './App.css';
import Accordion from './components/ExpandCollapse';
import { popularQuestions, topics } from './assets/data';
import logo from './assets/pospay.png';

function App() {
    return (
        <>
            <header className="w-full bg-[#F75E20]">
                <img src={logo} className='h-12' />
            </header>
            <div className="w-full pt-4 pb-8 flex flex-col items-center gap-4 bg-gradient-to-r from-[#F58158] to-[#F75E20]">
                <h3 className="text-xl text-white">Ada yang bisa dibantu?</h3>
                <div className="relative">
                    <input type="text" placeholder="Butuh bantuan?" className="w-[600px] h-10 rounded-lg px-4 shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300" />
                    <i class="fa-solid fa-magnifying-glass text-slate-500 absolute right-4 top-1/2 -translate-y-1/2"></i>
                </div>
            </div>
            <div className="max-w-[800px] w-full p-4">
                <h4 className="text-lg">Hot Topics</h4>
                <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                    {topics.map((topic, index) => (
                        <a href='/' key={index} className="bg-white py-4 px-6 flex justify-between">
                            <div className="flex gap-3">
                                <i class={`fa-solid ${topic.iconClass} text-sm ${topic.colorTheme}`}></i>
                                <p>{topic.title}</p>
                            </div>
                            <i class="fa-solid fa-chevron-right text-gray-500 text-xs"></i>
                        </a>
                    ))}
                </div>
            </div>
            <div className="max-w-[800px] w-full p-4">
                <h4 className="text-lg">Popular Questions</h4>
                <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                    {popularQuestions.map((popularQuestion, index) => (
                        <Accordion key={index} title={popularQuestion.q} content={popularQuestion.a} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default App;
