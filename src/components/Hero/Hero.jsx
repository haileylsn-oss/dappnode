import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg'
import logo2 from '../../assets/svv.jpg'

const Hero = () => {
  return (
    <div className="min-h-screen bg-white text-white">
      {/* Header */}
      <header className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Navigation */}
            <div className="flex items-center space-x-8">
              <span className="text-xl font-semibold w-[150px] "><img src={logo} alt="" /></span>
              <nav className="hidden md:flex items-center space-x-6">
                {['Deposit', 'Stake', 'Portfolio', 'Points', 'Referrals'].map((item) => (
                  <button
                    key={item}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Right side - Network & Connect */}
          <Link to={'/wallet'}> <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-red-800 px-3 py-2 rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Ethereum</span>
              </div>
              <Link to="/wallet"> <button className="bg-black hover:bg-gray-700 px-6 py-2 rounded-lg transition-colors duration-200 font-medium">
                Connect
              </button>
              </Link>
             
            </div></Link> 
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Announcement Banner */}
<center>

<p className="text-black text-4xl p-4 text-gray-800">The easiest way to power Web3</p>

<p className=" text-xl p-4 text-gray-500">
Now anyone can run decentralized networks like Ethereum and Bitcoin and earn rewards. Zero hassle, it just works.</p>

  <img src={logo2} alt="" />   </center>  
      </main>
    </div>
  );
};

export default Hero;