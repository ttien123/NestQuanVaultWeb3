import useScrollTop from 'src/hooks/useScrollTop';
import Slide from './components/Slide';
import Tournament from './components/Tournament';
const Home = () => {
    useScrollTop();
    return (
        <section className="relative">
            <div className="container relative">
                <Slide />
                <Tournament />
                <div className="absolute top-[120px] left-[-300px] w-[625.977px] h-[708.951px] rotate-[29.123deg] rounded-[708.951px] opacity-20 bg-[#B1A4FF] blur-[130.1132354736328px]"></div>
                <div className="absolute top-[-360px] right-[-550px] w-[820px] h-[918.2px] rotate-[21.71deg] rounded-[918.197px] opacity-20 bg-[#25BEFF] blur-[177.4644012451172px]"></div>
                <div className="absolute top-[1200px] left-[-400px] lg:left-[200px] w-[706.869px] h-[482.761px] rotate-[27.892deg] rounded-[918.197px] opacity-20 bg-accent_1 blur-[177.4644012451172px]"></div>
                <div className="absolute origin-top-left top-[1500px] left-[-400px] lg:left-[-200px] w-[1784.355px] opacity-80 h-[945.284px] rotate-[27.261deg] rounded-[1784.355px] bg-yellowHome"></div>
                <div className="absolute origin-top-left top-[2200px] left-[-400px] lg:left-[800px] w-[1125.161px] opacity-80 h-[665.03px] rotate-[-15.261deg] rounded-[1784.355px] bg-yellowHome"></div>
                <div className="absolute origin-top-left top-[3000px] left-[-400px] lg:left-[-600px] w-[1031.293px] opacity-20 h-[574.235px] rotate-[-12.637deg] rounded-[1784.355px] blur-[177.4644012451172px] bg-[#25BEFF]"></div>
                <div className="absolute origin-top-left top-[3000px] right-[-400px] lg:right-[-200px] w-[500.903px] opacity-20 h-[319.752px] rotate-[-43.437deg] rounded-[500.903px] blur-[177.4644012451172px] bg-[#25BEFF]"></div>
                <div className="absolute origin-top-left top-[3800px] right-[-400px] lg:right-[-200px] w-[1031.293px] opacity-20 h-[574.235px] rotate-[-12.637deg] rounded-[500.903px] blur-[177.4644012451172px] bg-[#AC25FF]"></div>
            </div>
        </section>
    );
};

export default Home;
